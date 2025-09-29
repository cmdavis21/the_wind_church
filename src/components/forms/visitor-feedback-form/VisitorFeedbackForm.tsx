'use client';

import CircleCheck from '@/components/icons/circleCheck';
import PencilPaper from '@/components/icons/pencilPaper';
import SolidCircleX from '@/components/icons/solidCircleX';
import { useCreateVisitorFeedback } from '@/data/services/sanity/mutations/visitor-feedback';
import { VisitorFeedback } from '@/data/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Button } from 'flowbite-react';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import TextInput from '../inputs/text-input/TextInput';
import TextareaInput from '../inputs/textarea-input/TextareaInput';

const schema: yup.ObjectSchema<VisitorFeedback> = yup.object().shape({
  first_name: yup.string().required('Please enter your first name'),
  last_name: yup.string().required('Please enter your last name'),
  phone: yup.string().optional(),
  email: yup.string().email().required('Please enter your email'),
  feedback: yup.string().required('Please enter your feedback'),
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
      className="relative w-full border border-gray dark:bg-grayDark dark:border-grayDark dark:text-textInverse shadow-lg p-lg lg:p-xl flex flex-col gap-lg rounded-lg max-w-[1200px] mx-auto"
    >
      <div className="flex items-center gap-sm">
        <PencilPaper className="dark:fill-textInverse" />
        <h4>Visitor Feedback</h4>
      </div>

      {isSuccess && (
        <Alert color="success" withBorderAccent>
          <span className="flex items-center gap-xs">
            <CircleCheck className="fill-success" />
            <span className="font-bold">Success!</span> We appreciate your feedback. Thank you.
          </span>
        </Alert>
      )}

      {isError && (
        <Alert color="failure" withBorderAccent>
          <span className="flex items-center gap-xs">
            <SolidCircleX className="fill-error" />
            <span className="font-bold">Oh no!</span> There was an problem submitting your feedback.
            Please try again later.
          </span>
        </Alert>
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
