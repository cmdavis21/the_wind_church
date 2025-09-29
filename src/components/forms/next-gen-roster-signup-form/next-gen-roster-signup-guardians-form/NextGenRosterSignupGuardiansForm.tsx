'use client';

import CirclePlus from '@/components/icons/circlePlus';
import Trash from '@/components/icons/trash';
import { NextGenRosterSignup } from '@/data/types';
import React from 'react';
import { Control, FieldErrors, useFieldArray, UseFormRegister } from 'react-hook-form';
import SelectInput from '../../inputs/select-input/SelectInput';
import TextInput from '../../inputs/text-input/TextInput';

const RELATIONSHIP_TO_CHILD = [
  'Mother',
  'Father',
  'Stepmother',
  'Stepfather',
  'Grandmother',
  'Grandfather',
  'Aunt',
  'Uncle',
  'Legal Guardian',
  'Foster Parent',
  'Older Sibling',
  'Other',
];

interface NextGenRosterSignupGuardiansFormProps {
  index: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<NextGenRosterSignup, any>;
  register: UseFormRegister<NextGenRosterSignup>;
  errors: FieldErrors<NextGenRosterSignup>;
  isPending: boolean;
  isSuccess: boolean;
}

const NextGenRosterSignupGuardiansForm: React.FC<NextGenRosterSignupGuardiansFormProps> = ({
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
    <div className="flex flex-col gap-lg rounded-lg p-sm md:p-lg bg-gray dark:bg-grayDark dark:border dark:border-gray">
      {guardianFields.map((guardian, guardianIndex) => (
        <React.Fragment key={guardian.id}>
          <div className="flex flex-wrap items-center justify-between gap-sm">
            <h6>Guardian #{guardianIndex + 1}</h6>
            <button
              type="button"
              onClick={() => removeGuardian(guardianIndex)}
              className={`${
                guardianIndex === 0 ? 'hidden' : ''
              } w-fit flex items-center gap-[4px] body-small text-error hover:underline`}
            >
              <Trash className="size-[12px] fill-error" /> Remove Guardian
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
                errors.children[index]?.guardians[guardianIndex]?.first_name?.message
              }
              disabled={isPending || isSuccess}
              placeholder="Enter the guardian's first name"
              {...register(`children.${index}.guardians.${guardianIndex}.first_name`)}
            />
            <TextInput
              label="Guardian's Last Name*"
              type="text"
              error={
                errors.children &&
                errors.children[index]?.guardians &&
                errors.children[index]?.guardians[guardianIndex]?.last_name?.message
              }
              disabled={isPending || isSuccess}
              placeholder="Enter the guardian's last name"
              {...register(`children.${index}.guardians.${guardianIndex}.last_name`)}
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
              {...register(`children.${index}.guardians.${guardianIndex}.phone`)}
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
              {...register(`children.${index}.guardians.${guardianIndex}.email`)}
            />
            <SelectInput
              label="Relationship to child*"
              disabled={isPending || isSuccess}
              error={
                errors.children &&
                errors.children[index]?.guardians &&
                errors.children[index]?.guardians[guardianIndex]?.relationship_to_child?.message
              }
              {...register(`children.${index}.guardians.${guardianIndex}.relationship_to_child`)}
              options={RELATIONSHIP_TO_CHILD.map((relation) => ({
                label: relation,
                value: relation,
              }))}
            />
          </div>
        </React.Fragment>
      ))}

      {guardianFields.length < 3 && (
        <button
          type="button"
          onClick={() =>
            addGuardian({
              first_name: '',
              last_name: '',
              email: '',
              phone: '',
              relationship_to_child: '',
            })
          }
          className="w-fit flex items-center gap-[4px] body-large hover:underline text-navyLight"
        >
          <CirclePlus className="size-[16px] fill-navyLight" />
          Add another guardian
        </button>
      )}
    </div>
  );
};

export default NextGenRosterSignupGuardiansForm;
