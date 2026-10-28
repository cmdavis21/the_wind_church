import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'flowbite-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { FullContact } from '@/data/types';

import { isValidEmail, isValidPhone } from '@/data/utils';
import AlertMessage from '../../../alerts/alert-message/AlertMessage';
import TextInput from '../../inputs/text-input/TextInput';

const schema = yup.object().shape({
  first_name: yup.string().required('Enter your first name'),
  last_name: yup.string().required('Enter your last name'),
  phone: yup
    .string()
    .required('phone.message')
    .test('phone.test', (val) => isValidPhone(val)),
  email: yup
    .string()
    .email()
    .required('email.message')
    .test('email.test', (value) => isValidEmail(value)),
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
          title="Success!"
          description="Thank you for sharing your results with us. We'll talk soon!"
        />
      )}

      {isError && (
        <AlertMessage
          type="failure"
          title="Oh no!"
          description="There was an error submitting your results. Please try again again later or download
            your results."
        />
      )}

      {/* Names */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
          type="text"
          label="First Name*"
          {...register('first_name')}
          disabled={isPending || isSuccess}
          error={errors.first_name?.message}
        />
        <TextInput
          type="text"
          label="Last Name*"
          {...register('last_name')}
          disabled={isPending || isSuccess}
          error={errors.last_name?.message}
        />
      </div>

      {/* Contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
          type="tel"
          label="Phone*"
          {...register('phone')}
          error={errors.phone?.message}
          disabled={isPending || isSuccess}
        />
        <TextInput
          type="email"
          label="Email*"
          {...register('email')}
          error={errors.email?.message}
          disabled={isPending || isSuccess}
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
