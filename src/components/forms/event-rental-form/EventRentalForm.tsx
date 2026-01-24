'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { EventRentalInquiry, YesNo } from '@/data/types';

import { useHoneyPot } from '@/data/hooks';
import { useCreateEventRentalInquiry } from '@/data/services/sanity/mutations/event-rental-inquiry';
import { isValidEmail, isValidPhone } from '@/data/utils';
import AlertMessage from '../../alerts/alert-message/AlertMessage';
import PencilPaper from '../../icons/pencilPaper';
import { HoneyPotInput } from '../inputs/honey-pot-input/HoneyPotInput';
import RadioGroup from '../inputs/radio-group/RadioGroup';
import SelectInput from '../inputs/select-input/SelectInput';
import TextInput from '../inputs/text-input/TextInput';

const schema: yup.ObjectSchema<EventRentalInquiry> = yup.object().shape({
  first_name: yup.string().required('Enter your first name'),
  last_name: yup.string().required('Enter your last name'),
  email: yup
    .string()
    .email()
    .required('Enter your email')
    .test('Needs to be formatted like an email', (value) => isValidEmail(value)),
  phone: yup
    .string()
    .required('Enter your phone number')
    .test('Include 10 to 11 digit valid phone number', (val) => isValidPhone(val)),
  company_name: yup.string().optional(),
  company_phone: yup
    .string()
    .optional()
    .test('Include 10 to 11 digit valid phone number', (val) => {
      if (val) {
        return isValidPhone(val);
      }
      return true;
    }),
  purpose_for_rental: yup.string().required('Select an option'),
  describe_your_event: yup.string().required('Supply more details of your event'),
  referred: yup.mixed<YesNo>().oneOf([YesNo.YES, YesNo.NO]).default(YesNo.NO).required(),
  referred_by: yup.string().optional(),
});

const EventRentalForm = () => {
  const { isBot, setInputValue } = useHoneyPot();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [showReference, setShowReference] = useState(false);

  const { mutate: submitInquiry, isPending, isSuccess, isError } = useCreateEventRentalInquiry();

  const {
    register,
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<EventRentalInquiry>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: EventRentalInquiry) => {
    if (isBot) {
      setError('root', { message: 'Unsafe submission. Access Denied.' });
      return;
    }
    // submitInquiry(values);
  };
  console.log(isBot);
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
        <h4>Rental Inquiry</h4>
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
          description="There was an problem submitting your inquiry.
            Please try again later, or call our office at +1 (951) 359-0203."
        />
      )}

      {/* HONEY POT */}
      <HoneyPotInput setValue={setInputValue} />

      {/* names */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
          type="text"
          label="First Name*"
          {...register('first_name')}
          disabled={isPending || isSuccess}
          error={errors.first_name?.message}
        />
        <TextInput
          type="text"
          label="Last Name*"
          {...register('last_name')}
          disabled={isPending || isSuccess}
          error={errors.last_name?.message}
        />
      </div>

      {/* contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
          type="tel"
          label="Phone*"
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

      {/* Company Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
          type="text"
          label="Company Name"
          {...register('company_name')}
          disabled={isPending || isSuccess}
          error={errors.company_name?.message}
        />
        <TextInput
          type="tel"
          label="Company Phone"
          {...register('company_phone')}
          disabled={isPending || isSuccess}
          error={errors.company_phone?.message}
        />
      </div>

      {/* purpose for rental */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <SelectInput
          label="Purpose for your rental?"
          disabled={isPending || isSuccess}
          {...register('purpose_for_rental')}
          error={errors.purpose_for_rental?.message}
          options={[
            { label: 'Select an option', value: '' },
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
        <RadioGroup
          name="referred"
          disabled={isPending || isSuccess}
          label="Was you referred by someone to the Wind church?"
          options={[
            { value: YesNo.NO, label: YesNo.NO },
            { value: YesNo.YES, label: YesNo.YES },
          ]}
          onChange={(val) => {
            if (val === YesNo.YES) {
              setShowReference(true);
            } else setShowReference(false);
            setValue('referred', val as YesNo);
          }}
          error={errors.referred?.message}
        />
        <SelectInput
          label="Referral Source"
          {...register('referred_by')}
          error={errors.referred_by?.message}
          disabled={!showReference || isPending || isSuccess}
          options={[
            { label: 'Select an option', value: '' },
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
        color="primary"
        disabled={isPending || isSuccess || isError}
        className="w-full md:max-w-[35%] mx-auto mt-md"
      >
        {isPending ? 'Submitting...' : isSuccess || isError ? 'Submitted' : 'Submit!'}
      </Button>
    </form>
  );
};

export default EventRentalForm;
