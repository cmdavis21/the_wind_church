'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'flowbite-react';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import PencilPaper from '@/components/icons/pencilPaper';
import { useUpdateCustomerAddress } from '@/data/client/shopify/customer';
import { useScrollToOnStatus } from '@/data/client/use-scroll-to-on-status';
import { CountryCode } from '@/data/server/shopify/zeus';
import { Address } from '@/data/types';
import { isValidPhone } from '@/data/utils';
import { useTranslations } from 'next-intl';
import AlertMessage from '../../alerts/alert-message/AlertMessage';
import SelectInput from '../inputs/select-input/SelectInput';
import TextInput from '../inputs/text-input/TextInput';

const COUNTRY_OPTIONS = Object.values(CountryCode).map((code) => ({
  label: code,
  value: code,
}));

const STATES = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District Of Columbia',
  'Federated States Of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Islands',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

const schema: yup.ObjectSchema<Partial<Address>> = yup.object().shape({
  address_id: yup.string().optional(),
  first_name: yup.string().optional(),
  last_name: yup.string().optional(),
  address1: yup.string().optional(),
  address2: yup.string().optional(),
  city: yup.string().optional(),
  state: yup.string().optional(),
  country: yup
    .mixed<CountryCode>()
    .oneOf(Object.values(CountryCode) as CountryCode[], 'addressForm.country.test')
    .required('addressForm.country.message')
    .oneOf([CountryCode.US], 'addressForm.country.default'),
  zip: yup.string().optional(),
  phone: yup
    .string()
    .optional()
    .test('phone.test', (val) => {
      if (val) isValidPhone(val);
    }),
});

interface AddressUpdateFormProps {
  customer_id: string;
  current_address: Address;
}

const AddressUpdateForm: React.FC<AddressUpdateFormProps> = ({ customer_id, current_address }) => {
  const c = useTranslations('FormCommon');
  const t = useTranslations('Orders');

  const { mutate: updateAddress, isPending, isSuccess, isError } = useUpdateCustomerAddress();

  const formRef = useRef<HTMLFormElement | null>(null);
  useScrollToOnStatus(formRef, isSuccess, isError);

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Partial<Address>>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: {
      ...current_address,
      address_id: current_address.address_id,
      country: current_address.country || 'US',
    },
  });

  const formValues = watch();
  const isUS = watch('country') === 'US';
  const newValues = Object.entries(formValues).some(
    ([key, value]) => current_address[key as keyof Address] !== value
  );

  const onSubmit = (values: Partial<Address>) => {
    updateAddress({
      customer_id,
      address_id: current_address.address_id,
      address: values,
    });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="form-container-style">
      <div className="flex items-center gap-sm">
        <PencilPaper width={25} height={25} className="dark:fill-dark-primaryText" />
        <h4>{t('addressForm.title')}</h4>
      </div>

      <h5 className="text-light-charcoal dark:text-dark-charcoal">{t('addressForm.subtitle')}</h5>

      {isSuccess && (
        <AlertMessage
          type="success"
          title={c('success.title')}
          description={t('addressForm.success.subtitle')}
        />
      )}

      {isError && (
        <AlertMessage
          type="failure"
          title={c('error.title')}
          description={t('addressForm.error.subtitle')}
        />
      )}

      {/* names */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
          type="text"
          label={c('first.label')}
          {...register('first_name')}
          disabled={isPending || isSuccess}
          error={errors.first_name?.message}
        />
        <TextInput
          type="text"
          label={c('last.label')}
          {...register('last_name')}
          disabled={isPending || isSuccess}
          error={errors.last_name?.message}
        />
      </div>

      {/* address */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
          type="string"
          {...register('address1')}
          label={t('addressForm.address')}
          error={errors.address1?.message}
          disabled={isPending || isSuccess}
        />
        <TextInput
          type="string"
          {...register('address2')}
          error={errors.address2?.message}
          disabled={isPending || isSuccess}
          label={t('addressForm.addressTwo.label')}
          placeholder={t('addressForm.addressTwo.placeholder')}
        />
      </div>

      {/* city + state */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
          type="string"
          {...register('city')}
          error={errors.city?.message}
          label={t('addressForm.city')}
          disabled={isPending || isSuccess}
        />

        {isUS && (
          <SelectInput
            {...register('state')}
            error={errors.state?.message}
            label={t('addressForm.state')}
            disabled={isPending || isSuccess}
            options={[
              { label: c('select'), value: '' },
              ...STATES.map((state) => ({ label: state, value: state })),
            ]}
          />
        )}
      </div>

      {/* country + zip */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <SelectInput
          {...register('country')}
          disabled={isPending || isSuccess}
          label={t('addressForm.country.label')}
          error={errors.country ? t(errors.country.message!) : undefined}
          options={[{ label: c('select'), value: '' }, ...COUNTRY_OPTIONS]}
        />

        {isUS && (
          <TextInput
            type="string"
            {...register('zip')}
            error={errors.zip?.message}
            label={t('addressForm.zip')}
            disabled={isPending || isSuccess}
          />
        )}
      </div>

      <TextInput
        type="tel"
        {...register('phone')}
        label={c('phone.label')}
        disabled={isPending || isSuccess}
        error={errors.phone ? c(errors.phone.message!) : undefined}
      />

      <Button
        pill
        size="lg"
        type="submit"
        color="primary"
        disabled={!newValues || isPending || isSuccess}
        className="w-full md:max-w-[35%] mx-auto mt-md"
      >
        {isPending ? c('submit.pending') : t('addressForm.update')}
      </Button>
    </form>
  );
};

export default AddressUpdateForm;
