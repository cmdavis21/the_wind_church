import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { GiftAssessmentQuestion, GiftAssessmentDefinition } from '@/data/types';

import GiftAssessmentQuiz from './GiftAssessmentQuiz';

const mockQuestions: GiftAssessmentQuestion[] = [
  { id: 1, question: 'Do you enjoy helping others?', gift: 'Service' },
  { id: 2, question: 'Are you a natural leader?', gift: 'Leadership' },
];

const mockDefinitions: GiftAssessmentDefinition[] = [
  { gift: 'Service', definition: 'Helping others in need.', scriptures: [''] },
  {
    gift: 'Leadership',
    definition: 'Leading with wisdom and direction.',
    scriptures: [''],
  },
];

describe('GiftAssessmentQuiz Component', () => {
  const mockDominateGifts = jest.fn();
  const mockSubordinateGifts = jest.fn();
  const mockDominateGiftNamesList = jest.fn();
  const mockSubordinateGiftNamesList = jest.fn();
  const mockShowQuizResults = jest.fn();

  it('renders the quiz questions', () => {
    render(
      <GiftAssessmentQuiz
        questions={mockQuestions}
        definitions={mockDefinitions}
        dominateGifts={mockDominateGifts}
        subordinateGifts={mockSubordinateGifts}
        dominateGiftNamesList={mockDominateGiftNamesList}
        subordinateGiftNamesList={mockSubordinateGiftNamesList}
        showQuizResults={mockShowQuizResults}
        disable={false}
      />
    );

    expect(
      screen.getByText('Do you enjoy helping others?')
    ).toBeInTheDocument();
    expect(screen.getByText('Are you a natural leader?'));
  });

  it('allows users to select answers', async () => {
    render(
      <GiftAssessmentQuiz
        questions={mockQuestions}
        definitions={mockDefinitions}
        dominateGifts={mockDominateGifts}
        subordinateGifts={mockSubordinateGifts}
        dominateGiftNamesList={mockDominateGiftNamesList}
        subordinateGiftNamesList={mockSubordinateGiftNamesList}
        showQuizResults={mockShowQuizResults}
        disable={false}
      />
    );

    const radioButton = screen.getAllByRole('radio')[0];
    fireEvent.click(radioButton);
    expect(radioButton).toBeChecked();
  });

  it('displays an error message when submitting without answering all questions', async () => {
    render(
      <GiftAssessmentQuiz
        questions={mockQuestions}
        definitions={mockDefinitions}
        dominateGifts={mockDominateGifts}
        subordinateGifts={mockSubordinateGifts}
        dominateGiftNamesList={mockDominateGiftNamesList}
        subordinateGiftNamesList={mockSubordinateGiftNamesList}
        showQuizResults={mockShowQuizResults}
        disable={false}
      />
    );

    const submitButton = screen.getByText('Submit Quiz');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText('Please select an answer for the question.')
      ).toBeInTheDocument();
    });
  });

  it('submits answers correctly and calls results functions', async () => {
    render(
      <GiftAssessmentQuiz
        questions={mockQuestions}
        definitions={mockDefinitions}
        dominateGifts={mockDominateGifts}
        subordinateGifts={mockSubordinateGifts}
        dominateGiftNamesList={mockDominateGiftNamesList}
        subordinateGiftNamesList={mockSubordinateGiftNamesList}
        showQuizResults={mockShowQuizResults}
        disable={false}
      />
    );

    const radioButtons = screen.getAllByRole('radio');
    fireEvent.click(radioButtons[0]); // Select first answer
    fireEvent.click(radioButtons[4]); // Select second answer

    const submitButton = screen.getByText('Submit Quiz');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockDominateGifts).toHaveBeenCalled();
      expect(mockSubordinateGifts).toHaveBeenCalled();
      expect(mockShowQuizResults).toHaveBeenCalledWith(true);
    });
  });
});
