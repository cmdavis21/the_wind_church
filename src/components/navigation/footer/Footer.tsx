import { getTranslations } from 'next-intl/server';

import { FooterColumnItem } from '@/data/types';

import FooterColumn from './footer-column/FooterColumn';
import FooterContact from './footer-contact/FooterContact';
import FooterPromoBanner from './footer-promo-banner/FooterPromoBanner';

const Footer = async () => {
  const t = await getTranslations('Footer');
  const about: FooterColumnItem = t.raw('about');
  const windFamily: FooterColumnItem = t.raw('windFamily');
  const moreWind: FooterColumnItem = t.raw('moreWind');
  const address: FooterColumnItem = t.raw('address');
  const hours: FooterColumnItem = t.raw('hours');
  const contact: FooterColumnItem = t.raw('contact');

  return (
    <div className="p-padding w-full flex flex-col gap-xxl lg:gap-4xl 2xl:gap-5xl max-width-center">
      <div className="max-md:pt-xxl flex flex-col lg:flex-row max-lg:flex-col-reverse gap-xxl lg:gap-4xl !min-w-[1800px]:gap-7xl">
        <div className="flex flex-col lg:flex-row gap-xxl lg:gap-4xl !min-w-[1800px]:gap-7xl">
          <FooterColumn label={about.label} row={about.row} />
          <FooterColumn label={windFamily.label} row={windFamily.row} />
          <FooterColumn label={moreWind.label} row={moreWind.row} />
        </div>
        <FooterPromoBanner />
      </div>
      <FooterContact address={address} contact={contact} hours={hours} />
    </div>
  );
};

export default Footer;
