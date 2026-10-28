'use client';

import ScriptureWithIcon from '@/components/cards/scripture-with-icon/ScriptureWithIcon';
import CarouselArrows from '@/components/carousels/carousel-arrows/CarouselArrows';
import PageHeaderWithBackground from '@/components/heroes/page-header-with-background/PageHeaderWithBackground';
import Bible from '@/components/icons/bible';
import Buidling from '@/components/icons/building';
import ClipboardList from '@/components/icons/clipboard-list';
import ConciergeBell from '@/components/icons/concierge-bell';
import Cross from '@/components/icons/cross';
import Crown from '@/components/icons/crown';
import Dove from '@/components/icons/dove';
import Fire from '@/components/icons/fire';
import Flag from '@/components/icons/flag';
import FlagCheckered from '@/components/icons/flag-checkered';
import Gift from '@/components/icons/gift';
import HandHoldingHeart from '@/components/icons/hand-holding-heart';
import Handshake from '@/components/icons/handshake';
import LifeRing from '@/components/icons/life-ring';
import Location from '@/components/icons/location';
import Paintbrush from '@/components/icons/paintbursh';
import PeopleGroup from '@/components/icons/people-group';
import PersonFalling from '@/components/icons/person-falling';
import PersonPraying from '@/components/icons/person-praying';
import PersonWalking from '@/components/icons/person-walking';
import Seedling from '@/components/icons/seedling';
import SunWithClouds from '@/components/icons/sun-with-clouds';
import Temperature from '@/components/icons/temperature';
import ThumbsDown from '@/components/icons/thumbs-down';
import ScriptureList from '@/components/sections/scripture-list/ScriptureList';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import { TabItem, Tabs, TabsRef } from 'flowbite-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

