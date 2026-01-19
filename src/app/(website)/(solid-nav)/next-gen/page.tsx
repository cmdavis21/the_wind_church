import Accordion from '@/components/accordion/Accordion';
import PageScrollUpButton from '@/components/buttons/page-scroll-up-button/PageScrollUpButton';
import EventCard from '@/components/cards/event-card/EventCard';
import ImageWithTitleDescriptionCard from '@/components/cards/image-with-title-description-card/ImageWithTitleDescriptionCard';
import LeaderCard from '@/components/cards/leader-card/LeaderCard';
import SimpleCarousel from '@/components/carousels/simple-carousel/SimpleCarousel';
import NextGenRosterSignupForm from '@/components/forms/next-gen-roster-signup-form/NextGenRosterSignupForm';
import PageHeaderWithBackground from '@/components/heroes/page-header-with-background/PageHeaderWithBackground';
import Baby from '@/components/icons/baby';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import MediaBackgroundAndContent from '@/components/sections/media-background-and-content/MediaBackgroundAndContent';
import PassageQuote from '@/components/sections/passage-quote/PassageQuote';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import { AWS_ASSET_BASE_URL, WEBSITE_BASE_URL } from '@/data/constants';
import { PageRoutes } from '@/data/page-routes';
import { getMinistryEvents } from '@/data/services/sanity/queries/events';
import { getNextGenPage } from '@/data/services/sanity/queries/next-gen-page';
import { Event } from '@/data/types';
import { isAfter } from 'date-fns';
import { Button } from 'flowbite-react';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'NextGen' });
  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_BASE_URL}${PageRoutes.nextGen}`;
  const image = `${AWS_ASSET_BASE_URL}/placeholder-media/kids_group.jpg`;
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

const NextGen = async () => {
  const nextGenPageInfo = await getNextGenPage();
  const events = await getMinistryEvents('Next Gen');
  return (
    <div className="px-padding flex flex-col gap-3xl lg:gap-4xl 2xl:gap-5xl max-width-center">
      <PageHeaderWithBackground
        media={{
          src: `${AWS_ASSET_BASE_URL}/placeholder-media/kids_group.jpg`,
          alt: 'decorative background image',
          poster: '',
        }}
        title="Next Gen"
        subtitle="Sunday Services provided for infants to High School children"
      />

      {/* CORE PRINCIPLES */}
      <div className="flex flex-col gap-xl md:gap-xxl">
        <CenterTextSection
          highlight={[[0, 0]]}
          title="Core Principles"
          description="We believe every child—infant through high school—is uniquely created by God and worthy of intentional care, discipleship, and joy‑filled community. Our Next Gen ministry is built on principles that help young hearts grow in faith, character, and confidence as they discover who they are in Christ"
        />
        <div className="flex flex-wrap gap-xxl justify-center">
          <ImageWithTitleDescriptionCard
            alt=""
            src={`${AWS_ASSET_BASE_URL}/placeholder-media/kids_classroom_2.jpg`}
            title="Christ-Centered Studies"
            description="Through interactive teaching, worship, and hands‑on learning, we guide students to build a strong foundation in Christ that will carry them through every season of life."
          />
          <ImageWithTitleDescriptionCard
            alt=""
            src={`${AWS_ASSET_BASE_URL}/placeholder-media/kid_outside.jpg`}
            title="Creative Fun & Exploration"
            description="From creative crafts and games to outdoor play and team‑building activities, our environments are designed to spark curiosity, build friendships, and make church a place kids are excited to be every week."
          />
          <ImageWithTitleDescriptionCard
            alt=""
            src={`${AWS_ASSET_BASE_URL}/placeholder-media/kids_classroom_1.jpg`}
            title="Respect and Love"
            description="Through guided conversations, positive role‑modeling, and Christ‑like encouragement, we teach students how to treat others with kindness, empathy, and respect—reflecting the heart of Jesus in their everyday lives."
          />
        </div>
        {nextGenPageInfo && nextGenPageInfo.cirriculum_file && (
          <a
            className="mx-auto"
            href={nextGenPageInfo.cirriculum_file}
            download="the_wind_church_youth_service_cirriculum.pdf"
          >
            <Button pill color="primary" size="lg">
              Download Cirriculum
            </Button>
          </a>
        )}
      </div>

      <PassageQuote
        passage="Let no one despise your youth, but set an example for the believers in speech, in conduct, in love, in faith, and in purity"
        verse="1 Timothy 4:12"
      />

      {/* EDUCATORS */}
      {nextGenPageInfo && nextGenPageInfo.educators && (
        <div className="flex flex-col gap-xl md:gap-xxl">
          <SectionHeader
            title="Meet our Educators & Caretakers"
            subtitle="Select Leaders to learn more"
          />
          <div>
            {/* Desktop */}
            <div className="hidden md:block">
              <div className="grid grid-cols-3 lg:grid-cols-4 gap-xl mx-auto">
                {nextGenPageInfo.educators.map((educator) => (
                  <LeaderCard
                    key={`youth-service-educator-${educator.first_name}-${educator.last_name}`}
                    {...educator}
                  />
                ))}
              </div>
            </div>

            {/* Mobile */}
            <SimpleCarousel
              className="md:hidden"
              slides={nextGenPageInfo.educators.map((educator) => (
                <LeaderCard
                  key={`mobile-youth-service-educator-${educator.first_name}-${educator.last_name}`}
                  {...educator}
                />
              ))}
            />
          </div>
        </div>
      )}

      {/* EVENTS */}
      <div className="flex flex-col gap-xl md:gap-xxl">
        <CenterTextSection
          title="Next Gen Events"
          description="Look out for fun, adventurous, and learning-focused events for the Wind youth!"
        />
        <div className="2xl:px-padding flex flex-col items-center gap-xl">
          {events && events.length > 0 ? (
            <div className="w-full flex flex-wrap justify-center gap-xxl">
              {events.map((event: Event) => (
                <EventCard
                  key={`event-card-${event.name}`}
                  event={event}
                  scale={isAfter(event.date, new Date())}
                />
              ))}
            </div>
          ) : (
            <h4 className="text-center">No events at this time</h4>
          )}
          <Link href={PageRoutes.events}>
            <Button pill color="primary" size="lg">
              View other Wind Events
            </Button>
          </Link>
        </div>
      </div>

      {/* NURSERY CTA */}
      <MediaBackgroundAndContent
        fullWidth={false}
        background={{
          src: `${AWS_ASSET_BASE_URL}/placeholder-media/kids_classroom_1.jpg`,
        }}
        content={
          <div className="flex flex-col">
            <Baby className="size-[60px] fill-white" />
            <h3 className="pt-sm">Nursery for Infants & Toddlers</h3>
            <h3>is available during service!</h3>
          </div>
        }
      />

      {/* FAQs */}
      <div className="flex flex-col gap-xl md:gap-xxl">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Let us tell you more about The Wind Youth Services"
        />
        <Accordion
          content={[
            {
              title: 'What is the purpose of the Youth Service?',
              description:
                "Our Youth Service is designed to help young people encounter God, grow in their faith, and build strong relationships with peers. It's a dynamic and engaging environment where students can worship, learn biblical truths, and develop a Christ-centered foundation for life.",
            },
            {
              title: 'What age group is the Youth Service for?',
              description:
                'The Youth Service is open to students from toddler to high school. We tailor our messages, activities, and small groups to be relevant and impactful for each age group.',
            },
            {
              title: 'Is the teaching in Youth Service appropriate for my child?',
              description:
                'Absolutely! Our messages are biblically sound, age-appropriate, and designed to help students navigate real-life challenges through a faith-based perspective. We focus on topics like identity in Christ, friendships, purpose, and making wise choices.',
            },
            {
              title: 'Will my child be safe during Youth Service?',
              description:
                'Yes! The safety of your child is our top priority. All youth leaders and volunteers undergo background checks and training to create a secure and welcoming environment. We also have clear safety policies in place for check-in and check-out.',
            },
            {
              title: 'What if my child is nervous about attending?',
              description:
                "That's completely understandable! Many students feel unsure when trying something new. Our youth team is welcoming, and we'll make sure your child feels comfortable and included from the moment they arrive.",
            },
            {
              title: 'What can my child expect during a Youth Service?',
              description:
                'A typical service includes live worship, an engaging message, small group discussions, and interactive activities. We aim to create a fun and faith-filled atmosphere where students can grow spiritually and make new friends.',
            },
            {
              title: 'Do I need to register my child beforehand?',
              description:
                'We recommend registering online or at the check-in desk when you arrive. This helps us ensure a smooth experience and connect your child with the right group based on their age and grade level.',
            },
            {
              title: 'How can I stay involved as a parent?',
              description:
                "We encourage parents to stay connected by attending parent meetings, signing up for youth service updates, and talking with their child about what they're learning. You're also welcome to volunteer or participate in special events throughout the year!",
            },
          ]}
        />
      </div>

      {/* ROSTER SIGNUP */}
      <div className="flex flex-col gap-xl md:gap-xxl">
        <CenterTextSection
          title="Add your child to the register"
          description=" Ut assumenda eius consequatur magni nisi temporibus debitis excepturi pariatur beatae corporis, laborum ea sed soluta reprehenderit inventore unde nihil eaque alias?"
        />
        <NextGenRosterSignupForm />
      </div>

      {/* PAGE SCROLL-UP BUTTON */}
      <PageScrollUpButton />
    </div>
  );
};

export default NextGen;
