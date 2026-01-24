import Image from 'next/image';

import { AWS_ASSET_BASE_URL, WEBSITE_BASE_URL } from '@/data/constants';
import { PageRoutes } from '@/data/page-routes';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'RightNowMedia' });
  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_BASE_URL}${PageRoutes.rightnowMedia}`;
  const image = `${AWS_ASSET_BASE_URL}/placeholder-media/rightnowmedia.png`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

const Rightnowmedia = () => (
  <div className="relative min-h-screen">
    {/* background image */}
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="relative w-full h-full pointer-events-none">
        <Image
          fill
          src={`${AWS_ASSET_BASE_URL}/placeholder-media/rightnowmedia.png`}
          alt="decorative background image"
          className="object-cover"
        />
      </div>
    </div>

    {/* color overlay */}
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/90 backdrop-blur-sm" />
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/90" />

    <div className="relative w-full min-h-screen flex items-center p-padding">
      <div className="pt-4xl lg:max-w-[60%] flex flex-col gap-xl text-white">
        <h2>
          <span className="text-brand-primary">RightNow Media</span>: Free. Unlimited. For Every
          Member.
        </h2>

        <h4>
          A faith-based streaming service packed with Bible studies, devotionals, kids&apos; shows,
          and practical resources for everyday life.
        </h4>

        <div className="flex flex-col gap-md">
          <h5 className="font-semibold text-white">What you&apos;ll find inside:</h5>

          <ul className="space-y-md">
            <li className="flex items-start gap-md">
              <span className="text-brand-primary text-xl">📚</span>
              <h5>Thousands of Bible studies from trusted pastors and teachers.</h5>
            </li>

            <li className="flex items-start gap-md">
              <span className="text-brand-primary text-xl">🎥</span>
              <h5>Video series for personal growth, marriage, parenting, and leadership.</h5>
            </li>

            <li className="flex items-start gap-md">
              <span className="text-brand-primary text-xl">👧🧒</span>
              <h5>Wholesome, Christ-centered kids&apos; shows your family will love.</h5>
            </li>

            <li className="flex items-start gap-md">
              <span className="text-brand-primary text-xl">📱</span>
              <h5>Watch anywhere — phone, tablet, computer, or TV.</h5>
            </li>
          </ul>
        </div>

        <h4>
          As part of our commitment to equip and encourage our church family, Wind Church members
          receive
          <span className="text-brand-primary font-semibold"> FREE access</span> to the entire
          RightNow Media library. Becoming a member unlocks your personal account and gives you
          unlimited streaming anytime you need encouragement or teaching.
        </h4>

        <h4 className="font-semibold text-white">
          Want to get connected or learn more about membership? Contact our front office — we&apos;d
          love to help you get started.
        </h4>
      </div>
    </div>
  </div>
);

export default Rightnowmedia;
