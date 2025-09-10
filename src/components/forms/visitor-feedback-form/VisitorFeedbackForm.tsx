'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'flowbite-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import PencilPaper from '@/components/icons/pencilPaper';
import { VisitorFeedback } from '@/data/types';
import FormSuccessErrorMessage from '../inputs/form-success-error-message/FormSuccessErrorMessage';
import TextareaInput from '../inputs/textarea-input/TextareaInput';
import TextInput from '../inputs/text-input/TextInput';
import { useCreateVisitorFeedback } from '@/data/services/sanity/mutations/visitor-feedback';

const schema = yup.object().shape({
  first_name: yup.string().required('Please enter your first name'),
  last_name: yup.string().required('Please enter your last name'),
  // phone: yup.string().optional(),
  email: yup.string().email().required('Please enter your email'),
  feedback: yup.string().required('Please enter your feedback'),
});

const VisitorFeedbackForm = () => {
  const {
    mutate: submitFeedback,
    isPending,
    isSuccess,
    isError,
    reset: resetMutation,
  } = useCreateVisitorFeedback();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VisitorFeedback>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: VisitorFeedback) => submitFeedback({ ...values });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative w-full border border-lightGray dark:bg-softGray dark:border-softCharcoal dark:text-softWhite shadow-lg p-lg lg:p-xl flex flex-col gap-lg rounded-lg max-w-[1200px] mx-auto"
    >
      <div className="flex items-center gap-sm">
        <PencilPaper className="dark:fill-softWhite" />
        <h4>Visitor Feedback</h4>
      </div>

      {isSuccess && (
        <FormSuccessErrorMessage
          error={false}
          message="Success submitting your feedback! We appreciate your time. Thank you."
        />
      )}

      {isError && (
        <FormSuccessErrorMessage
          error={true}
          message="There was an error submitting your feedback. Please try again."
          refreshForm={() => {
            reset();
            resetMutation();
          }}
        />
      )}

      {/* names */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
          label="First Name*"
          type="text"
          error={errors.first_name?.message}
          disabled={isPending || isSuccess}
          placeholder="Enter your first name"
          {...register('first_name')}
        />
        <TextInput
          label="Last Name*"
          type="text"
          error={errors.last_name?.message}
          disabled={isPending || isSuccess}
          placeholder="Enter your last name"
          {...register('last_name')}
        />
      </div>

      {/* contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
          label="Phone"
          type="tel"
          error={errors.phone?.message}
          disabled={isPending || isSuccess}
          placeholder="Enter your phone number"
          {...register('phone')}
        />
        <TextInput
          label="Email*"
          type="email"
          error={errors.email?.message}
          disabled={isPending || isSuccess}
          placeholder="Enter your email"
          {...register('email')}
        />
      </div>

      {/* feedback */}
      <TextareaInput
        label="Your Feedback*"
        error={errors.feedback?.message}
        disabled={isPending || isSuccess}
        placeholder="Enter your comments here"
        {...register('feedback')}
      />

      <Button
        pill
        size="lg"
        type="submit"
        color="info"
        disabled={isPending || isSuccess}
        className="w-full md:max-w-[35%] mx-auto mt-md"
      >
        {isPending ? 'Submitting...' : 'Submit!'}
      </Button>
    </form>
  );
};

export default VisitorFeedbackForm;
