import ImageWithTitleAndHiddenTextCard from '@/components/cards/image-with-title-and-hidden-text-card/ImageWithTitleAndHiddenTextCard';
import SimpleCarousel from '@/components/carousels/simple-carousel/SimpleCarousel';
import Text from '@/components/forms/inputs/text/Text';
import PageHeader from '@/components/heroes/page-header/PageHeader';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import { Locale } from '@/data/i18n/utils';
import { PageRoutes } from '@/data/page-routes';
import { WEBSITE_URL } from '@/data/server/env.server';
import { getLocale, getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations({ locale, namespace: 'WePathway' });

  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_URL}${PageRoutes.wePathway}`;
  const image = '/images/rental/church-building.webp';

  return {
    metadataBase: new URL(WEBSITE_URL!),
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

const WePathwayPage = async () => {
  const t = await getTranslations('WePathway');

  const steps = [
    {
      image: {
        src: '/images/salvation/cross-on-mount.webp',
        alt: '',
      },
      title: 'Welcome',
      description: 'Experience authentic worship, community, and the love of Christ.',
    },
    {
      image: {
        src: '/images/salvation/cross-on-mount.webp',
        alt: '',
      },
      title: 'Belong',
      description: 'Build meaningful relationships and become part of the Wind family.',
    },
    {
      image: {
        src: '/images/salvation/cross-on-mount.webp',
        alt: '',
      },
      title: 'Understand',
      description: 'Learn the mission, beliefs, vision, and values of The Wind Church.',
    },
    {
      image: {
        src: '/images/salvation/cross-on-mount.webp',
        alt: '',
      },
      title: 'Form',
      description:
        'Grow spiritually through discipleship, biblical teaching, and personal development.',
    },
    {
      image: {
        src: '/images/salvation/cross-on-mount.webp',
        alt: '',
      },
      title: 'Serve',
      description: 'Discover your spiritual gifts and begin serving with purpose.',
    },
    {
      image: {
        src: '/images/salvation/cross-on-mount.webp',
        alt: '',
      },
      title: 'Develop',
      description: 'Be equipped and mentored for greater impact, leadership, and ministry.',
    },
    {
      image: {
        src: '/images/salvation/cross-on-mount.webp',
        alt: '',
      },
      title: 'Lead',
      description:
        'Lead others through servant leadership, spiritual maturity, and Kingdom influence.',
    },
  ];

  return (
    <div>
      {/* Decorative Border */}
      <div className="absolute top-0 left-0 bottom-0 w-[5px] md:w-3 min-h-full bg-brand-primary" />

      {/* Content */}
      <div className="px-padding flex flex-col gap-3xl sm:gap-4xl max-width-center">
        <PageHeader title={'The WE Pathway'} subtitle={'Lorem Ipsum'} />

        <div className="max-w-[75%] flex flex-col gap-lg">
          <h4>
            The WE Pathway is the intentional process The Wind Church uses to help people move from
            simply attending church to becoming spiritually grounded, connected, actively serving,
            and developed as disciples of Jesus Christ.
          </h4>
          <h4>
            At The Wind Church, we believe church is not something you merely attend—it is something
            you belong to, grow through, and help build.
          </h4>
        </div>

        {/* The Wind Center */}
        <div className="flex flex-col gap-xxl md:gap-3xl max-width-center pt-3xl sm:pt-4xl">
          <CenterTextSection title={'WE Pathway Steps'} description={'lorem Ipsum'} />

          {/* Tablet/Desktop */}
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-lg lg:gap-xl">
            {steps.map(({ title, image, description }) => (
              <ImageWithTitleAndHiddenTextCard
                key={`desktop-${title}`}
                image={image}
                description={description}
                title={
                  <Text htmlTag="h2" highlight={[[0, 0]]}>
                    {title}
                  </Text>
                }
              />
            ))}
          </div>

          {/* Mobile */}
          <SimpleCarousel
            className="sm:hidden"
            slides={steps.map(({ title, image, description }) => (
              <ImageWithTitleAndHiddenTextCard
                key={`mobile-${title}`}
                image={image}
                description={description}
                title={
                  <Text htmlTag="h2" highlight={[[0, 0]]}>
                    {title}
                  </Text>
                }
              />
            ))}
          />
        </div>
      </div>

      {/* Decorative Border */}
      <div className="absolute top-0 right-0 bottom-0 w-[5px] md:w-3 min-h-full bg-brand-primary" />
    </div>
  );
};

export default WePathwayPage;
