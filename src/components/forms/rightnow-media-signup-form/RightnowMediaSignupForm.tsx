'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Button, Label, Radio, TextInput } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { RightnowMediaSignup, YesNo } from '@/data/types';

import CircleCheck from '@/components/icons/circleCheck';
import SolidCircleX from '@/components/icons/solidCircleX';
import { useCreateRightnowMediaSignup } from '@/data/services/sanity/mutations/rightnow-media-signup';

const schema = yup.object().shape({
  first_name: yup.string().required('Please enter your first name'),
  last_name: yup.string().required('Please enter your last name'),
  phone: yup.string().required('Please enter your phone number'),
  email: yup.string().email().required('Please enter your email'),
  wind_member: yup.string().oneOf([YesNo.YES, YesNo.NO]).required('Please select an answer'),
  has_access: yup.string().oneOf([YesNo.YES, YesNo.NO]).default(YesNo.NO),
});

const RightnowMediaSignupForm = () => {
  const { mutate: signup, isPending, isSuccess, isError } = useCreateRightnowMediaSignup();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RightnowMediaSignup>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: RightnowMediaSignup) => signup(values);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-lg w-full lg:max-w-[80%]">
      {isSuccess && (
        <Alert color="success" withBorderAccent>
          <span className="flex items-center gap-xs">
            <CircleCheck className="fill-success" />
            <span className="font-bold">Success!</span> Please allow 1-3 days for admin to review
            your request.
          </span>
        </Alert>
      )}

      {isError && (
        <Alert color="failure" withBorderAccent>
          <span className="flex items-center gap-xs">
            <SolidCircleX className="fill-error" />
            <span className="font-bold">Oh no!</span> There was an problem submitting your inquiry.
            Please try again later.
          </span>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
        <div className="w-full flex flex-col gap-xs">
          <Label htmlFor="first_name" value="First Name*" color="white" />
          <TextInput
            type="text"
            disabled={isPending || isSuccess}
            placeholder="Your first name"
            {...register('first_name')}
            className="w-full"
          />
          {errors.first_name && <p className="text-sm text-red">{errors.first_name.message}</p>}
        </div>
        <div className="w-full flex flex-col gap-xs">
          <Label htmlFor="last_name" value="Last Name*" color="white" />
          <TextInput
            type="text"
            disabled={isPending || isSuccess}
            placeholder="Your last name"
            {...register('last_name')}
            className="w-full"
          />
          {errors.last_name && <p className="text-sm text-red">{errors.last_name.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
        <div className="w-full flex flex-col gap-xs">
          <Label htmlFor="phone" value="Phone*" color="white" />
          <TextInput
            type="tel"
            disabled={isPending || isSuccess}
            placeholder="Your phone number"
            {...register('phone')}
            className="w-full"
          />
          {errors.phone && <p className="text-sm text-red">{errors.phone.message}</p>}
        </div>
        <div className="w-full flex flex-col gap-xs">
          <Label htmlFor="email" value="Email*" color="white" />
          <TextInput
            type="email"
            disabled={isPending || isSuccess}
            placeholder="Your email"
            {...register('email')}
            className="w-full"
          />
          {errors.email && <p className="text-sm text-red">{errors.email.message}</p>}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-md">
        <Label htmlFor="wind_member" value="Already a Wind member?" color="white" />
        <div className="flex items-center gap-md">
          <div className="flex items-center gap-xs">
            <Radio
              name="wind_member"
              value={YesNo.YES}
              disabled={isPending || isSuccess}
              onChange={() => setValue('wind_member', YesNo.YES)}
            />
            <Label htmlFor="wind_member" value="Yes" color="white" />
          </div>
          <div className="flex items-center gap-xs">
            <Radio
              name="wind_member"
              value={YesNo.NO}
              disabled={isPending || isSuccess}
              onChange={() => setValue('wind_member', YesNo.NO)}
            />
            <Label htmlFor="wind_member" value="No" color="white" />
          </div>
        </div>
      </div>

      <Button
        pill
        size="lg"
        type="submit"
        color="primary"
        disabled={isPending || isSuccess || isError}
        className="w-full md:max-w-[40%] mx-auto mt-md"
      >
        {isPending ? 'Submitting...' : isSuccess || isError ? 'Submitted' : 'Submit!'}
      </Button>
    </form>
  );
};

export default RightnowMediaSignupForm;
