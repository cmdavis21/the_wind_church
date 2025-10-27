import { useCreateContactSignup } from '@/data/services/sanity/mutations/contact-signup';
import { FullContact } from '@/data/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextInput } from 'flowbite-react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import AlertMessage from '../inputs/alert-message/AlertMessage';

const schema = yup.object().shape({
  first_name: yup.string().required('Enter your first name'),
  last_name: yup.string().required('Enter your last name'),
  phone: yup.string().required('Enter your email'),
  email: yup.string().required('Enter your email'),
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
      {isSuccess && <AlertMessage type="success" title={t('form.success')} />}

      {isError && <AlertMessage type="failure" title={t('form.error')} />}

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
            size="sm"
            fullSized
            type="submit"
            color="primary"
            disabled={isPending || isSuccess}
            className="whitespace-nowrap"
          >
            {isPending ? t('form.submitting') : t('form.join')}
          </Button>
        </>
      )}
    </form>
  );
};

export default FooterContactForm;
