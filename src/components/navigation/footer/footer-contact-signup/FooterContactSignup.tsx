import { AWS_ASSET_BASE_URL } from '@/data/constants';
import { getTranslations } from 'next-intl/server';

const FooterContactSignup = async () => {
  const t = await getTranslations('Footer');
  // const promoDetails = await getPromoDetails()
  return (
    // <div
    //   style={{
    //     background: `url("${AWS_ASSET_BASE_URL}/images/wind_church_building.webp")`,
    //   }}
    //   className="relative max-lg:min-w-full lg:w-full -my-5 md:rounded-xl max-lg:-ml-[25px] -mr-[25px] 2xl:-mr-[50px] !min-[1800px]:-mr-[200px]"
    // >
    //   <video
    //     loop
    //     muted
    //     autoPlay
    //     playsInline
    //     onLoadedMetadata={(e) => (e.currentTarget.playbackRate = 1.5)}
    //     className="absolute top-0 left-0 w-full h-full object-cover md:rounded-xl object-top"
    //   >
    //     <source src={`${AWS_ASSET_BASE_URL}/placeholder-media/footer_video.mp4`} type="video/mp4" />
    //   </video>

    //   {/* color overlay */}
    //   <div className="absolute h-full w-full inset-0 bg-gradient-to-r from-light-navy/40 to-brand-primary/20 md:rounded-xl -mr-2" />

    //   {/* Form */}
    //   <div className="relative flex flex-col gap-sm max-w-[235px] min-h-[342px] ml-[25px] lg:ml-[50px] my-5 pb-xs">
    //     <h6 className="uppercase tracking-wider font-light text-white">{t('form.label')}</h6>
    //     <div className="w-[40px] h-[1.1px] rounded-sm bg-brand-primary mb-sm" />
    //     <FooterContactForm />
    //   </div>
    // </div>

    <div
      style={{
        background: `url("${AWS_ASSET_BASE_URL}/images/wind_church_building.webp")`,
      }}
      className="relative max-lg:min-w-full lg:w-full -my-5 md:rounded-xl max-lg:-ml-[25px] -mr-[25px] 2xl:-mr-[50px] !min-[1800px]:-mr-[200px]"
    >
      <video
        loop
        muted
        autoPlay
        playsInline
        onLoadedMetadata={(e) => (e.currentTarget.playbackRate = 1.5)}
        className="absolute top-0 left-0 w-full h-full object-cover md:rounded-xl object-top"
      >
        <source src={`${AWS_ASSET_BASE_URL}/placeholder-media/footer_video.mp4`} type="video/mp4" />
      </video>

      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-light-navy/40 to-brand-primary/20 md:rounded-xl" />

      {/* promo content */}
      <div className="relative flex flex-col gap-sm max-w-[350px] min-h-[342px] ml-[25px] lg:ml-[50px] my-5 pb-xs text-white">
        <h6 className="uppercase tracking-wider font-light">Upcoming Event</h6>
        <div className="w-[40px] h-[1.1px] rounded-sm bg-brand-primary mb-sm" />

        <h3 className="text-xl font-semibold leading-tight">Worship Night — This Friday at 7 PM</h3>

        <p className="opacity-90 text-sm mt-2">
          Join us for a powerful night of worship and prayer as we seek God together.
        </p>

        {/* {link && (
          <AnimativeFillButton link={link.href}>
            <div className="relative flex items-center gap-xxs py-xs px-md rounded-full group">
              {link.label}{' '}
              <UpArrow className="size-[15px] dark:fill-dark-primaryText rotate-45 group-hover:rotate-90 transition-all duration-300" />
            </div>
          </AnimativeFillButton>
        )} */}
      </div>
    </div>
  );
};

export default FooterContactSignup;
