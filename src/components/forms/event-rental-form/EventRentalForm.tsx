'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Label, Radio } from 'flowbite-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { YesNo, EventRentalInquiry } from '@/data/types';

import PencilPaper from '../../icons/pencilPaper';
import FormSuccessErrorMessage from '../inputs/form-success-error-message/FormSuccessErrorMessage';
import SelectInput from '../inputs/select-input/SelectInput';
import TextInput from '../inputs/text-input/TextInput';
import { useCreateEventRentalInquiry } from '@/data/services/sanity/mutations/event-rental-inquiry';

const schema = yup.object().shape({
  first_name: yup.string().required('Please enter your first name'),
  last_name: yup.string().required('Please enter your last name'),
  email: yup.string().email().required('Please enter an email address'),
  phone: yup.string().required('Please enter a phone number'),
  // company_name: yup.string().optional(),
  // company_phone: yup.string().optional(),
  purpose_for_rental: yup.string().required('Please select an option'),
  describe_your_event: yup.string().required('Please supply more details of your event'),
  referred: yup.mixed<YesNo>().oneOf([YesNo.YES, YesNo.NO]).default(YesNo.NO).required(),
  // referred_by: yup.string().optional(),
});

type SchemaType = yup.InferType<typeof schema>;

const EventRentalForm = () => {
  type SchemaType = yup.InferType<typeof schema>;
  const [showReference, setShowReference] = useState(false);

  const {
    mutate: submitInquiry,
    isPending,
    isSuccess,
    isError,
    reset: resetMutation,
  } = useCreateEventRentalInquiry();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventRentalInquiry>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: EventRentalInquiry) => submitInquiry(values);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative w-full border border-lightGray dark:bg-softGray dark:border-softCharcoal dark:text-textInverse shadow-lg p-lg lg:p-xl flex flex-col gap-lg rounded-lg max-w-[1200px] mx-auto"
    >
      <div className="flex items-center gap-sm">
        <PencilPaper className="dark:fill-softWhite" />
        <h4>Rental Inquiry</h4>
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

      {/* Company Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
          label="Company Name"
          type="text"
          error={errors.company_name?.message}
          disabled={isPending || isSuccess}
          {...register('company_name')}
        />
        <TextInput
          label="Company Phone"
          type="tel"
          error={errors.company_phone?.message}
          disabled={isPending || isSuccess}
          {...register('company_phone')}
        />
      </div>

      {/* purpose for rental */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <SelectInput
          label="Purpose for your rental?"
          disabled={isPending || isSuccess}
          error={errors.purpose_for_rental?.message}
          {...register('purpose_for_rental')}
          options={[
            { label: 'Wedding', value: 'Wedding' },
            { label: 'Family Celebrations', value: 'Family Celebrations' },
            { label: 'Birthday', value: 'Birthday' },
            { label: 'Funeral', value: 'Funeral' },
            { label: 'Outreach Event', value: 'Outreach Event' },
            { label: 'Other', value: 'Other' },
          ]}
        />
        <TextInput
          label="Describe your event"
          type="text"
          error={errors.describe_your_event?.message}
          disabled={isPending || isSuccess}
          {...register('describe_your_event')}
        />
      </div>

      {/* referral */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <div className="flex flex-col gap-sm">
          <Label htmlFor="referred" value="Were you referred to The Wind?" />
          <div className="flex items-center gap-md">
            <div className="flex items-center gap-xs">
              <Radio
                value={YesNo.NO}
                disabled={isPending || isSuccess}
                {...register('referred')}
                onChange={(e) => {
                  if (e.target.checked) setShowReference(false);
                }}
              />
              <Label htmlFor="referred" value="No" />
            </div>
            <div className="flex items-center gap-xs">
              <Radio
                value={YesNo.YES}
                disabled={isPending || isSuccess}
                {...register('referred')}
                onChange={(e) => {
                  if (e.target.checked) setShowReference(true);
                }}
              />
              <Label htmlFor="referred" value="Yes" />
            </div>
          </div>
        </div>
        <SelectInput
          label="Referral Source"
          disabled={!showReference || isPending || isSuccess}
          error={errors.referred_by?.message}
          {...register('referred_by')}
          options={[
            { label: 'Wind Member', value: 'Wind Member' },
            { label: 'Spouse', value: 'Spouse' },
            { label: 'Family', value: 'Family' },
            { label: 'Friend', value: 'Friend' },
            { label: 'Other', value: 'Other' },
          ]}
        />
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

export default EventRentalForm;
