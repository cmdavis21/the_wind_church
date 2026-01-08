'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { RightnowMediaSignup, YesNo } from '@/data/types';

import { useCreateRightnowMediaSignup } from '@/data/services/sanity/mutations/rightnow-media-signup';
import { isValidEmail, isValidPhone } from '@/data/utils';
import AlertMessage from '../inputs/alert-message/AlertMessage';
import RadioGroup from '../inputs/radio-group/RadioGroup';
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
  wind_member: yup.string().oneOf([YesNo.YES, YesNo.NO]).required('Select an answer'),
  has_access: yup.string().oneOf([YesNo.YES, YesNo.NO]).default(YesNo.NO),
});

const RightnowMediaSignupForm = () => {
  const { mutate: signup, isPending, isSuccess, isError } = useCreateRightnowMediaSignup();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<RightnowMediaSignup>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: RightnowMediaSignup) => signup(values);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-lg">
      {isSuccess && (
        <AlertMessage
          type="success"
          title="Success!"
          description="Please allow 1-3 days for admin to review your request."
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

      {/* is a wind member */}
      <RadioGroup
        name="wind_member"
        label="Are you a member of The Wind Church?"
        disabled={isPending || isSuccess}
        onChange={(val) => setValue('wind_member', val as YesNo)}
        options={[
          { value: YesNo.YES, label: 'Yes' },
          { value: YesNo.NO, label: 'No' },
        ]}
        error={errors.wind_member?.message}
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

export default RightnowMediaSignupForm;
