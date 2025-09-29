'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Button } from 'flowbite-react';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import Calendar from '@/components/icons/calendar';
import { formatDateMMMddyyyy, getDatesOfNextFiveSundays } from '@/data/format-date';
import { PlanYourVisit } from '@/data/types';

import CircleCheck from '@/components/icons/circleCheck';
import SolidCircleX from '@/components/icons/solidCircleX';
import { useCreateScheduleVisit } from '@/data/services/sanity/mutations/schedule-visit';
import SelectInput from '../inputs/select-input/SelectInput';
import TextInput from '../inputs/text-input/TextInput';

const schema: yup.ObjectSchema<PlanYourVisit> = yup.object().shape({
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
        <Alert color="success" withBorderAccent>
          <span className="flex items-center gap-xs">
            <CircleCheck className="fill-success" />
            <span className="font-bold">Success!</span> We look forward to seeing you!
          </span>
        </Alert>
      )}

      {isError && (
        <Alert color="failure" withBorderAccent>
          <span className="flex items-center gap-xs">
            <SolidCircleX className="fill-error" />
            <span className="font-bold">Oh no!</span> There was an problem submitting your plans.
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
