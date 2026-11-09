'use client';

import { useRef, useState } from 'react';

import {
  FullContact,
  GiftAssessmentDefinition,
  GiftAssessmentReflectionQuestions,
  GiftAssessmentSubmission,
} from '@/data/types';

import Accordion, { ACCORDION_TYPE } from '@/components/accordion/Accordion';

import ScriptureList from '@/components/sections/scripture-list/ScriptureList';
import { GiftAssessmentDefinitions, GiftAssessmentQuestions } from '@/data/gift-assessment';

import { useCreateGiftAssessment } from '@/data/client/sanity/gift-assessment';
import { useScrollToOnStatus } from '@/data/client/use-scroll-to-on-status';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Button } from 'flowbite-react';
import { useTranslations } from 'next-intl';
import GiftAssessmentContactForm from './gift-assessment-contact-form/GiftAssessmentContactForm';
import GiftAssessmentQuiz from './gift-assessment-quiz/GiftAssessmentQuiz';
import GiftAssessmentReflectionQuestionsForm from './gift-assessment-reflection-questions-form/GiftAssessmentReflectionQuestionsForm';
import GiftAssessmentResultsPdf from './gift-assessment-results-pdf/GiftAssessmentResultsPdf';

const PDF_FILE_NAME = 'The_Wind_Church_Spiritual_Gift_Assessment_Results.pdf';

const GiftAssessment = () => {
  const t = useTranslations('GiftAssessment');

  const [showResults, setShowResults] = useState(false);
  const resultsRef = useRef<HTMLDivElement | null>(null);
  useScrollToOnStatus(resultsRef, showResults);

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
    <div className="flex flex-col gap-xxl lg:gap-4xl 2xl:gap-5xl">
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
        <div
          ref={resultsRef}
          className="relative w-full border border-light-gray dark:bg-dark-gray dark:border-dark-gray shadow-lg p-lg lg:p-xl flex flex-col gap-xxl rounded-xl max-w-[1200px] mx-auto"
        >
          {/* Gifts */}
          <div className="flex flex-col gap-md">
            <h3>{t('results.completed')}</h3>
            <h5>{t('results.description')}</h5>
            <div className="pt-lg flex flex-col gap-lg">
              {[
                { title: t('results.domGiftsTitle'), gifts: dominateGifts },
                { title: t('results.subGiftsTitle'), gifts: subordinateGifts },
              ].map((item) => (
                <div
                  key={`gift-assessment-gifts-accordion-list-${item.title}`}
                  className="flex flex-col gap-md"
                >
                  <h4 className="font-light">{item.title}</h4>
                  <Accordion
                    variant={ACCORDION_TYPE.MINIMAL}
                    content={item.gifts.map((g) => ({
                      title: g.gift,
                      description: (
                        <div className="flex flex-col gap-md">
                          <h5>{t(g.definition)}</h5>
                          <ScriptureList scriptures={g.scriptures.map((s) => t(s))} />
                        </div>
                      ),
                    }))}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Follow-up Questions */}
          <div className="flex flex-col gap-md">
            <h3>{t('reflection.title')}</h3>
            <h5>{t('reflection.descriptions.0')}</h5>
            <h5 className="pb-lg">{t('reflection.descriptions.1')}</h5>
            <GiftAssessmentReflectionQuestionsForm
              responses={setReflectionQuestions}
              disable={reflectionQuestions !== null}
            />
          </div>

          {/* Download and Submission */}
          {reflectionQuestions && (
            <>
              {GiftAssessmentResultsPdf && (
                <PDFDownloadLink
                  fileName={PDF_FILE_NAME}
                  document={
                    <GiftAssessmentResultsPdf
                      dominateGifts={dominateGifts.map((d) => ({
                        ...d,
                        definition: t(d.definition),
                        scriptures: d.scriptures.map((s) => t(s)),
                      }))}
                      subordinateGifts={subordinateGifts.map((s) => ({
                        ...s,
                        definition: t(s.definition),
                        scriptures: s.scriptures.map((c) => t(c)),
                      }))}
                      reflectionQuestions={[
                        {
                          question: t('reflection.form.questions.0'),
                          answer: reflectionQuestions.ministries_involved_in,
                        },
                        {
                          question: t('reflection.form.questions.1'),
                          answer: reflectionQuestions.change_in_ministry,
                        },
                        {
                          question: t('reflection.form.questions.2'),
                          answer: reflectionQuestions.lay_or_clergy,
                        },
                      ]}
                    />
                  }
                >
                  <Button pill color="secondary" className="mx-auto max-md:!min-w-full md:w-fit">
                    {t('results.download')}
                  </Button>
                </PDFDownloadLink>
              )}

              <div className="flex flex-col gap-md">
                <h3>{t('submission.title')}</h3>
                <h5 className="pb-lg">{t('submission.description')}</h5>
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
