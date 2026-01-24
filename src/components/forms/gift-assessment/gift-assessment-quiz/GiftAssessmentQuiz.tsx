import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Radio } from 'flowbite-react';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { GiftAssessmentDefinition, GiftAssessmentQuestion } from '@/data/types';

import AlertMessage from '../../../alerts/alert-message/AlertMessage';

const schema = yup.object().shape({
  answers: yup
    .array()
    .of(
      yup.object().shape({
        questionId: yup.number().required(),
        score: yup.number().min(0).max(3).required('Select an answer for the question'),
      })
    )
    .required(),
});

const scoreWithText: { score: number; text: string }[] = [
  { score: 3, text: 'Much' },
  { score: 2, text: 'Some' },
  { score: 1, text: 'Little' },
  { score: 0, text: 'Not at all' },
];

interface GiftAssessmentQuizProps {
  questions: GiftAssessmentQuestion[];
  definitions: GiftAssessmentDefinition[];

  // Results
  dominateGifts: (gifts: GiftAssessmentDefinition[]) => void;
  subordinateGifts: (gifts: GiftAssessmentDefinition[]) => void;

  // String of gift names for submission
  dominateGiftNamesList: (list: string) => void;
  subordinateGiftNamesList: (list: string) => void;

  // State to control when to display results
  showQuizResults: (show: boolean) => void;
  disable: boolean;
}

