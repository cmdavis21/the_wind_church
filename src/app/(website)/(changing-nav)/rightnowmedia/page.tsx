import { Metadata } from 'next';
import Image from 'next/image';

import RightnowMediaSignupForm from '@/components/forms/rightnow-media-signup-form/RightnowMediaSignupForm';
import { AWS_ASSET_BASE_URL, WEBSITE_BASE_URL } from '@/data/constants';

export const metadata: Metadata = {
  title: 'RightNow Media',
  description:
    'Access thousands of discipleship videos for kids, youth, and adults with our RightNow Media partnership.',
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/rightnowmedia`,
  },
};

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
          <span className="text-primary">Maximize your impact</span> and save time with the
          world&apos;s largest video-streaming library of biblical resources.
        </h1>

        <h3 className="font-semibold">
          Join now and get access to RightNow Media for <span className="text-primary">FREE</span>{' '}
          by becoming a wind member.
        </h3>

        <RightnowMediaSignupForm />
      </div>
    </div>
  </div>
);

export default Rightnowmedia;
