import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'flowbite-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { FullContact } from '@/data/types';

import { isValidEmail, isValidPhone } from '@/data/utils';
import { useTranslations } from 'next-intl';
import AlertMessage from '../../../alerts/alert-message/AlertMessage';
import TextInput from '../../inputs/text-input/TextInput';

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
});

interface GiftAssessmentContactFormProps {
  contact: (data: FullContact) => void;
  isPending?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
}

const GiftAssessmentContactForm: React.FC<GiftAssessmentContactFormProps> = ({
  contact,
  isPending,
  isSuccess,
  isError,
}) => {
  const c = useTranslations('FormCommon');
  const t = useTranslations('GiftAssessment.submission.form');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FullContact>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: FullContact) => contact(values);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative flex flex-col gap-lg">
      {isSuccess && (
        <AlertMessage
          type="success"
          title={c('success.title')}
          description={t('success.description')}
        />
      )}

      {isError && (
        <AlertMessage
          type="failure"
          title={c('error.title')}
          description={t('error.description')}
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

export default GiftAssessmentContactForm;
