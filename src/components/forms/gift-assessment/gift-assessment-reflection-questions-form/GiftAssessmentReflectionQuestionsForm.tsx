import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'flowbite-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { GiftAssessmentReflectionQuestions } from '@/data/types';

import { useTranslations } from 'next-intl';
import RadioGroup from '../../inputs/radio-group/RadioGroup';
import TextareaInput from '../../inputs/textarea-input/TextareaInput';

const schema = yup.object().shape({
  ministries_involved_in: yup.string().max(750, 'test').required('message'),
  change_in_ministry: yup.string().max(750, 'test').required('message'),
  lay_or_clergy: yup.string().required('message'),
});

interface GiftAssessmentReflectionQuestionsFormProps {
  responses: (data: GiftAssessmentReflectionQuestions) => void;
  disable?: boolean;
}

const GiftAssessmentReflectionQuestionsForm: React.FC<
  GiftAssessmentReflectionQuestionsFormProps
> = ({ responses, disable }) => {
  const t = useTranslations('GiftAssessment.reflection.form');

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<GiftAssessmentReflectionQuestions>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: GiftAssessmentReflectionQuestions) => responses(values);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-lg">
      <TextareaInput
        required
        maxLength={750}
        disabled={disable}
        label={t('questions.0')}
        placeholder={t('placeholder')}
        {...register('ministries_involved_in')}
        error={
          errors.ministries_involved_in ? t(errors.ministries_involved_in.message!) : undefined
        }
      />

      <TextareaInput
        required
        maxLength={750}
        disabled={disable}
        label={t('questions.1')}
        placeholder={t('placeholder')}
        {...register('change_in_ministry')}
        error={errors.change_in_ministry ? t(errors.change_in_ministry.message!) : undefined}
      />

      <RadioGroup
        disabled={disable}
        name="lay_or_clergy"
        label={t('questions.2')}
        options={[
          { value: t('options.0'), label: t('options.0') },
          { value: t('options.1'), label: t('options.1') },
        ]}
        onChange={(val) => setValue('lay_or_clergy', val)}
        error={errors.lay_or_clergy ? t(errors.lay_or_clergy.message!) : undefined}
      />

      <Button
        pill
        size="lg"
        type="submit"
        color="primary"
        disabled={disable}
        className="w-full md:max-w-[35%] mx-auto mt-md"
      >
        {t('save')}
      </Button>
    </form>
  );
};

export default GiftAssessmentReflectionQuestionsForm;
