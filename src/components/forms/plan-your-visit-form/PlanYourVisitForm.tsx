'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'flowbite-react';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import Calendar from '@/components/icons/calendar';
import { formatDateMMMddyyyy, getDatesOfNextFiveSundays } from '@/data/format-date';
import { PlanYourVisit } from '@/data/types';

import { useCreateScheduleVisit } from '@/data/services/sanity/mutations/schedule-visit';
import AlertMessage from '../inputs/alert-message/AlertMessage';
import SelectInput from '../inputs/select-input/SelectInput';
import TextInput from '../inputs/text-input/TextInput';

const schema: yup.ObjectSchema<PlanYourVisit> = yup.object().shape({
  first_name: yup.string().required('Enter your first name'),
  last_name: yup.string().required('Enter your last name'),
  email: yup.string().email().required('Enter your email'),
  phone: yup.string().optional(),
  attendance: yup.number().min(1).max(15).required('Let us know how many will be coming with you.'),
  day_of_visit: yup.string().required('Select an ideal date we can expect you.'),
});

const PlanYourVisitForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const { mutate: submitPlan, isPending, isSuccess, isError } = useCreateScheduleVisit();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PlanYourVisit>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: PlanYourVisit) => submitPlan(values);

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
        <Calendar className="dark:fill-textInverse" />
        <h4>Plan Your Visit</h4>
      </div>

      {isSuccess && (
        <AlertMessage
          type="success"
          title="Success!"
          description="We look forward to seeing you!"
        />
      )}

      {isError && (
        <AlertMessage
          type="failure"
          title="Oh no!"
          description="There was an problem submitting your plans. Please try again later."
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

      {/* visit info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
          min={1}
          max={15}
          type="number"
          defaultValue={1}
          {...register('attendance')}
          error={errors.attendance?.message}
          disabled={isPending || isSuccess}
          label="Including yourself, how many people will be attending?"
        />
        <SelectInput
          label="Which Sunday will you visit?*"
          {...register('day_of_visit')}
          disabled={isPending || isSuccess}
          error={errors.day_of_visit?.message}
          options={[
            ...getDatesOfNextFiveSundays().map((sunday) => ({
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
        color="primary"
        disabled={isPending || isSuccess || isError}
        className="w-full md:max-w-[35%] mx-auto mt-md"
      >
        {isPending ? 'Submitting...' : isSuccess || isError ? 'Submitted' : 'Submit!'}
      </Button>
    </form>
  );
};

export default PlanYourVisitForm;
