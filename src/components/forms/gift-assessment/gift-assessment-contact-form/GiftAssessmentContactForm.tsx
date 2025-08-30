import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { FullContact } from "@/data/types";

import FormSuccessErrorMessage from "../../inputs/form-success-error-message/FormSuccessErrorMessage";
import TextInput from "../../inputs/text-input/TextInput";


const schema = yup.object().shape({
  first_name: yup.string().required("Please enter your first name"),
  last_name: yup.string().required("Please enter your last name"),
  phone: yup.string().required("Please enter your phone"),
  email: yup.string().email().required("Please enter your email"),
});

interface GiftAssessmentContactFormProps {
  contact: (data: FullContact) => void;
  isPending?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
}

const GiftAssessmentContactForm: React.FC<GiftAssessmentContactFormProps> = ({
  contact,
  isPending,
  isSuccess,
  isError,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FullContact>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: FullContact) => contact(values);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative flex flex-col gap-lg"
    >
      {isSuccess && (
        <FormSuccessErrorMessage
          error={false}
          message="Thank you for sharing your results with us. We'll talk soon!"
        />
      )}

      {isError && (
        <FormSuccessErrorMessage
          error={true}
          message="There was an error submitting your results. Please try again again later or download your results."
        />
      )}

      {/* names */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
          label="First Name*"
          type="text"
          error={errors.first_name?.message}
          disabled={isPending || isSuccess}
          placeholder="Enter your first name"
          {...register("first_name")}
        />
        <TextInput
          label="Last Name*"
          type="text"
          error={errors.last_name?.message}
          disabled={isPending || isSuccess}
          placeholder="Enter your last name"
          {...register("last_name")}
        />
      </div>

      {/* contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <TextInput
          label="Phone*"
          type="tel"
          error={errors.phone?.message}
          disabled={isPending || isSuccess}
          placeholder="Enter your phone number"
          {...register("phone")}
        />
        <TextInput
          label="Email*"
          type="email"
          error={errors.email?.message}
          disabled={isPending || isSuccess}
          placeholder="Enter your email"
          {...register("email")}
        />
      </div>

      <Button
        pill
        size="lg"
        type="submit"
        color="yellow"
        disabled={isSuccess || isError || isPending}
        className="w-full md:max-w-[35%] mx-auto mt-md"
      >
        {isPending ? "Submitting..." : "Submit your results"}
      </Button>
    </form>
  );
};

export default GiftAssessmentContactForm;
