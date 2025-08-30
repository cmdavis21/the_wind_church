import { Button } from 'flowbite-react';
import React from 'react';

import ImageWithTitleDescriptionCard from '@/components/cards/image-with-title-description-card/ImageWithTitleDescriptionCard';
import LeaderCard from '@/components/cards/leader-card/LeaderCard';
import SimpleCarousel from '@/components/carousels/simple-carousel/SimpleCarousel';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import { WEBSITE_BASE_URL } from '@/data/constants';
import { PageRoutes } from '@/data/page-routes';
import Accordion from '@/components/accordion/Accordion';
import MediaBackgroundAndContent from '@/components/sections/media-background-and-content/MediaBackgroundAndContent';
import ErrorMessage from '@/components/error-message/ErrorMessage';
import EventCardsMasonryGrid from '@/components/masonry-grids/event-cards-masonry-grid/EventCardsMasonryGrid';
import { Event } from '@/data/types';
import PassageQuote from '@/components/sections/passage-quote/PassageQuote';
import PageHero from '@/components/heroes/page-hero/PageHero';
import { getAllEvents } from '@/data/services/sanity/queries/events';
import { getAllMinistries, getMinistryBySlug } from '@/data/services/sanity/queries/ministries';

export async function generateStaticParams() {
  const ministries = await getAllMinistries();

  return ministries.map((ministry) => ({
    slug: ministry.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return {
    title: 'Ministries',
    description:
      'Explore ministries at The Wind Church for every age and stage—join us in growing together in Christ.',
    alternates: {
      canonical: `${WEBSITE_BASE_URL}/ministries/${slug}`,
    },
  };
}

const SingleMinistryPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const ministry = await getMinistryBySlug(slug);
  const events = await getAllEvents({ hostName: ministry?.name });

  if (!ministry) {
    return <ErrorMessage message="Sorry, this page must be missing! Please try again later." />;
  }

  return (
    <div>
      <PageHero
        short
        title={ministry.name}
        media={{
          src: ministry.image.src,
        }}
      />

      <div className="p-padding flex flex-col gap-xxl 2xl:gap-[125px]">
        <div className="flex flex-col gap-xxl">
          {/* DESCRIPTION */}
          <SectionHeader noPadding title="About Ministry" />

          <h4>{ministry.description}</h4>

          {/* MEETING DETAILS */}
          <SectionHeader noPadding title="Meeting Times" />

          <div className="flex flex-wrap gap-xl">
            {ministry.meeting_details.map((item) => (
              <div key={item.day} className="bg-lightGray/20 dark:bg-softGray/50 rounded-xl p-md">
                <h4>
                  {item.day} @ {item.time.hour}:{item.time.minute} {item.time.time_of_day}
                </h4>
                <h5>{item.location}</h5>
              </div>
            ))}
          </div>

          {/* COORDINATORS */}
          <SectionHeader noPadding title="Coordinators" />

          <h4 className="dark:text-softWhite font-normal">
            Meet the coordinators of {ministry.name}. They serve as the main point of contact,
            supporting volunteers and ensuring the ministry aligns with the church&apos;s mission.
            Their leadership helps each ministry grow and serve the community effectively.
          </h4>

          <div className="hidden md:block">
            <div className="grid grid-cols-1 md:grid-cols-3 min-[1800px]:grid-cols-4 gap-xl mx-auto">
              {ministry.coordinators.map((leader) => (
                <LeaderCard key={`wind-leader-desktop-${leader.first_name}`} {...leader} />
              ))}
            </div>
          </div>

          <SimpleCarousel
            className="md:hidden"
            slides={ministry.coordinators.map((leader) => (
              <LeaderCard key={`wind-leader-mobile-${leader.first_name}`} {...leader} />
            ))}
          />

          {/* COACH */}
          <SectionHeader noPadding title="Coach" />

          <h4 className="dark:text-softWhite font-normal">
            A Ministry Coach provides guidance and support to Ministry Coordinators, helping them
            lead with clarity and confidence. As an overseer, the Coach ensures each ministry stays
            aligned with the church&apos;s vision and operates in unity
          </h4>

          <LeaderCard
            key={`wind-leader-desktop-${ministry.coach.first_name}`}
            {...ministry.coach}
          />
        </div>

        {/* SCRIPTURE */}
        <PassageQuote passage={ministry.scripture.passage} verse={ministry.scripture.verse} />

        {/* EVENTS */}
        <div className="flex flex-col gap-xl md:gap-xxl">
          <CenterTextSection noPadding title="Ministry Events" />
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
              color="yellow"
              href={PageRoutes.events}
              className="mt-xl w-fit mx-auto"
            >
              View other Wind Events
            </Button>
          </div>
        </div>

        {/* WHY JOIN A MINISTRY */}
        <MediaBackgroundAndContent
          rounded
          background={{
            src: '/placeholder-media/church_prayer.jpg',
            alt: 'Decorative Background Image',
          }}
          content={
            <div className="pt-[100px] flex flex-col gap-md">
              <h2 className="font-bold">Why join a ministry?</h2>
              <h4 className="lg:max-w-[75%]">
                Joining a ministry allows you to grow spiritually, build meaningful relationships,
                and serve others in a way that aligns with your God-given gifts. It&apos;s a great
                way to deepen your faith while making a real impact in the church and community.
              </h4>
            </div>
          }
        />

        {/* FAQS */}
        <div className="flex flex-col gap-xl md:gap-xxl">
          <SectionHeader
            noPadding
            subtitle="Looking for more guidance?"
            title="Find answers to your questions here"
          />
          <Accordion
            content={[
              {
                title: 'Do I need to have prior experience or special skills to join?',
                description:
                  "Not at all! Each ministry welcomes people at all stages of their faith journey. Whether you're a seasoned leader or just looking to get involved, we'll provide guidance and support to help you serve with confidence.",
              },
              {
                title: 'How do I know which ministry is right for me?',
                description:
                  "Think about what excites you and where you feel called to serve. Whether it's worship, outreach, youth mentorship, or hospitality, there's a ministry that aligns with your passions. If you're unsure, we can help you find the perfect fit!",
              },
              {
                title: 'What if I have a busy schedule?',
                description:
                  "We understand that life gets busy! Many ministries offer flexible ways to get involved, whether it's through occasional service opportunities, remote participation, or leadership roles that fit your availability.",
              },
              {
                title: 'Can my family join a ministry together?',
                description:
                  'Absolutely! Many ministries welcome families to serve together, providing a great opportunity for parents and children to grow in faith as a team.',
              },
              {
                title: 'Will I receive training or support in my ministry role?',
                description:
                  "Yes! We provide resources, mentorship, and ongoing training to equip you for success in your ministry role. You'll never be alone on this journey.",
              },
              {
                title: 'How does serving in a ministry help me grow spiritually?',
                description:
                  'Serving strengthens your relationship with God as you apply biblical teachings in real-life service. It also fosters accountability, discipleship, and deeper connections within the church community.',
              },
              {
                title: 'How do I sign up or get more information?',
                description:
                  "It's easy! You can speak with a ministry leader after service, visit our website, or fill out a ministry interest form online. We'd love to connect and help you take the next step!",
              },
            ]}
          />
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-xl md:gap-xxl">
          <CenterTextSection
            noPadding
            highlight={[[4, 5]]}
            title="Take your next steps with us!"
            description="Whether you're new to faith or looking to get more involved, we're here to walk with you every step of the way."
          />
          <div className="flex flex-wrap gap-xxl 2xl:gap-[100px] justify-center">
            <ImageWithTitleDescriptionCard
              alt="People gathering for church service"
              src="/placeholder-media/contro.webp"
              title="Visit on Sunday or Wednesday"
              description="Join us for powerful worship, inspiring messages, and a welcoming community. Services happen every Sunday morning and Wednesday evening."
              link={{
                label: 'Plan your visit',
                href: PageRoutes.planYourVisit,
              }}
            />
            <ImageWithTitleDescriptionCard
              alt="Group in Bible study session"
              src="/placeholder-media/lxg_meet.webp"
              title="Try our Deep Dive Sessions"
              description="Explore the Word in a deeper way. Our Deep Dive Sessions are small-group Bible studies where you can ask questions and grow in your faith."
              link={{
                label: 'Go to Deep Dive',
                href: PageRoutes.deepDive,
              }}
            />
            <ImageWithTitleDescriptionCard
              alt="Children in a classroom during youth service"
              src="/placeholder-media/kids_classroom_2.jpg"
              title="View our Youth Service"
              description="We offer engaging and age-appropriate services for kids and teens every week. It's a safe space for youth to learn, grow, and build friendships."
              link={{
                label: 'Go to Youth Service',
                href: PageRoutes.youthService,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMinistryPage;