const GiftAssessmentQuiz: React.FC<GiftAssessmentQuizProps> = ({
  questions,
  definitions,
  dominateGifts,
  subordinateGifts,
  dominateGiftNamesList,
  subordinateGiftNamesList,
  showQuizResults,
  disable,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    answers: { questionId: number; score: number }[];
  }>({ resolver: yupResolver(schema) });

  const concatGiftNames = (arr: { gift: string; score: number }[]) =>
    arr
      .map((g) => g.gift)
      .toString()
      .replace("'", '')
      .split(',')
      .join(', ');

  const onSubmit = () => {
    if (Array.isArray(errors.answers) && errors.answers.some((error) => error.score)) {
      return;
    }

    setIsLoading(true); // Call with a boolean value

    const scores: Record<string, number> = {}; // Explicitly define the type of scores

    questions.forEach((question) => {
      const gift = question.gift;

      // Find the answer for the current question
      const answer = getValues().answers.find((a) => a.questionId === question.id);

      // Add the score to the relevant gift
      scores[gift] = (scores[gift] || 0) + (answer?.score || 0);
    });

    const sortedGifts = Object.entries(scores)
      .map(([gift, score]) => ({ gift, score })) // Convert each entry to an object
      .sort((a, b) => b.score - a.score); // Sort by score in descending order

    const domGifts = sortedGifts.slice(0, 3); // Top 3 gifts
    const subGifts = sortedGifts.slice(3, 6); // Bottom 3 gifts

    // Filter definitions for dominate gifts
    const filterDomGifts = definitions.filter((g) => domGifts.some((d) => d.gift === g.gift));
    dominateGifts(filterDomGifts);

    // Filter definitions for subordinate gifts
    const filterSubGifts = definitions.filter((g) => subGifts.some((d) => d.gift === g.gift));
    subordinateGifts(filterSubGifts);

    // Set string of gift names for submission
    dominateGiftNamesList(concatGiftNames(domGifts));
    subordinateGiftNamesList(concatGiftNames(subGifts));

    // Delay showing results
    setTimeout(() => {
      showQuizResults(true);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-xl -mt-lg">
          {/* Header */}
          <div className="sticky top-0 z-10 bg-light-bg dark:bg-dark-bg pt-lg flex flex-col gap-lg">
            <div className="min-w-[820px] grid grid-cols-6 items-center">
              <h3 className="col-span-2 min-w-[300px] font-bold">Questions</h3>
              {scoreWithText.map((mark) => (
                <div
                  key={`spiritual-gift-assessment-desktop-header-${mark.score}`}
                  className="flex flex-col justify-center items-center"
                >
                  <h4 className="font-bold">{mark.score}</h4>
                  <h5>{mark.text}</h5>
                </div>
              ))}
            </div>
            <div className="h-[0.4px] w-full bg-light-neutral" />
          </div>

          {/* Questions */}
          {questions.map((q, index) => (
            <React.Fragment key={`spiritual-gift-assessment-desktop-question-${q.id}`}>
              <div className="min-w-[820px] grid grid-cols-6 gap-sm">
                <div className="col-span-2 min-w-[300px] flex gap-sm">
                  <h5 className="font-bold">{q.id}.</h5>
                  <h5>{q.question}</h5>
                </div>
                {scoreWithText.map((mark) => (
                  <Controller
                    key={`spiritual-gift-assessment-desktop-score-${q.id}-${mark.score}`}
                    name={`answers.${index}.score`}
                    control={control}
                    render={({ field }) => (
                      <Radio
                        {...field}
                        value={mark.score}
                        checked={field.value === mark.score}
                        onChange={() => {
                          field.onChange(mark.score);
                          setValue(`answers.${index}.questionId`, q.id);
                        }}
                        className="place-self-center"
                      />
                    )}
                  />
                ))}
              </div>

              {errors.answers?.[index]?.score?.message && (
                <AlertMessage type="failure" title={errors.answers[index].score?.message} />
              )}

              {index !== questions.length - 1 && (
                <div className="h-[0.4px] w-full bg-light-neutral" />
              )}
            </React.Fragment>
          ))}

          {Array.isArray(errors.answers) &&
            errors.answers.length > 0 &&
            errors.answers.some((s) => s.score) && (
              <AlertMessage
                type="failure"
                title={`Answer question${errors.answers.length > 1 && '(s)'}:`}
                description={errors.answers
                  .filter((error) => error.score && error.questionId?.message) // Filter errors with both score and questionId.message
                  .map((error) => {
                    //Extract number inside brackets using regex
                    const match = error.questionId.message.match(/\[(\d+)\]/); //Match the number inside brackets
                    if (match) {
                      const questionNumber = parseInt(match[1], 10) + 1; //Add 1 to convert 0-based index
                      return questionNumber;
                    }
                    return 'Unknown'; // Fallback if no match is found
                  })
                  .join(', ')}
              />
            )}

          <div className="pt-xl flex flex-col gap-lg">
            <Button
              pill
              size="lg"
              type="submit"
              color="primary"
              disabled={disable || isLoading}
              className="w-full md:max-w-[35%] mx-auto mt-md"
            >
              {isLoading ? 'Analyzing your answers...' : 'Submit Quiz'}
            </Button>
          </div>
        </form>
      </div>

      {/* Mobile */}
      <form onSubmit={handleSubmit(onSubmit)} className="lg:hidden w-full flex flex-col gap-lg">
        <h3 className="font-bold">Questions</h3>
        <div className="h-[0.4px] w-full bg-light-neutral" />
        {questions.map((q, index) => (
          <div
            key={`spiritual-gift-assessment-mobile-question-${q.id}`}
            className="flex flex-col gap-md"
          >
            <div className="col-span-2 min-w-[300px] flex gap-sm">
              <h5 className="font-bold">{q.id}.</h5>
              <h5>{q.question}</h5>
            </div>

            <div className="flex items-center justify-between gap-xs md:px-lg">
              {scoreWithText.map((mark) => (
                <Controller
                  key={`spiritual-gift-assessment-desktop-score-${q.id}-${mark.score}`}
                  name={`answers.${index}.score`}
                  control={control}
                  render={({ field }) => (
                    <div
                      key={`spiritual-gift-assessment-mobile-radio-${mark.score}`}
                      className="flex flex-col justify-center items-center gap-sm"
                    >
                      <h5>{mark.text}</h5>
                      <Radio
                        {...field}
                        value={mark.score}
                        checked={field.value === mark.score}
                        onChange={() => {
                          field.onChange(mark.score);
                          setValue(`answers.${index}.questionId`, q.id);
                        }}
                      />
                    </div>
                  )}
                />
              ))}
            </div>

            {errors.answers?.[index]?.score?.message && (
              <AlertMessage type="failure" title={errors.answers[index].score?.message} />
            )}

            {index !== questions.length - 1 && (
              <div className="h-[0.4px] w-full bg-light-neutral" />
            )}
          </div>
        ))}

        {Array.isArray(errors.answers) &&
          errors.answers.length > 0 &&
          errors.answers.some((s) => s.score) && (
            <AlertMessage
              type="failure"
              title={`Answer question${errors.answers.length > 1 && '(s)'}:`}
              description={errors.answers
                .filter((error) => error.score && error.questionId?.message) // Filter errors with both score and questionId.message
                .map((error) => {
                  //Extract number inside brackets using regex
                  const match = error.questionId.message.match(/\[(\d+)\]/); //Match the number inside brackets
                  if (match) {
                    const questionNumber = parseInt(match[1], 10) + 1; //Add 1 to convert 0-based index
                    return questionNumber;
                  }
                  return 'Unknown'; // Fallback if no match is found
                })
                .join(', ')}
            />
          )}

        <div className="pt-xl flex flex-col gap-lg">
          <Button
            pill
            size="lg"
            type="submit"
            color="primary"
            disabled={disable || isLoading}
            className="w-full md:max-w-[35%] mx-auto mt-md"
          >
            {isLoading ? 'Analyzing your answers...' : 'Submit Quiz'}
          </Button>
        </div>
      </form>
    </>
  );
};

export default GiftAssessmentQuiz;
