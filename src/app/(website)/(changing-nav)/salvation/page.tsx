import { Button } from 'flowbite-react';
import { Metadata } from 'next';
import React from 'react';

import { WEBSITE_BASE_URL } from '@/data/constants';
import { PageRoutes } from '@/data/page-routes';
import { permanentMarker } from '@/app/(website)/layout';
import ImageWithTitleAndHiddenTextCard from '@/components/cards/image-with-title-and-hidden-text-card/ImageWithTitleAndHiddenTextCard';
import Caret from '@/components/icons/caret';
import PrayerRequestForm from '@/components/forms/prayer-request-form/PrayerRequestForm';
import ColorBackgroundAndContent, {
  ColorBackground,
} from '@/components/sections/color-background-and-content/ColorBackgroundAndContent';
import { styleSelectedWords } from '@/data/utils';
import Link from 'next/link';
import PageHero from '@/components/heroes/page-hero/PageHero';

export const metadata: Metadata = {
  title: 'Salvation',
  description:
    'Learn about the message of salvation through Jesus Christ and how you can begin a new life in Him today.',
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/salvation`,
  },
};

const salvationQuestions: { question: string; verse: string }[] = [
  {
    question: 'Do you want to be forgiven and saved?',
    verse: 'Acts 3:38; 1 John 1:8',
  },
  {
    question: "Do you believe Jesus Christ, God's son, died for you?",
    verse: '1 John 1:7',
  },
  {
    question:
      'Are you willing to repent of sin and follow the Lord Jesus Christ for the rest of your life?',
    verse: 'Acts 2:21; 3:37-38, 16:31; 1 John 1:9',
  },
  {
    question:
      'Do you believe in your heart and confess with your mouth that God does forgive you of your sins and that He does cleanse you from all unrighteousness?',
    verse: 'Romans 10:9-10; 1 John 1:9',
  },
];

const Salvation = () => (
  <div>
    <PageHero
      short
      title="Salvation"
      subtitle="Jesus is here for you always"
      media={{
        src: '/placeholder-media/crosses.png',
      }}
    />

    <div className="pt-padding flex flex-col gap-xxl lg:gap-[100px] 2xl:gap-[125px]">
      {/* What is salvation */}
      <div className="px-padding flex flex-col gap-lg">
        <div
          dangerouslySetInnerHTML={{
            __html: styleSelectedWords({
              text: 'What is salvation?',
              array: [[0, 0]],
              htmlTag: 'h2',
            }),
          }}
        />
        <h4>
          Salvation is God&apos;s plan to provide man an escape from the consequences of sin. Being
          saved or born again is the most important experience in your life (John 3:3, 15, 16). When
          you confess Jesus as Lord and Savior, you experience the new birth. Every abundant
          blessing He has for us in freely available in salvation (Romans 10:9-10). The word
          salvation comes from the Greek word soteria, which means saved, healed, delivered,
          pardoned, rescued, protected, preserved, made whole, cured, set free, and restored.
        </h4>
      </div>

      {/* How do you receive Salvation */}
      <div className="px-padding flex flex-col gap-lg">
        <div
          dangerouslySetInnerHTML={{
            __html: styleSelectedWords({
              text: 'How do you receive Salvation?',
              array: [[0, 0]],
              htmlTag: 'h2',
            }),
          }}
        />
        <h4>God has made it really simple. Answer these four questions:</h4>
        <div className="lg:py-lg max-lg:px-[20px] grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 justify-items-center gap-xl">
          {salvationQuestions.map((item, index) => (
            <ImageWithTitleAndHiddenTextCard
              key={`salvation-question-${item.question}`}
              image={{
                src: '/placeholder-media/cross_on_mount.jpg',
                alt: 'decorative background image',
              }}
              title={
                <span
                  className={`${permanentMarker.className} text-primary dark:text-primaryDark text-[55px] lg:text-[65px]`}
                >
                  {index + 1}
                </span>
              }
              description={
                <div>
                  <h4 className="font-semibold">{item.question}</h4>
                  <p className="body-large">({item.verse})</p>
                </div>
              }
            />
          ))}
        </div>
        <h4>
          If you answered{' '}
          <span className={`${permanentMarker.className} text-primary dark:text-primaryDark`}>
            Yes
          </span>
          , you are ready to pray.
        </h4>
        <h4>
          Remember God loves you. He wants you to be whole and complete or saved - spiritually,
          emotionally, physically, mentally, financially, and socially (3 John 2). Pray this prayer,
          mean it, and you will be saved, right where you are sitting.
        </h4>
      </div>

      {/* The Prayer of Salvation */}
      <ColorBackgroundAndContent
        rounded
        background={ColorBackground.BLUE}
        outerClassName="px-[12.5px] md:px-[25px] xl:px-[50px] min-[1800px]:px-[100px]"
        innerClassName="px-[12.5px] md:px-[25px] xl:px-[50px] min-[1800px]:px-[100px] py-padding"
        content={
          <div className="flex flex-col gap-lg">
            <div
              dangerouslySetInnerHTML={{
                __html: styleSelectedWords({
                  text: 'Prayer of Salvation',
                  array: [[0, 0]],
                  htmlTag: 'h2',
                }),
              }}
            />
            <h4>
              Father in heaven, thank you for sending your Son, Jesus, to die on the cross for me,
              and for His blood that was shed to redeem me and to cleanse me from my sins.
            </h4>
            <h4>
              Lord, I am sorry and I repent of my sins. Forgive me. I understand that I must change
              the course of my life. I am determined in my heart to follow you. I invite you to
              become the Lord of my life from this point forward, forever.
            </h4>
            <h4>
              I openly proclaim and confess that you are the Lord of my life. I believe in my heart
              that You have been raised from the dead. Therefore I am saved. I am a new creature.
              The old things have passed. All things have become new.
            </h4>
            <h4>I am a child of God. In the Name of Jesus, AMEN!</h4>
          </div>
        }
      />

      {/* The result */}
      <div className="px-padding flex flex-col gap-lg">
        <div
          dangerouslySetInnerHTML={{
            __html: styleSelectedWords({
              text: 'Congratulations!',
              array: [[0, 0]],
              htmlTag: 'h2',
            }),
          }}
        />
        <div className="flex flex-col gap-md py-sm">
          <div className="flex items-center gap-xs">
            <Caret className="fill-yellow rotate-90 min-w-[25px] min-h-[25px] size-[25px]" />
            <h4>Your sins are forgiven - (1 John 1:9; John 3:16)</h4>
          </div>
          <div className="flex items-center gap-xs">
            <Caret className="fill-yellow rotate-90 min-w-[25px] min-h-[25px] size-[25px]" />
            <h4>You are a member of God&apos;s family - (John 1:12; John 3:2)</h4>
          </div>
          <div className="flex items-center gap-xs">
            <Caret className="fill-yellow rotate-90 min-w-[25px] min-h-[25px] size-[25px]" />
            <h4>You have peace with God and access to Him - (Romans 5:1-2, Ephesians 2:6-7)</h4>
          </div>
          <div className="flex items-center gap-xs">
            <Caret className="fill-yellow rotate-90 min-w-[25px] min-h-[25px] size-[25px]" />
            <h4>The Holy Spirit dwells within you - (Romans 8:9-11; 1 John 4:4)</h4>
          </div>
        </div>
        <h4>
          Remember, feelings have nothing to do with salvation. You may feel like you are floating
          on a cloud, or as dull as a doorknob. It makes no difference. Trusting God&apos;s Word is
          what counts.
        </h4>
        <h4 className="pb-xl">
          We would love to pray for you as you embark on your new walk with Christ. Feel free to
          submit a prayer request.
        </h4>
        <PrayerRequestForm />
      </div>

      {/* CTAs */}
      <ColorBackgroundAndContent
        rounded
        background={ColorBackground.YELLOW}
        outerClassName="px-[12.5px] md:px-[25px] xl:px-[50px] min-[1800px]:px-[100px]"
        innerClassName="px-[12.5px] md:px-[25px] xl:px-[50px] min-[1800px]:px-[100px] py-padding"
        content={
          <div className="text-center flex flex-col gap-lg">
            <h4>Learn What it Means to be a Follower of Christ!</h4>
            <h3 className="font-bold">Grow in Relationship with God Now</h3>
            <h5 className="lg:max-w-[65%] mx-auto">
              Learn more about our deep dive sessions and ministries offered here at The Wind.
            </h5>
            <div className="flex flex-wrap items-center justify-center gap-lg">
              <Link href={PageRoutes.deepDive}>
                <Button pill size="lg" color="info">
                  View Deep Dives
                </Button>
              </Link>
              <Link href={PageRoutes.ministries}>
                <Button pill size="lg" color="info">
                  View Ministries
                </Button>
              </Link>
            </div>
          </div>
        }
      />
    </div>
  </div>
);

export default Salvation;
