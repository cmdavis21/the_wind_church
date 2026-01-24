import { AWS_ASSET_BASE_URL, WEBSITE_BASE_URL } from '@/data/constants';

import Accordion from '@/components/accordion/Accordion';
import AlertMessage from '@/components/alerts/alert-message/AlertMessage';
import ErrorAlert from '@/components/alerts/error-alert/ErrorAlert';
import ImageWithTitleDescriptionCard from '@/components/cards/image-with-title-description-card/ImageWithTitleDescriptionCard';
import LeaderCard from '@/components/cards/leader-card/LeaderCard';
import SimpleCarousel from '@/components/carousels/simple-carousel/SimpleCarousel';
import PageHero from '@/components/heroes/page-hero/PageHero';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import MediaBackgroundAndContent from '@/components/sections/media-background-and-content/MediaBackgroundAndContent';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import { formatDateMMMddyyyy } from '@/data/format-date';
import { PageRoutes } from '@/data/page-routes';
import { getAllDeepDives, getDeepDiveBySlug } from '@/data/services/sanity/queries/deep-dives';
import { getTranslations } from 'next-intl/server';

export async function generateStaticParams() {
  const deepDives = await getAllDeepDives();
  return deepDives.map((deepDive) => ({
    slug: deepDive.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'DeepDive' });
  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_BASE_URL}${PageRoutes.deepDive}/${slug}`;
  const image = `${AWS_ASSET_BASE_URL}/images/wind_church_building.webp`;
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
  const deepDive = await getDeepDiveBySlug(slug);

  if (!deepDive) {
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
      <PageHero size="short" title={deepDive.name} media={{ src: deepDive.image.src }} />

      <div className="pt-padding px-padding flex flex-col gap-xxl max-width-center">
        {/* DESCRIPTION */}
        <h4 className="xl:text-[24px]">{deepDive.description}</h4>

        {/* INSTRUCTORS */}
        <div className="flex flex-col gap-xl md:gap-xxl lg:pt-xl">
          <SectionHeader title="Meet the Instructors" subtitle="Select Leaders to learn more" />
          {/* DESKTOP */}
          <div className="hidden md:block">
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-xl place-content-center">
              {deepDive.instructors.map((leader) => (
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
            slides={deepDive.instructors.map((leader) => (
              <LeaderCard
                key={`ministry-leader-mobile-${leader.first_name}-${leader.last_name}`}
                {...leader}
              />
            ))}
          />
        </div>

        {/* MISC DETAILS */}
        <div className="flex flex-col gap-xl md:gap-xxl lg:pt-xl">
          <SectionHeader title="The Details" subtitle="It’s the finer things..." />

          {/* ACCEPTING NEW STUDENTS */}
          {deepDive.accepting_new_students ? (
            <AlertMessage
              type="success"
              title="Accepting New Students!"
              description="Don't wait, join and grow your connection to Jesus ands strive to be spirit-filled and spirit-led!"
            />
          ) : (
            <AlertMessage
              type="failure"
              title="Not accepting new students"
              description="Due to time-sensitive structure and flow of the deep dive and in respect to student learning, this deep
                dive cannot accept new students."
            />
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md justify-between">
            {/* START / END DATE */}
            <div className="flex flex-col gap-sm">
              <div className="flex flex-col gap-xs">
                <p className="body-small font-bold text-light-charcoal dark:text-dark-charcoal">
                  Start date:
                </p>
                <div className="p-sm rounded-md border border-light-gray dark:border-dark-gray dark:bg-dark-gray shadow body-large text-center">
                  {formatDateMMMddyyyy(deepDive.start_date)}
                </div>
              </div>
              <div className="flex flex-col gap-xs">
                <p className="body-small font-bold text-light-charcoal dark:text-dark-charcoal">
                  End date:
                </p>
                <div className="p-sm rounded-md border border-light-gray dark:border-dark-gray dark:bg-dark-gray shadow body-large text-center">
                  {formatDateMMMddyyyy(deepDive.end_date)}
                </div>
              </div>
            </div>

            {/* MEETING TIMES */}
            <div className="flex flex-col gap-sm">
              <div className="flex flex-col gap-xs">
                <p className="body-small font-bold text-light-charcoal dark:text-dark-charcoal">
                  Meeting times:
                </p>
                {deepDive.meeting_details.map((meet) => (
                  <div
                    key={`deep-dive-meeting-detail-${meet.day}-${meet.time.hour}`}
                    className="p-sm rounded-md border border-light-gray dark:border-dark-gray dark:bg-dark-gray shadow body-large text-center"
                  >
                    {`${meet.day.slice(0, 3)} • ${meet.time.hour}:${meet.time.minute} ${meet.time.time_of_day} • ${meet.location}`}
                  </div>
                ))}
              </div>
            </div>

            {/* REQUIRED MATERIALS */}
            <div className="flex flex-col gap-sm">
              <div className="flex flex-col gap-xs">
                <p className="body-small font-bold text-light-charcoal dark:text-dark-charcoal">
                  Required materials:
                </p>
                {deepDive.required_materials?.map((mat) => (
                  <div
                    key={`deep-dive-required-material-${mat}`}
                    className="p-sm rounded-md border border-light-gray dark:border-dark-gray dark:bg-dark-gray shadow body-large text-center"
                  >
                    {mat}
                  </div>
                )) ?? (
                  <div className="p-sm rounded-md border border-light-gray dark:border-dark-gray dark:bg-dark-gray shadow body-large text-center">
                    Just bring yourself!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* WHAT IS A DEEP DIVE */}
        <div className="lg:pt-xl">
          <MediaBackgroundAndContent
            fullWidth={false}
            background={{
              src: `${AWS_ASSET_BASE_URL}/placeholder-media/church_prayer.jpg`,
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
        </div>

        {/* FAQs */}
        <div className="flex flex-col gap-xl md:gap-xxl lg:pt-xl">
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
        <div className="flex flex-col gap-xl md:gap-xxl lg:pt-xl">
          <CenterTextSection
            highlight={[[4, 5]]}
            title="Take your next steps with us!"
            description="Whether you're new to faith or looking to get more involved, we're here to walk with you every step of the way."
          />
          <div className="flex flex-wrap gap-xxl 2xl:gap-4xl justify-center">
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

export default SingleDeepDivePage;
