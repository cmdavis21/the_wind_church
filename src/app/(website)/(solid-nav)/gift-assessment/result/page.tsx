import { AWS_ASSET_BASE_URL } from '@/data/constants';
import { formatDateMMMddyyyy } from '@/data/format-date';
import { GiftAssessmentDefinition } from '@/data/types';
import jwt from 'jsonwebtoken';

interface Props {
  dominateGifts: GiftAssessmentDefinition[];
  subordinateGifts: GiftAssessmentDefinition[];
  ministriesInvolvedIn: string;
  changeInMinistry: string;
  layOrClergy: string;
}

const GiftAssessmentHtml = ({ searchParams }: { searchParams: { token: string } }) => {
  const token = searchParams.token;
  const results = jwt.verify(token, process.env.GIFT_ASSESSMENT_JWT_SECRET!) as Props;

  return (
    <div className="relative px-12 py-10 font-serif text-gray-900">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div className="text-xs">Spiritual Gift Assessment</div>
        <div className="text-lg font-bold text-center flex-1">
          Spiritual Gift Assessment Results
        </div>
        <div className="text-xs text-right">{formatDateMMMddyyyy(new Date())}</div>
      </div>

      {/* LOGO */}
      <img
        src={`${AWS_ASSET_BASE_URL}/logos/logo.png`}
        className="w-[100px] h-[50px] mx-auto mb-2 object-contain"
      />

      {/* CONTACT BLOCK */}
      <div className="text-center text-[10px] leading-tight mb-8">
        <p>6476 Streeter Avenue</p>
        <p>Riverside, CA 92504</p>
        <p>+1 (951) 359-0203</p>
        <p>thewindchurch@outlook.com</p>
      </div>

      {/* DOMINATE GIFTS */}
      <section className="mb-10">
        <h2 className="text-sm font-bold mb-4">
          Your {results.dominateGifts.length} Dominate Gifts
        </h2>

        {results.dominateGifts.map((gift, index) => (
          <div key={index} className="mb-6">
            <p className="text-sm font-bold mb-2">
              {index + 1}. {gift.gift}
            </p>

            <p className="text-xs mb-2">{gift.definition}</p>

            <p className="text-xs mb-1 font-medium">Scripture Reference:</p>

            <div className="ml-5 mb-3">
              {gift.scriptures.map((scripture, sIndex) => (
                <p key={sIndex} className="text-xs mb-1">
                  {scripture}
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* SUBORDINATE GIFTS */}
      <section className="mb-10">
        <h2 className="text-sm font-bold mb-4">
          Your {results.subordinateGifts.length} Subordinate Gifts
        </h2>

        {results.subordinateGifts.map((gift, index) => (
          <div key={index} className="mb-6">
            <p className="text-sm font-bold mb-2">
              {index + 1}. {gift.gift}
            </p>

            <p className="text-xs mb-2">{gift.definition}</p>

            <p className="text-xs mb-1 font-medium">Scripture Reference:</p>

            <div className="ml-5 mb-3">
              {gift.scriptures.map((scripture, sIndex) => (
                <p key={sIndex} className="text-xs mb-1">
                  {scripture}
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* REFLECTION QUESTIONS */}
      <section className="mb-10">
        <h2 className="text-sm font-bold mb-4">Reflection Questions</h2>

        <p className="text-[13px] mb-2">
          1. What ministries are you now performing (formally or informally) in the Body?
        </p>
        <p className="text-xs mb-6">{results.ministriesInvolvedIn}</p>

        <p className="text-[13px] mb-2">
          2. Are there any of these ministries that you are not especially gifted for? God may be
          calling you to consider changes.
        </p>
        <p className="text-xs mb-6">{results.changeInMinistry}</p>

        <p className="text-[13px] mb-2">3. Is your vocational status lay or clergy?</p>
        <p className="text-xs mb-6">{results.layOrClergy}</p>
      </section>

      {/* FOOTER */}
      <footer className="absolute bottom-8 left-12 right-12 text-[10px] flex justify-between">
        <span>© {new Date().getFullYear()} The Wind Church</span>
        {/* Puppeteer will replace this with page numbers */}
        <span className="pageNumber"></span>
      </footer>
    </div>
  );
};

export default GiftAssessmentHtml;
