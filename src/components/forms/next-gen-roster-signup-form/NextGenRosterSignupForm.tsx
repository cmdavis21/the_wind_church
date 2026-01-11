'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'flowbite-react';
import React, { useEffect, useRef } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Gender, NextGenRosterSignup } from '@/data/types';

import CirclePlus from '@/components/icons/circle-plus';
import PencilPaper from '@/components/icons/pencilPaper';
import Trash from '@/components/icons/trash';

import { useNextGenRosterSignup } from '@/data/services/sanity/mutations/next-gen-roster-signup';
import { isValidEmail, isValidPhone } from '@/data/utils';
import AlertMessage from '../inputs/alert-message/AlertMessage';
import RadioGroup from '../inputs/radio-group/RadioGroup';
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
          first_name: yup.string().required("Enter your child's first name"),
          last_name: yup.string().required("Enter your child's last name"),
          age: yup.string().required("Enter your child's age"),
          grade: yup.string().required("Enter your child's grade level"),
          gender: yup
            .string()
            .oneOf([Gender.MALE, Gender.FEMALE])
            .default(Gender.MALE)
            .required("Select your child's gender"),
          hobbies: yup.string().required("List three of your child's favorite activities"),
          allergies: yup.string().optional(),
          guardians: yup
            .array()
            .of(
              yup.object().shape({
                first_name: yup.string().required("Enter the guardian's first name"),
                last_name: yup.string().required("Enter the guardian's last name"),
                email: yup
                  .string()
                  .email()
                  .required("Enter the guardian's email")
                  .test('Needs to be formatted like an email', (value) => isValidEmail(value)),
                phone: yup
                  .string()
                  .min(10)
                  .max(11)
                  .required("Enter the guardian's phone number")
                  .test('Include 10 to 11 digit valid phone number', (val) => isValidPhone(val)),
                relationship_to_child: yup.string().required('Enter the relationship'),
              })
            )
            .required()
            .min(1, 'At least one guardian is required'),
        })
        .required('Add at least one guardian of this child')
    )
    .required('Add at least one child'),
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
    control,
    register,
    setValue,
    handleSubmit,
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
      className="relative w-full border border-light-gray dark:bg-dark-gray dark:border-dark-gray shadow-lg p-lg lg:p-xl flex flex-col gap-lg rounded-lg max-w-[1200px] mx-auto"
    >
      <div className="flex items-center gap-sm">
        <PencilPaper className="dark:fill-dark-primaryText" />
        <h4>Next Gen Roster Signup</h4>
      </div>

      {isSuccess && (
        <AlertMessage
          type="success"
          title="Success!"
          description="We will contact you shortly. Thank you."
        />
      )}

      {isError && (
        <AlertMessage
          type="failure"
          title="Oh no!"
          description="There was an problem submitting your inquiry. Please try again later."
        />
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
                type="text"
                label="Child's First Name*"
                disabled={isPending || isSuccess}
                {...register(`children.${childIndex}.first_name`)}
                error={
                  errors.children ? errors.children[childIndex]?.first_name?.message : undefined
                }
              />
              <TextInput
                type="text"
                label="Child's Last Name*"
                disabled={isPending || isSuccess}
                {...register(`children.${childIndex}.last_name`)}
                error={
                  errors.children ? errors.children[childIndex]?.last_name?.message : undefined
                }
              />
            </div>

            {/* Child Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
              <SelectInput
                label="What age is your child?"
                disabled={isPending || isSuccess}
                {...register(`children.${childIndex}.age`)}
                error={errors.children ? errors.children[childIndex]?.age?.message : undefined}
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
                {...register(`children.${childIndex}.grade`)}
                options={SCHOOL_GRADES.map((grade) => ({
                  label: grade,
                  value: grade,
                }))}
                error={errors.children ? errors.children[childIndex]?.grade?.message : undefined}
              />
              <RadioGroup
                name="request_email_back"
                defaultValue={Gender.MALE}
                disabled={isPending || isSuccess}
                label="What gender is your child?"
                options={[
                  { value: Gender.MALE, label: Gender.MALE },
                  { value: Gender.FEMALE, label: Gender.FEMALE },
                ]}
                onChange={(val) => setValue(`children.${childIndex}.gender`, val as Gender)}
                error={errors.children ? errors.children[childIndex]?.gender?.message : undefined}
              />
            </div>

            {/* Child Hobbies/Allergies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
              <TextInput
                type="text"
                disabled={isPending || isSuccess}
                placeholder="e.g., Painting, Soccer, Kickball"
                {...register(`children.${childIndex}.hobbies`)}
                label="What are 1-3 Hobbies/Activities your child enjoys?"
                error={errors.children ? errors.children[childIndex]?.hobbies?.message : undefined}
              />
              <TextInput
                type="text"
                label="List your child's allergies"
                disabled={isPending || isSuccess}
                placeholder="e.g., Peanuts, Pollen, Latex"
                {...register(`children.${childIndex}.allergies`)}
                error={
                  errors.children ? errors.children[childIndex]?.allergies?.message : undefined
                }
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
          className="w-fit flex items-center gap-[4px] body-large hover:underline text-light-navyLight"
        >
          <CirclePlus className="size-[16px] fill-light-navyLight" />
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
