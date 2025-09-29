import CircleCheck from '@/components/icons/circleCheck';
import SolidCircleX from '@/components/icons/solidCircleX';
import { useCreateContactSignup } from '@/data/services/sanity/mutations/contact-signup';
import { FullContact } from '@/data/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Button, TextInput } from 'flowbite-react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

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
      {isSuccess && (
        <Alert color="success" withBorderAccent>
          <span className="flex items-center gap-xs">
            <CircleCheck className="fill-success" />
            {t('form.success')}
          </span>
        </Alert>
      )}

      {isError && (
        <Alert color="failure" withBorderAccent>
          <span className="flex items-center gap-xs">
            <SolidCircleX className="fill-error" />
            {t('form.error')}
          </span>
        </Alert>
      )}

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
