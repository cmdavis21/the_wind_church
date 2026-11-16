'use client';

import Accordion from '@/components/accordion/Accordion';
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
import Handshake from '@/components/icons/handshake';
import LifeRing from '@/components/icons/life-ring';
import Location from '@/components/icons/location';
import Paintbrush from '@/components/icons/paintbursh';
import PeopleGroup from '@/components/icons/people-group';
import PersonFalling from '@/components/icons/person-falling';
import PersonPraying from '@/components/icons/person-praying';
import PersonWalking from '@/components/icons/person-walking';
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

  const titles = [t('titles.0'), t('titles.1'), t('titles.2'), t('titles.3')];

  const lastIndex = titles.length - 1;

  const beliefs = [
    {
      image: '/images/foursquare/cross.webp',
      title: t('items.2.savior.title'),
      items: [
        {
          icon: ClipboardList,
          title: t('items.2.savior.plan.title'),
          verse: t('items.2.savior.plan.verse'),
          passage: t('items.2.savior.plan.description'),
        },
        {
          icon: LifeRing,
          title: t('items.2.savior.salvation.title'),
          verse: t('items.2.savior.salvation.verse'),
          passage: t('items.2.savior.salvation.description'),
        },
        {
          icon: Bible,
          title: t('items.2.savior.scriptures.title'),
          verse: t('items.2.savior.scriptures.verse'),
          passage: t('items.2.savior.scriptures.description'),
        },
        {
          icon: PeopleGroup,
          title: t('items.2.savior.eternal.title'),
          verse: t('items.2.savior.eternal.verse'),
          passage: t('items.2.savior.eternal.description'),
        },
        {
          icon: PersonFalling,
          title: t('items.2.savior.fall.title'),
          verse: t('items.2.savior.fall.verse'),
          passage: t('items.2.savior.fall.description'),
        },
      ],
    },
    {
      image: '/images/foursquare/dove.webp',
      title: t('items.2.baptizer.title'),
      items: [
        {
          icon: Handshake,
          title: t('items.2.baptizer.relationship.title'),
          verse: t('items.2.baptizer.relationship.verse'),
          passage: t('items.2.baptizer.relationship.description'),
        },
        {
          icon: Buidling,
          title: t('items.2.baptizer.civil.title'),
          verse: t('items.2.baptizer.civil.verse'),
          passage: t('items.2.baptizer.civil.description'),
        },
        {
          icon: FlagCheckered,
          title: t('items.2.baptizer.final.title'),
          verse: t('items.2.baptizer.final.verse'),
          passage: t('items.2.baptizer.final.description'),
        },
        {
          icon: SunWithClouds,
          title: t('items.2.baptizer.heaven.title'),
          verse: t('items.2.baptizer.heaven.verse'),
          passage: t('items.2.baptizer.heaven.description'),
        },
        {
          icon: ThumbsDown,
          title: t('items.2.baptizer.hell.title'),
          verse: t('items.2.baptizer.hell.verse'),
          passage: t('items.2.baptizer.hell.description'),
        },
      ],
    },
    {
      image: '/images/foursquare/cup.webp',
      title: t('items.2.healer.title'),
      items: [
        {
          icon: PersonPraying,
          title: t('items.2.healer.repent.title'),
          verse: t('items.2.healer.repent.verse'),
          passage: t('items.2.healer.repent.description'),
        },
        {
          icon: Fire,
          title: t('items.2.healer.new.title'),
          verse: t('items.2.healer.new.verse'),
          passage: t('items.2.healer.new.description'),
        },
        {
          icon: PersonWalking,
          title: t('items.2.healer.daily.title'),
          verse: t('items.2.healer.daily.verse'),
          passage: t('items.2.healer.daily.description'),
        },
        {
          icon: ConciergeBell,
          title: t('items.2.healer.supper.title'),
          verse: t('items.2.healer.supper.verse'),
          passage: t('items.2.healer.supper.description'),
        },
        {
          icon: Dove,
          title: t('items.2.healer.spirit.title'),
          verse: t('items.2.healer.spirit.verse'),
          passage: t('items.2.healer.spirit.description'),
        },
      ],
    },
    {
      image: '/images/foursquare/crown.webp',
      title: t('items.2.king.title'),
      items: [
        {
          icon: Paintbrush,
          title: t('items.2.king.life.title'),
          verse: t('items.2.king.life.verse'),
          passage: t('items.2.king.life.description'),
        },
        {
          icon: Gift,
          title: t('items.2.king.gifts.title'),
          verse: t('items.2.king.gifts.verse'),
          passage: t('items.2.king.gifts.description'),
        },
        {
          icon: Temperature,
          title: t('items.2.king.moderation.title'),
          verse: t('items.2.king.moderation.verse'),
          passage: t('items.2.king.moderation.description'),
        },
        {
          icon: Cross,
          title: t('items.2.king.divine.title'),
          verse: t('items.2.king.divine.verse'),
          passage: t('items.2.king.divine.description'),
        },
        {
          icon: Crown,
          title: t('items.2.king.coming.title'),
          verse: t('items.2.king.coming.verse'),
          passage: t('items.2.king.coming.description'),
        },
      ],
    },
  ];

  return (
    <div className="px-padding flex flex-col gap-xxl lg:gap-3xl max-width-center">
      <PageHeaderWithBackground
        title={t('title')}
        subtitle={t('subtitle')}
        media={{ src: '/images/foursquare/bible-with-wooden-crosses.webp', alt: t('alt') }}
      />

      <div ref={anchorRef} />
      <Tabs variant="default" ref={tabsRef} onActiveTabChange={(tab) => setActive(tab)}>
        <TabItem title={titles[0]} icon={Location}>
          <div className="flex flex-col gap-xl p-lg">
            <h4 className="text-justify">{t('items.0.descriptions.0')}</h4>
          </div>
        </TabItem>
        <TabItem title={titles[1]} icon={Buidling}>
          <div className="flex flex-col gap-xl p-lg">
            <h4 className="text-justify">{t('items.1.descriptions.0')}</h4>
            <h4 className="text-justify">{t('items.1.descriptions.1')}</h4>
            <h4 className="text-justify">{t('items.1.descriptions.2')}</h4>
            <h4 className="text-justify">{t('items.1.descriptions.3')}</h4>
            <h4 className="text-justify">{t('items.1.descriptions.4')}</h4>
            <h4 className="text-justify">{t('items.1.descriptions.5')}</h4>
            <h4 className="text-justify">{t('items.1.descriptions.6')}</h4>
            <ul className="list-disc list-outside ml-5 sm:ml-8 space-y-sm">
              <li>
                <h4>{t('items.1.descriptions.7')}</h4>
              </li>
              <li>
                <h4>{t('items.1.descriptions.8')}</h4>
              </li>
              <li>
                <h4>{t('items.1.descriptions.9')}</h4>
              </li>
              <li>
                <h4>{t('items.1.descriptions.10')}</h4>
              </li>
              <li>
                <h4>{t('items.1.descriptions.11')}</h4>
              </li>
              <li>
                <h4>{t('items.1.descriptions.12')}</h4>
              </li>
              <li>
                <h4>{t('items.1.descriptions.13')}</h4>
              </li>
            </ul>
            <h4 className="text-justify">{t('items.1.descriptions.14')}</h4>
            <h4 className="text-justify">{t('items.1.descriptions.15')}</h4>
            <h4 className="text-justify">
              {t.rich('items.1.descriptions.16', {
                link: (chunks) => (
                  <Link href="www.foursquare.org" target="_blank" className="text-link underline">
                    {chunks}
                  </Link>
                ),
              })}
            </h4>
          </div>
        </TabItem>
        <TabItem title={titles[2]} icon={Cross}>
          <div className="flex flex-col gap-xl p-lg">
            <SectionHeader title={t('items.2.header.title')} />

            <h4 className="text-justify pb-md">{t('items.2.descriptions.0')}</h4>

            <Accordion
              content={beliefs.map((section) => ({
                image: section.image,
                title: section.title,
                defaultOpen: true,
                description: (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
                    {section.items.map((item, idx) => (
                      <div key={`about-page-foursquare-${item.title}-${idx}`} className="mx-auto">
                        <ScriptureWithIcon
                          icon={item.icon}
                          title={item.title}
                          verse={item.verse}
                          passage={item.passage}
                        />
                      </div>
                    ))}
                  </div>
                ),
              }))}
            />
          </div>
        </TabItem>
        <TabItem title={titles[3]} icon={Flag}>
          <div className="flex flex-col gap-xl p-lg">
            {/* LOGO SECTION */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-xl place-items-center">
              <div className="sm:col-span-2 space-y-md">
                <SectionHeader title={t('items.3.section1.header')} />

                <h4 className="pt-md">{t('items.3.section1.descriptions.0')}</h4>

                <h4>
                  {t.rich('items.3.section1.descriptions.1', {
                    bold: (chunks) => <strong>{chunks}</strong>,
                  })}
                </h4>
                <h4>
                  {t.rich('items.3.section1.descriptions.2', {
                    bold: (chunks) => <strong>{chunks}</strong>,
                  })}
                </h4>
                <h4>
                  {t.rich('items.3.section1.descriptions.3', {
                    bold: (chunks) => <strong>{chunks}</strong>,
                  })}
                </h4>
                <h4>
                  {t.rich('items.3.section1.descriptions.4', {
                    bold: (chunks) => <strong>{chunks}</strong>,
                  })}
                </h4>

                <ScriptureList
                  scriptures={[
                    t('items.3.section1.descriptions.5'),
                    t('items.3.section1.descriptions.6'),
                    t('items.3.section1.descriptions.7'),
                    t('items.3.section1.descriptions.8'),
                    t('items.3.section1.descriptions.9'),
                    t('items.3.section1.descriptions.10'),
                    t('items.3.section1.descriptions.11'),
                    t('items.3.section1.descriptions.12'),
                  ]}
                />
              </div>

              <div className="relative w-full h-full aspect-square">
                <Image
                  fill
                  src="/images/foursquare/logo.webp"
                  alt={t('items.3.section1.logoAlt')}
                />
              </div>
            </div>

            {/* EMBLEM SECTION */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-xl place-items-center">
              <div className="relative w-full h-full aspect-square">
                <Image
                  fill
                  src={'/images/foursquare/emblem.webp'}
                  alt={t('items.3.section2.logoAlt')}
                />
              </div>

              <div className="sm:col-span-2 space-y-md">
                <SectionHeader title={t('items.3.section2.header')} />

                <h4 className="pt-md">{t('items.3.section2.descriptions.0')}</h4>

                <h4>
                  {t.rich('items.3.section2.descriptions.1', {
                    bold: (chunks) => <strong>{chunks}</strong>,
                  })}
                </h4>
                <h4>
                  {t.rich('items.3.section2.descriptions.2', {
                    bold: (chunks) => <strong>{chunks}</strong>,
                  })}
                </h4>
                <h4>
                  {t.rich('items.3.section2.descriptions.3', {
                    bold: (chunks) => <strong>{chunks}</strong>,
                  })}
                </h4>
                <h4>
                  {t.rich('items.3.section2.descriptions.4', {
                    bold: (chunks) => <strong>{chunks}</strong>,
                  })}
                </h4>

                <ScriptureList
                  scriptures={[
                    t('items.3.section2.descriptions.5'),
                    t('items.3.section2.descriptions.6'),
                  ]}
                />
              </div>
            </div>

            {/* FLAG SECTION */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-xl place-items-center">
              <div className="sm:col-span-2 space-y-md">
                <SectionHeader title={t('items.3.section3.header')} />

                <h4 className="pt-md">{t('items.3.section3.descriptions.0')}</h4>

                <h4>
                  {t.rich('items.3.section3.descriptions.1', {
                    bold: (chunks) => <strong>{chunks}</strong>,
                  })}
                </h4>
                <h4>
                  {t.rich('items.3.section3.descriptions.2', {
                    bold: (chunks) => <strong>{chunks}</strong>,
                  })}
                </h4>
                <h4>
                  {t.rich('items.3.section3.descriptions.3', {
                    bold: (chunks) => <strong>{chunks}</strong>,
                  })}
                </h4>
                <h4>
                  {t.rich('items.3.section3.descriptions.4', {
                    bold: (chunks) => <strong>{chunks}</strong>,
                  })}
                </h4>

                <ScriptureList scriptures={[t('items.3.section3.descriptions.5')]} />
              </div>

              <div className="relative w-full h-full aspect-square">
                <Image
                  fill
                  src="/images/foursquare/flag.webp"
                  alt={t('items.3.section3.logoAlt')}
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
