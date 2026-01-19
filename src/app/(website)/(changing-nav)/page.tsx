import Accordion from '@/components/accordion/Accordion';
import ImageWithTitleDescriptionLinkCard from '@/components/cards/image-with-title-description-link-card/ImageWithTitleAndHiddenTextCard';
import TestimonialCarousel from '@/components/carousels/testimonial-carousel/TestimonialCarousel';
import PageHero from '@/components/heroes/page-hero/PageHero';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import MediaBackgroundAndContent, {
  ColorBackground,
} from '@/components/sections/media-background-and-content/MediaBackgroundAndContent';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import VideoWithTitle from '@/components/video/video-with-title/VideoWithTitle';
import { AWS_ASSET_BASE_URL, WEBSITE_BASE_URL, YOUTUBE_CHANNEL } from '@/data/constants';
import { PageRoutes } from '@/data/page-routes';
import { styleSelectedWords } from '@/data/utils';
import { Button } from 'flowbite-react';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Home' });
  const description = t('metadata.description');
  const url = `${WEBSITE_BASE_URL}/`;
  const image = `${AWS_ASSET_BASE_URL}/images/wind_church_building.webp`;
  return {
    description,
    alternates: { canonical: url },
    openGraph: {
      description,
      url,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      description,
      images: [image],
    },
  };
}

