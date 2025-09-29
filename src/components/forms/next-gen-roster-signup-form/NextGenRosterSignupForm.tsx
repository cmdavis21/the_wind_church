'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Button, Label, Radio } from 'flowbite-react';
import React, { useEffect, useRef } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Gender, NextGenRosterSignup } from '@/data/types';

import CirclePlus from '@/components/icons/circlePlus';
import PencilPaper from '@/components/icons/pencilPaper';
import Trash from '@/components/icons/trash';

import CircleCheck from '@/components/icons/circleCheck';
import SolidCircleX from '@/components/icons/solidCircleX';
import { useNextGenRosterSignup } from '@/data/services/sanity/mutations/next-gen-roster-signup';
import SelectInput from '../inputs/select-input/SelectInput';
import TextInput from '../inputs/text-input/TextInput';
import NextGenRosterSignupGuardiansForm from './next-gen-roster-signup-guardians-form/NextGenRosterSignupGuardiansForm';

const schema = yup.object().shape({
  children: yup
    .array()
    .of(
      yup
        .object()
        .shape({
          first_name: yup.string().required("Please enter your child's first name"),
          last_name: yup.string().required("Please enter your child's last name"),
          age: yup.string().required("Please enter your child's age"),
          grade: yup.string().required("Please enter your child's grade level"),
          gender: yup
            .string()
            .oneOf([Gender.MALE, Gender.FEMALE])
            .default(Gender.MALE)
            .required("Please select your child's gender"),
          hobbies: yup.string().required('Please list some favorite activities'),
          allergies: yup.string().optional(),
          guardians: yup
            .array()
            .of(
              yup.object().shape({
                first_name: yup.string().required("Please enter the guardian's first name"),
                last_name: yup.string().required("Please enter the guardian's last name"),
                email: yup.string().email().required("Please enter the guardian's email"),
                phone: yup.string().required("Please enter the guardian's phone number"),
                relationship_to_child: yup.string().required('Please enter the relationship'),
              })
            )
            .required()
            .min(1, 'At least one guardian is required'),
        })
        .required()
    )
    .required(),
});

const SCHOOL_GRADES = [
  'Infant/Toddler',
  'Preschool',
  'Kindergarten',
  '1st Grade',
  '2nd Grade',
  '3rd Grade',
  '4th Grade',
  '5th Grade',
  '6th Grade',
  '7th Grade',
  '8th Grade',
  '9th Grade (Freshman)',
  '10th Grade (Sophomore)',
  '11th Grade (Junior)',
  '12th Grade (Senior)',
];

const NextGenRosterSignupForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const { mutate: submitInquiry, isPending, isSuccess, isError } = useNextGenRosterSignup();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<NextGenRosterSignup>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: {
      children: [
        {
          first_name: '',
          last_name: '',
          age: '',
          grade: '',
          gender: Gender.MALE,
          hobbies: '',
          guardians: [
            {
              first_name: '',
              last_name: '',
              email: '',
              phone: '',
              relationship_to_child: '',
            },
          ],
        },
      ],
    },
  });

  const {
    fields: childrenFields,
    append: addChild,
    remove: removeChild,
  } = useFieldArray({
    control,
    name: 'children',
  });

  const onSubmit = (values: NextGenRosterSignup) => submitInquiry(values);

  useEffect(() => {
    if (formRef.current) {
      if (isSuccess || isError) {
        window.scrollTo({
          left: 0,
          top: formRef.current.offsetTop - 100,
          behavior: 'smooth',
        });
      }
    }
  }, [isSuccess, isError]);

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className="relative w-full border border-gray dark:bg-grayDark dark:border-grayDark dark:text-textInverse shadow-lg p-lg lg:p-xl flex flex-col gap-lg rounded-lg max-w-[1200px] mx-auto"
    >
      <div className="flex items-center gap-sm">
        <PencilPaper className="dark:fill-textInverse" />
        <h4>Next Gen Roster Signup</h4>
      </div>

      {isSuccess && (
        <Alert color="success" withBorderAccent>
          <span className="flex items-center gap-xs">
            <CircleCheck className="fill-success" />
            <span className="font-bold">Success!</span> We will contact you shortly. Thank you.
          </span>
        </Alert>
      )}

      {isError && (
        <Alert color="failure" withBorderAccent>
          <span className="flex items-center gap-xs">
            <SolidCircleX className="fill-error" />
            <span className="font-bold">Oh no!</span> There was an problem submitting your inquiry.
            Please try again later.
          </span>
        </Alert>
      )}

      {childrenFields.map((child, childIndex) => {
        return (
          <React.Fragment key={child.id}>
            <div className="flex flex-wrap items-center justify-between gap-sm">
              <h6>Child #{childIndex + 1}</h6>
              <button
                type="button"
                onClick={() => removeChild(childIndex)}
                className={`${
                  childIndex === 0 ? 'hidden' : ''
                } w-fit flex items-center gap-[4px] body-small text-error hover:underline`}
              >
                <Trash className="size-[12px] fill-error" /> Remove Child
              </button>
            </div>

            {/* Child Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
              <TextInput
                label="Child's First Name*"
                type="text"
                error={errors.children && errors.children[childIndex]?.first_name?.message}
                disabled={isPending || isSuccess}
                placeholder="Enter your child's first name"
                {...register(`children.${childIndex}.first_name`)}
              />
              <TextInput
                label="Child's Last Name*"
                type="text"
                error={errors.children && errors.children[childIndex]?.last_name?.message}
                disabled={isPending || isSuccess}
                placeholder="Enter your child's last name"
                {...register(`children.${childIndex}.last_name`)}
              />
            </div>

            {/* Child Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
              <SelectInput
                label="What age is your child?"
                disabled={isPending || isSuccess}
                error={errors.children && errors.children[childIndex]?.age?.message}
                {...register(`children.${childIndex}.age`)}
                options={[
                  { label: '6-11 months', value: '6-11 months' },
                  ...Array(16)
                    .fill(16)
                    .splice(1)
                    .map((_, age) => ({
                      label: age.toString(),
                      value: age.toString(),
                    })),
                ]}
              />
              <SelectInput
                label="What grade is your child?"
                disabled={isPending || isSuccess}
                error={errors.children && errors.children[childIndex]?.grade?.message}
                {...register(`children.${childIndex}.grade`)}
                options={SCHOOL_GRADES.map((grade) => ({
                  label: grade,
                  value: grade,
                }))}
              />
              <div className="flex flex-col gap-sm">
                <Label
                  htmlFor={`children.${childIndex}.gender`}
                  value="What gender is your child?"
                />
                <div className="flex items-center gap-md">
                  <div className="flex items-center gap-xs">
                    <Radio
                      value={Gender.MALE}
                      defaultChecked
                      disabled={isPending || isSuccess}
                      {...register(`children.${childIndex}.gender`)}
                    />
                    <Label htmlFor={`children.${childIndex}.gender`} value={Gender.MALE} />
                  </div>
                  <div className="flex items-center gap-xs">
                    <Radio
                      value={Gender.FEMALE}
                      disabled={isPending || isSuccess}
                      {...register(`children.${childIndex}.gender`)}
                    />
                    <Label htmlFor={`children.${childIndex}.gender`} value={Gender.FEMALE} />
                  </div>
                </div>
              </div>
            </div>

            {/* Child Hobbies/Allergies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
              <TextInput
                label="What are 1-3 Hobbies/Activities your child enjoys?"
                type="text"
                error={errors.children && errors.children[childIndex]?.hobbies?.message}
                disabled={isPending || isSuccess}
                placeholder="e.g., Painting, Soccer, Kickball"
                {...register(`children.${childIndex}.hobbies`)}
              />
              <TextInput
                label="List your child's allergies"
                type="text"
                error={errors.children && errors.children[childIndex]?.allergies?.message}
                disabled={isPending || isSuccess}
                placeholder="e.g., Peanuts, Pollen, Latex"
                {...register(`children.${childIndex}.allergies`)}
              />
            </div>

            {/* Guardian */}
            <NextGenRosterSignupGuardiansForm
              index={childIndex}
              control={control}
              register={register}
              errors={errors}
              isPending={isPending}
              isSuccess={isSuccess}
            />
          </React.Fragment>
        );
      })}

      {childrenFields.length < 6 && (
        <button
          type="button"
          onClick={() =>
            addChild({
              first_name: '',
              last_name: '',
              age: '',
              grade: '',
              gender: Gender.MALE,
              hobbies: '',
              allergies: '',
              guardians: [
                {
                  first_name: '',
                  last_name: '',
                  email: '',
                  phone: '',
                  relationship_to_child: '',
                },
              ],
            })
          }
          className="w-fit flex items-center gap-[4px] body-large hover:underline text-navyLight"
        >
          <CirclePlus className="size-[16px] fill-navyLight" />
          Add another child
        </button>
      )}

      <Button
        pill
        size="lg"
        type="submit"
        color="primary"
        disabled={isPending || isSuccess || isError}
        className="w-full md:max-w-[35%] mx-auto mt-md"
      >
        {isPending ? 'Submitting...' : isSuccess || isError ? 'Submitted' : 'Submit!'}
      </Button>
    </form>
  );
};

export default NextGenRosterSignupForm;
