'use client';
import { useTranslations } from 'next-intl';

import FooterContactForm from '@/components/forms/footer-contact-form/FooterContactForm';
import { AWS_ASSET_BASE_URL } from '@/data/constants';

const FooterContactSignup = () => {
  const t = useTranslations('Footer');
  return (
    <div
      style={{
        background: `url("${AWS_ASSET_BASE_URL}/images/wind_church_building.webp")`,
      }}
      // className="relative max-lg:min-w-full md:w-full -mr-[25px] lg:-mr-[50px] min-[1800px]:-mr-[100px] -ml-[25px] lg:-ml-[50px] min-[1800px]:-ml-[100px] -my-5 md:rounded-xl"
      className="relative max-lg:min-w-full lg:w-full -my-5 md:rounded-xl max-lg:-ml-[25px] -mr-[25px] 2xl:-mr-[50px] min-[1800px]:-mr-[200px]"
    >
      <video
        loop
        muted
        autoPlay
        playsInline
        onLoadedMetadata={(e) => (e.currentTarget.playbackRate = 1.5)}
        className="absolute top-0 left-0 w-full h-full object-cover md:rounded-xl"
      >
        <source src={`${AWS_ASSET_BASE_URL}/placeholder-media/footer_video.mp4" type="video/mp4`} />
      </video>

      {/* color overlay */}
      <div className="absolute h-full w-full inset-0 bg-gradient-to-r from-navyLight/40 to-primary/20 md:rounded-xl -mr-2" />

      {/* Form */}
      <div className="relative flex flex-col gap-sm max-w-[235px] min-h-[342px] ml-[25px] lg:ml-[50px] my-5 pb-xs">
        <h6 className="uppercase tracking-wider font-light text-white">{t('form.label')}</h6>
        <div className="w-[40px] h-[1.1px] rounded-sm bg-primary mb-sm" />
        <FooterContactForm />
      </div>
    </div>
  );
};

export default FooterContactSignup;
