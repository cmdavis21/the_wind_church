'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'flowbite-react';
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import PencilPaper from '@/components/icons/pencilPaper';
import { PrayerRequest, YesNo } from '@/data/types';

import AlertMessage from '@/components/alerts/alert-message/AlertMessage';
import { useCreatePrayerRequest } from '@/data/services/sanity/mutations/prayer-request';
import { isValidEmail } from '@/data/utils';
import RadioGroup from '../inputs/radio-group/RadioGroup';
import TextInput from '../inputs/text-input/TextInput';
import TextareaInput from '../inputs/textarea-input/TextareaInput';

const schema = yup.object().shape({
  first_name: yup.string().required('Enter your first name'),
  last_name: yup.string().required('Enter your last name'),
  request_email_back: yup.string().oneOf([YesNo.YES, YesNo.NO]).default(YesNo.YES).required(),
  email: yup
    .string()
    .email()
    .required('Enter your email')
    .test('Needs to be formatted like an email', (value) => isValidEmail(value)),
  request: yup.string().required('Share your prayer'),
});

const PrayerRequestForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const { mutate: submitRequest, isPending, isSuccess, isError } = useCreatePrayerRequest();

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
        <PencilPaper width={25} height={25} className="dark:fill-dark-primaryText" />
        <h4>Prayer Requests</h4>
      </div>

      {isSuccess && (
        <AlertMessage
          type="success"
          title="Thank you!"
          description="We will keep you in our prayers, and if you
            requested an email back, we will email you shortly."
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
      <TextInput
        label="Email*"
        type="email"
        error={errors.email?.message}
        disabled={isPending || isSuccess}
        {...register('email')}
      />

      {/* request email back */}
      <RadioGroup
        name="request_email_back"
        defaultValue={YesNo.YES}
        disabled={isPending || isSuccess}
        label="Would you like us to respond to you by email?"
        onChange={(val) => setValue('request_email_back', val as YesNo)}
        options={[
          { value: YesNo.YES, label: 'Yes' },
          { value: YesNo.NO, label: 'No' },
        ]}
        error={errors.request_email_back?.message}
      />

      {/* request */}
      <TextareaInput
        label="Prayer Request*"
        error={errors.request?.message}
        disabled={isPending || isSuccess}
        placeholder="Enter your prayer here..."
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
