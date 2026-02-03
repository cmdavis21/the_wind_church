import ImageWithTitleAndHiddenTextCard from '@/components/cards/image-with-title-and-hidden-text-card/ImageWithTitleAndHiddenTextCard';
import PrayerRequestForm from '@/components/forms/prayer-request-form/PrayerRequestForm';
import PageHero from '@/components/heroes/page-hero/PageHero';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import MediaBackgroundAndContent, {
  ColorBackground,
} from '@/components/sections/media-background-and-content/MediaBackgroundAndContent';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import { AWS_ASSET_BASE_URL, WEBSITE_BASE_URL } from '@/data/constants';
import { PageRoutes } from '@/data/page-routes';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Salvation' });
  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_BASE_URL}${PageRoutes.salvation}`;
  const image = `${AWS_ASSET_BASE_URL}/placeholder-media/crosses.png`;
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

    {/* WHAT IS SALVATION */}
    <div className="flex flex-col gap-xxl max-width-center pt-3xl sm:pt-4xl px-padding">
      <SectionHeader title="What is Salvation?" />
      <h4>
        Salvation is God&apos;s plan to provide man an escape from the consequences of sin. Being
        saved or born again is the most important experience in your life (John 3:3, 15, 16). When
        you confess Jesus as Lord and Savior, you experience the new birth. Every abundant blessing
        He has for us in freely available in salvation (Romans 10:9-10). The word salvation comes
        from the Greek word soteria, which means saved, healed, delivered, pardoned, rescued,
        protected, preserved, made whole, cured, set free, and restored.
      </h4>
    </div>

    {/* HOW DO YOU RECIEVE SALVATION */}
    <div className="flex flex-col gap-xxl max-width-center py-3xl sm:py-4xl px-padding">
      <SectionHeader title="How do you receive Salvation?" />
      <h4>God has made it really simple. Answer these four questions:</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-lg">
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
      <h4>
        If you answered{' '}
        <span className="font-bold italic text-black dark:text-dark-primaryText">Yes</span>, you are
        ready to pray. Remember God loves you. He wants you to be whole and complete or saved -
        spiritually, emotionally, physically, mentally, financially, and socially (3 John 2). Pray
        this prayer, mean it, and you will be saved, right where you are sitting.
      </h4>
    </div>

    {/* PRAYER OF SALVATION */}
    <MediaBackgroundAndContent
      color={ColorBackground.BLUE}
      content={
        <div className="flex flex-col gap-xxl">
          <SectionHeader title="Prayer of Salvation" />
          <h4>
            Father in heaven, thank you for sending your Son, Jesus, to die on the cross for me, and
            for His blood that was shed to redeem me and to cleanse me from my sins.
          </h4>
          <h4>
            Lord, I am sorry and I repent of my sins. Forgive me. I understand that I must change
            the course of my life. I am determined in my heart to follow you. I invite you to become
            the Lord of my life from this point forward, forever.
          </h4>
          <h4>
            I openly proclaim and confess that you are the Lord of my life. I believe in my heart
            that You have been raised from the dead. Therefore I am saved. I am a new creature. The
            old things have passed. All things have become new.
          </h4>
          <h4>I am a child of God. In the Name of Jesus, AMEN!</h4>
        </div>
      }
    />

    {/* RESULT */}
    <div className="flex flex-col gap-xxl max-width-center pt-3xl sm:pt-4xl px-padding">
      <SectionHeader title="Congratulations!" />
      <div className="py-md grid grid-cols-1 sm:grid-cols-2 gap-xl">
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
              <h4>{item.text}</h4>
              <h6>{item.verse}</h6>
            </div>
          </div>
        ))}
      </div>
      <h4>
        <span className="font-bold italic">Remember</span>, feelings have nothing to do with
        salvation. You may feel like you are floating on a cloud, or as dull as a doorknob. It makes
        no difference. Trusting God&apos;s Word is what counts.
      </h4>
    </div>

    {/* PRAYER REQUEST */}
    <div className="flex flex-col gap-xxl max-width-center pt-3xl sm:pt-4xl px-padding">
      <CenterTextSection
        title="We want to support you!"
        description="We will pray for you as you embark on your new walk with Christ. Submit a prayer request and
        share your story."
      />
      <PrayerRequestForm />
    </div>
  </div>
);

export default Salvation;
