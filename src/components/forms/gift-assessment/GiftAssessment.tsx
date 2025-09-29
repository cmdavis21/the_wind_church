'use client';

import React, { useState } from 'react';

import {
  FullContact,
  GiftAssessmentDefinition,
  GiftAssessmentReflectionQuestions,
  GiftAssessmentSubmission,
} from '@/data/types';

import Accordion, { AccordionType } from '@/components/accordion/Accordion';
import { GiftAssessmentDefinitions, GiftAssessmentQuestions } from '@/data/gift-assessment';
import { useCreateGiftAssessment } from '@/data/services/sanity/mutations/gift-assessment';
import dynamic from 'next/dynamic';
import GiftAssessmentContactForm from './gift-assessment-contact-form/GiftAssessmentContactForm';
import GiftAssessmentQuiz from './gift-assessment-quiz/GiftAssessmentQuiz';
import GiftAssessmentReflectionQuestionsForm from './gift-assessment-reflection-questions-form/GiftAssessmentReflectionQuestionsForm';

const GiftAssessmentResultsPdf = dynamic(
  () => import('@/components/pdfs/gift-assessment-results-pdf/GiftAssessmentResultsPdf'),
  { ssr: false }
);
const PDF_FILE_NAME = 'The_Wind_Church_Spiritual_Gift_Assessment_Results.pdf';

const GiftAssessment = () => {
  const [showResults, setShowResults] = useState(false);

  const [dominateGifts, setDominateGifts] = useState<GiftAssessmentDefinition[] | null>(null);
  const [subordinateGifts, setSubordinateGifts] = useState<GiftAssessmentDefinition[] | null>(null);

  const [domGiftsStr, setDomGiftsStr] = useState('');
  const [subGiftsStr, setSubGiftsStr] = useState('');

  const [reflectionQuestions, setReflectionQuestions] =
    useState<GiftAssessmentReflectionQuestions | null>(null);

  const {
    mutate: submitResults,
    error: SubmitError,
    isError,
    isPending,
    isSuccess,
  } = useCreateGiftAssessment();

  const submitQuizResultsToTheWind = (contact: FullContact) => {
    if (SubmitError) return;
    if (reflectionQuestions) {
      const submissionValues: GiftAssessmentSubmission = {
        ...contact,
        dominate_gifts: domGiftsStr,
        subordinate_gifts: subGiftsStr,
        ...reflectionQuestions,
      };
      submitResults(submissionValues);
    }
  };

  return (
    <div className="flex flex-col gap-xxl lg:gap-[100px] 2xl:gap-[125px]">
      <GiftAssessmentQuiz
        questions={GiftAssessmentQuestions}
        definitions={GiftAssessmentDefinitions}
        dominateGifts={setDominateGifts}
        subordinateGifts={setSubordinateGifts}
        dominateGiftNamesList={setDomGiftsStr}
        subordinateGiftNamesList={setSubGiftsStr}
        showQuizResults={setShowResults}
        disable={showResults}
      />

      {/* Results */}
      {showResults && dominateGifts && subordinateGifts && (
        <div className="border border-gray  shadow-md p-md md:p-lg lg:p-xl rounded-xl flex flex-col gap-[50px]">
          {/* Gifts */}
          <div className="flex flex-col gap-md">
            <h3>Assessment Completed!</h3>
            <h5 className="pb-lg">
              Thank you for taking the time to complete the assessment. You are one-step closer to
              undertsanding the purpose God had outlined in your life.
            </h5>
            {[
              {
                title: `Your ${dominateGifts.length} Dominate Gifts`,
                gifts: dominateGifts,
              },
              {
                title: `Your ${subordinateGifts.length} Subordinate Gifts`,
                gifts: subordinateGifts,
              },
            ].map((item) => (
              <div
                key={`gift-assessment-gifts-accordion-list-${item.title}`}
                className="flex flex-col gap-lg"
              >
                <h4 className="font-light">{item.title}</h4>
                <Accordion
                  accordionType={AccordionType.PRODUCT}
                  content={item.gifts.map((gift) => ({
                    title: gift.gift,
                    description: (
                      <div className="flex flex-col gap-md">
                        <h5>{gift?.definition ?? ''}</h5>
                        <div className="flex flex-wrap gap-sm items-center">
                          {gift?.scriptures.map((s, index) => (
                            <React.Fragment key={`gift-assessment-modal-scripture-${s}`}>
                              <h5>{s}</h5>

                              {index !== gift.scriptures.length - 1 && (
                                <div className="bg-charcoal rounded-full h-1 w-1" />
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    ),
                  }))}
                />
              </div>
            ))}
          </div>

          {/* Follow-up Questions */}
          <div className="flex flex-col gap-md">
            <h3>Reflection Questions</h3>
            <h5>Please answer the following relection questions of your assessment.</h5>
            <h5 className="pb-lg">
              Once completed you will have the option to download your assessment results and/or
              submit your results to the Wind Church where an administrator can work with you on
              better undertanding your results and Godly purpose.
            </h5>
            <GiftAssessmentReflectionQuestionsForm
              responses={setReflectionQuestions}
              disable={reflectionQuestions !== null}
            />
          </div>

          {/* Download and Submission */}
          {reflectionQuestions && (
            <>
              {/* <PDFDownloadLink
                document={
                  <GiftAssessmentResultsPdf
                    dominateGifts={dominateGifts}
                    subordinateGifts={subordinateGifts}
                    ministriesInvolvedIn={reflectionQuestions.ministries_involved_in}
                    changeInMinistry={reflectionQuestions.change_in_ministry}
                    layOrClergy={reflectionQuestions.lay_or_clergy}
                  />
                }
                fileName={PDF_FILE_NAME}
              >
                <Button pill color="ghost" className="mx-auto max-md:!min-w-full md:w-fit">
                  Download Results as PDF
                </Button>
              </PDFDownloadLink> */}

              <div className="flex flex-col gap-md">
                <h3>Optional: Submit your results to the Wind!</h3>
                <h5 className="pb-lg">
                  Please complete by adding your information. An administrator will connect with you
                  to discuss your results and help you undertand your Godly purpose!
                </h5>
                <GiftAssessmentContactForm
                  contact={submitQuizResultsToTheWind}
                  isError={isError}
                  isPending={isPending}
                  isSuccess={isSuccess}
                />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default GiftAssessment;
