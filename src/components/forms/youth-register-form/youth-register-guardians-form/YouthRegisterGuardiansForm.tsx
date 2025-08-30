"use client";

import React from "react";
import {
  Control,
  FieldErrors,
  useFieldArray,
  UseFormRegister,
} from "react-hook-form";


import { YouthRegistrationInquiry } from "@/data/types";
import Trash from "@/components/icons/trash";
import CirclePlus from "@/components/icons/circlePlus";

import SelectInput from "../../inputs/select-input/SelectInput";
import TextInput from "../../inputs/text-input/TextInput";

const RELATIONSHIP_TO_CHILD = [
  "Mother",
  "Father",
  "Stepmother",
  "Stepfather",
  "Grandmother",
  "Grandfather",
  "Aunt",
  "Uncle",
  "Legal Guardian",
  "Foster Parent",
  "Older Sibling",
  "Other",
];

interface YouthRegisterGuardiansFormProps {
  index: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<YouthRegistrationInquiry, any>;
  register: UseFormRegister<YouthRegistrationInquiry>;
  errors: FieldErrors<YouthRegistrationInquiry>;
  isPending: boolean;
  isSuccess: boolean;
}

const YouthRegisterGuardiansForm: React.FC<YouthRegisterGuardiansFormProps> = ({
  index,
  control,
  register,
  errors,
  isPending,
  isSuccess,
}) => {
  const {
    fields: guardianFields,
    append: addGuardian,
    remove: removeGuardian,
  } = useFieldArray({
    control,
    name: `children.${index}.guardians`,
  });

  return (
    <div className="flex flex-col gap-lg rounded-lg p-sm md:p-lg bg-lightGray/80 dark:bg-softGray dark:border dark:border-softCharcoal">
      {guardianFields.map((guardian, guardianIndex) => (
        <React.Fragment key={guardian.id}>
          <div className="flex flex-wrap items-center justify-between gap-sm">
            <h6>Guardian #{guardianIndex + 1}</h6>
            <button
              type="button"
              onClick={() => removeGuardian(guardianIndex)}
              className={`${
                guardianIndex === 0 ? "hidden" : ""
              } w-fit flex items-center gap-[4px] body-small text-red dark:text-softRed hover:underline`}
            >
              <Trash className="size-[12px] fill-red dark:fill-softRed" />{" "}
              Remove Guardian
            </button>
          </div>

          {/* Guardian Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
            <TextInput
              label="Guardian's First Name*"
              type="text"
              error={
                errors.children &&
                errors.children[index]?.guardians &&
                errors.children[index]?.guardians[guardianIndex]?.first_name
                  ?.message
              }
              disabled={isPending || isSuccess}
              placeholder="Enter the guardian's first name"
              {...register(
                `children.${index}.guardians.${guardianIndex}.first_name`
              )}
            />
            <TextInput
              label="Guardian's Last Name*"
              type="text"
              error={
                errors.children &&
                errors.children[index]?.guardians &&
                errors.children[index]?.guardians[guardianIndex]?.last_name
                  ?.message
              }
              disabled={isPending || isSuccess}
              placeholder="Enter the guardian's last name"
              {...register(
                `children.${index}.guardians.${guardianIndex}.last_name`
              )}
            />
          </div>

          {/* Guardian Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
            <TextInput
              label="Guardian's Phone*"
              type="tel"
              error={
                errors.children &&
                errors.children[index]?.guardians &&
                errors.children[index]?.guardians[guardianIndex]?.phone?.message
              }
              disabled={isPending || isSuccess}
              placeholder="Enter the guardian's phone"
              {...register(
                `children.${index}.guardians.${guardianIndex}.phone`
              )}
            />
            <TextInput
              label="Guardian's Email*"
              type="email"
              error={
                errors.children &&
                errors.children[index]?.guardians &&
                errors.children[index]?.guardians[guardianIndex]?.email?.message
              }
              disabled={isPending || isSuccess}
              placeholder="Enter the guardian's email"
              {...register(
                `children.${index}.guardians.${guardianIndex}.email`
              )}
            />
            <SelectInput
              label="Relationship to child*"
              disabled={isPending || isSuccess}
              error={
                errors.children &&
                errors.children[index]?.guardians &&
                errors.children[index]?.guardians[guardianIndex]
                  ?.relationship_to_child?.message
              }
              {...register(
                `children.${index}.guardians.${guardianIndex}.relationship_to_child`
              )}
              options={RELATIONSHIP_TO_CHILD.map((relation) => ({
                label: relation,
                value: relation,
              }))}
            />
          </div>
        </React.Fragment>
      ))}

      <button
        type="button"
        onClick={() =>
          addGuardian({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            relationship_to_child: "",
          })
        }
        className="w-fit flex items-center gap-[4px] body-large hover:underline text-blue dark:text-softBlue"
      >
        <CirclePlus className="size-[16px] fill-blue dark:fill-softBlue" />
        Add another guardian
      </button>
    </div>
  );
};

export default YouthRegisterGuardiansForm;
