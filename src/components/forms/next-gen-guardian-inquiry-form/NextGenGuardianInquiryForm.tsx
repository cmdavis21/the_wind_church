'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { NextGenGuardianInquiry } from '@/data/types';

import AlertMessage from '@/components/alerts/alert-message/AlertMessage';
import PencilPaper from '@/components/icons/pencilPaper';
import { useCreateNextGenGuardianInquiry } from '@/data/client/sanity/next-gen-guardian-inquiry';
import { useScrollToOnStatus } from '@/data/client/use-scroll-to-on-status';
import { isValidEmail, isValidPhone } from '@/data/utils';
import { Button } from 'flowbite-react';
import { useTranslations } from 'next-intl';
import TextInput from '../inputs/text-input/TextInput';
import TextareaInput from '../inputs/textarea-input/TextareaInput';

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
  questions: yup.string().required('form.questions.message'),
});

const NextGenGuardianInquiryForm = () => {
  const c = useTranslations('FormCommon');
  const t = useTranslations('NextGen');

  const {
    mutate: submitRequest,
    isPending,
    isSuccess,
    isError,
  } = useCreateNextGenGuardianInquiry();

  const formRef = useRef<HTMLFormElement | null>(null);
  useScrollToOnStatus(formRef, isSuccess, isError);

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<NextGenGuardianInquiry>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: NextGenGuardianInquiry) => submitRequest(values);

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

      {/* inquriy */}
      <TextareaInput
        required
        label={t('form.questions.label')}
        disabled={isPending || isSuccess}
        placeholder={t('form.questions.placeholder')}
        error={errors.questions ? t(errors.questions.message!) : undefined}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setValue('questions', e.target.value);
          if (e.target.value !== '') clearErrors('questions');
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

export default NextGenGuardianInquiryForm;
