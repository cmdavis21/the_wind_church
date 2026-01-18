import { Metadata } from 'next';

import AnimativeFillButton from '@/components/buttons/animative-fill-button/AnimativeFillButton';
import GiftAssessment from '@/components/forms/gift-assessment/GiftAssessment';
import { WEBSITE_BASE_URL } from '@/data/constants';

export const metadata: Metadata = {
  title: 'Gift Assessement',
  description:
    "Discover your spiritual gifts with our easy assessment and learn how you can serve in God's Kingdom.",
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/gift-assessment`,
  },
};

const GiftAssessmentPage = () => (
  <div>
    {/* Decorative Border */}
    <div className="absolute top-0 left-0 bottom-0 w-[5px] md:w-[22px] lg:w-[32px] min-h-full bg-brand-primary" />

    <div className="px-padding flex flex-col gap-3xl lg:gap-4xl 2xl:gap-5xl max-width-center">
      {/* Header */}
      <div className="text-center space-y-lg">
        <h1 className={`font-display md:text-[75px] leading-snug`}>Spiritual Gift Assessment</h1>
        <h2>Wagner-Modified Houts Questionnarie</h2>
        <h4 className="pt-md">
          Complete the assessment in one setting.{' '}
          <span className="font-bold">Answers will be lost if abandoned midway.</span>
        </h4>
        <h4>Aproximate time to complete assessment is 30 minutes.</h4>
      </div>

      {/* Quiz Instructions */}
      <div className="border border-light-gray dark:border-dark-gray dark:bg-softGray shadow-md p-md md:p-lg rounded-xl lg:max-w-[90%] 2xl:max-w-[80%] mx-auto flex flex-col gap-lg">
        <h5>
          The Modified Houts Questionnaire is a tool designed to help identify your spiritual gifts.
          Originally created by Richard F. Houts, a Professor of Christian Education at Ontario
          Bible College (published in Eternity, May 1976, pp. 18-21), it was later revised by C.
          Peter Wagner of the Charles E. Fuller Institute of Evangelism and Church Growth.
        </h5>

        <div className="flex flex-col gap-md">
          <h5 className="font-bold">Instructions:</h5>
          <ol className="px-lg list-outside list-decimal flex flex-col gap-md marker:font-bold">
            <li className="body-large">Review the 125 statements in the questionnaire.</li>
            <li className="body-large">
              Select how true each statement is for your life: MUCH, SOME, LITTLE, or NOT AT ALL.
            </li>
            <li className="body-large">
              Upon completing the assessment, your top three dominant and subordinate gifts will be
              determined.
            </li>
            <li className="body-large">
              Answer a few follow-up questions about your ministry and download your results.
            </li>
          </ol>
        </div>

        <div className="flex flex-col gap-md">
          <h5 className="font-bold">Note:</h5>
          <h5>
            This questionnaire is a starting point for discovering the spiritual gifts God has given
            you. However, do not consider the results to be definitive or final. Some gifts you
            possess may not show strongly here. Use this tool as a source of insight, but let your
            discernment and God&apos;s guidance shape your understanding of your gifts.
          </h5>
        </div>

        {/* Download PDF Assessment */}
        <a
          target="_blank"
          download="Spiritual_Gift_Assessment.pdf"
          href={`/spiritual-gifts-test.pdf`}
        >
          <AnimativeFillButton size="lg">
            Optional: Download Blank PDF Assessment
          </AnimativeFillButton>
        </a>
      </div>

      {/* Assessment */}
      <div className="w-full lg:max-w-[90%] 2xl:max-w-[80%] mx-auto">
        <GiftAssessment />
      </div>
    </div>

    {/* Decorative Border */}
    <div className="absolute top-0 right-0 bottom-0 w-[5px] md:w-[22px] lg:w-[32px] min-h-full bg-brand-primary" />
  </div>
);

export default GiftAssessmentPage;
