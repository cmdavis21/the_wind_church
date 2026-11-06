'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'flowbite-react';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import PencilPaper from '@/components/icons/pencilPaper';
import { useUpdateCustomerEmail } from '@/data/client/shopify/customer';
import { useScrollToOnStatus } from '@/data/client/use-scroll-to-on-status';
import { isValidEmail } from '@/data/utils';
import { useTranslations } from 'next-intl';
import AlertMessage from '../../alerts/alert-message/AlertMessage';
import TextInput from '../inputs/text-input/TextInput';

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('email.message')
    .test('email.test', (value) => isValidEmail(value)),
});

interface EmailUpdateFormProps {
  customer_id: string;
  current_email: string;
}

const EmailUpdateForm: React.FC<EmailUpdateFormProps> = ({ customer_id, current_email }) => {
  const c = useTranslations('FormCommon');
  const t = useTranslations('Orders');

  const { mutate: updateEmail, isPending, isSuccess, isError } = useUpdateCustomerEmail();

  const formRef = useRef<HTMLFormElement | null>(null);
  useScrollToOnStatus(formRef, isSuccess, isError);

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: { email: current_email },
  });

  const formValues = watch();

  const onSubmit = (values: { email: string }) => {
    updateEmail({ id: customer_id, email: values.email });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="form-container-style h-fit">
      <div className="flex items-center gap-sm">
        <PencilPaper width={25} height={25} className="dark:fill-dark-primaryText" />
        <h4>{t('emailForm.title')}</h4>
      </div>

      <h5 className="text-light-charcoal dark:text-dark-charcoal">{t('emailForm.subtitle')}</h5>

      {isSuccess && (
        <AlertMessage
          type="success"
          title={c('success.title')}
          description={t('emailForm.success.subtitle')}
        />
      )}

      {isError && (
        <AlertMessage
          type="failure"
          title={c('error.title')}
          description={t('emailForm.error.subtitle')}
        />
      )}

      <TextInput
        required
        type="email"
        {...register('email')}
        label={c('email.label')}
        defaultValue={current_email}
        disabled={isPending || isSuccess}
        error={errors.email ? c(errors.email.message!) : undefined}
      />

      <Button
        pill
        size="lg"
        type="submit"
        color="primary"
        disabled={formValues.email === current_email || isPending || isSuccess || isError}
        className="w-full md:max-w-[35%] mx-auto mt-md"
      >
        {isPending ? c('submit.pending') : t('emailForm.update')}
      </Button>
    </form>
  );
};

export default EmailUpdateForm;
