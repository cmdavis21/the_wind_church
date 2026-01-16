import Accordion from '@/components/accordion/Accordion';
import AnimativeFillButton from '@/components/buttons/animative-fill-button/AnimativeFillButton';
import PageScrollUpButton from '@/components/buttons/page-scroll-up-button/PageScrollUpButton';
import ImageWithTitleAndHiddenTextCard from '@/components/cards/image-with-title-and-hidden-text-card/ImageWithTitleAndHiddenTextCard';
import SimpleCarousel from '@/components/carousels/simple-carousel/SimpleCarousel';
import PageHero from '@/components/heroes/page-hero/PageHero';

import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import MediaBackgroundAndContent, {
  ColorBackground,
} from '@/components/sections/media-background-and-content/MediaBackgroundAndContent';
import ScriptureList from '@/components/sections/scripture-list/ScriptureList';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import { AWS_ASSET_BASE_URL, WEBSITE_BASE_URL } from '@/data/constants';
import { PageRoutes } from '@/data/page-routes';
import { styleSelectedWords } from '@/data/utils';
import { Button } from 'flowbite-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Give',
  description:
    'Support the mission of The Wind Church by giving online. Your generosity makes a difference.',
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/give`,
  },
};

const Give = () => {
  const otherWaysToGiveArr = [
    {
      image: {
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/couple_credit_card.jpg`,
        alt: '',
      },
      title: 'Online Giving',
      description: (
        <>
          Give securely online through Pushpay using your debit card, credit card, or bank account.
          <Button
            pill
            size="lg"
            color="primary"
            target="_blank"
            href={PageRoutes.pushpay}
            className="mt-6 mx-auto px-4 w-[165px]"
          >
            Give Online
          </Button>
        </>
      ),
    },
    {
      image: {
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/offering.jpg`,
        alt: '',
      },
      title: 'In‑Person Giving',
      description:
        'You can give during any service using cash or check. Donation boxes are located at both exits of the sanctuary. Make checks payable to Wind of the Spirit Worship Center.',
    },
    {
      image: {
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/mailbox.jpg`,
        alt: '',
      },
      title: 'Mail‑In Giving',
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
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/building.jpg`,
        alt: '',
      },
      title: 'Bank Bill Pay',
      description: (
        <>
          Set up recurring giving through your bank’s bill‑pay service. This is a simple and
          consistent way to support the ministry.
        </>
      ),
    },
    {
      image: {
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/garage.jpg`,
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
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/support_hands.jpg`,
        alt: '',
      },
      title: 'Serve & Volunteer',
      description:
        "Giving isn't only financial — serving with your time and gifts helps build God's house and strengthen our community.",
    },
  ];

  return (
    <div>
      <PageHero
        size="short"
        title="Giving"
        highlightTitle={[[0, 0]]}
        subtitle="Your contribution makes a difference."
        media={{ src: `${AWS_ASSET_BASE_URL}/placeholder-media/praise_hands.jpg` }}
      />

      <div className="p-padding flex flex-col gap-3xl lg:gap-5xl 2xl:gap-6xl max-width-center">
        {/* WHY WE GIVE */}
        <div className="flex flex-col gap-xxl px-padding">
          {/* REASON #1 */}
          <div className="flex flex-col gap-lg">
            <div
              dangerouslySetInnerHTML={{
                __html: styleSelectedWords({
                  text: 'Giving honors God as an act of worship,',
                  array: [[0, 7]],
                  htmlTag: 'h2',
                }),
              }}
            />
            <h4>Acknowledging that all we have belongs to Him.</h4>
            <ScriptureList scriptures={['Proverbs 3:9', 'Psalm 24:1']} />
          </div>

          {/* REASON #2 */}
          <div className="flex flex-col gap-lg">
            <div
              dangerouslySetInnerHTML={{
                __html: styleSelectedWords({
                  text: 'When we give freely and joyfully,',
                  array: [[0, 5]],
                  htmlTag: 'h2',
                }),
              }}
            />
            <h4>We imitate God&apos;s nature as a giver of eternal and temporal blessings.</h4>
            <ScriptureList
              scriptures={['John 3:16', '1 Corinthians 2:12', 'Deuteronomy 8:17-18', 'James 1:17']}
            />
          </div>

          {/* REASON #3 */}
          <div className="flex flex-col gap-lg">
            <div
              dangerouslySetInnerHTML={{
                __html: styleSelectedWords({
                  text: 'Giving reflects our heart',
                  array: [[0, 3]],
                  htmlTag: 'h2',
                }),
              }}
            />
            <h4>
              And relationship with God, communicates our faith to the world, and brings personal
              blessings through wise investments.
            </h4>
            <ScriptureList scriptures={['2 Corinthians 9:12-15', 'Acts 20:35', 'Luke 12:33']} />
          </div>

          {/* DONATE CTA */}
          <Link href={PageRoutes.pushpay} className="mt-8">
            <AnimativeFillButton size="lg">
              <span className="font-semibold">Donate online with PushPay</span>
            </AnimativeFillButton>
          </Link>
        </div>

        {/* OTHER WAYS TO GIVE */}
        <div className="flex flex-col gap-xl md:gap-xxl">
          <CenterTextSection
            title="Ways to Give"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nostrum numquam quidem eveniet."
          />

          {/* Tablet/Desktop */}
          <div className="hidden md:grid grid-cols-3 gap-xxl justify-center">
            {otherWaysToGiveArr.map((item) => (
              <ImageWithTitleAndHiddenTextCard key={`desktop-${item.title}`} {...item} />
            ))}
          </div>

          {/* Mobile */}
          <SimpleCarousel
            blueDots
            className="md:hidden h-fit"
            slides={otherWaysToGiveArr.map((item) => (
              <ImageWithTitleAndHiddenTextCard key={`mobile-${item.title}`} {...item} />
            ))}
          />
        </div>

        {/* FAQs */}
        <div className="flex flex-col gap-xl md:gap-xxl">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Answers for PushPay, donation allocation and more"
          />
          <Accordion
            content={[
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
                    You can give during any of our services by placing your donation in the offering
                    basket or drop box.
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
            ]}
          />
        </div>

        {/* THANK YOU MESSAGE */}
        <MediaBackgroundAndContent
          centerContent
          fullWidth={false}
          color={ColorBackground.BLUE}
          content={
            <div className="flex flex-col gap-xl">
              <div
                dangerouslySetInnerHTML={{
                  __html: styleSelectedWords({
                    text: 'We Thank You for your financial support!',
                    array: [
                      [1, 4],
                      [6, 6],
                    ],
                    htmlTag: 'h3',
                    className: 'text-center',
                  }),
                }}
              />
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
              <div
                dangerouslySetInnerHTML={{
                  __html: styleSelectedWords({
                    text: 'Your partners in Christ at The Wind.',
                    array: [[5, 6]],
                    htmlTag: 'h3',
                    className: 'text-center',
                  }),
                }}
              />
            </div>
          }
        />
      </div>

      {/* PAGE SCROLL-UP BUTTON */}
      <PageScrollUpButton />
    </div>
  );
};

export default Give;
