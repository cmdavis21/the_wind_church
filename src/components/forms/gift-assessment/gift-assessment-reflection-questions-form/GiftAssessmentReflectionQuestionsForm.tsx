import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'flowbite-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { GiftAssessmentReflectionQuestions } from '@/data/types';

import RadioGroup from '../../inputs/radio-group/RadioGroup';
import TextareaInput from '../../inputs/textarea-input/TextareaInput';

const schema = yup.object().shape({
  ministries_involved_in: yup
    .string()
    .required('Please answer the question to the best of your ability.'),
  change_in_ministry: yup
    .string()
    .required('Please answer the question to the best of your ability.'),
  lay_or_clergy: yup
    .string()
    .oneOf(['Lay', 'Clergy'])
    .required('Please answer the question to the best of your ability.'),
});

interface GiftAssessmentReflectionQuestionsFormProps {
  responses: (data: GiftAssessmentReflectionQuestions) => void;
  disable?: boolean;
}

const GiftAssessmentReflectionQuestionsForm: React.FC<
  GiftAssessmentReflectionQuestionsFormProps
> = ({ responses, disable }) => {
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
        label="1. What ministries are you now performing (formally or informally) in the Body?"
        maxLength={750}
        disabled={disable}
        placeholder="Enter your answer here"
        {...register('ministries_involved_in')}
        error={errors.ministries_involved_in?.message}
      />

      <TextareaInput
        label="2. Are there any of these ministries that you are not especially gifted for? God may be calling you to consider changes."
        maxLength={750}
        disabled={disable}
        placeholder="Enter your answer here"
        {...register('change_in_ministry')}
        error={errors.change_in_ministry?.message}
      />

      <RadioGroup
        name="lay_or_clergy"
        disabled={disable}
        label="3. Is your vocational status lay or clergy?"
        options={[
          { value: 'Clergy', label: 'Clergy' },
          { value: 'Lay', label: 'Lay' },
        ]}
        onChange={(val) => setValue('lay_or_clergy', val as 'Lay' | 'Clergy')}
        error={errors.lay_or_clergy?.message}
      />

      <Button
        pill
        size="lg"
        type="submit"
        color="primary"
        disabled={disable}
        className="w-full md:max-w-[35%] mx-auto mt-md"
      >
        Save your answers
      </Button>
    </form>
  );
};

export default GiftAssessmentReflectionQuestionsForm;
