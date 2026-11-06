import ImageWithTitleDescriptionLinkCard from '@/components/cards/image-with-title-description-link-card/ImageWithTitleAndHiddenTextCard';
import Text from '@/components/forms/inputs/text/Text';
import PageHero from '@/components/heroes/page-hero/PageHero';
import PreviewSermon from '@/components/preview-sermon/PreviewSermon';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import { Locale } from '@/data/i18n/utils';
import { PageRoutes } from '@/data/page-routes';
import { AWS_ASSET_URL, WEBSITE_URL, YOUTUBE } from '@/data/server/env.server';
import { getLatestSermon } from '@/data/server/youtube/playlists';

import { getLocale, getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations({ locale, namespace: 'Home' });

  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_URL}/`;
  const image = '/images/wind_church_building.webp';

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
      description,
      images: [image],
    },
  };
}

const Home = async () => {
  const result = await getLatestSermon();

  const exploreOptions = [
    {
      image: {
        alt: 'People gathering for church service',
        src: '/images/product-placeholder.webp',
      },
      title: 'Who we are',
      description: 'Learn our values, facts about our pastor, and more!',
      link: PageRoutes.about,
    },
    {
      image: {
        alt: 'Group in Bible study session',
        src: '/images/home/group-selfie.webp',
      },
      title: 'Step Into Ministry',
      description: 'We have ministries for every age and stage.',
      link: PageRoutes.ministries,
    },
    {
      image: {
        alt: 'Group in Bible study session',
        src: '/images/home/group-study.webp',
      },
      title: 'Try our Deep Dives',
      description: 'Explore the Word in a deeper way with small-group Bible studies.',
      link: PageRoutes.deepDive,
    },
    {
      image: {
        alt: 'Children in a classroom during youth service',
        src: '/images/home/girl-with-box.webp',
      },
      title: 'Know your gifts!',
      description: 'Discover your spiritual gifts with our easy assessment!',
      link: PageRoutes.giftAssessment,
    },
    {
      image: {
        alt: 'Group in Bible study session',
        src: '/images/home/planning.webp',
      },
      title: 'Have an event?',
      description: 'Interested in renting our church? Get details and request your date today.',
      link: PageRoutes.churchRental,
    },
  ];

  return (
    <div>
      <PageHero
        size="full"
        title="Honor God. Love People."
        highlightTitle={[
          [0, 0],
          [2, 2],
          [4, 4],
        ]}
        italicSubtitle="Serve this generation."
        description="Committed to discipleship, worship, community impact, and helping people grow in faith and purpose."
        media={{
          src: `${AWS_ASSET_URL}/friend-group.mp4`,
          poster: '/images/friend-group.webp',
        }}
        ctas={[{ label: 'Learn more', href: PageRoutes.about }]}
        scrollTo={{ label: 'Explore', href: 'overview', variant: 'teritiary' }}
        stats={[
          { value: 'Christ', label: 'Centered' },
          { value: '24/7', label: 'Prayer Support' },
          { value: '1996', label: 'Founded' },
        ]}
      />

      {/* OVERVIEW */}
      <div id="overview" className="max-width-center py-4xl sm:my-3xl">
        <div className="flex flex-col gap-lg px-padding">
          {/* WELCOME */}
          <Text htmlTag="h2" highlight={[[0, 0]]}>
            Welcome to The Wind Church
          </Text>

          {/* INTRO */}
          <h4 className="lg:max-w-[75%]">
            A Christ-focused community where lives are transformed and hope is restored. We gather
            to worship, grow, and walk out our faith together. Whether you join us{' '}
            <Link
              href="https://www.google.com/search?q=wind+of+the+spirit+worship+center"
              target="_blank"
              className="text-link underline"
            >
              in person
            </Link>{' '}
            or{' '}
            <Link href={YOUTUBE} target="_blank" className="text-link underline">
              online,
            </Link>{' '}
            we&apos;d love to meet you and help you take your next step with Jesus.
          </h4>

          {/* SERVICE TIMES */}
          <h3 className="dark:text-brand-primary">
            Sundays 9AM <span className="dark:text-dark-primaryText">•</span> Wednesdays 7PM
          </h3>
        </div>
      </div>

      {/* LATEST SERMON */}
      <PreviewSermon data={result.data} />

      {/* EXPLORE CTAs */}
      <div className="flex flex-col gap-xl md:gap-xxl max-width-center pt-3xl sm:pt-4xl px-padding">
        <CenterTextSection title="Explore The Wind" description="There's much to do here!" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-lg lg:gap-xl place-items-center">
          {exploreOptions.map((opt) => (
            <ImageWithTitleDescriptionLinkCard key={`home-explore-options-${opt.link}`} {...opt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
