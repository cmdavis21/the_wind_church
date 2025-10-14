import ErrorMessage from '@/components/error-message/ErrorMessage';
import { AWS_ASSET_BASE_URL, WEBSITE_BASE_URL } from '@/data/constants';

import Accordion from '@/components/accordion/Accordion';
import ImageWithTitleDescriptionCard from '@/components/cards/image-with-title-description-card/ImageWithTitleDescriptionCard';
import PageHeaderWithBackground from '@/components/heroes/page-header-with-background/PageHeaderWithBackground';
import PageHeader from '@/components/heroes/page-header/PageHeader';
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
    <div className="px-padding flex flex-col gap-xxl lg:gap-[100px] 2xl:gap-[125px]">
      <PageHeaderWithBackground
        media={{
          src: deepDive.image.src,
          alt: deepDive.image.alt,
          poster: '',
        }}
        title={deepDive.name}
      />

      {/* ABOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
        <PageHeader title="About" subtitle="" />
        <h3 className="lg:col-span-2">{deepDive.description}</h3>
      </div>

      {/* INSTRUCTORS */}
      <div className="flex flex-col gap-xl md:gap-xxl">
        <CenterTextSection noPadding title="Instructors" />
        <div className="flex flex-wrap gap-xxl justify-center">
          {deepDive.instructors.map((instructor) => (
            <ImageWithTitleDescriptionCard
              key={`deep-dive-instructor-${instructor.first_name}=${instructor.last_name}`}
              alt={`Profile picture of deep dive instructor, ${instructor.first_name} ${instructor.last_name}`}
              src={instructor.image}
              title={`${instructor.first_name} ${instructor.last_name}`}
              description={instructor.description}
            />
          ))}
        </div>
      </div>

      {/* SCHEDULE */}
      <div className="flex flex-col gap-xl md:gap-xxl">
        <SectionHeader noPadding subtitle="Schedule" title="" />

        <div className="flex flex-wrap gap-xxl justify-center">
          {deepDive.meeting_details.map((meeting) => (
            <div
              key={`deep-dive-meeting-detail-${meeting.time.hour}-${meeting.day}`}
              className="flex flex-col gap-sm p-sm rounded-md bg-navyLight"
            >
              <h2>
                {meeting.time.hour}:{meeting.time.minute} {meeting.time.time_of_day}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* HOW TO JOIN */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
        <h3 className="max-lg:order-last">{deepDive.description}</h3>
        <PageHeader title="Can I Join?" subtitle="" />
      </div>

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
  );
};

export default SingleDeepDivePage;
