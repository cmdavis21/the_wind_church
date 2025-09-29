'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Button, Label, Radio } from 'flowbite-react';
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import PencilPaper from '@/components/icons/pencilPaper';
import { PrayerRequest, YesNo } from '@/data/types';

import CircleCheck from '@/components/icons/circleCheck';
import SolidCircleX from '@/components/icons/solidCircleX';
import { useCreatePrayerRequest } from '@/data/services/sanity/mutations/prayer-request';
import TextInput from '../inputs/text-input/TextInput';
import TextareaInput from '../inputs/textarea-input/TextareaInput';

const schema = yup.object().shape({
  first_name: yup.string().required('Please enter your first name'),
  last_name: yup.string().required('Please enter your last name'),
  request_email_back: yup.string().oneOf([YesNo.YES, YesNo.NO]).default(YesNo.YES).required(),
  email: yup.string().email().required('Please enter your email'),
  request: yup.string().required('Please enter your prayer'),
});

const PrayerRequestForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const {
    mutate: submitRequest,
    isPending,
    isSuccess,
    isError,
    reset: resetMutation,
  } = useCreatePrayerRequest();

  const {
    reset,
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
        <h4>Prayer Requests</h4>
      </div>

      {isSuccess && (
        <Alert color="success" withBorderAccent>
          <span className="flex items-center gap-xs">
            <CircleCheck className="fill-success" />
            <span className="font-bold">Success!</span> We will keep you in our prayers, and if you
            requested an email back, we will email you shortly. Thank you.
          </span>
        </Alert>
      )}

      {isError && (
        <Alert color="failure" withBorderAccent>
          <span className="flex items-center gap-xs">
            <SolidCircleX className="fill-error" />
            <span className="font-bold">Oh no!</span> There was an problem submitting your request.
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
      <TextInput
        label="Email*"
        type="email"
        error={errors.email?.message}
        disabled={isPending || isSuccess}
        placeholder="Enter your email"
        {...register('email')}
      />

      {/* request email back */}
      <div className="flex flex-col md:flex-row md:items-center gap-md">
        <Label htmlFor="requestEmailBack" value="Would you like us to respond to you by email?" />
        <div className="flex items-center gap-md">
          <div className="flex items-center gap-xs">
            <Radio
              name="request_email_back"
              value={YesNo.YES}
              defaultChecked
              disabled={isPending || isSuccess}
              onChange={() => setValue('request_email_back', YesNo.YES)}
            />
            <Label htmlFor="request_email_back" value="Yes" />
          </div>
          <div className="flex items-center gap-xs">
            <Radio
              name="request_email_back"
              value={YesNo.NO}
              disabled={isPending || isSuccess}
              onChange={() => setValue('request_email_back', YesNo.NO)}
            />
            <Label htmlFor="request_email_back" value="No, just prayers" />
          </div>
        </div>
      </div>

      {/* request */}
      <TextareaInput
        label="Prayer Request*"
        error={errors.request?.message}
        disabled={isPending || isSuccess}
        placeholder="Enter your prayer here"
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
        {isPending ? 'Submitting...' : isSuccess || isError ? 'Submitted' : 'Submit!'}
      </Button>
    </form>
  );
};

export default PrayerRequestForm;
