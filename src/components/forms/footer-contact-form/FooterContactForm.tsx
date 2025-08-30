import { Button, TextInput } from 'flowbite-react';
import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { FullContact } from '@/data/types';
import FormSuccessErrorMessage from '../inputs/form-success-error-message/FormSuccessErrorMessage';
import { useCreateContactSignup } from '@/data/services/sanity/mutations/contact-signup';

const schema = yup.object().shape({
  first_name: yup.string().required('Please enter your first name'),
  last_name: yup.string().required('Please enter your last name'),
  phone: yup.string().required('Please enter your email'),
  email: yup.string().required('Please enter your email'),
});

const FooterContactForm = () => {
  const t = useTranslations('Footer');

  const { mutate: signupUser, isPending, isSuccess, isError, isIdle } = useCreateContactSignup();

  const { register, handleSubmit } = useForm<FullContact>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: FullContact) => signupUser(values);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative flex flex-col gap-sm">
      {isSuccess && <FormSuccessErrorMessage dark error={false} message={t('form.success')} />}

      {isError && <FormSuccessErrorMessage dark error={true} message={t('form.error')} />}

      {isIdle && (
        <>
          <TextInput
            type="text"
            disabled={isPending || isSuccess}
            placeholder={t('form.firstName')}
            {...register('first_name')}
          />

          <TextInput
            type="text"
            disabled={isPending || isSuccess}
            placeholder={t('form.lastName')}
            {...register('last_name')}
          />

          <TextInput
            type="tel"
            disabled={isPending || isSuccess}
            placeholder={t('form.phone')}
            {...register('phone')}
            minLength={10}
            maxLength={11}
          />

          <TextInput
            type="email"
            disabled={isPending || isSuccess}
            placeholder={t('form.email')}
            {...register('email')}
          />

          <Button
            pill
            size="md"
            type="submit"
            color="clear_white"
            disabled={isPending || isSuccess}
            className="w-full md:w-fit whitespace-nowrap"
          >
            {isPending ? t('form.submitting') : t('form.join')}
          </Button>
        </>
      )}
    </form>
  );
};

export default FooterContactForm;
