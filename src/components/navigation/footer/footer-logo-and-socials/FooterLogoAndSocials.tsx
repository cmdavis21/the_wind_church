import FacebookIcon from '@/components/icons/facebook';
import InstagramIcon from '@/components/icons/instagram';
import YouTubeIcon from '@/components/icons/youtube';
import ThemeModeLogo from '@/components/theme-mode/theme-mode-logo/ThemeModeLogo';

import { PageRoutes } from '@/data/page-routes';
import { FACEBOOK, INSTAGRAM, YOUTUBE } from '@/data/services/env.server';

import Link from 'next/link';

const FooterLogoAndSocials = () => (
  <div className="flex lg:flex-col max-lg:justify-between gap-3">
    <Link href={PageRoutes.home}>
      <ThemeModeLogo noChangeColor />
    </Link>

    <div className="flex gap-4 items-center place-self-end w-fit">
      <Link href={YOUTUBE}>
        <YouTubeIcon className="size-[22px] hover:opacity-50 fill-black dark:fill-white" />
      </Link>
      <Link href={FACEBOOK}>
        <FacebookIcon className="size-[22px] hover:opacity-50 fill-black dark:fill-white" />
      </Link>
      <Link href={INSTAGRAM}>
        <InstagramIcon className="size-[22px] hover:opacity-50 fill-black dark:fill-white" />
      </Link>
    </div>
  </div>
);

export default FooterLogoAndSocials;
