import AnimativeFillButton from '@/components/buttons/animative-fill-button/AnimativeFillButton';
import UpArrow from '@/components/icons/up-arrow';
import { AWS_ASSET_BASE_URL } from '@/data/constants';
import { getPromoDetails } from '@/data/services/sanity/queries/promo-details';
import cn from 'classnames';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

const FooterPromoBanner = async () => {
  const t = await getTranslations('Footer');
  const promoDetails = await getPromoDetails();
  return (
    <div
      className={cn(
        'relative sm:rounded-xl -my-5 overflow-hidden',
        '-mr-lg -ml-lg lg:-ml-xxl !min-w-[1800px]:-ml-4xl'
      )}
    >
      {/* MEDIA */}
      <div className="absolute top-0 left-0 w-full h-full">
        {promoDetails ? (
          <>
            {promoDetails.video ? (
              <video
                loop
                muted
                autoPlay
                playsInline
                poster={promoDetails.image.src}
                className="w-full h-full object-cover md:rounded-xl pointer-events-none"
              >
                <source src={promoDetails.video} type="video/mp4" />
              </video>
            ) : (
              <div className="relative w-full h-full">
                <Image
                  fill
                  src={promoDetails.image.src}
                  alt={promoDetails.image.alt}
                  className="object-cover pointer-events-none"
                />
              </div>
            )}
          </>
        ) : (
          <div className="relative w-full h-full">
            <Image
              fill
              src={`${AWS_ASSET_BASE_URL}/images/wind_church_building.webp`}
              alt="Image of The Wind Church"
              className="object-cover pointer-events-none"
            />
          </div>
        )}
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-light-navy/50 to-brand-primary/20 md:rounded-xl pointer-events-none" />

      {/* CONTENT */}
      {promoDetails ? (
        <div className="relative flex flex-col gap-sm px-lg sm:max-w-[70%] py-lg text-white">
          <h6 className="uppercase tracking-wider font-light">{promoDetails.header}</h6>
          <div className="w-10 h-px rounded-sm bg-brand-primary" />
          <h3 className="pt-sm text-xl font-semibold leading-tight">{promoDetails.title}</h3>
          <h5>{promoDetails.description}</h5>
          {promoDetails.link && (
            <Link href={promoDetails.link.href} className="mt-md">
              <AnimativeFillButton>
                <div className="flex items-center gap-xxs group">
                  {promoDetails.link.label}{' '}
                  <UpArrow className="size-[18px] dark:fill-dark-primaryText rotate-45 group-hover:rotate-90 transition-all duration-300" />
                </div>
              </AnimativeFillButton>
            </Link>
          )}
        </div>
      ) : (
        <div className="relative flex flex-col gap-sm sm:max-w-[70%] min-h-full pl-lg lg:pl-xxl py-lg text-white">
          <h6 className="uppercase tracking-wider font-light">Welcome to The Wind Church</h6>
          <p className="opacity-90 text-sm mt-2">
            A Christ-focused community where lives are transformed and hope is restored. We gather
            to worship, grow, and walk out our faith together.
          </p>
        </div>
      )}
    </div>
  );
};

export default FooterPromoBanner;
