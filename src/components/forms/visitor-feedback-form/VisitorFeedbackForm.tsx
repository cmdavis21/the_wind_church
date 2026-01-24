'use client';

import PencilPaper from '@/components/icons/pencilPaper';
import { useCreateVisitorFeedback } from '@/data/services/sanity/mutations/visitor-feedback';
import { VisitorFeedback } from '@/data/types';
import { isValidEmail, isValidPhone } from '@/data/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'flowbite-react';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import AlertMessage from '../../alerts/alert-message/AlertMessage';
import TextInput from '../inputs/text-input/TextInput';
import TextareaInput from '../inputs/textarea-input/TextareaInput';

const schema: yup.ObjectSchema<VisitorFeedback> = yup.object().shape({
  first_name: yup.string().required('Enter your first name'),
  last_name: yup.string().required('Enter your last name'),
  phone: yup
    .string()
    .min(10)
    .max(11)
    .optional()
    .test('Include 10 to 11 digit valid phone number', (val) => {
      if (val) {
        return isValidPhone(val);
      }
    }),
  email: yup
    .string()
    .email()
    .required('Enter your email')
    .test('Needs to be formatted like an email', (value) => isValidEmail(value)),
  feedback: yup.string().required('Share your feedback'),
});

const VisitorFeedbackForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const { mutate: submitFeedback, isPending, isSuccess, isError } = useCreateVisitorFeedback();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VisitorFeedback>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: VisitorFeedback) => submitFeedback({ ...values });

  useEffect(() => {
    if (formRef.current) {
      if (isSuccess || isError) {
        window.scrollTo({
          left: 0,
          top: formRef.current.offsetTop - 100,
          behavior: 'smooth',
        });
      }
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
        <h4>Visitor Feedback</h4>
      </div>

      {isSuccess && (
        <AlertMessage
          type="success"
          title="Success!"
          description="We appreciate your feedback. Thank you."
        />
      )}

      {isError && (
        <AlertMessage
          type="failure"
          title="Oh no!"
          description="There was an problem submitting your feedback. Please try again later."
        />
      )}

      {/* names */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
          type="text"
          label="First Name*"
          {...register('first_name')}
          error={errors.first_name?.message}
          disabled={isPending || isSuccess}
        />
        <TextInput
          type="text"
          label="Last Name*"
          {...register('last_name')}
          error={errors.last_name?.message}
          disabled={isPending || isSuccess}
        />
      </div>

      {/* contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
          type="tel"
          label="Phone"
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

      {/* feedback */}
      <TextareaInput
        label="Your Feedback*"
        {...register('feedback')}
        error={errors.feedback?.message}
        disabled={isPending || isSuccess}
        placeholder="Enter your comments here..."
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

export default VisitorFeedbackForm;
