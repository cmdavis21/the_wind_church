import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import GiftAssessmentReflectionQuestionsForm from './GiftAssessmentReflectionQuestionsForm';

describe('GiftAssessmentReflectionQuestionsForm', () => {
  const mockResponses = jest.fn();

  beforeEach(() => {
    mockResponses.mockClear();
  });

  it('renders the form correctly', () => {
    render(<GiftAssessmentReflectionQuestionsForm responses={mockResponses} />);

    expect(
      screen.getByText(/1. What ministries are you now performing/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/2. Are there any of these ministries/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/3. Is your vocational status lay or clergy/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /save your answers/i })
    ).toBeInTheDocument();
  });

  it('shows validation errors when submitting empty form', async () => {
    render(<GiftAssessmentReflectionQuestionsForm responses={mockResponses} />);
    const submitButton = screen.getByRole('button', {
      name: /save your answers/i,
    });

    await userEvent.click(submitButton);

    expect(
      await screen.findByText(
        'Please answer the question to the best of your ability.'
      )
    ).toBeInTheDocument();
  });

  it('submits form with valid inputs', async () => {
    render(<GiftAssessmentReflectionQuestionsForm responses={mockResponses} />);

    const ministriesInput = screen.getByPlaceholderText(
      'Enter your answer here'
    );
    const changeInput = screen.getAllByPlaceholderText(
      'Enter your answer here'
    )[1];
    const layRadio = screen.getByRole('radio', { name: /Lay/i });
    const submitButton = screen.getByRole('button', {
      name: /save your answers/i,
    });

    await userEvent.type(ministriesInput, 'Teaching and Worship');
    await userEvent.type(changeInput, 'I might want to focus on Worship');
    await userEvent.click(layRadio);
    await userEvent.click(submitButton);

    expect(mockResponses).toHaveBeenCalledWith({
      ministriesInvolvedIn: 'Teaching and Worship',
      changeInMinistry: 'I might want to focus on Worship',
      layOrClergy: 'Lay',
    });
  });

  it('disables inputs when `disable` prop is true', () => {
    render(
      <GiftAssessmentReflectionQuestionsForm
        responses={mockResponses}
        disable
      />
    );

    expect(
      screen.getByPlaceholderText('Enter your answer here')
    ).toBeDisabled();
    expect(screen.getByRole('radio', { name: /Lay/i })).toBeDisabled();
    expect(
      screen.getByRole('button', { name: /save your answers/i })
    ).toBeDisabled();
  });
});
