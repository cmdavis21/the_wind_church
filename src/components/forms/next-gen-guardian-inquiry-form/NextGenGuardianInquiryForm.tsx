'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { NextGenGuardianInquiry } from '@/data/types';

import AlertMessage from '@/components/alerts/alert-message/AlertMessage';
import PencilPaper from '@/components/icons/pencilPaper';
import { useCreateNextGenGuardianInquiry } from '@/data/services/sanity/mutations/next-gen-guardian-inquiry';
import { isValidEmail, isValidPhone } from '@/data/utils';
import { Button } from 'flowbite-react';
import TextInput from '../inputs/text-input/TextInput';
import TextareaInput from '../inputs/textarea-input/TextareaInput';

const schema = yup.object().shape({
  first_name: yup.string().required('Enter your first name'),
  last_name: yup.string().required('Enter your last name'),
  email: yup
    .string()
    .email()
    .required('Enter your email')
    .test('Needs to be formatted like an email', (value) => isValidEmail(value)),
  phone: yup
    .string()
    .required('Enter your phone number')
    .test('Include 10 to 11 digit valid phone number', (val) => isValidPhone(val)),
  questions: yup.string().required('Share your questions'),
});

const NextGenGuardianInquiryForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const {
    mutate: submitRequest,
    isPending,
    isSuccess,
    isError,
  } = useCreateNextGenGuardianInquiry();

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

  useEffect(() => {
    if (!formRef.current) return;
    if (isSuccess || isError) {
      window.scrollTo({ left: 0, top: formRef.current.offsetTop - 100, behavior: 'smooth' });
    }
  }, [isSuccess, isError]);

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className="relative w-full border border-light-gray dark:bg-dark-gray dark:border-dark-gray shadow-lg p-lg lg:p-xl flex flex-col gap-lg rounded-lg max-w-[1200px] mx-auto"
    >
      <div className="flex items-center gap-sm">
        <PencilPaper className="dark:fill-dark-primaryText" />
        <h4>Next Gen Guardian Inquiry</h4>
      </div>

      {isSuccess && (
        <AlertMessage
          type="success"
          title="Success!"
          description="Please allow up to 3 business
            days for a member of our team to reach out to you."
        />
      )}

      {isError && (
        <AlertMessage
          type="failure"
          title="Oh no!"
          description="There was an problem submitting your request. Please try again later."
        />
      )}

      {/* names */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
          label="First Name*"
          type="text"
          error={errors.first_name?.message}
          disabled={isPending || isSuccess}
          {...register('first_name')}
        />
        <TextInput
          label="Last Name*"
          type="text"
          error={errors.last_name?.message}
          disabled={isPending || isSuccess}
          {...register('last_name')}
        />
      </div>

      {/* contact */}
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

      {/* inquriy */}
      <TextareaInput
        label="Questions*"
        error={errors.questions?.message}
        disabled={isPending || isSuccess}
        placeholder="Enter any questions you may have so our member can prepare for you."
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
        {isPending ? 'Submitting...' : isSuccess || isError ? 'Submitted' : 'Submit!'}
      </Button>
    </form>
  );
};

export default NextGenGuardianInquiryForm;
