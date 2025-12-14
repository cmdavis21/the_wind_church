import Accordion from '@/components/accordion/Accordion';
import ImageCardWithModal from '@/components/cards/image-card-with-modal/ImageCardWithModal';
import ImageWithTitleDescriptionCard from '@/components/cards/image-with-title-description-card/ImageWithTitleDescriptionCard';
import LeaderCard from '@/components/cards/leader-card/LeaderCard';
import SimpleCarousel from '@/components/carousels/simple-carousel/SimpleCarousel';
import ErrorPage from '@/components/error-page/ErrorPage';
import PageHero from '@/components/heroes/page-hero/PageHero';
import EventCardsMasonryGrid from '@/components/masonry-grids/event-cards-masonry-grid/EventCardsMasonryGrid';
import GalleryMasonryGrid from '@/components/masonry-grids/gallery-masonry-grid/GalleryMasonryGrid';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import MediaBackgroundAndContent from '@/components/sections/media-background-and-content/MediaBackgroundAndContent';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import { AWS_ASSET_BASE_URL, WEBSITE_BASE_URL } from '@/data/constants';
import { PageRoutes } from '@/data/page-routes';
import { getGalleryImages } from '@/data/services/aws/gallery';
import { getAllEvents } from '@/data/services/sanity/queries/events';
import { getAllMinistries, getMinistryBySlug } from '@/data/services/sanity/queries/ministries';
import { Button } from 'flowbite-react';

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
  const { selectGallery } = await getGalleryImages(ministry?.name);
  const events = await getAllEvents({ hostName: ministry?.name });
  const latestEvents = await getAllEvents({ latestEvents: true });

  if (!ministry) {
    return <ErrorPage description="Sorry, this page must be missing! Please try again later." />;
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

      <div className="p-padding flex flex-col gap-xxl max-w-[1440px] mx-auto">
        {/* Mission */}
        <div className="flex flex-col gap-lg">
          <h4 className="text-charcoal dark:text-charcoalLight">
            {ministry.scripture.verse} - "{ministry.scripture.passage}"
          </h4>
          <h3 className="xl:text-[24px]">{ministry.description}</h3>
        </div>

        {/* MINISTRY LEADER */}
        <div className="flex flex-col gap-xl md:gap-xxl lg:pt-xl">
          <SectionHeader noPadding title="Meet the Team" subtitle="Select members to learn more" />
          {/* DESKTOP */}
          <div className="hidden md:block">
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-xl place-content-center">
              {[ministry.coach, ...ministry.coordinators].map((leader) => (
                <LeaderCard
                  key={`ministry-leader-desktop-${leader.first_name}-${leader.last_name}`}
                  {...leader}
                />
              ))}
            </div>
          </div>

          {/* MOBILE */}
          <SimpleCarousel
            className="md:hidden"
            slides={[ministry.coach, ...ministry.coordinators].map((leader) => (
              <LeaderCard
                key={`ministry-leader-mobile-${leader.first_name}-${leader.last_name}`}
                {...leader}
              />
            ))}
          />
        </div>

        {/* MISC DETAILS */}
        <div className="flex flex-col gap-xl md:gap-xxl lg:pt-xl">
          <SectionHeader noPadding title="Meeting times" subtitle="It’s the finer things..." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md justify-between">
            {ministry.meeting_details.map((meet) => (
              <div
                key={`deep-dive-meeting-detail-${meet.day}-${meet.time.hour}`}
                className="p-sm rounded-md border border-gray dark:border-grayDark dark:bg-grayDark shadow body-large text-center"
              >
                {`${meet.day.slice(0, 3)} • ${meet.time.hour}:${meet.time.minute} ${meet.time.time_of_day} • ${meet.location}`}
              </div>
            ))}
          </div>
        </div>

        {/* GALLERY */}
        {selectGallery && selectGallery.length > 0 && (
          <div className="flex flex-col gap-xl md:gap-xxl lg:pt-xl">
            <SectionHeader
              noPadding
              title="Ministry Gallery"
              subtitle="Select a photo to view the memories"
            />

            {/* Desktop */}
            <div className="hidden md:block">
              <GalleryMasonryGrid images={selectGallery} />
            </div>

            {/* Mobile */}
            <SimpleCarousel
              showDots={false}
              className="md:hidden"
              slides={selectGallery.map((img) => (
                <ImageCardWithModal
                  key={`wind-gallery-mobile-${img}`}
                  src={img}
                  alt="wind gallery image"
                  className="w-full min-w-[200px] max-w-[500px] aspect-square"
                />
              ))}
            />
          </div>
        )}

        {/* EVENTS */}
        <div className="flex flex-col gap-xl md:gap-xxl lg:pt-xl">
          <CenterTextSection
            noPadding
            title="Ministry Events"
            description="Look out for fun workshops, fellowships, and more at the Wind!"
          />
          <div>
            {events && events.length > 0 ? (
              <div className="2xl:px-padding">
                <EventCardsMasonryGrid
                  events={events.map((event) => ({
                    ...event,
                    scale: false,
                  }))}
                />
              </div>
            ) : (
              <div className="flex flex-col gap-lg">
                <h4 className="text-center dark:text-textInverse">No events at this time.</h4>
                <div className="2xl:px-padding">
                  <EventCardsMasonryGrid
                    events={latestEvents.map((event) => ({
                      ...event,
                      scale: false,
                    }))}
                  />
                </div>
              </div>
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

        {/* WHY JOIN A MINISTRY */}
        <div className="lg:pt-xl">
          <MediaBackgroundAndContent
            rounded
            background={{
              src: `${AWS_ASSET_BASE_URL}/placeholder-media/church_prayer.jpg`,
              alt: 'Decorative Background Image',
            }}
            content={
              <div className="flex flex-col gap-md">
                <h2 className="font-bold">Why join a ministry?</h2>
                <h4 className="lg:max-w-[75%]">
                  Joining a ministry allows you to grow spiritually, build meaningful relationships,
                  and serve others in a way that aligns with your God-given gifts. It&apos;s a great
                  way to deepen your faith while making a real impact in the church and community.
                </h4>
              </div>
            }
          />
        </div>

        {/* FAQS */}
        <div className="flex flex-col gap-xl md:gap-xxl lg:pt-xl">
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
        <div className="flex flex-col gap-xl md:gap-xxl lg:pt-xl">
          <CenterTextSection
            noPadding
            highlight={[[4, 5]]}
            title="Take your next steps with us!"
            description="Whether you're new to faith or looking to get more involved, we're here to walk with you every step of the way."
          />
          <div className="flex flex-wrap gap-xxl 2xl:gap-[100px] justify-center">
            <ImageWithTitleDescriptionCard
              alt="People gathering for church service"
              src={`${AWS_ASSET_BASE_URL}/placeholder-media/contro.webp`}
              title="Visit on Sunday or Wednesday"
              description="Join us for powerful worship, inspiring messages, and a welcoming community. Services happen every Sunday morning and Wednesday evening."
              link={{
                label: 'Plan your visit',
                href: PageRoutes.planYourVisit,
              }}
            />
            <ImageWithTitleDescriptionCard
              alt="Group in Bible study session"
              src={`${AWS_ASSET_BASE_URL}/placeholder-media/lxg_meet.webp`}
              title="Try our Deep Dive Sessions"
              description="Explore the Word in a deeper way. Our Deep Dive Sessions are small-group Bible studies where you can ask questions and grow in your faith."
              link={{
                label: 'Go to Deep Dive',
                href: PageRoutes.deepDive,
              }}
            />
            <ImageWithTitleDescriptionCard
              alt="Children in a classroom during youth service"
              src={`${AWS_ASSET_BASE_URL}/placeholder-media/kids_classroom_2.jpg`}
              title="View our Youth Service"
              description="We offer engaging and age-appropriate services for kids and teens every week. It's a safe space for youth to learn, grow, and build friendships."
              link={{
                label: 'Go to Youth Service',
                href: PageRoutes.nextGen,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMinistryPage;