const Home = async () => {
  // const recentVideos = await getRecentVideos();

  const exploreOptions = [
    {
      image: {
        alt: 'People gathering for church service',
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/pastor_preaching.jpg`,
      },
      title: 'Who we are',
      description: 'Learn our values, facts about our pastor, and more!',
      link: PageRoutes.about,
    },
    {
      image: {
        alt: 'Group in Bible study session',
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/lxg_meet.webp`,
      },
      title: 'Try our Deep Dives',
      description: 'Explore the Word in a deeper way with small-group Bible studies.',
      link: PageRoutes.deepDive,
    },
    {
      image: {
        alt: 'Group in Bible study session',
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/outreach.png`,
      },
      title: 'Looking to minister?',
      description: 'We have ministries for every age and stage.',
      link: PageRoutes.ministries,
    },
    {
      image: {
        alt: 'Children in a classroom during youth service',
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/family.jpeg`,
      },
      title: 'Know your gifts!',
      description: 'Discover your spiritual gifts with our easy assessment!',
      link: PageRoutes.giftAssessment,
    },
    {
      image: {
        alt: 'Group in Bible study session',
        src: `${AWS_ASSET_BASE_URL}/images/wind_church_building.webp`,
      },
      title: 'Have an event?',
      description: 'Interested in renting our church? Get details and request your date today.',
      link: PageRoutes.churchRental,
    },
  ];

  const testimonials = [
    {
      src: `${AWS_ASSET_BASE_URL}/placeholder-media/profile_3_poster.png`,
      name: 'Maria Thompson',
      position: 'Member',
      statement:
        'The Wind Church has completely transformed the way I experience community. Every service feels alive, welcoming, and full of purpose.',
    },
    {
      src: `${AWS_ASSET_BASE_URL}/placeholder-media/jason-song.png`,
      name: 'Derrick Lawson',
      position: 'Elder',
      statement:
        'From the moment I walked in, I felt seen and supported. This church truly embodies love in action.',
    },
    {
      src: `${AWS_ASSET_BASE_URL}/placeholder-media/jocelyn-ward.png`,
      name: 'Elena Rodriguez',
      position: 'Youth Ministry Teacher',
      statement:
        'The teaching is powerful, practical, and rooted in Scripture. My faith has grown so much since joining The Wind.',
    },
    {
      src: `${AWS_ASSET_BASE_URL}/placeholder-media/tim-renning.png`,
      name: 'James Whitaker',
      position: 'Member',
      statement:
        'I’ve never been part of a church that feels this genuine. The people, the worship, the atmosphere—it all feels like home.',
    },
    {
      src: `${AWS_ASSET_BASE_URL}/placeholder-media/sandra-brown.png`,
      name: 'Tanya Brooks',
      position: 'Administrator',
      statement:
        'The Wind Church has been a blessing to my family. We’ve found hope, healing, and a place where we can grow together.',
    },
    {
      src: `${AWS_ASSET_BASE_URL}/placeholder-media/george-dim.png`,
      name: 'Caleb Johnson',
      position: 'Worship Team',
      statement:
        'Worship at The Wind has reignited my passion for Jesus. Every service feels like a fresh encounter with God’s presence.',
    },
    {
      src: `${AWS_ASSET_BASE_URL}/placeholder-media/janice-lawrence.png`,
      name: 'Sofia Martinez',
      position: 'Volunteer',
      statement:
        'Serving here has changed my life. The love, unity, and purpose in this church make it a place where you truly belong.',
    },
    {
      src: `${AWS_ASSET_BASE_URL}/placeholder-media/scott-mann.png`,
      name: 'Michael Lee',
      position: 'Member',
      statement:
        'The Wind Church helped me grow spiritually in ways I never expected. The teaching is clear, powerful, and rooted in Scripture.',
    },
  ];

  const faqContent = [
    {
      title: 'What about parking?',
      description:
        'Parking is self-serve. There are designated parking spots close to the church entry for those with a disabled placard. Most Sundays, you will find an attendant that can assist you as needed.',
    },
    {
      title: 'What about my kids/teenagers?',
      description: (
        <>
          During worship, kids will sit in the designated area. For service, kids will be lead to
          our classrooms where they can be taught at a level for them. We also provide a nursery for
          infants and toddlers. You can learn more about your kid&apos;s cirriculum{' '}
          <Link
            href={PageRoutes.nextGen}
            className="hover:underline text-light-navy dark:text-dark-navy"
          >
            here
          </Link>
        </>
      ),
    },
    {
      title: 'How should I dress?',
      description:
        "At The Wind Church, we believe that our focus should be on worshiping God and building community, rather than on outward appearances. We encourage attendees to dress modestly and respectfully. While we embrace individual expression, we ask that clothing choices reflect an attitude of reverence for our worship and gathering together. Ultimately, we welcome everyone as they are, trusting that each person's heart for God is what truly matters.",
    },
    {
      title: 'Is there coffee?',
      description:
        'Coffee and snacks is available at our HeBrews Café, located in the fellowship hall, prior to the start of service.',
    },
    {
      title: 'What happens during service?',
      description:
        "At The Wind Church, you'll find a warm, family-like atmosphere with uplifting worship and practical, Bible-based teaching. Our Sunday service is a time to connect with God through music, relevant messages, and moments of prayer. Whether you're exploring faith or deepening your walk with God, we welcome you to come as you are and grow with us.",
    },
    {
      title: 'What is the worship music like?',
      description:
        'Our worship services are designed to create an uplifting and transformative experience for everyone. Each service typically includes a blend of contemporary worship music and timeless hymns, aimed at fostering a spirit of connection with God. You can expect a dynamic atmosphere where heartfelt praise and worship are encouraged, allowing individuals to express their adoration freely. Our worship team leads with a focus on glorifying God, engaging the congregation, and creating an inviting environment for all to encounter His presence. Whether through powerful lyrics, inspiring melodies, or moments of reflection, our goal is to cultivate an atmosphere where worship is both meaningful and impactful.',
    },
  ];

  return (
    <div>
      <PageHero
        size="full"
        scrollTo="overview"
        title="Hope Lives Here"
        highlightTitle={[[0, 2]]}
        subtitle="Jesus has a plan for your life. Join us and discover a church family ready to walk with you."
        media={{
          src: `${AWS_ASSET_BASE_URL}/placeholder-media/footer_video.mp4`,
          poster: `${AWS_ASSET_BASE_URL}/images/wind_church_building.webp`,
        }}
      />
      <div className="py-padding flex flex-col gap-3xl lg:gap-5xl 2xl:gap-6xl">
        {/* OVERVIEW */}
        <div id="overview" className="lg:px-4xl max-width-center">
          <div className="flex flex-col gap-lg px-padding">
            <div
              dangerouslySetInnerHTML={{
                __html: styleSelectedWords({
                  text: 'Welcome to The Wind Church',
                  array: [[0, 0]],
                  htmlTag: 'h2',
                }),
              }}
            />
            <h4>
              A Christ-focused community where lives are transformed and hope is restored. We gather
              to worship, grow, and walk out our faith together. Whether you join us{' '}
              <Link
                href="https://www.google.com/search?q=wind+of+the+spirit+worship+center"
                target="_blank"
                className="text-light-navy dark:text-brand-primary underline hover:scale-105"
              >
                in person
              </Link>{' '}
              or{' '}
              <Link
                href={YOUTUBE_CHANNEL}
                target="_blank"
                className="text-light-navy dark:text-brand-primary underline hover:scale-105"
              >
                online
              </Link>{' '}
              , we&apos;d love to meet you and help you take your next step with Jesus.
            </h4>
            <h3>
              <span className="dark:text-brand-primary">Sundays 9AM</span> •{' '}
              <span className="dark:text-brand-primary">Wednesdays 7PM</span>
            </h3>
          </div>
        </div>

        {/* COMMERCIAL */}
        <VideoWithTitle
          src={`${AWS_ASSET_BASE_URL}/placeholder-media/plan-your-visit-video.mp4`}
          poster={`${AWS_ASSET_BASE_URL}/placeholder-media/plan-your-visit-poster.png`}
          title="What Makes The Wind Special?"
          subtitle="How God leads our church and people"
        />

        {/* LATEST SERMONS */}
        <div className="px-padding">
          <CenterTextSection
            title="Latest Sermons"
            description="Be filled by God's Word through Pastor Singletary and many more great speakers"
          />
          <div className="w-fit mx-auto pt-xl pb-xl md:pb-xxl">
            <Link href={PageRoutes.sermons}>
              <Button pill color="primary">
                See more Sermons
              </Button>
            </Link>
          </div>
          {/* <VideoPlaylistCarousel playlist={recentVideos} /> */}
        </div>

        {/* EXPLORE CTAs */}
        <div className="px-padding flex flex-col gap-xl md:gap-xxl max-width-center">
          <SectionHeader title="Explore The Wind" subtitle="There's much to do here!" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-lg lg:gap-xl">
            {exploreOptions.map((opt) => (
              <ImageWithTitleDescriptionLinkCard
                key={`home-explore-options-${opt.link}`}
                {...opt}
              />
            ))}
          </div>
        </div>

        {/* TESTIMONIALS */}
        <MediaBackgroundAndContent
          noFlex
          centerContent
          color={ColorBackground.YELLOW}
          content={
            <div className="space-y-xl md:space-y-3xl lg:p-xl">
              <CenterTextSection
                title="From Our Church Family"
                description="A glimpse into the experiences and journeys of those who call The Wind Church home."
              />
              <TestimonialCarousel testimonials={testimonials} />
            </div>
          }
        />

        {/* ABOUT THE FAQs */}
        <div className="px-padding flex flex-col gap-xl md:gap-xxl max-width-center">
          <SectionHeader title="More about The Wind" subtitle="Frequently Asked Questions" />
          <Accordion content={faqContent} />
        </div>
      </div>
    </div>
  );
};

export default Home;
