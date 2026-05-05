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
  first_name: yup.string().optional(),
  last_name: yup.string().optional(),
  address1: yup.string().optional(),
  address2: yup.string().optional(),
  city: yup.string().optional(),
  state: yup.string().optional(),
  country: yup
    .mixed<CountryCode>()
    .oneOf(Object.values(CountryCode) as CountryCode[], 'Invalid country')
    .required('Country is required')
    .oneOf([CountryCode.US], 'Shipping is only available in the United States'),
  zip: yup.string().optional(),
  phone: yup.string().optional(),
});

interface AddressUpdateFormProps {
  customer_id: string;
  current_address: Address;
}

const AddressUpdateForm: React.FC<AddressUpdateFormProps> = ({ customer_id, current_address }) => {
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
      id: customer_id,
      address: values,
    });
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className="relative w-full border border-light-gray dark:bg-dark-gray dark:border-dark-gray shadow-lg p-lg lg:p-xl flex flex-col gap-lg rounded-lg max-w-[1200px] mx-auto"
    >
      <div className="flex items-center gap-sm">
        <PencilPaper width={25} height={25} className="dark:fill-dark-primaryText" />
        <h4>Shipping Address Update</h4>
      </div>

      <h5 className="text-light-charcoal dark:text-dark-charcoal">
        Shipping only provided in the US
      </h5>

      {isSuccess && (
        <AlertMessage type="success" title="Success!" description="Address was updated." />
      )}

      {isError && (
        <AlertMessage
          type="failure"
          title="Oh no!"
          description="There was a problem. Please try again later."
        />
      )}

      {/* names */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
          type="text"
          label="First Name"
          {...register('first_name')}
          error={errors.first_name?.message}
          disabled={isPending || isSuccess}
        />
        <TextInput
          type="text"
          label="Last Name"
          {...register('last_name')}
          error={errors.last_name?.message}
          disabled={isPending || isSuccess}
        />
      </div>

      {/* address */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
          type="string"
          label="Address"
          {...register('address1')}
          error={errors.address1?.message}
          disabled={isPending || isSuccess}
        />
        <TextInput
          type="string"
          {...register('address2')}
          label="Address 2 (Optional)"
          placeholder="Apt, Ste, Bld"
          error={errors.address2?.message}
          disabled={isPending || isSuccess}
        />
      </div>

      {/* city + state */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
          label="City"
          type="string"
          {...register('city')}
          error={errors.city?.message}
          disabled={isPending || isSuccess}
        />

        {isUS && (
          <SelectInput
            label="State"
            {...register('state')}
            disabled={isPending || isSuccess}
            error={errors.state?.message}
            options={[
              { label: 'Select an option', value: '' },
              ...STATES.map((state) => ({ label: state, value: state })),
            ]}
          />
        )}
      </div>

      {/* country + zip */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <SelectInput
          label="Country"
          {...register('country')}
          error={errors.country?.message}
          disabled={isPending || isSuccess}
          options={[{ label: 'Select a country', value: '' }, ...COUNTRY_OPTIONS]}
        />

        {isUS && (
          <TextInput
            label="Zip"
            type="string"
            {...register('zip')}
            error={errors.zip?.message}
            disabled={isPending || isSuccess}
          />
        )}
      </div>

      <TextInput
        label="Phone"
        type="tel"
        {...register('phone')}
        error={errors.phone?.message}
        disabled={isPending || isSuccess}
      />

      <Button
        pill
        size="lg"
        type="submit"
        color="primary"
        disabled={!newValues || isPending || isSuccess}
        className="w-full md:max-w-[35%] mx-auto mt-md"
      >
        {isPending ? 'Submitting...' : 'Update'}
      </Button>
    </form>
  );
};

export default AddressUpdateForm;
