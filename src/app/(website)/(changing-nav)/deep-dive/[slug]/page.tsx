import Accordion from '@/components/accordion/Accordion';
import AlertMessage from '@/components/alerts/alert-message/AlertMessage';
import ErrorAlert from '@/components/alerts/error-alert/ErrorAlert';
import ImageWithTitleDescriptionCard from '@/components/cards/image-with-title-description-card/ImageWithTitleDescriptionCard';
import LeaderCard from '@/components/cards/leader-card/LeaderCard';
import { MultiInfoCard } from '@/components/cards/multi-info-card/MultiInfoCard';
import SimpleCarousel from '@/components/carousels/simple-carousel/SimpleCarousel';
import PageHero from '@/components/heroes/page-hero/PageHero';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import MediaBackgroundAndContent from '@/components/sections/media-background-and-content/MediaBackgroundAndContent';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import { DEFAULT_LOCALE, Locale } from '@/data/i18n/utils';
import { PageRoutes } from '@/data/page-routes';
import { WEBSITE_URL } from '@/data/server/env.server';
import { getAllDeepDives, getDeepDiveBySlug } from '@/data/server/sanity/queries/deep-dives';

import { getLocale, getTranslations } from 'next-intl/server';

export async function generateStaticParams() {
  const deepDives = await getAllDeepDives(DEFAULT_LOCALE);
  return deepDives.map((deepDive) => ({ slug: deepDive.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations({ locale, namespace: 'DeepDive' });

  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_URL}${PageRoutes.deepDive}/${slug}`;
  const image = '/images/wind_church_building.webp';

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

const SingleDeepDivePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('DeepDive');

  const deepDive = await getDeepDiveBySlug(slug, locale);

  if (!deepDive) {
    return (
      <MediaBackgroundAndContent
        centerContent
        background={{
          src: '/images/wind_church_building.webp',
          alt: 'Image of The Wind Church building',
        }}
        content={<ErrorAlert />}
      />
    );
  }

  const {
    name,
    description,
    instructors,
    image,
    meeting_details,
    start_date,
    end_date,
    required_materials,
    accepting_new_students,
  } = deepDive;

  return (
    <div>
      <PageHero size="short" title={name} media={{ src: image.src }} />
      <div className="flex flex-col gap-3xl sm:gap-4xl pt-3xl sm:pt-4xl">
        {/* DESCRIPTION */}
        <h4 className="px-padding max-width-center">{description}</h4>

        {/* INSTRUCTORS */}
        <div className="flex flex-col gap-xl md:gap-xxl px-padding max-width-center">
          <SectionHeader title="Meet the Instructors" subtitle="Select Leaders to learn more" />
          {/* DESKTOP */}
          <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-xl place-items-center">
            {instructors.map((leader) => (
              <LeaderCard
                key={`ministry-leader-desktop-${leader.first_name}-${leader.last_name}`}
                {...leader}
              />
            ))}
          </div>

          {/* MOBILE */}
          <SimpleCarousel
            className="sm:hidden"
            slides={instructors.map((leader) => (
              <LeaderCard
                key={`ministry-leader-mobile-${leader.first_name}-${leader.last_name}`}
                {...leader}
              />
            ))}
          />
        </div>

        {/* MISC DETAILS */}
        <div className="flex flex-col gap-xl md:gap-xxl px-padding max-width-center">
          <SectionHeader title="The Details" subtitle="It’s the finer things..." />

          {/* ACCEPTING NEW STUDENTS */}
          {accepting_new_students ? (
            <AlertMessage
              type="success"
              title="Accepting New Students!"
              description="Join us and grow deeper in your walk with Jesus. This Deep Dive is a powerful space to learn, connect, and be led by the Spirit."
            />
          ) : (
            <AlertMessage
              type="failure"
              title="Not Accepting New Students"
              description="This Deep Dive is already in progress. To honor the flow of teaching and support the students currently enrolled, we cannot accept new participants at this time."
            />
          )}

          <div
            className="grid gap-xl"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))' }}
          >
            {/* SCHEDULE */}
            <MultiInfoCard
              label="Schedule"
              content={{
                type: 'timeline',
                data: {
                  start_date: new Date(start_date),
                  end_date: new Date(end_date),
                },
              }}
            />

            {/* MEETING TIMES */}
            {meeting_details && meeting_details.length > 0 && (
              <MultiInfoCard
                label="Meets"
                content={{
                  type: 'meeting',
                  data: meeting_details,
                }}
              />
            )}

            {/* REQUIRED MATERIALS */}
            {required_materials && required_materials.length > 0 && (
              <MultiInfoCard
                label="Bring"
                content={{
                  type: 'list',
                  data: required_materials,
                }}
              />
            )}
          </div>
        </div>

        {/* WHAT IS A DEEP DIVE */}
        <MediaBackgroundAndContent
          background={{
            src: '/images/product-placeholder.webp',
          }}
          content={
            <div className="flex flex-col gap-md">
              <h2 className="font-bold">What is a Deep Dive Study?</h2>
              <h4 className="lg:max-w-[75%]">
                A Deep Dive Study is an intentional time of fellowship, discipleship, and biblical
                study designed to help you grow in faith. It&apos;s more than just reading
                Scripture—it&apos;s about applying God&apos;s Word to your life in a community of
                believers.
              </h4>
            </div>
          }
        />

        {/* FAQs */}
        <div className="flex flex-col gap-xl md:gap-xxl px-padding max-width-center">
          <SectionHeader
            subtitle="Any more questions?"
            title="Find answers to your questions here"
          />
          <Accordion
            content={[
              {
                title: 'Is a Deep Dive Study just another Bible study?',
                description:
                  "Not quite! While Scripture is at the heart of every session, Deep Dive Studies also focus on practical application, personal growth, and discipleship. You won't just learn—you'll be equipped to live out your faith in everyday life.",
              },
              {
                title: 'Do I need to have a strong biblical background to join?',
                description:
                  "No! Deep Dive Studies are open to everyone, whether you're new to faith or have been walking with Christ for years. Our discussions are designed to be accessible, engaging, and encouraging for all levels of biblical knowledge.",
              },
              {
                title: "What if I'm nervous about joining?",
                description:
                  "That's completely normal! Deep Dive Studies are welcoming and judgment-free spaces where you can grow at your own pace. You'll find encouragement, support, and a community that's excited to walk alongside you in your faith journey.",
              },
              {
                title: 'How does a Deep Dive Study help me in my everyday life?',
                description:
                  "By taking time to study and reflect on God's Word, you'll gain wisdom, clarity, and confidence in your faith. These studies provide real-life applications that help you navigate relationships, challenges, and personal growth with a Christ-centered perspective.",
              },
              {
                title: "How often do Deep Dive Studies meet, and what's the time commitment?",
                description:
                  'Meetings vary based on the group, but most studies meet weekly or biweekly. Sessions are designed to fit into your schedule while allowing enough time for discussion, prayer, and fellowship.',
              },
            ]}
          />
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-xl md:gap-xxl px-padding max-width-center">
          <CenterTextSection
            title="Take your next steps with us!"
            description="Whether you're new to faith or looking to get more involved, we're here to walk with you every step of the way."
          />
          <div className="flex flex-wrap justify-center gap-xxl">
            <ImageWithTitleDescriptionCard
              alt="People gathering for church service"
              src="/images/product-placeholder.webp"
              title="Visit The Wind"
              description="Join us for powerful worship, inspiring messages, and a welcoming community. Services happen every Sunday morning and Wednesday evening."
              link={{
                label: 'Learn about the Wind',
                href: PageRoutes.about,
              }}
            />
            <ImageWithTitleDescriptionCard
              alt="Group in Bible study session"
              src="/images/product-placeholder.webp"
              title="Try our Deep Dives"
              description="Explore the Word in a deeper way. Our Deep Dive Sessions are small-group Bible studies where you can ask questions and grow in your faith."
              link={{
                label: 'Go to Deep Dive',
                href: PageRoutes.deepDive,
              }}
            />
            <ImageWithTitleDescriptionCard
              alt="Children in a classroom during youth service"
              src="/images/product-placeholder.webp"
              title="Learn about Next Gen"
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

export default SingleDeepDivePage;
