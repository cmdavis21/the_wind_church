import AnimativeFillButton from '@/components/buttons/animative-fill-button/AnimativeFillButton';
import ImageWithTitleAndHiddenTextCard from '@/components/cards/image-with-title-and-hidden-text-card/ImageWithTitleAndHiddenTextCard';
import PrayerRequestForm from '@/components/forms/prayer-request-form/PrayerRequestForm';
import PageHero from '@/components/heroes/page-hero/PageHero';
import MediaBackgroundAndContent, {
  ColorBackground,
} from '@/components/sections/media-background-and-content/MediaBackgroundAndContent';
import { AWS_ASSET_BASE_URL, WEBSITE_BASE_URL } from '@/data/constants';
import { PageRoutes } from '@/data/page-routes';
import { styleSelectedWords } from '@/data/utils';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Salvation',
  description:
    'Learn about the message of salvation through Jesus Christ and how you can begin a new life in Him today.',
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/salvation`,
  },
};

const SALVATION_QUESTIONS: { question: string; verse: string }[] = [
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
      size="short"
      title="Salvation"
      subtitle="Jesus is here for you always"
      media={{ src: `${AWS_ASSET_BASE_URL}/placeholder-media/crosses.png` }}
    />

    <div className="py-padding flex flex-col gap-xl lg:gap-4xl">
      {/* WHAT IS SALVATION */}
      <div className="flex flex-col gap-xl px-padding max-width-center">
        <div
          dangerouslySetInnerHTML={{
            __html: styleSelectedWords({
              text: 'What is Salvation?',
              array: [[0, 0]],
              htmlTag: 'h2',
            }),
          }}
        />
        <h4 className="text-light-charcoal dark:text-dark-charcoal">
          Salvation is God&apos;s plan to provide man an escape from the consequences of sin. Being
          saved or born again is the most important experience in your life (John 3:3, 15, 16). When
          you confess Jesus as Lord and Savior, you experience the new birth. Every abundant
          blessing He has for us in freely available in salvation (Romans 10:9-10). The word
          salvation comes from the Greek word soteria, which means saved, healed, delivered,
          pardoned, rescued, protected, preserved, made whole, cured, set free, and restored.
        </h4>
      </div>

      {/* HOW DO YOU RECIEVE SALVATION */}
      <div className="flex flex-col gap-xl px-padding max-width-center">
        <div
          dangerouslySetInnerHTML={{
            __html: styleSelectedWords({
              text: 'How do you receive Salvation?',
              array: [[0, 0]],
              htmlTag: 'h2',
            }),
          }}
        />
        <h4 className="text-light-charcoal dark:text-dark-charcoal">
          God has made it really simple. Answer these four questions:
        </h4>
        <div className="lg:py-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-lg">
          {SALVATION_QUESTIONS.map((item, index) => (
            <ImageWithTitleAndHiddenTextCard
              key={`salvation-question-${item.question}`}
              image={{
                src: `${AWS_ASSET_BASE_URL}/placeholder-media/cross_on_mount.jpg`,
                alt: 'decorative background image',
              }}
              title={
                <span className={`font-display text-brand-primary text-[55px] lg:text-[65px]`}>
                  {index + 1}
                </span>
              }
              description={
                <div>
                  <h5 className="font-semibold">{item.question}</h5>
                  <p className="body-large">({item.verse})</p>
                </div>
              }
            />
          ))}
        </div>
        <h4 className="text-light-charcoal dark:text-dark-charcoal">
          If you answered{' '}
          <span className="font-bold italic text-black dark:text-dark-primaryText">Yes</span>, you
          are ready to pray. Remember God loves you. He wants you to be whole and complete or saved
          - spiritually, emotionally, physically, mentally, financially, and socially (3 John 2).
          Pray this prayer, mean it, and you will be saved, right where you are sitting.
        </h4>
      </div>

      {/* PRAYER OF SALVATION */}
      <MediaBackgroundAndContent
        color={ColorBackground.BLUE}
        content={
          <div className="flex flex-col gap-xl">
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

      {/* RESULT */}
      <div className="flex flex-col gap-xl px-padding max-width-center">
        <div
          dangerouslySetInnerHTML={{
            __html: styleSelectedWords({
              text: 'Congratulations!',
              array: [[0, 0]],
              htmlTag: 'h2',
            }),
          }}
        />
        <div className="py-md grid grid-cols-1 md:grid-cols-2 gap-xl">
          {[
            { text: 'Your sins are forgiven', verse: '(1 John 1:9; John 3:16)' },
            { text: "You are a member of God's family", verse: '(John 1:12; John 3:2)' },
            {
              text: 'You have peace with God and access to Him',
              verse: '(Romans 5:1-2, Ephesians 2:6-7)',
            },
            { text: 'The Holy Spirit dwells within you', verse: '(Romans 8:9-11; 1 John 4:4)' },
          ].map((item, index) => (
            <div key={`salvation-${item.text}`} className="flex gap-xs">
              <h4>{index + 1}.</h4>
              <div className="flex flex-col">
                <h4 className="text-light-charcoal dark:text-dark-charcoal">{item.text}</h4>
                <h6>{item.verse}</h6>
              </div>
            </div>
          ))}
        </div>
        <h4 className="text-light-charcoal dark:text-dark-charcoal">
          <span className="font-bold italic text-black dark:text-dark-primaryText">Remember</span>,
          feelings have nothing to do with salvation. You may feel like you are floating on a cloud,
          or as dull as a doorknob. It makes no difference. Trusting God&apos;s Word is what counts.
        </h4>
      </div>

      {/* PRAYER REQUEST */}
      <div className="w-full flex flex-col gap-xl items-center px-padding max-width-center">
        <h2>We want to support you!</h2>
        <h4 className="text-light-charcoal dark:text-dark-primaryText">
          We will pray for you as you embark on your new walk with Christ. Submit a prayer request
          and share your story.
        </h4>
        <PrayerRequestForm />
      </div>

      {/* CTAs */}
      <div className="flex flex-row justify-center px-lg">
        <MediaBackgroundAndContent
          fullWidth={false}
          background={{
            src: `${AWS_ASSET_BASE_URL}/placeholder-media/church_prayer.jpg`,
            alt: 'Decorative Background Image',
          }}
          content={
            <div className="flex flex-col gap-md">
              <h5>Learn What it Means to be a Follower of Christ!</h5>
              <h3 className="font-bold">Grow in Relationship with God Now</h3>
              <h5>
                Learn more about our deep dive sessions and ministries offered here at The Wind.
              </h5>
              <div className="flex flex-col md:flex-row gap-lg">
                <Link href={PageRoutes.deepDive} className="max-md:w-full">
                  <AnimativeFillButton className="max-md:w-full">
                    View Deep Dives
                  </AnimativeFillButton>
                </Link>
                <Link href={PageRoutes.ministries} className="max-md:w-full">
                  <AnimativeFillButton className="max-md:w-full">
                    View Ministries
                  </AnimativeFillButton>
                </Link>
              </div>
            </div>
          }
        />
      </div>
    </div>
  </div>
);

export default Salvation;
