import Accordion from '@/components/accordion/Accordion';
import PageScrollUpButton from '@/components/buttons/page-scroll-up-button/PageScrollUpButton';
import ImageWithTitleDescriptionCard from '@/components/cards/image-with-title-description-card/ImageWithTitleDescriptionCard';
import LeaderCard from '@/components/cards/leader-card/LeaderCard';
import SimpleCarousel from '@/components/carousels/simple-carousel/SimpleCarousel';
import NextGenRosterSignupForm from '@/components/forms/next-gen-roster-signup-form/NextGenRosterSignupForm';
import PageHeaderWithBackground from '@/components/heroes/page-header-with-background/PageHeaderWithBackground';
import Baby from '@/components/icons/baby';
import EventCardsMasonryGrid from '@/components/masonry-grids/event-cards-masonry-grid/EventCardsMasonryGrid';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import MediaBackgroundAndContent from '@/components/sections/media-background-and-content/MediaBackgroundAndContent';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import { AWS_ASSET_BASE_URL, WEBSITE_BASE_URL } from '@/data/constants';
import { PageRoutes } from '@/data/page-routes';
import { getAllEvents } from '@/data/services/sanity/queries/events';
import { getNextGenPage } from '@/data/services/sanity/queries/next-gen-page';
import { Event } from '@/data/types';
import { Button } from 'flowbite-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next Gen',
  description:
    'Our Youth Services empower the next generation to know Jesus and make Him known through fun and faith-filled gatherings.',
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/next-gen`,
  },
};

const NextGen = async () => {
  const nextGenPageInfo = await getNextGenPage();
  const events = await getAllEvents({ hostName: 'Next Gen' });
  return (
    <div className="px-padding flex flex-col gap-xxl lg:gap-[100px] 2xl:gap-[125px]">
      <PageHeaderWithBackground
        media={{
          src: `${AWS_ASSET_BASE_URL}/placeholder-media/kids_group.jpg`,
          alt: 'decorative background image',
          poster: '',
        }}
        title="Next Gen"
        subtitle="Sunday Services provided for infants to High School children"
      />

      {/* Core Principles */}
      <div className="flex flex-col gap-xl md:gap-xxl">
        <CenterTextSection
          highlight={[[0, 0]]}
          title="Core Principles"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, cum reiciendis ad, maiores quaerat"
        />
        <div className="flex flex-wrap gap-xxl justify-center">
          <ImageWithTitleDescriptionCard
            alt=""
            src={`${AWS_ASSET_BASE_URL}/placeholder-media/kids_classroom_2.jpg`}
            title="Christ-Centered Studies"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex numquam maiores ut. consectetur adipisicing elit. Ex numquam maiores ut."
          />
          <ImageWithTitleDescriptionCard
            alt=""
            src={`${AWS_ASSET_BASE_URL}/placeholder-media/kid_outside.jpg`}
            title="Fun Indoor/Activities"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex numquam maiores ut. consectetur adipisicing elit. Ex numquam maiores ut."
          />
          <ImageWithTitleDescriptionCard
            alt=""
            src={`${AWS_ASSET_BASE_URL}/placeholder-media/kids_classroom_1.jpg`}
            title="Respect and Love for one another"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex numquam maiores ut. consectetur adipisicing elit. Ex numquam maiores ut."
          />
        </div>
        {nextGenPageInfo && nextGenPageInfo.cirriculum_file && (
          <a
            href={nextGenPageInfo.cirriculum_file}
            download="the_wind_church_youth_service_cirriculum.pdf"
          >
            <Button color="primary" size="lg" pill className="mx-auto">
              Download Cirriculum
            </Button>
          </a>
        )}
      </div>

      {/* Educators */}
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

      {/* Upcoming Events for Youth */}
      <div className="flex flex-col gap-xl md:gap-xxl">
        <CenterTextSection
          title="Youth Events"
          description="Look out for fun, adventurous, and learning-focused events for the Wind youth!"
        />
        <div className="2xl:px-padding">
          {events && events.length > 0 ? (
            <EventCardsMasonryGrid
              events={events.map((event: Event) => ({
                ...event,
                scale: false,
              }))}
            />
          ) : (
            <h4 className="text-center">No events at this time</h4>
          )}
          <Button
            pill
            size="lg"
            color="primary"
            href={PageRoutes.events}
            className="mt-xl w-fit mx-auto"
          >
            View other Wind Events
          </Button>
        </div>
      </div>

      {/* Nursery */}
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

      {/* Signup Form */}
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
