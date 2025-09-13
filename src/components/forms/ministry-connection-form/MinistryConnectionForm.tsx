'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Checkbox, Label } from 'flowbite-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { MinistryConnection } from '@/data/types';

import PencilPaper from '../../icons/pencilPaper';
import FormSuccessErrorMessage from '../inputs/form-success-error-message/FormSuccessErrorMessage';
import TextInput from '../inputs/text-input/TextInput';
import { useCreateMinistryConnection } from '@/data/services/sanity/mutations/ministry-connection';

const schema = yup.object().shape({
  first_name: yup.string().required('Please enter your first name'),
  last_name: yup.string().required('Please enter your last name'),
  phone: yup.string().required('Please enter your phone number'),
  email: yup.string().email().required('Please enter your email'),
  ministry_interests: yup
    .array(yup.string().default(''))
    .min(1)
    .required('Please select at least one ministry you are instrested in learning more about.'),
});

interface MinistryConnectionFormProps {
  ministryNames: string[];
}

const MinistryConnectionForm: React.FC<MinistryConnectionFormProps> = ({ ministryNames }) => {
  const [selections, setSelections] = useState<string[]>([]);

  const {
    mutate: submitIquiry,
    isPending,
    isSuccess,
    isError,
    reset: resetMutation,
  } = useCreateMinistryConnection();

  const {
    reset,
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
        message: 'Please select at least one ministry you are instrested in learning more about.',
      });
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative w-full border border-lightGray dark:bg-softGray dark:border-softCharcoal dark:text-textInverse shadow-lg p-lg lg:p-xl flex flex-col gap-lg rounded-lg max-w-[1200px] mx-auto"
    >
      <div className="flex items-center gap-sm">
        <PencilPaper className="dark:fill-softWhite" />
        <h4>Ministry Connection</h4>
      </div>

      {isSuccess && (
        <FormSuccessErrorMessage
          error={false}
          message="Success submitting your inquiry! We will contact you shortly. Thank you."
        />
      )}

      {isError && (
        <FormSuccessErrorMessage
          error={true}
          message="There was an error submitting your inquiry. Please try again."
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
          label="Phone*"
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
              className="flex items-center gap-xs border border-lightGray rounded-md p-sm hover:bg-lightGray/20 hover:shadow-sm hover:cursor-pointer"
            >
              <Checkbox
                {...register('ministry_interests')}
                value={name}
                checked={selections.includes(name)}
                onChange={() => {}}
                disabled={isPending || isSuccess}
              />
              <div>{name}</div>
            </button>
          ))}
        </div>
        {errors.ministry_interests && (
          <div className="text-red">{errors.ministry_interests.message}</div>
        )}
      </div>

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

export default MinistryConnectionForm;
