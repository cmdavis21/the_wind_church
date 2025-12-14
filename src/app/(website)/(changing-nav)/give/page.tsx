import { permanentMarker } from '@/app/(website)/layout';
import Accordion from '@/components/accordion/Accordion';
import PageScrollUpButton from '@/components/buttons/page-scroll-up-button/PageScrollUpButton';
import ImageWithTitleAndHiddenTextCard from '@/components/cards/image-with-title-and-hidden-text-card/ImageWithTitleAndHiddenTextCard';
import SimpleCarousel from '@/components/carousels/simple-carousel/SimpleCarousel';
import PageHero from '@/components/heroes/page-hero/PageHero';
import Bank from '@/components/icons/bank';
import Car from '@/components/icons/car';
import CreditCard from '@/components/icons/creditCard';
import HandHoldingHeart from '@/components/icons/handHoldingHeart';
import Handshake from '@/components/icons/handshake';
import Mailbox from '@/components/icons/mailbox';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import { AWS_ASSET_BASE_URL, WEBSITE_BASE_URL } from '@/data/constants';
import { PageRoutes } from '@/data/page-routes';
import { styleSelectedWords } from '@/data/utils';
import { Button } from 'flowbite-react';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

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
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/building.jpg`,
        alt: '',
      },
      icon: <Bank className="fill-primary size-[30px]" />,
      title: 'Bank Account',
      description: (
        <>
          The Wind church accepts check and bill pay. Donation boxes are available at both exits of
          the sanctuary.
          <Button
            pill
            size="lg"
            color="primary"
            target="_blank"
            href={PageRoutes.pushpay}
            className="mt-6 mx-auto px-4 w-[165px]"
          >
            Donate now
          </Button>
        </>
      ),
    },
    {
      image: {
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/couple_credit_card.jpg`,
        alt: '',
      },
      icon: <CreditCard className="fill-primary size-[30px]" />,
      title: 'Credit/Debit',
      description: (
        <>
          The Wind church accepts check and bill pay. Donation boxes are available at both exits of
          the sanctuary.
          <Button
            pill
            size="lg"
            color="primary"
            target="_blank"
            href={PageRoutes.pushpay}
            className="mt-6 mx-auto px-4 w-[165px]"
          >
            Donate now
          </Button>
        </>
      ),
    },
    {
      image: {
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/offering.jpg`,
        alt: '',
      },
      icon: <HandHoldingHeart className="fill-primary size-[30px]" />,
      title: 'In-person',
      description:
        'The Wind church accepts check and bill pay. Donation boxes are availble at both exits of the santuary.Make checks payable to the Wind of the Spirit Worship Center.',
    },
    {
      image: {
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/mailbox.jpg`,
        alt: '',
      },
      icon: <Mailbox className="fill-primary size-[30px]" />,
      title: 'Mail',
      description: (
        <>
          You can mail your gift to the Wind at <br />
          Wind of the Spirit Worship Center <br />
          6476 Streeter Avenue, Riverside, CA 92504.
        </>
      ),
    },
    {
      image: {
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/garage.jpg`,
        alt: '',
      },
      icon: <Car className="fill-primary size-[30px]" />,
      title: 'Assets',
      description: (
        <>
          If you have any other assets (vehicles, real estate, etc.) you would like to donate,
          please email{' '}
          <Link href="mailto:thewindchurch@outlook.com" className="underline text-primary">
            thewindchurch@outlook.com
          </Link>
          .
        </>
      ),
    },
    {
      image: {
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/support_hands.jpg`,
        alt: '',
      },
      icon: <Handshake className="fill-primary size-[30px]" />,
      title: 'Your Time',
      description:
        "Contributting within the church as volunteers or with your ministry excels God's community.",
    },
  ];

  return (
    <div>
      <PageHero
        short
        title="Giving"
        subtitle="Your contribution makes a difference."
        media={{
          src: `${AWS_ASSET_BASE_URL}/placeholder-media/praise_hands.jpg`,
        }}
        highlightTitle={[[0, 0]]}
      />

      <div className="p-padding flex flex-col gap-xxl lg:gap-[100px] 2xl:gap-[125px]">
        {/* WHY WE GIVE*/}
        <div className="flex flex-col gap-xl py-[20px] md:py-[50px] 2xl:px-[100px]">
          <div className="flex flex-col gap-lg">
            <div
              dangerouslySetInnerHTML={{
                __html: styleSelectedWords({
                  text: 'Giving honors God as an act of worship,',
                  array: [[0, 7]],
                  htmlTag: 'h2',
                  className: 'font-bold',
                }),
              }}
            />
            <h4>Acknowledging that all we have belongs to Him.</h4>
            <div className="body-large flex flex-wrap gap-sm items-center">
              {['Proverbs 3:9', 'Psalm 24:1'].map((verse, index) => (
                <React.Fragment key={`about-page-vision-verses-${verse}`}>
                  {verse}
                  {index !== 1 && (
                    <div className="rounded-full size-[5px] bg-charcoal dark:bg-primaryDark" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-lg">
            <div
              dangerouslySetInnerHTML={{
                __html: styleSelectedWords({
                  text: 'When we give freely and joyfully,',
                  array: [[0, 5]],
                  htmlTag: 'h2',
                  className: 'font-bold',
                }),
              }}
            />
            <h4>We imitate God&apos;s nature as a giver of eternal and temporal blessings.</h4>
            <div className="body-large flex flex-wrap gap-sm items-center">
              {['John 3:16', '1 Corinthians 2:12', 'Deuteronomy 8:17-18', 'James 1:17'].map(
                (verse, index) => (
                  <React.Fragment key={`about-page-vision-verses-${verse}`}>
                    {verse}
                    {index !== 3 && (
                      <div className="rounded-full size-[5px] bg-charcoal dark:bg-primaryDark" />
                    )}
                  </React.Fragment>
                )
              )}
            </div>
          </div>
          <div className="flex flex-col gap-lg">
            <div
              dangerouslySetInnerHTML={{
                __html: styleSelectedWords({
                  text: 'Giving reflects our heart',
                  array: [[0, 3]],
                  htmlTag: 'h2',
                  className: 'font-bold',
                }),
              }}
            />
            <h4>
              And relationship with God, communicates our faith to the world, and brings personal
              blessings through wise investments.
            </h4>
            <div className="body-large flex flex-wrap gap-sm items-center">
              {['2 Corinthians 9:12-15', 'Acts 20:35', 'Luke 12:33'].map((verse, index) => (
                <React.Fragment key={`about-page-vision-verses-${verse}`}>
                  {verse}
                  {index !== 2 && (
                    <div className="rounded-full size-[5px] bg-charcoal dark:bg-primaryDark" />
                  )}
                </React.Fragment>
              ))}
            </div>
            <Button
              pill
              size="lg"
              color="primary"
              target="_blank"
              href={PageRoutes.pushpay}
              className="mt-6 md:px-6 w-full md:w-fit font-bold"
            >
              Donate online with PushPay
            </Button>
          </div>
        </div>

        {/* OTHER WAYS TO GIVE */}
        <div className="flex flex-col gap-xl md:gap-xxl">
          <CenterTextSection
            noPadding
            title="Ways to Give"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nostrum numquam quidem eveniet."
          />

          {/* Tablet/Desktop */}
          <div className="hidden md:grid grid-cols-3 gap-xxl justify-center">
            {otherWaysToGiveArr.map((item) => (
              <ImageWithTitleAndHiddenTextCard
                key={item.title}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          {/* Mobile */}
          <SimpleCarousel
            blueDots
            className="md:hidden h-fit"
            slides={otherWaysToGiveArr.map((item) => (
              <ImageWithTitleAndHiddenTextCard
                key={item.title}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          />
        </div>

        {/* FAQs */}
        <div className="flex flex-col gap-xl md:gap-xxl">
          <SectionHeader
            noPadding
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
        <div className="p-padding bg-navy text-white">
          <div className="text-white text-center flex flex-col gap-xl">
            <h3>
              We{' '}
              <span className={`${permanentMarker.className} text-primary`}>
                Thank You for your
              </span>{' '}
              financial{' '}
              <span className={`${permanentMarker.className} text-primary`}>support!</span>
            </h3>
            <h4 className="md:max-w-[80%] mx-auto">
              We are blessed to have supporters like you and we are honored
              <br /> that you have chosen this Ministry as a place to sow your seed.
            </h4>
            <h4 className="md:max-w-[80%] mx-auto">
              If you have any questions or concerns,
              <br />
              email{' '}
              <Link
                href="mailto:thewindchurch@outlook.com"
                className="text-primary hover:underline break-normal"
              >
                thewindchurch@outlook.com
              </Link>{' '}
              <br />
              or call <span className="text-primary">(951) 359-0203</span>.
            </h4>
            <div
              dangerouslySetInnerHTML={{
                __html: styleSelectedWords({
                  text: 'Your partners in Christ at The Wind.',
                  array: [[5, 6]],
                  htmlTag: 'h3',
                }),
              }}
            />
          </div>
        </div>
      </div>

      <PageScrollUpButton />
    </div>
  );
};

export default Give;
