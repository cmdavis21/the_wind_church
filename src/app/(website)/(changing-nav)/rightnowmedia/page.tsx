import Image from 'next/image';

import RightnowMediaSignupForm from '@/components/forms/rightnow-media-signup-form/RightnowMediaSignupForm';
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

    <div className="relative w-full min-h-screen flex items-center text-white">
      <div className="w-full p-padding nav-padding lg:max-w-[55%] space-y-xl">
        <h1>
          <span className="text-brand-primary">Maximize your impact</span> and save time with the
          world&apos;s largest video-streaming library of biblical resources.
        </h1>

        <h3 className="font-semibold">
          Join now and get access to RightNow Media for{' '}
          <span className="text-brand-primary">FREE</span> by becoming a wind member.
        </h3>

        <RightnowMediaSignupForm />
      </div>
    </div>
  </div>
);

export default Rightnowmedia;
