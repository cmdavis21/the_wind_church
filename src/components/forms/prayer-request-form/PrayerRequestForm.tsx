'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'flowbite-react';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import PencilPaper from '@/components/icons/pencilPaper';
import { PrayerRequest, YesNo } from '@/data/types';

import AlertMessage from '@/components/alerts/alert-message/AlertMessage';
import { useCreatePrayerRequest } from '@/data/client/sanity/prayer-request';
import { useScrollToOnStatus } from '@/data/client/use-scroll-to-on-status';
import { isValidEmail } from '@/data/utils';
import { useTranslations } from 'next-intl';
import RadioGroup from '../inputs/radio-group/RadioGroup';
import TextInput from '../inputs/text-input/TextInput';
import TextareaInput from '../inputs/textarea-input/TextareaInput';

const schema = yup.object().shape({
  first_name: yup.string().required('first.message'),
  last_name: yup.string().required('last.message'),
  request_email_back: yup
    .string()
    .oneOf([YesNo.YES, YesNo.NO])
    .default(YesNo.YES)
    .required('select'),
  email: yup
    .string()
    .email()
    .required('email.message')
    .test('email.test', (value) => isValidEmail(value)),
  request: yup.string().required('form.request.message'),
});

const PrayerRequestForm = () => {
  const c = useTranslations('FormCommon');
  const t = useTranslations('Salvation');

  const { mutate: submitRequest, isPending, isSuccess, isError } = useCreatePrayerRequest();

  const formRef = useRef<HTMLFormElement | null>(null);
  useScrollToOnStatus(formRef, isSuccess, isError);

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<PrayerRequest>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: PrayerRequest) => submitRequest(values);

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="form-container-style">
      <div className="flex items-center gap-sm">
        <PencilPaper width={25} height={25} className="dark:fill-dark-primaryText" />
        <h4>{t('form.title')}</h4>
      </div>

      {isSuccess && (
        <AlertMessage
          type="success"
          title={t('form.success.title')}
          description={t('form.success.description')}
        />
      )}

      {isError && (
        <AlertMessage
          type="failure"
          title={c('error.title')}
          description={c('error.description')}
        />
      )}

      {/* Names */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
          required
          type="text"
          label={c('first.label')}
          {...register('first_name')}
          disabled={isPending || isSuccess}
          error={errors.first_name ? c(errors.first_name.message!) : undefined}
        />
        <TextInput
          required
          type="text"
          label={c('last.label')}
          {...register('last_name')}
          disabled={isPending || isSuccess}
          error={errors.last_name ? c(errors.last_name.message!) : undefined}
        />
      </div>

      {/* Contact */}
      <TextInput
        required
        type="email"
        {...register('email')}
        label={c('email.label')}
        disabled={isPending || isSuccess}
        error={errors.email ? c(errors.email.message!) : undefined}
      />

      {/* request email back */}
      <RadioGroup
        required
        name="request_email_back"
        defaultValue={YesNo.YES}
        disabled={isPending || isSuccess}
        label={t('form.response.label')}
        onChange={(val) => setValue('request_email_back', val as YesNo)}
        options={[
          { label: c('yes'), value: YesNo.YES },
          { label: c('no'), value: YesNo.NO },
        ]}
        error={errors.request_email_back ? c(errors.request_email_back.message!) : undefined}
      />

      {/* request */}
      <TextareaInput
        required
        label={t('form.request.label')}
        disabled={isPending || isSuccess}
        placeholder={t('form.request.placeholder')}
        error={errors.request ? t(errors.request.message!) : undefined}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setValue('request', e.target.value);
          if (e.target.value !== '') clearErrors('request');
        }}
      />

      <Button
        pill
        size="lg"
        type="submit"
        color="primary"
        disabled={isPending || isSuccess || isError}
        className="w-full md:max-w-[35%] mx-auto mt-md"
      >
        {isPending
          ? c('submit.pending')
          : isSuccess || isError
            ? c('submit.sent')
            : c('submit.label')}
      </Button>
    </form>
  );
};

export default PrayerRequestForm;
