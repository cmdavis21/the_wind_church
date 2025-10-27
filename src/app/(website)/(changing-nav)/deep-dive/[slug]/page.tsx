import ErrorMessage from '@/components/error-message/ErrorMessage';
import { AWS_ASSET_BASE_URL, WEBSITE_BASE_URL } from '@/data/constants';

import Accordion from '@/components/accordion/Accordion';
import ImageWithTitleDescriptionCard from '@/components/cards/image-with-title-description-card/ImageWithTitleDescriptionCard';
import LeaderCard from '@/components/cards/leader-card/LeaderCard';
import SimpleCarousel from '@/components/carousels/simple-carousel/SimpleCarousel';
import AlertMessage from '@/components/forms/inputs/alert-message/AlertMessage';
import PageHero from '@/components/heroes/page-hero/PageHero';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import MediaBackgroundAndContent from '@/components/sections/media-background-and-content/MediaBackgroundAndContent';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import { PageRoutes } from '@/data/page-routes';
import { getAllDeepDives, getDeepDiveBySlug } from '@/data/services/sanity/queries/deep-dives';

export async function generateStaticParams() {
  const deepDives = await getAllDeepDives();

  return deepDives.map((deepDive) => ({
    slug: deepDive.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return {
    title: 'Deep Dive',
    description:
      'Join our Deep Dive sessions for in-depth teaching, biblical study, and spiritual growth.',
    alternates: {
      canonical: `${WEBSITE_BASE_URL}/deep-dive/${slug}`,
    },
  };
}

const SingleDeepDivePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const deepDive = await getDeepDiveBySlug(slug);

  if (!deepDive) {
    return <ErrorMessage message="Sorry, this page must be missing! Please try again later." />;
  }

  return (
    <div>
      <PageHero
        short
        title={deepDive.name}
        media={{
          src: deepDive.image.src,
        }}
      />

      <div className="p-padding flex flex-col gap-xxl lg:gap-[100px]">
        <div className="flex flex-col gap-xxl">
          {/* ACCEPTING NEW STUDENTS */}
          {deepDive.accepting_new_students ? (
            <AlertMessage
              type="success"
              title="Accepting New Students!"
              description="Don't wait, join and grow your connection to Jesus and we strive to be spirit-filled and spirit-led!"
            />
          ) : (
            <AlertMessage
              type="failure"
              title="Not accepting new student."
              description="Due to time-sensitive structure and flow of the deep dive and in respect to student learning, this deep
                dive cannot accept new students."
            />
          )}

          {/* ABOUT */}
          <div className="flex flex-col gap-xl">
            <SectionHeader noPadding title={'Description'} />
            <h4 className="dark:text-textInverse">{deepDive.description}</h4>
          </div>
        </div>

        {/* INSTRUCTORS */}
        <div className="flex flex-col gap-xl md:gap-xxl">
          <SectionHeader
            noPadding
            title={'Meet the Instructors'}
            subtitle="Select Leaders to learn more"
          />
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

        {/* SCHEDULE */}

        {/* WHAT IS A DEEP DIVE */}
        <MediaBackgroundAndContent
          rounded
          background={{
            src: `${AWS_ASSET_BASE_URL}/placeholder-media/church_prayer.jpg`,
          }}
          content={
            <div className="pt-[100px] flex flex-col gap-md">
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
        <div className="flex flex-col gap-xl md:gap-xxl">
          <SectionHeader
            noPadding
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

export default SingleDeepDivePage;
