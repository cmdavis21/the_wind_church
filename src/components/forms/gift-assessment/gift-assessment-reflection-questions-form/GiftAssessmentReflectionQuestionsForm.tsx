import { yupResolver } from "@hookform/resolvers/yup";
import { Label, Radio, Button } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { GiftAssessmentReflectionQuestions } from "@/data/types";

import TextareaInput from "../../inputs/textarea-input/TextareaInput";


const schema = yup.object().shape({
  ministries_involved_in: yup
    .string()
    .required("Please answer the question to the best of your ability."),
  change_in_ministry: yup
    .string()
    .required("Please answer the question to the best of your ability."),
  lay_or_clergy: yup
    .string()
    .oneOf(["Lay", "Clergy"])
    .required("Please answer the question to the best of your ability."),
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
    formState: { errors },
    handleSubmit,
  } = useForm<GiftAssessmentReflectionQuestions>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: GiftAssessmentReflectionQuestions) =>
    responses(values);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-lg">
      <TextareaInput
        label="1. What ministries are you now performing (formally or informally) in the Body?"
        disabled={disable}
        error={errors.ministries_involved_in?.message}
        placeholder="Enter your answer here"
        {...register("ministries_involved_in")}
      />

      <TextareaInput
        label="2. Are there any of these ministries that you are not especially gifted for? God may be calling you to consider changes."
        disabled={disable}
        error={errors.change_in_ministry?.message}
        placeholder="Enter your answer here"
        {...register("change_in_ministry")}
      />

      <div className="space-y-sm">
        <Label
          htmlFor="lay_or_clergy"
          className="text-lg"
          value="3. Is your vocational status lay or clergy?"
        />
        <div className="flex flex-wrap gap-md">
          <div className="flex gap-sm items-center text-lg">
            <Radio
              value="Lay"
              {...register("lay_or_clergy")}
              disabled={disable}
            />
            Lay
          </div>
          <div className="flex gap-sm items-center text-lg">
            <Radio
              value="Clergy"
              {...register("lay_or_clergy")}
              disabled={disable}
            />
            Clergy
          </div>
        </div>
        {errors.lay_or_clergy && (
          <p className="ml-2 text-sm text-red">
            {errors.lay_or_clergy.message}
          </p>
        )}
      </div>

      <Button
        pill
        size="lg"
        type="submit"
        color="yellow"
        disabled={disable}
        className="w-full md:max-w-[35%] mx-auto mt-md"
      >
        Save your answers
      </Button>
    </form>
  );
};

export default GiftAssessmentReflectionQuestionsForm;
