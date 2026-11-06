'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { CustomerData } from '@/data/types';

import { useLookupCustomer, useLookupCustomerOrders } from '@/data/client/shopify/customer';
import { isValidEmail } from '@/data/utils';
import { useTranslations } from 'next-intl';
import AlertMessage from '../../alerts/alert-message/AlertMessage';
import PencilPaper from '../../icons/pencilPaper';
import TextInput from '../inputs/text-input/TextInput';

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('email.message')
    .test('email.test', (value) => isValidEmail(value)),
});

interface OrderLookupFormProps {
  returnValue: (data: CustomerData) => void;
}

const OrderLookupForm: React.FC<OrderLookupFormProps> = ({ returnValue }) => {
  const c = useTranslations('FormCommon');
  const t = useTranslations('Orders');

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
    <form onSubmit={handleSubmit(onSubmit)} className="form-container-style">
      <div className="flex items-center gap-sm">
        <PencilPaper width={25} height={25} className="dark:fill-dark-primaryText" />
        <h4>{t('lookupForm.title')}</h4>
      </div>

      <h5 className="text-light-charcoal dark:text-dark-charcoal">{t('lookupForm.subtitle')}</h5>

      {(customerError || ordersError) && (
        <AlertMessage
          type="failure"
          title={t('lookupForm.error.title')}
          description={t('lookupForm.error.subtitle')}
        />
      )}

      <TextInput
        required
        type="email"
        {...register('email')}
        label={c('email.label')}
        disabled={customerPending || ordersPending}
        error={errors.email ? c(errors.email.message!) : undefined}
      />

      <Button
        pill
        size="lg"
        fullSized
        type="submit"
        color="primary"
        className="mt-md"
        disabled={customerPending || ordersPending}
      >
        {customerPending || ordersPending
          ? t('lookupForm.pending')
          : customerError || ordersError
            ? c('submit.sent')
            : c('submit.label')}
      </Button>
    </form>
  );
};

export default OrderLookupForm;