const FoursquareClient = () => {
  const t = useTranslations('Foursquare');

  const tabsRef = useRef<TabsRef>(null);
  const [active, setActive] = useState(0);
  const anchorRef = useRef<HTMLDivElement>(null);

  const scrollFunc = () => {
    if (!window) return;
    if (!anchorRef.current) return;
    window.scrollTo({
      left: 0,
      behavior: 'smooth',
      top: anchorRef.current.offsetTop - 100,
    });
  };

  const titles = [t('tabTitles.0'), t('tabTitles.1'), t('tabTitles.2'), t('tabTitles.3')];

  const lastIndex = titles.length - 1;

  const foursquareBeliefsArr = [
    {
      icon: ClipboardList,
      title: t('tabContent.2.accordionItem1.plan.title'),
      verse: t('tabContent.2.accordionItem1.plan.verse'),
      passage: t('tabContent.2.accordionItem1.plan.description'),
    },
    {
      icon: LifeRing,
      title: t('tabContent.2.accordionItem1.salvation.title'),
      verse: t('tabContent.2.accordionItem1.salvation.verse'),
      passage: t('tabContent.2.accordionItem1.salvation.description'),
    },
    {
      icon: Bible,
      title: t('tabContent.2.accordionItem1.scriptures.title'),
      verse: t('tabContent.2.accordionItem1.scriptures.verse'),
      passage: t('tabContent.2.accordionItem1.scriptures.description'),
    },
    {
      icon: PeopleGroup,
      title: t('tabContent.2.accordionItem1.eternal.title'),
      verse: t('tabContent.2.accordionItem1.eternal.verse'),
      passage: t('tabContent.2.accordionItem1.eternal.description'),
    },
    {
      icon: PersonFalling,
      title: t('tabContent.2.accordionItem1.fall.title'),
      verse: t('tabContent.2.accordionItem1.fall.verse'),
      passage: t('tabContent.2.accordionItem1.fall.description'),
    },
    {
      icon: Handshake,
      title: t('tabContent.2.accordionItem2.relationship.title'),
      verse: t('tabContent.2.accordionItem2.relationship.verse'),
      passage: t('tabContent.2.accordionItem2.relationship.description'),
    },
    {
      icon: Buidling,
      title: t('tabContent.2.accordionItem2.civil.title'),
      verse: t('tabContent.2.accordionItem2.civil.verse'),
      passage: t('tabContent.2.accordionItem2.civil.description'),
    },
    {
      icon: FlagCheckered,
      title: t('tabContent.2.accordionItem2.final.title'),
      verse: t('tabContent.2.accordionItem2.final.verse'),
      passage: t('tabContent.2.accordionItem2.final.description'),
    },
    {
      icon: SunWithClouds,
      title: t('tabContent.2.accordionItem2.heaven.title'),
      verse: t('tabContent.2.accordionItem2.heaven.verse'),
      passage: t('tabContent.2.accordionItem2.heaven.description'),
    },
    {
      icon: ThumbsDown,
      title: t('tabContent.2.accordionItem2.hell.title'),
      verse: t('tabContent.2.accordionItem2.hell.verse'),
      passage: t('tabContent.2.accordionItem2.hell.description'),
    },
    {
      icon: PersonPraying,
      title: t('tabContent.2.accordionItem3.repent.title'),
      verse: t('tabContent.2.accordionItem3.repent.verse'),
      passage: t('tabContent.2.accordionItem3.repent.description'),
    },
    {
      icon: Fire,
      title: t('tabContent.2.accordionItem3.new.title'),
      verse: t('tabContent.2.accordionItem3.new.verse'),
      passage: t('tabContent.2.accordionItem3.new.description'),
    },
    {
      icon: PersonWalking,
      title: t('tabContent.2.accordionItem3.daily.title'),
      verse: t('tabContent.2.accordionItem3.daily.verse'),
      passage: t('tabContent.2.accordionItem3.daily.description'),
    },
    {
      icon: ConciergeBell,
      title: t('tabContent.2.accordionItem3.supper.title'),
      verse: t('tabContent.2.accordionItem3.supper.verse'),
      passage: t('tabContent.2.accordionItem3.supper.description'),
    },
    {
      icon: Dove,
      title: t('tabContent.2.accordionItem3.spirit.title'),
      verse: t('tabContent.2.accordionItem3.spirit.verse'),
      passage: t('tabContent.2.accordionItem3.spirit.description'),
    },
    {
      icon: Paintbrush,
      title: t('tabContent.2.accordionItem4.life.title'),
      verse: t('tabContent.2.accordionItem4.life.verse'),
      passage: t('tabContent.2.accordionItem4.life.description'),
    },
    {
      icon: Gift,
      title: t('tabContent.2.accordionItem4.gifts.title'),
      verse: t('tabContent.2.accordionItem4.gifts.verse'),
      passage: t('tabContent.2.accordionItem4.gifts.description'),
    },
    {
      icon: Temperature,
      title: t('tabContent.2.accordionItem4.moderation.title'),
      verse: t('tabContent.2.accordionItem4.moderation.verse'),
      passage: t('tabContent.2.accordionItem4.moderation.description'),
    },
    {
      icon: Cross,
      title: t('tabContent.2.accordionItem4.divine.title'),
      verse: t('tabContent.2.accordionItem4.divine.verse'),
      passage: t('tabContent.2.accordionItem4.divine.description'),
    },
    {
      icon: Crown,
      title: t('tabContent.2.accordionItem4.coming.title'),
      verse: t('tabContent.2.accordionItem4.coming.verse'),
      passage: t('tabContent.2.accordionItem4.coming.description'),
    },
    {
      icon: Seedling,
      title: t('tabContent.2.accordionItem4.evangelism.title'),
      verse: t('tabContent.2.accordionItem4.evangelism.verse'),
      passage: t('tabContent.2.accordionItem4.evangelism.description'),
    },
    {
      icon: HandHoldingHeart,
      title: t('tabContent.2.accordionItem4.tithes.title'),
      verse: t('tabContent.2.accordionItem4.tithes.verse'),
      passage: t('tabContent.2.accordionItem4.tithes.description'),
    },
  ];

  return (
    <div className="px-padding flex flex-col gap-xxl lg:gap-3xl max-width-center">
      <PageHeaderWithBackground
        title={t('title')}
        subtitle={t('subtitle')}
        media={{ src: '/images/foursquare/group-people.jpg', alt: t('alt') }}
      />

      <div ref={anchorRef} />
      <Tabs variant="default" ref={tabsRef} onActiveTabChange={(tab) => setActive(tab)}>
        <TabItem title={titles[0]} icon={Location}>
          <div className="flex flex-col gap-xl p-lg">
            <h5 className="text-justify">{t('tabContent.0.descriptions.0')}</h5>
            <h5 className="text-justify">{t('tabContent.0.descriptions.1')}</h5>
          </div>
        </TabItem>
        <TabItem title={titles[1]} icon={Buidling}>
          <div className="flex flex-col gap-xl p-lg">
            <SectionHeader
              title={t('tabContent.1.header.title')}
              subtitle={t('tabContent.1.header.subtitle')}
            />

            <h5 className="text-justify">{t('tabContent.1.descriptions.0')}</h5>
            <h5 className="text-justify">{t('tabContent.1.descriptions.1')}</h5>
            <h5 className="text-justify">{t('tabContent.1.descriptions.2')}</h5>
            <h5 className="text-justify">{t('tabContent.1.descriptions.3')}</h5>
            <h5 className="text-justify">{t('tabContent.1.descriptions.4')}</h5>
            <h5 className="text-justify">{t('tabContent.1.descriptions.5')}</h5>
            <h5 className="text-justify">{t('tabContent.1.descriptions.6')}</h5>
            <ul className="list-disc list-outside ml-5 sm:ml-8 space-y-sm">
              <li>
                <h5>{t('tabContent.1.descriptions.7')}</h5>
              </li>
              <li>
                <h5>{t('tabContent.1.descriptions.8')}</h5>
              </li>
              <li>
                <h5>{t('tabContent.1.descriptions.9')}</h5>
              </li>
              <li>
                <h5>{t('tabContent.1.descriptions.10')}</h5>
              </li>
              <li>
                <h5>{t('tabContent.1.descriptions.11')}</h5>
              </li>
              <li>
                <h5>{t('tabContent.1.descriptions.12')}</h5>
              </li>
              <li>
                <h5>{t('tabContent.1.descriptions.13')}</h5>
              </li>
            </ul>
            <h5 className="text-justify">{t('tabContent.1.descriptions.14')}</h5>
            <h5 className="text-justify">{t('tabContent.1.descriptions.15')}</h5>
            <h5 className="text-justify">
              {t.rich('tabContent.1.descriptions.16', {
                link: (chunks) => (
                  <Link href="www.foursquare.org" target="_blank" className="text-link underline">
                    {chunks}
                  </Link>
                ),
              })}
            </h5>
          </div>
        </TabItem>
        <TabItem title={titles[2]} icon={Cross}>
          <div className="flex flex-col gap-xl p-lg">
            <SectionHeader title={t('tabContent.2.header.title')} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-lg">
              {foursquareBeliefsArr.map((item, idx) => (
                <div key={`learn-page-foursquare-${item.title}-${idx}`} className="mx-auto">
                  <ScriptureWithIcon
                    icon={item.icon}
                    title={item.title}
                    verse={item.verse}
                    passage={item.passage}
                  />
                </div>
              ))}
            </div>
          </div>
        </TabItem>
        <TabItem title={titles[3]} icon={Flag}>
          <div className="flex flex-col gap-xl p-lg">
            {/* LOGO SECTION */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-xl place-items-center">
              <div className="sm:col-span-2 space-y-md">
                <SectionHeader title={t('tabContent.3.section1.header')} />

                <h5>{t('tabContent.3.section1.descriptions.0')}</h5>

                <h5>
                  {t.rich('tabContent.3.section1.descriptions.1', {
                    bold: (chunks) => <strong>{chunks}</strong>,
                  })}
                </h5>
                <h5>
                  {t.rich('tabContent.3.section1.descriptions.2', {
                    bold: (chunks) => <strong>{chunks}</strong>,
                  })}
                </h5>
                <h5>
                  {t.rich('tabContent.3.section1.descriptions.3', {
                    bold: (chunks) => <strong>{chunks}</strong>,
                  })}
                </h5>
                <h5>
                  {t.rich('tabContent.3.section1.descriptions.4', {
                    bold: (chunks) => <strong>{chunks}</strong>,
                  })}
                </h5>

                <ScriptureList
                  scriptures={[
                    t('tabContent.3.section1.descriptions.5'),
                    t('tabContent.3.section1.descriptions.6'),
                    t('tabContent.3.section1.descriptions.7'),
                    t('tabContent.3.section1.descriptions.8'),
                    t('tabContent.3.section1.descriptions.9'),
                    t('tabContent.3.section1.descriptions.10'),
                    t('tabContent.3.section1.descriptions.11'),
                    t('tabContent.3.section1.descriptions.12'),
                  ]}
                />
              </div>

              <div className="relative w-full h-full aspect-square">
                <Image
                  fill
                  src="/images/foursquare/logo.webp"
                  alt={t('tabContent.3.section1.logoAlt')}
                />
              </div>
            </div>

            {/* EMBLEM SECTION */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-xl place-items-center">
              <div className="relative w-full h-full aspect-square">
                <Image
                  fill
                  src={'/images/foursquare/emblem.webp'}
                  alt={t('tabContent.3.section2.logoAlt')}
                />
              </div>

              <div className="sm:col-span-2 space-y-md">
                <SectionHeader title={t('tabContent.3.section2.header')} />

                <h5>{t('tabContent.3.section2.descriptions.0')}</h5>

                <h5>
                  {t.rich('tabContent.3.section2.descriptions.1', {
                    bold: (chunks) => <strong>{chunks}</strong>,
                  })}
                </h5>
                <h5>
                  {t.rich('tabContent.3.section2.descriptions.2', {
                    bold: (chunks) => <strong>{chunks}</strong>,
                  })}
                </h5>
                <h5>
                  {t.rich('tabContent.3.section2.descriptions.3', {
                    bold: (chunks) => <strong>{chunks}</strong>,
                  })}
                </h5>
                <h5>
                  {t.rich('tabContent.3.section2.descriptions.4', {
                    bold: (chunks) => <strong>{chunks}</strong>,
                  })}
                </h5>

                <ScriptureList
                  scriptures={[
                    t('tabContent.3.section2.descriptions.5'),
                    t('tabContent.3.section2.descriptions.6'),
                  ]}
                />
              </div>
            </div>

            {/* FLAG SECTION */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-xl place-items-center">
              <div className="sm:col-span-2 space-y-md">
                <SectionHeader title={t('tabContent.3.section3.header')} />

                <h5>{t('tabContent.3.section3.descriptions.0')}</h5>

                <h5>
                  {t.rich('tabContent.3.section3.descriptions.1', {
                    bold: (chunks) => <strong>{chunks}</strong>,
                  })}
                </h5>
                <h5>
                  {t.rich('tabContent.3.section3.descriptions.2', {
                    bold: (chunks) => <strong>{chunks}</strong>,
                  })}
                </h5>
                <h5>
                  {t.rich('tabContent.3.section3.descriptions.3', {
                    bold: (chunks) => <strong>{chunks}</strong>,
                  })}
                </h5>
                <h5>
                  {t.rich('tabContent.3.section3.descriptions.4', {
                    bold: (chunks) => <strong>{chunks}</strong>,
                  })}
                </h5>

                <ScriptureList scriptures={[t('tabContent.3.section3.descriptions.5')]} />
              </div>

              <div className="relative w-full h-full aspect-square">
                <Image
                  fill
                  src="/images/foursquare/flag.webp"
                  alt={t('tabContent.3.section3.logoAlt')}
                  className="object-contain aspect-video mx-auto"
                />
              </div>
            </div>
          </div>
        </TabItem>
      </Tabs>

      <div className="-mt-2 flex justify-end items-center gap-md p-md">
        {/* Previous label */}
        <p className="italic font-light text-light-charcoal dark:text-dark-charcoal">
          {titles[active === 0 ? lastIndex : active - 1]}
        </p>

        <CarouselArrows
          className="w-fit"
          leftArrowProps={{
            onClick: () => {
              const newIndex = active === 0 ? lastIndex : active - 1;
              setActive(newIndex);
              tabsRef.current?.setActiveTab(newIndex);
              scrollFunc();
            },
          }}
          rightArrowProps={{
            onClick: () => {
              const newIndex = active === lastIndex ? 0 : active + 1;
              setActive(newIndex);
              tabsRef.current?.setActiveTab(newIndex);
              scrollFunc();
            },
          }}
        />

        {/* Next label */}
        <p className="italic font-light text-light-charcoal dark:text-dark-charcoal">
          {titles[active === lastIndex ? 0 : active + 1]}
        </p>
      </div>
    </div>
  );
};

export default FoursquareClient;
