'use client';

import PencilPaper from '@/components/icons/pencilPaper';

import { useCreateVisitorFeedback } from '@/data/client/sanity/visitor-feedback';
import { useScrollToOnStatus } from '@/data/client/use-scroll-to-on-status';
import { VisitorFeedback } from '@/data/types';
import { isValidEmail, isValidPhone } from '@/data/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'flowbite-react';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import AlertMessage from '../../alerts/alert-message/AlertMessage';
import TextInput from '../inputs/text-input/TextInput';
import TextareaInput from '../inputs/textarea-input/TextareaInput';

const schema: yup.ObjectSchema<VisitorFeedback> = yup.object().shape({
  first_name: yup.string().required('first.message'),
  last_name: yup.string().required('last.message'),
  phone: yup.string().test('phone.test', (val) => {
    if (val) isValidPhone(val);
  }),
  email: yup
    .string()
    .email()
    .required('email.message')
    .test('email.test', (value) => isValidEmail(value)),
  feedback: yup.string().required('form.feedback.message'),
});

const VisitorFeedbackForm = () => {
  const c = useTranslations('FormCommon');
  const t = useTranslations('Feedback');

  const { mutate: submitFeedback, isPending, isSuccess, isError } = useCreateVisitorFeedback();

  const formRef = useRef<HTMLFormElement | null>(null);
  useScrollToOnStatus(formRef, isSuccess, isError);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VisitorFeedback>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: VisitorFeedback) => submitFeedback({ ...values });

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="form-container-style">
      <div className="flex items-center gap-sm">
        <PencilPaper width={25} height={25} className="dark:fill-dark-primaryText" />
        <h4>{t('title')}</h4>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
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

      {/* feedback */}
      <TextareaInput
        required
        {...register('feedback')}
        label={t('form.feedback.label')}
        disabled={isPending || isSuccess}
        placeholder={t('form.feedback.placeholder')}
        error={errors.feedback ? t(errors.feedback.message!) : undefined}
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

export default VisitorFeedbackForm;
