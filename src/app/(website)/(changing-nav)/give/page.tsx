import Accordion from '@/components/accordion/Accordion';
import AnimativeFillButton from '@/components/buttons/animative-fill-button/AnimativeFillButton';
import PageScrollUpButton from '@/components/buttons/page-scroll-up-button/PageScrollUpButton';
import ImageWithTitleAndHiddenTextCard from '@/components/cards/image-with-title-and-hidden-text-card/ImageWithTitleAndHiddenTextCard';
import SimpleCarousel from '@/components/carousels/simple-carousel/SimpleCarousel';
import Text from '@/components/forms/inputs/text/Text';
import PageHero from '@/components/heroes/page-hero/PageHero';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import MediaBackgroundAndContent, {
  ColorBackground,
} from '@/components/sections/media-background-and-content/MediaBackgroundAndContent';
import ScriptureList from '@/components/sections/scripture-list/ScriptureList';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import { PageRoutes } from '@/data/page-routes';
import { WEBSITE_URL } from '@/data/server/env.server';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Give' });
  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_URL}${PageRoutes.give}`;
  const image = '/images/product-placeholder.webp';
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

const Give = () => {
  const reasonsToGive = [
    {
      title: 'Giving honors God as an act of worship',
      highlight: [[1, 2]],
      description: 'Acknowledging that all we have belongs to Him.',
      scriptureList: ['Proverbs 3:9', 'Psalm 24:1'],
    },
    {
      title: 'When we give freely and joyfully',
      highlight: [
        [3, 3],
        [5, 5],
      ],
      description: "We imitate God's nature as a giver of eternal and temporal blessings.",
      scriptureList: ['John 3:16', '1 Corinthians 2:12', 'Deuteronomy 8:17-18', 'James 1:17'],
    },
    {
      title: 'Giving reflects our heart',
      highlight: [[2, 3]],
      description:
        'And relationship with God, communicates our faith to the world, and brings personal blessings through wise investments.',
      scriptureList: ['2 Corinthians 9:12-15', 'Acts 20:35', 'Luke 12:33'],
    },
  ];

  const otherWaysToGiveArr = [
    {
      image: {
        src: '/images/give/group-hands.webp',
        alt: '',
      },
      title: 'Serve & Volunteer',
      description:
        "Giving isn't only financial — serving with your time and gifts helps build God's house and strengthen our community.",
    },
    {
      image: {
        src: '/images/give/couple.webp',
        alt: '',
      },
      title: 'Online Giving',
      description: (
        <>
          Give securely online through Pushpay using your debit card, credit card, or bank account.
          <div className="mt-6 mx-auto w-fit">
            <Link href={PageRoutes.pushpay}>
              <AnimativeFillButton>Give Online</AnimativeFillButton>
            </Link>
          </div>
        </>
      ),
    },
    {
      image: {
        src: '/images/give/offering-box.webp',
        alt: '',
      },
      title: 'In-Person Giving',
      description:
        'You can give during any service using cash or check. Donation boxes are located at both exits of the sanctuary. Make checks payable to Wind of the Spirit Worship Center.',
    },
    {
      image: {
        src: '/images/give/mailbox.webp',
        alt: '',
      },
      title: 'Mail-In Giving',
      description: (
        <>
          You can mail your gift to: <br />
          Wind of the Spirit Worship Center <br />
          6476 Streeter Avenue, Riverside, CA 92504
        </>
      ),
    },
    {
      image: {
        src: '/images/give/garage.webp',
        alt: '',
      },
      title: 'Non‑Cash Assets',
      description: (
        <>
          You can donate anything that will go to support our community. Email{' '}
          <Link href="mailto:thewindchurch@outlook.com" className="underline text-brand-primary">
            thewindchurch@outlook.com
          </Link>{' '}
          for more information.
        </>
      ),
    },
    {
      image: {
        src: '/images/give/person-with-box.webp',
        alt: '',
      },
      title: 'One‑Time Donations',
      description:
        'These are spontaneous gifts inspired by a sermon, event, or specific need. They help fund special projects, missions, or urgent needs.',
    },
  ];

  const faqContent = [
    {
      title: 'How can I donate online through PushPay?',
      description:
        "Donating online is simple! Just visit our Give page, select the amount you'd like to give, choose a fund, and complete your secure transaction through PushPay. You can give a one-time gift or set up recurring donations for consistent support.",
    },
    {
      title: 'Is giving through PushPay secure?',
      description:
        'Yes! PushPay uses industry-leading encryption and security measures to protect your financial information. Your online donation is processed safely, ensuring your contributions are handled with the utmost care.',
    },
    {
      title: 'Can I allocate my donation to a specific ministry or fund?',
      description:
        "Absolutely! When you give online or in person, you can choose where your donation goes—whether it's general tithes, missions, youth programs, outreach, or another specific ministry. Simply select the designated fund when giving.",
    },
    {
      title: 'Can I set up automatic recurring donations?',
      description:
        'Yes! PushPay allows you to schedule recurring donations on a weekly, bi-weekly, or monthly basis. This ensures consistent support for the church and makes giving effortless.',
    },
    {
      title: 'How do I give a donation in person or by mail?',
      description: (
        <>
          You can give during any of our services by placing your donation in the offering basket or
          drop box.
          <br />
          <br />
          If you would prefer to mail a check, please send it to:
          <br />
          <br />
          The Wind Church
          <br />
          6476 Streeter Avenue
          <br />
          Riverside, CA 92504
        </>
      ),
    },
    {
      title: 'Will I receive a receipt for my donation?',
      description:
        "Yes! When you give through PushPay, you'll receive an email confirmation immediately. For all donations—whether online, in person, or by mail—you will also receive an annual giving statement for tax purposes.",
    },
    {
      title: 'Can I update or cancel a recurring donation?',
      description:
        'Of course! You can log into your PushPay account at any time to update your donation amount, change the frequency, or cancel a recurring gift.',
    },
    {
      title: 'Who can I contact if I have more questions about giving?',
      description:
        "If you have any questions about donations, allocations, or giving statements, feel free to contact our finance team at +1 (951) 359-0203. We're happy to help!",
    },
  ];

  return (
    <div>
      <PageHero
        size="short"
        title="Giving"
        description="Your contribution makes a difference."
        media={{ src: '/images/give/praising.jpg' }}
      />

      {/* WHY WE GIVE */}
      <div className="max-width-center pt-3xl sm:pt-4xl">
        <div className="flex flex-col gap-xxl px-padding">
          {reasonsToGive.map((r) => (
            <div key={`reasons-to-give-${r.title}`} className="flex flex-col gap-md">
              <Text htmlTag="h2" highlight={r.highlight}>
                {r.title}
              </Text>
              <h4 className="lg:max-w-[55%]">{r.description}</h4>
              <ScriptureList scriptures={r.scriptureList} />
            </div>
          ))}

          {/* DONATE CTA */}
          <Link href={PageRoutes.pushpay} className="max-sm:w-full">
            <AnimativeFillButton variant="secondary">
              Donate online with PushPay
            </AnimativeFillButton>
          </Link>
        </div>
      </div>

      {/* OTHER WAYS TO GIVE */}
      <div className="flex flex-col gap-xxl md:gap-3xl max-width-center pt-3xl sm:pt-4xl px-padding">
        <CenterTextSection
          title="Ways to Give"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nostrum numquam quidem eveniet."
        />

        {/* Tablet/Desktop */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-lg lg:gap-xl">
          {otherWaysToGiveArr.map((item) => (
            <ImageWithTitleAndHiddenTextCard key={`desktop-${item.title}`} {...item} />
          ))}
        </div>

        {/* Mobile */}
        <SimpleCarousel
          className="sm:hidden"
          slides={otherWaysToGiveArr.map((item) => (
            <ImageWithTitleAndHiddenTextCard key={`mobile-${item.title}`} {...item} />
          ))}
        />
      </div>

      {/* FAQs */}
      <div className="flex flex-col gap-xl md:gap-xxl max-width-center py-3xl sm:py-4xl px-padding">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Answers for PushPay, donation allocation and more"
        />

        <Accordion content={faqContent} />
      </div>

      {/* THANK YOU MESSAGE */}
      <MediaBackgroundAndContent
        centerContent
        color={ColorBackground.BLUE}
        content={
          <div className="flex flex-col gap-xl">
            <Text htmlTag="h3" highlight={[[0, 1]]} className="text-center">
              Thank you for your support
            </Text>
            <h4 className="text-center">
              We are blessed to have supporters like you and we are honored
              <br /> that you have chosen this Ministry as a place to sow your seed.
            </h4>
            <h4 className="text-center">
              If you have any questions or concerns,
              <br />
              email{' '}
              <Link
                href="mailto:thewindchurch@outlook.com"
                className="text-brand-primary hover:underline break-normal"
              >
                thewindchurch@outlook.com
              </Link>{' '}
              <br />
              or call{' '}
              <Link href={'tel:9513590203'} className="text-brand-primary hover:underline">
                (951) 359-0203
              </Link>
              .
            </h4>
            <Text htmlTag="h3" highlight={[[5, 6]]} className="text-center">
              Your partners in Christ at The Wind.
            </Text>
          </div>
        }
      />

      {/* PAGE SCROLL-UP BUTTON */}
      <PageScrollUpButton />
    </div>
  );
};

export default Give;
