'use client';

import { MinistryConnection } from '@/data/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'flowbite-react';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useCreateMinistryConnection } from '@/data/client/sanity/ministry-connection';
import { useScrollToOnStatus } from '@/data/client/use-scroll-to-on-status';
import { isValidEmail, isValidPhone } from '@/data/utils';
import { useTranslations } from 'next-intl';
import AlertMessage from '../../alerts/alert-message/AlertMessage';
import PencilPaper from '../../icons/pencilPaper';
import CheckboxGroup from '../inputs/checkbox-group/CheckboxGroup';
import TextInput from '../inputs/text-input/TextInput';

const schema = yup.object().shape({
  first_name: yup.string().required('first.message'),
  last_name: yup.string().required('last.message'),
  email: yup
    .string()
    .email()
    .required('email.message')
    .test('email.test', (value) => isValidEmail(value)),
  phone: yup
    .string()
    .required('phone.message')
    .test('phone.test', (val) => isValidPhone(val)),
  ministry_interests: yup
    .array(yup.string().default(''))
    .min(1, 'form.interests.test')
    .required('form.interests.message'),
});

interface MinistryConnectionFormProps {
  ministryNames: string[];
}

const MinistryConnectionForm: React.FC<MinistryConnectionFormProps> = ({ ministryNames }) => {
  const c = useTranslations('FormCommon');
  const t = useTranslations('Ministries');

  const { mutate: submitIquiry, isPending, isSuccess, isError } = useCreateMinistryConnection();

  const formRef = useRef<HTMLFormElement | null>(null);
  useScrollToOnStatus(formRef, isSuccess, isError);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<MinistryConnection>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: MinistryConnection) => submitIquiry(values);

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="form-container-style">
      <div className="flex items-center gap-sm">
        <PencilPaper width={25} height={25} className="dark:fill-dark-primaryText" />
        <h4>{t('form.title')}</h4>
      </div>

      {isSuccess && (
        <AlertMessage
          type="success"
          title={c('success.title')}
          description={c('success.description')}
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
          required
          type="tel"
          {...register('phone')}
          label={c('phone.label')}
          disabled={isPending || isSuccess}
          error={errors.phone ? c(errors.phone.message!) : undefined}
        />
        <TextInput
          required
          type="email"
          {...register('email')}
          label={c('email.label')}
          disabled={isPending || isSuccess}
          error={errors.email ? c(errors.email.message!) : undefined}
        />
      </div>

      {/* ministry interest */}
      <CheckboxGroup
        required
        name="ministry_interest"
        label={t('form.interests.label')}
        disabled={isPending || isSuccess}
        onChange={(values) => setValue('ministry_interests', values)}
        options={ministryNames.map((name) => ({ label: name, value: name }))}
        error={errors.ministry_interests ? t(errors.ministry_interests.message!) : undefined}
      />

      <Button
        pill
        size="lg"
        type="submit"
        color="primary"
        className="w-full md:max-w-[35%] mx-auto mt-md"
        disabled={!isValid || isPending || isSuccess || isError}
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

export default MinistryConnectionForm;
