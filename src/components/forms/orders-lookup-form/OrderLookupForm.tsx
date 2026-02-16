'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useLookupCustomer } from '@/data/services/shopify/admin/queries/customer';
import { useLookupCustomerOrders } from '@/data/services/shopify/admin/queries/orders';
import { CustomerData } from '@/data/types';

import { isValidEmail } from '@/data/utils';
import AlertMessage from '../../alerts/alert-message/AlertMessage';
import PencilPaper from '../../icons/pencilPaper';
import TextInput from '../inputs/text-input/TextInput';

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('Enter your email')
    .test('Needs to be formatted like an email', (value) => isValidEmail(value)),
});

interface OrderLookupFormProps {
  returnValue: (data: CustomerData) => void;
}

const OrderLookupForm: React.FC<OrderLookupFormProps> = ({ returnValue }) => {
  const [newData, setNewData] = useState<CustomerData>({
    profile: undefined,
    orders: [],
  });

  const {
    mutate: lookupCustomer,
    isPending: customerPending,
    isError: customerError,
    isSuccess: customerSuccess,
  } = useLookupCustomer({
    onSuccess: (data) => {
      setNewData((prev) => ({ ...prev, profile: data }));
    },
  });

  const {
    mutate: lookupOrders,
    isPending: ordersPending,
    isError: ordersError,
    isSuccess: ordersSuccess,
  } = useLookupCustomerOrders({
    onSuccess: (data) => {
      setNewData((prev) => ({ ...prev, orders: data }));
    },
  });

  useEffect(() => {
    if (customerSuccess && ordersSuccess) {
      returnValue(newData);
    }
  }, [customerSuccess, ordersSuccess, newData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: { email: string }) => {
    lookupCustomer(values.email);
    lookupOrders(values.email);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative w-full border border-light-gray dark:bg-dark-gray dark:border-dark-gray shadow-lg p-lg lg:p-xl flex flex-col gap-lg rounded-lg max-w-[1200px] mx-auto"
    >
      <div className="flex items-center gap-sm">
        <PencilPaper width={25} height={25} className="dark:fill-dark-primaryText" />
        <h4>Email Required</h4>
      </div>

      <h5 className="text-light-charcoal dark:text-dark-charcoal">
        To view your orders, enter your email.
      </h5>

      {(customerError || ordersError) && (
        <AlertMessage type="failure" title="Oh no!" description="Email not found." />
      )}

      <TextInput type="email" label="Email*" {...register('email')} error={errors.email?.message} />

      <Button
        pill
        size="lg"
        type="submit"
        color="primary"
        fullSized
        disabled={customerPending || ordersPending}
        className="mt-md"
      >
        {customerPending || ordersPending ? 'Looking for your stuff...' : 'Submit!'}
      </Button>
    </form>
  );
};

export default OrderLookupForm;
