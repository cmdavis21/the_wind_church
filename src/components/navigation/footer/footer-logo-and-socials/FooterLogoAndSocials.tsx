import React from 'react';

import FacebookIcon from '@/components/icons/facebook';
import InstagramIcon from '@/components/icons/instagram';
import YouTubeIcon from '@/components/icons/youtube';
import ThemeModeLogo from '@/components/theme-mode/theme-mode-logo/ThemeModeLogo';
import { YOUTUBE_CHANNEL, FACEBOOK_PROFILE, INSTAGRAM_PROFILE } from '@/data/constants';
import { PageRoutes } from '@/data/page-routes';
import Link from 'next/link';

const FooterLogoAndSocials = () => (
  <div className="flex lg:flex-col max-lg:justify-between gap-3">
    <Link href={PageRoutes.home}>
      <ThemeModeLogo noChangeColor className="min-w-[150px] max-w-[200px]" />
    </Link>

    <div className="flex gap-4  items-center place-self-end  w-fit">
      <Link href={YOUTUBE_CHANNEL}>
        <YouTubeIcon className="size-[22px] hover:opacity-50 fill-black dark:fill-softWhite" />
      </Link>
      <Link href={FACEBOOK_PROFILE}>
        <FacebookIcon className="size-[22px] hover:opacity-50 fill-black dark:fill-softWhite" />
      </Link>
      <Link href={INSTAGRAM_PROFILE}>
        <InstagramIcon className="size-[22px] hover:opacity-50 fill-black dark:fill-softWhite" />
      </Link>
    </div>
  </div>
);

export default FooterLogoAndSocials;
