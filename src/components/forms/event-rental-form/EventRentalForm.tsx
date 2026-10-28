'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'flowbite-react';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { EventRentalInquiry, YesNo } from '@/data/types';

import { useCreateEventRentalInquiry } from '@/data/client/sanity/event-rental-inquiry';
import { useScrollToOnStatus } from '@/data/client/use-scroll-to-on-status';
import { isValidEmail, isValidPhone } from '@/data/utils';
import { useTranslations } from 'next-intl';
import AlertMessage from '../../alerts/alert-message/AlertMessage';
import PencilPaper from '../../icons/pencilPaper';
import RadioGroup from '../inputs/radio-group/RadioGroup';
import SelectInput from '../inputs/select-input/SelectInput';
import TextInput from '../inputs/text-input/TextInput';
import TextareaInput from '../inputs/textarea-input/TextareaInput';

const schema: yup.ObjectSchema<EventRentalInquiry> = yup.object().shape({
  first_name: yup.string().required('first.message'),
  last_name: yup.string().required('last.message'),
  email: yup
    .string()
    .email()
    .required('email.message')
    .test('email.test', (value) => isValidEmail(value)),
  phone: yup
    .string()
    .required('phone.message')
    .test('phone.test', (val) => isValidPhone(val)),
  company_name: yup.string().optional(),
  company_phone: yup
    .string()
    .optional()
    .test('phone.test', (val) => {
      if (val) return isValidPhone(val);
      return true;
    }),
  purpose_for_rental: yup.string().required('form.purpose.message'),
  describe_your_event: yup.string().required('form.describe.message'),
  referred: yup
    .mixed<YesNo>()
    .oneOf([YesNo.YES, YesNo.NO])
    .default(YesNo.NO)
    .required('form.purpose.message'),
  referred_by: yup.string().optional(),
});

const EventRentalForm = () => {
  const c = useTranslations('FormCommon');
  const t = useTranslations('ChurchRental');

  const [showReference, setShowReference] = useState(false);

  const { mutate: submitInquiry, isPending, isSuccess, isError } = useCreateEventRentalInquiry();

  const formRef = useRef<HTMLFormElement | null>(null);
  useScrollToOnStatus(formRef, isSuccess, isError);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<EventRentalInquiry>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: EventRentalInquiry) => submitInquiry(values);

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="form-container-style">
      <div className="flex items-center gap-sm">
        <PencilPaper width={25} height={25} className="dark:fill-dark-primaryText" />
        <h4>{t('form.title')}</h4>
      </div>

      {isSuccess && (
        <AlertMessage
          type="success"
          title={c('success.title')}
          description={c('success.description')}
        />
      )}

      {isError && (
        <AlertMessage
          type="failure"
          title={c('error.title')}
          description={c('error.description')}
        />
      )}

      {/* Names */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
          required
          type="text"
          label={c('first.label')}
          {...register('first_name')}
          disabled={isPending || isSuccess}
          error={errors.first_name ? c(errors.first_name.message!) : undefined}
        />
        <TextInput
          required
          type="text"
          label={c('last.label')}
          {...register('last_name')}
          disabled={isPending || isSuccess}
          error={errors.last_name ? c(errors.last_name.message!) : undefined}
        />
      </div>

      {/* Contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
          required
          type="tel"
          {...register('phone')}
          label={c('phone.label')}
          disabled={isPending || isSuccess}
          error={errors.phone ? c(errors.phone.message!) : undefined}
        />
        <TextInput
          required
          type="email"
          {...register('email')}
          label={c('email.label')}
          disabled={isPending || isSuccess}
          error={errors.email ? c(errors.email.message!) : undefined}
        />
      </div>

      {/* company information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
          type="text"
          {...register('company_name')}
          label={t('form.company.name')}
          disabled={isPending || isSuccess}
        />
        <TextInput
          type="tel"
          {...register('company_phone')}
          label={t('form.company.phone')}
          disabled={isPending || isSuccess}
          error={errors.company_phone ? t(errors.company_phone.message!) : undefined}
        />
      </div>

      {/* purpose for rental + referral */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
        <SelectInput
          required
          label={t('form.purpose.label')}
          disabled={isPending || isSuccess}
          {...register('purpose_for_rental')}
          error={errors.purpose_for_rental ? t(errors.purpose_for_rental.message!) : undefined}
          options={[
            { label: t('form.purpose.message'), value: '' },
            { label: t('form.purpose.wedding'), value: 'Wedding' },
            { label: t('form.purpose.family'), value: 'Family Celebrations' },
            { label: t('form.purpose.birthday'), value: 'Birthday' },
            { label: t('form.purpose.funeral'), value: 'Funeral' },
            { label: t('form.purpose.outreach'), value: 'Outreach Event' },
            { label: t('form.purpose.other'), value: 'Other' },
          ]}
        />
        <RadioGroup
          required
          name="referred"
          label={t('form.referred.label')}
          disabled={isPending || isSuccess}
          error={errors.referred ? t(errors.referred.message!) : undefined}
          options={[
            { label: c('yes'), value: YesNo.YES },
            { label: c('no'), value: YesNo.NO },
          ]}
          onChange={(val) => {
            if (val === YesNo.YES) {
              setShowReference(true);
            } else setShowReference(false);
            setValue('referred', val as YesNo);
          }}
        />
        <SelectInput
          label={t('form.source.label')}
          {...register('referred_by')}
          disabled={!showReference || isPending || isSuccess}
          options={[
            { label: t('form.purpose.message'), value: '' },
            { label: t('form.source.member'), value: 'Wind Member' },
            { label: t('form.source.spouse'), value: 'Spouse' },
            { label: t('form.source.family'), value: 'Family' },
            { label: t('form.source.friend'), value: 'Friend' },
            { label: t('form.purpose.other'), value: 'Other' },
          ]}
        />
      </div>

      {/* event description */}
      <TextareaInput
        required
        label={t('form.describe.label')}
        disabled={isPending || isSuccess}
        {...register('describe_your_event')}
        error={errors.describe_your_event ? t(errors.describe_your_event.message!) : undefined}
      />

      <Button
        pill
        size="lg"
        type="submit"
        color="primary"
        disabled={isPending || isSuccess || isError}
        className="w-full md:max-w-[35%] mx-auto mt-md"
      >
        {isPending
          ? c('submit.pending')
          : isSuccess || isError
            ? c('submit.sent')
            : c('submit.label')}
      </Button>
    </form>
  );
};

export default EventRentalForm;
