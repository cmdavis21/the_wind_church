import Accordion from '@/components/accordion/Accordion';
import ErrorAlert from '@/components/alerts/error-alert/ErrorAlert';
import EventCard from '@/components/cards/event-card/EventCard';
import { default as ImageCard } from '@/components/cards/image-card/ImageCard';
import ImageWithTitleDescriptionCard from '@/components/cards/image-with-title-description-card/ImageWithTitleDescriptionCard';
import LeaderCard from '@/components/cards/leader-card/LeaderCard';
import SimpleCarousel from '@/components/carousels/simple-carousel/SimpleCarousel';
import PageHero from '@/components/heroes/page-hero/PageHero';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import MediaBackgroundAndContent from '@/components/sections/media-background-and-content/MediaBackgroundAndContent';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import { AWS_ASSET_BASE_URL, WEBSITE_BASE_URL } from '@/data/constants';
import { PageRoutes } from '@/data/page-routes';
import { getGalleryImages } from '@/data/services/aws/s3/gallery';
import { getMinistryEvents } from '@/data/services/sanity/queries/events';
import { getAllMinistries, getMinistryBySlug } from '@/data/services/sanity/queries/ministries';
import { Event } from '@/data/types';
import { isAfter } from 'date-fns';
import { Button } from 'flowbite-react';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateStaticParams() {
  const ministries = await getAllMinistries();

  return ministries.map((ministry) => ({
    slug: ministry.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'Ministries' });
  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_BASE_URL}${PageRoutes.ministries}/${slug}`;
  const image = `${AWS_ASSET_BASE_URL}/placeholder-media/food_bank.jpg`;
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

const SingleMinistryPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const ministry = await getMinistryBySlug(slug);
  const { selectGallery } = await getGalleryImages(ministry?.name);
  const events = await getMinistryEvents(ministry?.name ?? '');

  if (!ministry) {
    return (
      <MediaBackgroundAndContent
        centerContent
        background={{
          src: `${AWS_ASSET_BASE_URL}/images/wind_church_building.webp`,
          alt: 'Image of The Wind Church building',
        }}
        content={
          <div className="py-xxl">
            <ErrorAlert />
          </div>
        }
      />
    );
  }

  return (
    <div>
      <PageHero size="short" title={ministry.name} media={{ src: ministry.image.src }} />
      <div className="flex flex-col gap-3xl sm:gap-4xl max-width-center pt-3xl sm:pt-4xl px-padding">
        {/* DESCRIPTION */}
        <div className="flex flex-col gap-lg">
          <h4 className="text-light-charcoal dark:text-dark-charcoal">
            {ministry.scripture.verse} - "{ministry.scripture.passage}"
          </h4>
          <h4>{ministry.description}</h4>
        </div>

        {/* MINISTRY LEADER */}
        <div className="flex flex-col gap-xl md:gap-xxl">
          <SectionHeader title="Meet the Team" subtitle="Select members to learn more" />
          {/* DESKTOP */}
          <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-xl place-content-center">
            {[ministry.coach, ...ministry.coordinators].map((leader) => (
              <LeaderCard
                key={`ministry-leader-desktop-${leader.first_name}-${leader.last_name}`}
                {...leader}
              />
            ))}
          </div>

          {/* MOBILE */}
          <SimpleCarousel
            className="sm:hidden"
            slides={[ministry.coach, ...ministry.coordinators].map((leader) => (
              <LeaderCard
                key={`ministry-leader-mobile-${leader.first_name}-${leader.last_name}`}
                {...leader}
              />
            ))}
          />
        </div>

        {/* GALLERY */}
        {selectGallery && selectGallery.length > 0 && (
          <div className="flex flex-col gap-xl md:gap-xxl">
            <SectionHeader
              title="Ministry Gallery"
              subtitle="Select a photo to view the memories"
            />

            {/* Desktop */}
            <div className="hidden sm:grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-lg 2xl:px-padding">
              {selectGallery.map((src) => (
                <ImageCard
                  key={`wind-gallery-${src}`}
                  src={src}
                  alt="The Wind Church Gallery Image"
                />
              ))}
            </div>

            {/* Mobile */}
            <SimpleCarousel
              showDots={false}
              className="sm:hidden"
              slides={selectGallery.map((src) => (
                <ImageCard
                  key={`wind-gallery-mobile-${src}`}
                  src={src}
                  alt="The Wind Church Gallery Image"
                />
              ))}
            />
          </div>
        )}

        {/* EVENTS */}
        <div className="flex flex-col gap-xl md:gap-xxl">
          <CenterTextSection
            title="Ministry Events"
            description="Look out for fun workshops, fellowships, and more at the Wind!"
          />
          <div className="flex flex-col items-center gap-xl">
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

        {/* WHY JOIN A MINISTRY */}
        <MediaBackgroundAndContent
          fullWidth={false}
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

        {/* FAQS */}
        <div className="flex flex-col gap-xl md:gap-xxl">
          <SectionHeader subtitle="Frequently Asked Questions" title="Looking for more guidance?" />
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
            highlight={[[4, 5]]}
            title="Take your next steps with us!"
            description="Whether you're new to faith or looking to get more involved, we're here to walk with you every step of the way."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-xl">
            <ImageWithTitleDescriptionCard
              alt="People gathering for church service"
              src={`${AWS_ASSET_BASE_URL}/placeholder-media/contro.webp`}
              title="Visit on Sunday or Wednesday"
              description="Join us for powerful worship, inspiring messages, and a welcoming community. Services happen every Sunday morning and Wednesday evening."
              link={{
                label: 'Learn about the Wind',
                href: PageRoutes.about,
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
