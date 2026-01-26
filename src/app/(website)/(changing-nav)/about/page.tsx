import { getTranslations } from 'next-intl/server';

import Accordion from '@/components/accordion/Accordion';
import ImageWithTitleAndHiddenTextCard from '@/components/cards/image-with-title-and-hidden-text-card/ImageWithTitleAndHiddenTextCard';
import ScriptureWithIcon from '@/components/cards/scripture-with-icon/ScriptureWithIcon';
import CenterModeMediaWithTextCarousel from '@/components/carousels/center-mode-media-with-text-carousel/CenterModeMediaWithTextCarousel';
import FullscreenMediaWithSideTextCarousel from '@/components/carousels/fullscreen-media-with-side-text-carousel/FullscreenMediaWithSideTextCarousel';
import SimpleCarousel from '@/components/carousels/simple-carousel/SimpleCarousel';
import PageHero from '@/components/heroes/page-hero/PageHero';
import Bible from '@/components/icons/bible';

import Buidling from '@/components/icons/building';
import ClipboardList from '@/components/icons/clipboard-list';
import ConciergeBell from '@/components/icons/concierge-bell';
import Cross from '@/components/icons/cross';
import Crown from '@/components/icons/crown';
import Dove from '@/components/icons/dove';
import Fire from '@/components/icons/fire';
import FlagCheckered from '@/components/icons/flag-checkered';
import Gift from '@/components/icons/gift';
import LifeRing from '@/components/icons/life-ring';
import Paintbrush from '@/components/icons/paintbursh';
import PeopleGroup from '@/components/icons/people-group';
import PersonFalling from '@/components/icons/person-falling';
import PersonPraying from '@/components/icons/person-praying';
import PersonWalking from '@/components/icons/person-walking';
import SunWithClouds from '@/components/icons/sun-with-clouds';
import Temperature from '@/components/icons/temperature';
import ThumbsDown from '@/components/icons/thumbs-down';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import ScriptureList from '@/components/sections/scripture-list/ScriptureList';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import { AWS_ASSET_BASE_URL, WEBSITE_BASE_URL } from '@/data/constants';
import { PageRoutes } from '@/data/page-routes';
import { styleSelectedWords } from '@/data/utils';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'About' });
  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_BASE_URL}${PageRoutes.about}`;
  const image = `${AWS_ASSET_BASE_URL}/placeholder-media/group_people.jpg`;
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
      title,
      description,
      images: [image],
    },
  };
}

const About = async () => {
  const t = await getTranslations('About');

  const aboutPastorArr = [
    {
      media: {
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/pastor.webp`,
        alt: t('alt'),
      },
      title: t('aboutPastor.title'),
      description: t('aboutPastor.subtitle'),
    },
    {
      media: {
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/contro.webp`,
        alt: t('alt'),
      },
      title: t('aboutPastor.history.title'),
      description: t('aboutPastor.history.description'),
    },
    {
      media: {
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/members.webp`,
        alt: t('alt'),
      },
      title: t('aboutPastor.why.title'),
      description: t('aboutPastor.why.description'),
    },
    {
      media: {
        src: `${AWS_ASSET_BASE_URL}/images/wind_church_building.webp`,
        alt: t('alt'),
      },
      title: t('aboutPastor.goals.title'),
      description: t('aboutPastor.goals.description'),
    },
    {
      media: {
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/lxg_meet.webp`,
        alt: t('alt'),
      },
      title: t('aboutPastor.fact.title'),
      description: t('aboutPastor.fact.description'),
    },
  ];

  const theWindCenterArr = [
    {
      image: {
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/people_hug.jpg`,
        alt: t('alt'),
      },
      title: t('values.jesus.title'),
      highlight: [[2, 2]],
      description: t('values.jesus.description'),
    },
    {
      image: {
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/praise_hands.jpg`,
        alt: t('alt'),
      },
      title: t('values.worship.title'),
      highlight: [[1, 1]],
      description: t('values.worship.description'),
    },
    {
      image: {
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/family.jpeg`,
        alt: t('alt'),
      },
      title: t('values.family.title'),
      highlight: [[1, 1]],
      description: t('values.family.description'),
    },
    {
      image: {
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/outreach.png`,
        alt: t('alt'),
      },
      title: t('values.serve.title'),
      highlight: [[1, 1]],
      description: t('values.serve.description'),
    },
    {
      image: {
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/group_women.jpg`,
        alt: t('alt'),
      },
      title: t('values.love.title'),
      highlight: [[1, 1]],
      description: t('values.love.description'),
    },
    {
      image: {
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/food_bank.jpg`,
        alt: t('alt'),
      },
      title: t('values.transform.title'),
      highlight: [[1, 1]],
      description: t('values.transform.description'),
    },
  ];

  const foursquareBeliefsArr = [
    {
      image: `${AWS_ASSET_BASE_URL}/images/foursquare/cross.png`,
      title: t('foursquare.accordionItem1.title'),
      items: [
        {
          icon: ClipboardList,
          title: t('foursquare.accordionItem1.plan.title'),
          verse: t('foursquare.accordionItem1.plan.verse'),
          passage: t('foursquare.accordionItem1.plan.description'),
        },
        {
          icon: LifeRing,
          title: t('foursquare.accordionItem1.salvation.title'),
          verse: t('foursquare.accordionItem1.salvation.verse'),
          passage: t('foursquare.accordionItem1.salvation.description'),
        },
        {
          icon: Bible,
          title: t('foursquare.accordionItem1.scriptures.title'),
          verse: t('foursquare.accordionItem1.scriptures.verse'),
          passage: t('foursquare.accordionItem1.scriptures.description'),
        },
        {
          icon: PeopleGroup,
          title: t('foursquare.accordionItem1.eternal.title'),
          verse: t('foursquare.accordionItem1.eternal.verse'),
          passage: t('foursquare.accordionItem1.eternal.description'),
        },
        {
          icon: PersonFalling,
          title: t('foursquare.accordionItem1.fall.title'),
          verse: t('foursquare.accordionItem1.fall.verse'),
          passage: t('foursquare.accordionItem1.fall.description'),
        },
      ],
    },

    {
      image: `${AWS_ASSET_BASE_URL}/images/foursquare/dove.png`,
      title: t('foursquare.accordionItem2.title'),
      items: [
        {
          icon: PeopleGroup,
          title: t('foursquare.accordionItem2.relationship.title'),
          verse: t('foursquare.accordionItem2.relationship.verse'),
          passage: t('foursquare.accordionItem2.relationship.description'),
        },
        {
          icon: Buidling,
          title: t('foursquare.accordionItem2.civil.title'),
          verse: t('foursquare.accordionItem2.civil.verse'),
          passage: t('foursquare.accordionItem2.civil.description'),
        },
        {
          icon: FlagCheckered,
          title: t('foursquare.accordionItem2.final.title'),
          verse: t('foursquare.accordionItem2.final.verse'),
          passage: t('foursquare.accordionItem2.final.description'),
        },
        {
          icon: SunWithClouds,
          title: t('foursquare.accordionItem2.heaven.title'),
          verse: t('foursquare.accordionItem2.heaven.verse'),
          passage: t('foursquare.accordionItem2.heaven.description'),
        },
        {
          icon: ThumbsDown,
          title: t('foursquare.accordionItem2.hell.title'),
          verse: t('foursquare.accordionItem2.hell.verse'),
          passage: t('foursquare.accordionItem2.hell.description'),
        },
      ],
    },

    {
      image: `${AWS_ASSET_BASE_URL}/images/foursquare/cup.png`,
      title: t('foursquare.accordionItem3.title'),
      items: [
        {
          icon: PersonPraying,
          title: t('foursquare.accordionItem3.repent.title'),
          verse: t('foursquare.accordionItem3.repent.verse'),
          passage: t('foursquare.accordionItem3.repent.description'),
        },
        {
          icon: Fire,
          title: t('foursquare.accordionItem3.new.title'),
          verse: t('foursquare.accordionItem3.new.verse'),
          passage: t('foursquare.accordionItem3.new.description'),
        },
        {
          icon: PersonWalking,
          title: t('foursquare.accordionItem3.daily.title'),
          verse: t('foursquare.accordionItem3.daily.verse'),
          passage: t('foursquare.accordionItem3.daily.description'),
        },
        {
          icon: ConciergeBell,
          title: t('foursquare.accordionItem3.supper.title'),
          verse: t('foursquare.accordionItem3.supper.verse'),
          passage: t('foursquare.accordionItem3.supper.description'),
        },
        {
          icon: Dove,
          title: t('foursquare.accordionItem3.spirit.title'),
          verse: t('foursquare.accordionItem3.spirit.verse'),
          passage: t('foursquare.accordionItem3.spirit.description'),
        },
      ],
    },

    {
      image: `${AWS_ASSET_BASE_URL}/images/foursquare/crown.png`,
      title: t('foursquare.accordionItem4.title'),
      items: [
        {
          icon: Paintbrush,
          title: t('foursquare.accordionItem4.life.title'),
          verse: t('foursquare.accordionItem4.life.verse'),
          passage: t('foursquare.accordionItem4.life.description'),
        },
        {
          icon: Gift,
          title: t('foursquare.accordionItem4.gifts.title'),
          verse: t('foursquare.accordionItem4.gifts.verse'),
          passage: t('foursquare.accordionItem4.gifts.description'),
        },
        {
          icon: Temperature,
          title: t('foursquare.accordionItem4.moderation.title'),
          verse: t('foursquare.accordionItem4.moderation.verse'),
          passage: t('foursquare.accordionItem4.moderation.description'),
        },
        {
          icon: Cross,
          title: t('foursquare.accordionItem4.divine.title'),
          verse: t('foursquare.accordionItem4.divine.verse'),
          passage: t('foursquare.accordionItem4.divine.description'),
        },
        {
          icon: Crown,
          title: t('foursquare.accordionItem4.coming.title'),
          verse: t('foursquare.accordionItem4.coming.verse'),
          passage: t('foursquare.accordionItem4.coming.description'),
        },
      ],
    },
  ];

  return (
    <div>
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        highlightTitle={[[0, 1]]}
        media={{ src: `${AWS_ASSET_BASE_URL}/placeholder-media/group_people.jpg` }}
      />

      {/* Mission and Vision */}
      <div id={t('mission.id')} className="max-width-center py-3xl sm:py-4xl lg:px-4xl">
        <div className="flex flex-col gap-xxl px-padding">
          {/* Mission */}
          <div className="flex flex-col gap-lg">
            <h1>{t('mission.title')}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: styleSelectedWords({
                  text: t('mission.subtitle'),
                  array: [[0, 9]],
                  htmlTag: 'h2',
                }),
              }}
            />
            <h4>{t('mission.description')}</h4>
          </div>

          {/* Vision */}
          <div className="flex flex-col gap-lg">
            <h1>{t('vision.title')}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: styleSelectedWords({
                  text: t('vision.subtitle'),
                  array: [[0, 7]],
                  htmlTag: 'h2',
                }),
              }}
            />
            <h4>{t('vision.description')}</h4>
            <ScriptureList
              scriptures={[
                t('vision.verse1'),
                t('vision.verse2'),
                t('vision.verse3'),
                t('vision.verse4'),
                t('vision.verse5'),
              ]}
            />
          </div>
        </div>
      </div>

      {/* About Pastor */}
      <div id={t('aboutPastor.id')}>
        <FullscreenMediaWithSideTextCarousel slides={aboutPastorArr} />
      </div>

      {/* The Wind Center */}
      <div
        id={t('values.id')}
        className="flex flex-col gap-xxl md:gap-3xl max-width-center pt-3xl sm:pt-4xl px-padding"
      >
        <CenterTextSection title={t('values.title')} description={t('values.subtitle')} />

        {/* Tablet/Desktop */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-lg lg:gap-xl">
          {theWindCenterArr.map((item) => (
            <ImageWithTitleAndHiddenTextCard
              key={item.title}
              image={item.image}
              title={
                <div
                  dangerouslySetInnerHTML={{
                    __html: styleSelectedWords({
                      text: item.title,
                      array: item.highlight,
                      htmlTag: 'h2',
                    }),
                  }}
                />
              }
              description={item.description}
            />
          ))}
        </div>

        {/* Mobile */}
        <SimpleCarousel
          className="sm:hidden"
          slides={theWindCenterArr.map((item) => (
            <ImageWithTitleAndHiddenTextCard
              key={item.title}
              image={item.image}
              title={
                <div
                  dangerouslySetInnerHTML={{
                    __html: styleSelectedWords({
                      text: item.title,
                      array: item.highlight,
                      htmlTag: 'h2',
                    }),
                  }}
                />
              }
              description={item.description}
            />
          ))}
        />
      </div>

      {/* Foursquare */}
      <div
        id={t('foursquare.id')}
        className="flex flex-col gap-xl md:gap-xxl max-width-center pt-3xl sm:pt-4xl px-padding"
      >
        <div className="flex flex-col gap-lg max-width">
          <SectionHeader title={t('foursquare.title')} subtitle={t('foursquare.subtitle')} />
          <h5 className="lg:max-w-[60%]">{t('foursquare.description')}</h5>
        </div>

        <Accordion
          content={foursquareBeliefsArr.map((section) => ({
            image: section.image,
            title: section.title,
            description: (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-5 place-items-start place-content-center">
                {section.items.map((item, idx) => (
                  <ScriptureWithIcon
                    key={`about-page-foursquare-${item.title}-${idx}`}
                    icon={item.icon}
                    title={item.title}
                    verse={item.verse}
                    passage={item.passage}
                  />
                ))}
              </div>
            ),
          }))}
        />
      </div>

      {/* History */}
      <div id={t('history.id')} className="flex flex-col gap-xl md:gap-xxl pt-3xl sm:pt-4xl">
        <div className="px-padding flex flex-col gap-lg max-width">
          <SectionHeader title={t('history.title')} subtitle={t('history.subtitle')} />
          <h5 className="lg:max-w-[60%]">{t('history.description')}</h5>
        </div>

        <CenterModeMediaWithTextCarousel
          slides={[
            {
              media: {
                src: `${AWS_ASSET_BASE_URL}/placeholder-media/old_church_photo_1.webp`,
                alt: t('alt'),
              },
              description: t('history.carouselItem1'),
            },
            {
              media: {
                src: `${AWS_ASSET_BASE_URL}/placeholder-media/members.webp`,
                alt: t('alt'),
              },
              description: t('history.carouselItem2'),
            },
            {
              media: {
                src: `${AWS_ASSET_BASE_URL}/placeholder-media/lxg_meet.webp`,
                alt: t('alt'),
              },
              description: t('history.carouselItem3'),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default About;
