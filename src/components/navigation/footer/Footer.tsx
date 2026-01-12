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
    <div className="mt-[50px] lg:mt-[100px] p-[25px] md:p-[50px] 2xl:p-[100px] min-[1800px]:px-[200px] min-[1800px]:py-[150px] w-full flex flex-col gap-[50px]">
      <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[100px] !min-w-[1800px]:gap-[200px] md:pb-[50px] 2xl:pb-[70px] max-lg:flex-col-reverse">
        <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[100px] !min-w-[1800px]:gap-[200px]">
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
