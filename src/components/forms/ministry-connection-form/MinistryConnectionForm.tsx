'use client';

import { MinistryConnection } from '@/data/types';
import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import { Button, Checkbox, Label } from 'flowbite-react';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useCreateMinistryConnection } from '@/data/services/sanity/mutations/ministry-connection';
import { isValidEmail, isValidPhone } from '@/data/utils';
import PencilPaper from '../../icons/pencilPaper';
import AlertMessage from '../inputs/alert-message/AlertMessage';
import TextInput from '../inputs/text-input/TextInput';

const schema = yup.object().shape({
  first_name: yup.string().required('Enter your first name'),
  last_name: yup.string().required('Enter your last name'),
  phone: yup
    .string()
    .min(10)
    .max(11)
    .required('Enter your phone number')
    .test('Include 10 to 11 digit valid phone number', (val) => isValidPhone(val)),
  email: yup
    .string()
    .email()
    .required('Enter your email')
    .test('Needs to be formatted like an email', (value) => isValidEmail(value)),
  ministry_interests: yup
    .array(yup.string().default(''))
    .min(1)
    .required('Select at least one ministry you are instrested in learning more about.'),
});

interface MinistryConnectionFormProps {
  ministryNames: string[];
}

const MinistryConnectionForm: React.FC<MinistryConnectionFormProps> = ({ ministryNames }) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [selections, setSelections] = useState<string[]>([]);

  const { mutate: submitIquiry, isPending, isSuccess, isError } = useCreateMinistryConnection();

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<MinistryConnection>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: MinistryConnection) => {
    if (selections.length > 0) {
      submitIquiry({ ...values, ministry_interests: selections });
    } else {
      setError('ministry_interests', {
        type: 'manual',
        message: 'Select at least one ministry you are instrested in learning more about.',
      });
    }
  };

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
        <h4>Ministry Connection</h4>
      </div>

      {isSuccess && (
        <AlertMessage
          type="success"
          title="Success!"
          description="We will contact you shortly. Thank you."
        />
      )}

      {isError && (
        <AlertMessage
          type="failure"
          title="Oh no!"
          description="There was an problem submitting your inquiry. Please try again later."
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
          label="Phone*"
          type="tel"
          error={errors.phone?.message}
          disabled={isPending || isSuccess}
          {...register('phone')}
        />
        <TextInput
          label="Email*"
          type="email"
          error={errors.email?.message}
          disabled={isPending || isSuccess}
          {...register('email')}
        />
      </div>

      {/* ministry interest */}
      <div className="flex flex-col gap-xl">
        <Label value="Select ministries you are interested in learning more about?*" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
          {ministryNames.map((name) => (
            <button
              key={name}
              onClick={(e) => {
                e.preventDefault();
                if (selections.includes(name)) {
                  setSelections((prev) => prev.filter((n) => n !== name));
                } else {
                  setSelections((prev) => [...prev, name]);
                }
              }}
              className={cn(
                selections.includes(name)
                  ? 'border-primary dark:border-primaryDark'
                  : 'border-skeletonGray hover:border-primary dark:hover:border-primaryDark',
                'border-2 flex items-center gap-xs hover:cursor-pointer rounded-md p-sm w-fit'
              )}
            >
              <Checkbox
                value={name}
                color="yellow"
                checked={selections.includes(name)}
                disabled={isPending || isSuccess}
              />
              <div className="body-large">{name}</div>
            </button>
          ))}
        </div>
        {errors.ministry_interests && (
          <div className="text-error">{errors.ministry_interests.message}</div>
        )}
      </div>

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

export default MinistryConnectionForm;
