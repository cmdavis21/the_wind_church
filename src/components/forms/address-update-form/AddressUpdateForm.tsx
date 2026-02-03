'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'flowbite-react';
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import PencilPaper from '@/components/icons/pencilPaper';
import { useUpdateCustomerAddress } from '@/data/services/shopify/admin/mutations/customer';
import { Address } from '@/data/types';
import AlertMessage from '../../alerts/alert-message/AlertMessage';
import SelectInput from '../inputs/select-input/SelectInput';
import TextInput from '../inputs/text-input/TextInput';

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
  province: yup.string().optional(),
  country: yup.string().optional(),
  zip: yup.string().optional(),
});

interface AddressUpdateFormProps {
  customer_id: string;
  current_address: Address;
}

const AddressUpdateForm: React.FC<AddressUpdateFormProps> = ({ customer_id, current_address }) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { mutate: updateAddress, isPending, isSuccess, isError } = useUpdateCustomerAddress();

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Partial<Address>>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: current_address,
  });

  const formValues = watch();
  const newValues = Object.entries(formValues).some(
    ([key, value]) => current_address[key as keyof Address] !== value
  );

  const onSubmit = (values: Partial<Address>) => {
    updateAddress({
      id: customer_id,
      address: values,
    });
  };

  useEffect(() => {
    if (!formRef.current) return;
    if (isSuccess || isError) {
      window.scrollTo({ left: 0, top: formRef.current.offsetTop - 100, behavior: 'smooth' });
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
        <h4>Shipping Address Update</h4>
      </div>

      <h5 className="text-light-charcoal dark:text-dark-charcoal">
        Shipping only provided in the US
      </h5>

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
          description="There was an problem submitting your inquiry. Please try again later."
        />
      )}

      {/* names */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
          label="First Name"
          type="text"
          defaultValue={current_address.first_name}
          error={errors.first_name?.message}
          disabled={isPending || isSuccess}
          {...register('first_name')}
        />
        <TextInput
          label="Last Name"
          type="text"
          defaultValue={current_address.last_name}
          error={errors.last_name?.message}
          disabled={isPending || isSuccess}
          {...register('last_name')}
        />
      </div>

      {/* address */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
          label="Address"
          type="string"
          defaultValue={current_address.address1}
          error={errors.address1?.message}
          disabled={isPending || isSuccess}
          {...register('address1')}
        />
        <TextInput
          label="Address 2 (Optional)"
          type="string"
          placeholder="Apt, Ste, Bld"
          defaultValue={current_address.address2}
          error={errors.address2?.message}
          disabled={isPending || isSuccess}
          {...register('address2')}
        />
      </div>

      {/* state */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
          label="City"
          type="string"
          defaultValue={current_address.city}
          error={errors.city?.message}
          disabled={isPending || isSuccess}
          {...register('city')}
        />
        <SelectInput
          label="State"
          disabled={isPending || isSuccess}
          {...register('province')}
          defaultValue={current_address.province}
          error={errors.province?.message}
          options={[
            { label: 'Select an option', value: '' },
            ...STATES.map((state) => ({
              label: state,
              value: state,
            })),
          ]}
        />
      </div>

      {/* zip */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
          label="Country"
          type="string"
          defaultValue={current_address.country}
          error={errors.country?.message}
          disabled
          {...register('country')}
        />
        <TextInput
          label="Zip"
          type="string"
          defaultValue={current_address.zip}
          error={errors.zip?.message}
          disabled={isPending || isSuccess}
          {...register('zip')}
        />
      </div>

      <Button
        pill
        size="lg"
        type="submit"
        color="primary"
        disabled={!newValues || isPending || isSuccess || isError}
        className="w-full md:max-w-[35%] mx-auto mt-md"
      >
        {isPending ? 'Submitting...' : 'Update'}
      </Button>
    </form>
  );
};

export default AddressUpdateForm;
