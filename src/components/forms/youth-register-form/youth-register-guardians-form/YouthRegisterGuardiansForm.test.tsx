import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useForm } from 'react-hook-form';

import { YouthRegistrationInquiry } from '@/data/types';

import YouthRegisterGuardiansForm from './YouthRegisterGuardiansForm';

describe('YouthRegisterGuardiansForm', () => {
  const setup = () => {
    const { control, register, formState } = useForm<YouthRegistrationInquiry>({
      defaultValues: {
        children: [
          {
            guardians: [
              {
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                relationshipToChild: '',
              },
            ],
          },
        ],
      },
    });

    return render(
      <YouthRegisterGuardiansForm
        index={0}
        control={control}
        register={register}
        errors={formState.errors}
        isPending={false}
        isSuccess={false}
      />
    );
  };

  it('should render correctly', () => {
    setup();
    expect(screen.getByText('Guardian #1')).toBeInTheDocument();
    expect(screen.getByLabelText("Guardian's First Name*")).toBeInTheDocument();
    expect(screen.getByLabelText("Guardian's Last Name*")).toBeInTheDocument();
    expect(screen.getByLabelText("Guardian's Phone*")).toBeInTheDocument();
    expect(screen.getByLabelText("Guardian's Email*")).toBeInTheDocument();
    expect(screen.getByLabelText('Relationship to child*')).toBeInTheDocument();
  });

  it("should add a guardian when clicking 'Add another guardian'", () => {
    setup();
    const addButton = screen.getByText('Add another guardian');
    fireEvent.click(addButton);

    expect(screen.getByText('Guardian #2')).toBeInTheDocument();
  });

  it("should remove a guardian when clicking 'Remove Guardian'", () => {
    setup();
    const addButton = screen.getByText('Add another guardian');
    fireEvent.click(addButton);

    const removeButton = screen.getAllByText('Remove Guardian')[0];
    fireEvent.click(removeButton);

    expect(screen.queryByText('Guardian #2')).not.toBeInTheDocument();
  });
});
