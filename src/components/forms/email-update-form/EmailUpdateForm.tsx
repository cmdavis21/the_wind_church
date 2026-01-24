'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'flowbite-react';
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import PencilPaper from '@/components/icons/pencilPaper';
import { useUpdateCustomerEmail } from '@/data/services/shopify/admin/mutations/customer';
import AlertMessage from '../../alerts/alert-message/AlertMessage';
import TextInput from '../inputs/text-input/TextInput';

const schema = yup.object().shape({
  email: yup.string().required('Enter your email'),
});

interface EmailUpdateFormProps {
  customer_id: string;
  current_email: string;
}

const EmailUpdateForm: React.FC<EmailUpdateFormProps> = ({ customer_id, current_email }) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { mutate: updateEmail, isPending, isSuccess, isError } = useUpdateCustomerEmail();

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: {
      email: current_email,
    },
  });

  const formValues = watch();

  const onSubmit = (values: { email: string }) => {
    updateEmail({
      id: customer_id,
      email: values.email,
    });
  };

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
      className="relative w-full h-fit border border-light-gray dark:bg-dark-gray dark:border-dark-gray shadow-lg p-lg lg:p-xl flex flex-col gap-lg rounded-lg max-w-[1200px] mx-auto"
    >
      <div className="flex items-center gap-sm">
        <PencilPaper className="dark:fill-dark-primaryText" />
        <h4>Email update</h4>
      </div>

      <h5 className="text-light-charcoal dark:text-dark-charcoal">
        Email required to keep track of orders
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

      <TextInput
        type="email"
        defaultValue={current_email}
        error={errors.email?.message}
        disabled={isPending || isSuccess}
        {...register('email')}
      />

      <Button
        pill
        size="lg"
        type="submit"
        color="primary"
        disabled={formValues.email === current_email || isPending || isSuccess || isError}
        className="w-full md:max-w-[35%] mx-auto mt-md"
      >
        {isPending ? 'Submitting...' : 'Update'}
      </Button>
    </form>
  );
};

export default EmailUpdateForm;
