'use client';

import ScriptureWithIcon from '@/components/cards/scripture-with-icon/ScriptureWithIcon';
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
import LifeRing from '@/components/icons/life-ring';
import Location from '@/components/icons/location';
import Paintbrush from '@/components/icons/paintbursh';
import PeopleGroup from '@/components/icons/people-group';
import PersonFalling from '@/components/icons/person-falling';
import PersonPraying from '@/components/icons/person-praying';
import PersonWalking from '@/components/icons/person-walking';
import PersonWithChalkboard from '@/components/icons/person-with-chalkboard';
import Seedling from '@/components/icons/seedling';
import SunWithClouds from '@/components/icons/sun-with-clouds';
import Temperature from '@/components/icons/temperature';
import ThumbsDown from '@/components/icons/thumbs-down';
import ScriptureList from '@/components/sections/scripture-list/ScriptureList';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import { AWS_ASSET_BASE_URL } from '@/data/constants';
import { TabItem, Tabs } from 'flowbite-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const FoursquareClient = () => {
  const t = useTranslations('About');

  const foursquareBeliefsArr = [
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
    {
      icon: Seedling,
      title: t('foursquare.accordionItem4.evangelism.title'),
      verse: t('foursquare.accordionItem4.evangelism.verse'),
      passage: t('foursquare.accordionItem4.evangelism.description'),
    },
    {
      icon: HandHoldingHeart,
      title: t('foursquare.accordionItem4.tithes.title'),
      verse: t('foursquare.accordionItem4.tithes.verse'),
      passage: t('foursquare.accordionItem4.tithes.description'),
    },
  ];

  return (
    <div className="px-padding flex flex-col gap-xxl lg:gap-3xl max-width-center">
      <PageHeaderWithBackground
        title="Foursquare Gospel Church"
        media={{
          src: `${AWS_ASSET_BASE_URL}/images/foursquare/group-people.jpg`,
          alt: '',
          poster: '',
        }}
        subtitle="An international Pentecostal Christian denomination founded in 1923"
      />
      <Tabs variant="underline">
        <TabItem title="Intro" icon={Location}>
          <div className="flex flex-col gap-xl p-lg">
            <h4 className="text-justify">
              The Wind Church (dba Wind of the Spirit) is part of a worldwide movement called the
              International Church of the Foursquare Gospel, with more than 1,700 churches in the
              United States and over 68,500 churches across more than 150 nations.
            </h4>
            <h4 className="text-justify">
              Every week, more than 12,000 men, women, boys, and girls accept Jesus Christ through
              the preaching of the gospel in Foursquare churches around the world.
            </h4>
          </div>
        </TabItem>
        <TabItem title="History" icon={PersonWithChalkboard}>
          <div className="flex flex-col gap-xl p-lg">
            <div className="py-lg">
              <SectionHeader title="Foursquare History" subtitle="How it all began..." />
            </div>
            <h4 className="text-justify">
              The name “Foursquare” is unique compared to most church names. It was born out of an
              extraordinary move of God during the early 20th century—a period marked by
              revolutionary changes throughout the world.
            </h4>
            <h4 className="text-justify">
              A great revival swept across the Western world as the 1900s began. Its impact grew as
              believers in various places were filled with the Holy Spirit, experiencing something
              similar to the events of Acts 2 on the Day of Pentecost. This movement became known as
              the “Pentecostal Movement.”
            </h4>
            <h4 className="text-justify">
              By the 1920s, some felt that Pentecostals were becoming extreme in their beliefs. A
              divide began forming between older denominations and the new groups emerging from
              revival meetings. Into this unusual moment stepped a woman evangelist, Aimee Semple
              McPherson, who began preaching the “Foursquare Gospel.” Born in Ingersoll, Ontario,
              Canada, she came to faith at age 17. Shortly after, she married Robert Semple—the
              young preacher whose message led to her conversion. The couple soon left for China,
              where Robert gave his life in service to God. Aimee returned to America as a widow
              with her young daughter and eventually remarried. Yet the call to preach continued to
              stir in her heart. She resisted it, longing for a “normal life,” but restlessness
              grew. When sickness brought her near death, she sensed God asking, “Will you go and
              preach?” Her surrender—“Yes, Lord, I will go”—became the beginning of a lifelong
              ministry.
            </h4>
            <h4 className="text-justify">
              Her worldwide ministry led to countless lives being redeemed, miraculously healed,
              baptized in water, and filled with the Holy Spirit. Thousands from every
              denomination—and many with no church background at all—attended her meetings. Those
              whose lives were transformed came to feel like part of the Foursquare family.
            </h4>
            <h4 className="text-justify">
              On September 27, 1944, God called His handmaiden home. The night before, she preached
              a message in Oakland, California—the very city where she first received the vision of
              the Foursquare Gospel. A cycle had come full circle, and a divine assignment had been
              completed.
            </h4>
            <h4 className="text-justify">
              Foursquare International continues to reflect the heart of our founder and the Great
              Commission given by our Lord: to go into all the world and preach the gospel to
              everyone. Evangelism and world missions remain the very heartbeat of the Foursquare
              Church.
            </h4>
            <h4 className="text-justify">Just a few of the ministries of the Foursquare Church:</h4>
            <ul className="list-disc list-outside ml-5 sm:ml-8 space-y-sm">
              <li>
                <h4>
                  Foursquare Missionary Press distributes more than 3,000,000 pieces of evangelistic
                  literature each year.
                </h4>
              </li>
              <li>
                <h4>National Youth Ministry.</h4>
              </li>
              <li>
                <h4>
                  L.I.F.E. Pacific Colleges are accredited Bible colleges located in San Dimas,
                  California; Christiansburg, Virginia; and Burnaby, British Columbia. Many
                  additional Bible institutes operate in partnership with local Foursquare churches
                  around the world. Foursquare Women International is a service organization made up
                  of more than 10,000 members.
                </h4>
              </li>
              <li>
                <h4>Christian Education.</h4>
              </li>
              <li>
                <h4>
                  Foursquare World Advance — a bimonthly magazine highlighting the global Foursquare
                  family.
                </h4>
              </li>
              <li>
                <h4>Eight camping facilities.</h4>
              </li>
              <li>
                <h4>And much more.</h4>
              </li>
            </ul>
            <h4 className="text-justify">
              The Foursquare community has no desire to compete or compare. We rejoice with every
              body of believers which lifts the blodstained banner of Jesus Christ. The foursqaure
              Church is a memeber of the Nartional Association of Evangelicals (NAE) and, as a
              Pentecostal Church, is affliated with the Pentecoastal-Charismatic Churches of (North
              America 9PCCNA) and the Penetecoastl World Fellowship.
            </h4>
            <h4 className="text-justify">
              You may request a free subscription by writing to Foursquare World Advance, P.O. Box
              26902, 1910 W. Sunset Blvd., Suite 200, Los Angeles, California 90026-0176.
            </h4>
            <h4 className="text-justify">
              For more information about the International Church of the Foursquare Gospel (ICFG),
              visit{' '}
              <Link href="www.foursquare.org." className="text-blue-500 underline" target="_blank">
                www.foursquare.org.
              </Link>
            </h4>
          </div>
        </TabItem>
        <TabItem title="Beliefs" icon={Cross}>
          <div className="flex flex-col gap-xl p-lg">
            <SectionHeader title="Foursquare Believes" />
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
        <TabItem title="Insignias & Emblems" icon={Flag}>
          <div className="flex flex-col gap-xl p-lg">
            {/* LOGO SECTION */}
            <SectionHeader title="Logo" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-xl">
              <div className="sm:col-span-2 space-y-md">
                <h4>The term “Foursquare” refers to the four-fold ministry of Jesus Christ.</h4>

                <h4>
                  <strong>Crown</strong> — Symbolic of Jesus Christ, the Soon-Coming King
                </h4>
                <h4>
                  <strong>Cross</strong> — Symbolic of Jesus Christ, our Savior
                </h4>
                <h4>
                  <strong>Cup</strong> — Symbolic of Jesus Christ, the Great Physician (Healer)
                </h4>
                <h4>
                  <strong>Dove</strong> — Symbolic of Jesus Christ, the Baptizer with the Holy
                  Spirit
                </h4>

                <div className="flex flex-col gap-xs pt-sm">
                  <p className="font-bold">Refer to:</p>
                  <ScriptureList
                    scriptures={[
                      'Matthew 8:17',
                      'Matthew 1:21',
                      '1 Thessalonians 4:16-18',
                      'Matthew 3:11',
                      'Matthew 4:23',
                      'John 3:16',
                      'Matthew 24:30-31',
                      'John 1:33-34',
                    ]}
                  />
                </div>
              </div>

              <div className="relative w-full h-full aspect-square">
                <Image
                  fill
                  src={`${AWS_ASSET_BASE_URL}/images/foursquare/logo.png`}
                  alt="Foursquare logo"
                />
              </div>
            </div>

            {/* EMBLEM SECTION */}
            <SectionHeader title="Emblem" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-xl">
              <div className="relative w-full h-full aspect-square">
                <Image
                  fill
                  src={`${AWS_ASSET_BASE_URL}/images/foursquare/emblem.png`}
                  alt="Foursquare emblem"
                />
              </div>

              <div className="sm:col-span-2 space-y-md">
                <h4>
                  The concept of “Foursquare” appears both implicitly and explicitly throughout the
                  Old and New Testaments. One of the clearest examples is found in Ezekiel’s vision
                  (Ezekiel 1:10): “Each of the four had the face of a man, the face of a lion on the
                  right side, the face of an ox on the left side, and each also had the face of an
                  eagle.”
                </h4>

                <h4>
                  <strong>Face of an Eagle</strong> — Symbolic of Jesus Christ, the Coming King
                </h4>
                <h4>
                  <strong>Face of an Ox</strong> — Symbolic of Jesus Christ, the Burden-Bearer
                </h4>
                <h4>
                  <strong>Face of a Man</strong> — Symbolic of Jesus Christ, who shared in human
                  suffering
                </h4>
                <h4>
                  <strong>Face of a Lion</strong> — Symbolic of Jesus Christ, the Lion of Judah, the
                  All-Powerful One
                </h4>

                <div className="flex flex-col gap-xs pt-sm">
                  <p className="font-bold">Refer to:</p>
                  <ScriptureList scriptures={['Ezekiel 1:1-28', 'Revelation 4:7']} />
                </div>
              </div>
            </div>

            {/* FLAG SECTION */}
            <SectionHeader title="Flag" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-xl">
              <div className="sm:col-span-2 space-y-md">
                <h4>
                  Israel is a type of the Foursquare Gospel: a foursquare altar of the finest gold,
                  attended by a priest wearing a foursquare breastplate embroidered in scarlet,
                  gold, blue, and purple.
                </h4>

                <h4>
                  <strong>Scarlet</strong> — Represents the first cardinal doctrine: Jesus Christ
                  the Savior. Its emblem is the face of a man.
                </h4>

                <h4>
                  <strong>Gold</strong> — Represents the second cardinal doctrine: Jesus Christ the
                  Baptizer with the Holy Spirit. Its emblem is the face of a lion.
                </h4>

                <h4>
                  <strong>Blue</strong> — Represents the third cardinal doctrine: Jesus Christ the
                  Great Physician. Its emblem is the face of an ox.
                </h4>

                <h4>
                  <strong>Purple</strong> — Represents the fourth cardinal doctrine: Jesus Christ
                  the Coming King. Its emblem is the face of an eagle.
                </h4>

                <div className="flex flex-col gap-xs pt-sm">
                  <p className="font-bold">Refer to:</p>
                  <ScriptureList scriptures={['Exodus 28:15-16']} />
                </div>
              </div>

              <div className="relative w-full aspect-square">
                <Image
                  fill
                  src={`${AWS_ASSET_BASE_URL}/images/foursquare/flag.jpeg`}
                  alt="Foursquare flag"
                  className="object-contain aspect-video mx-auto"
                />
              </div>
            </div>
          </div>
        </TabItem>
      </Tabs>
    </div>
  );
};

export default FoursquareClient;
