'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { PlanYourVisit } from '@/data/types';
import { formatDateMMMddyyyy, getDatesOfNextFiveSundays } from '@/data/format-date';
import Calendar from '@/components/icons/calendar';

import TextInput from '../inputs/text-input/TextInput';
import SelectInput from '../inputs/select-input/SelectInput';
import FormSuccessErrorMessage from '../inputs/form-success-error-message/FormSuccessErrorMessage';
import { useCreateScheduleVisit } from '@/data/services/sanity/mutations/schedule-visit';

const schema = yup.object().shape({
  first_name: yup.string().required('Please enter your first name'),
  last_name: yup.string().required('Please enter your last name'),
  email: yup.string().email().required('Please enter your email'),
  phone: yup.string().optional(),
  attendance: yup
    .number()
    .min(1)
    .max(15)
    .required('Please let us know how many will be coming with you.'),
  day_of_visit: yup.string().required('Please select an ideal date we can expect you.'),
});

const PlanYourVisitForm = () => {
  const {
    mutate: submitPlan,
    isPending,
    isSuccess,
    isError,
    reset: resetMutation,
  } = useCreateScheduleVisit();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PlanYourVisit>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: PlanYourVisit) => submitPlan(values);

  const [sundays, setSundays] = useState<Date[] | []>([]);

  useEffect(() => setSundays(getDatesOfNextFiveSundays()), []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative w-full border border-lightGray dark:bg-softGray dark:border-softCharcoal dark:text-softWhite shadow-lg p-lg lg:p-xl flex flex-col gap-lg rounded-lg max-w-[1200px] mx-auto"
    >
      <div className="flex items-center gap-sm">
        <Calendar className="dark:fill-softWhite" />
        <h4>Plan Your Visit</h4>
      </div>

      {isSuccess && (
        <FormSuccessErrorMessage
          error={false}
          message="Success submitting your plans! We look forward to seeing you!"
        />
      )}

      {isError && (
        <FormSuccessErrorMessage
          error={true}
          message="There was an error submitting your plans. Please try again."
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

      {/* visit info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
          label="Including yourself, how many people will be attending?"
          type="number"
          min={1}
          max={15}
          defaultValue={1}
          error={errors.attendance?.message}
          disabled={isPending || isSuccess}
          {...register('attendance')}
        />
        <SelectInput
          label="Which Sunday will you visit?*"
          disabled={isPending || isSuccess}
          error={errors.day_of_visit?.message}
          {...register('day_of_visit')}
          options={[
            ...sundays.map((sunday) => ({
              label: `Sun ${formatDateMMMddyyyy(sunday)}`,
              value: `Sun ${formatDateMMMddyyyy(sunday)}`,
            })),
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

export default PlanYourVisitForm;
