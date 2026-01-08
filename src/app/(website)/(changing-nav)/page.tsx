import Accordion from '@/components/accordion/Accordion';
import ImageWithTitleDescriptionCard from '@/components/cards/image-with-title-description-card/ImageWithTitleDescriptionCard';
import PageHero from '@/components/heroes/page-hero/PageHero';
import Caret from '@/components/icons/caret';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import MediaBackgroundAndContent, {
  ColorBackground,
} from '@/components/sections/media-background-and-content/MediaBackgroundAndContent';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import VideoWithTitle from '@/components/video/video-with-title/VideoWithTitle';
import { AWS_ASSET_BASE_URL, WEBSITE_BASE_URL } from '@/data/constants';
import { PageRoutes } from '@/data/page-routes';
import { styleSelectedWords } from '@/data/utils';
import { Button } from 'flowbite-react';
import Link from 'next/link';

export async function generateMetadata() {
  return {
    description:
      'Welcome to The Wind Church—where Jesus is the center and lives are transformed through His presence.',
    alternates: {
      canonical: `${WEBSITE_BASE_URL}/`,
    },
  };
}

const Home = async () => {
  // const liveStreams = await getRecentVideos();
  return (
    <div>
      <PageHero
        size="full"
        scrollTo="overview"
        title="Find your place here"
        highlightTitle={[[0, 1]]}
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aperiam dolorum dolorem magnam."
        media={{ src: `${AWS_ASSET_BASE_URL}/placeholder-media/group_people.jpg` }}
      />
      <div className="py-padding flex flex-col gap-xxl lg:gap-[100px] 2xl:gap-[125px]">
        <div id="overview" className="flex flex-col gap-xxl py-5 md:py-[50px] 2xl:px-[100px]">
          {/* Mission */}
          <div className="flex flex-col gap-lg px-padding">
            <div
              dangerouslySetInnerHTML={{
                __html: styleSelectedWords({
                  text: 'Find your place here...',
                  array: [[0, 0]],
                  htmlTag: 'h1',
                }),
              }}
            />
            <h4>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas rerum, facere porro
              consequatur nostrum vero ipsam sint et, repellendus maxime obcaecati quam atque magni
              quaerat quia expedita quo. Iste, ad!
            </h4>
            <h5>Visit Sundays at 9AM and Wednesdays at 7PM</h5>
            <h5>Or watch on YoutTube</h5>
          </div>
        </div>

        {/* COMMERCIAL */}
        <VideoWithTitle
          src={`${AWS_ASSET_BASE_URL}/placeholder-media/plan-your-visit-video.mp4`}
          poster={`${AWS_ASSET_BASE_URL}/placeholder-media/plan-your-visit-poster.png`}
          title="What Makes The Wind Special?"
          subtitle="How God leads our church and people"
        />

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
          {/* <SimpleCarousel
            slides={liveStreams.map((video) => (
              <VideoCard
                key={video.videoUrl}
                poster={video.thumbnail}
                title={video.title}
                date={video.published_at}
                link={video.videoUrl}
              />
            ))}
          /> */}
        </div>

        {/* EXPLORE CTAs */}
        <div className="px-padding flex flex-col gap-xl md:gap-xxl max-width-center">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Let us tell you more about The Wind"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xxl 2xl:gap-x-[100px] justify-center">
            <ImageWithTitleDescriptionCard
              alt="People gathering for church service"
              src={`${AWS_ASSET_BASE_URL}/placeholder-media/pastor_preaching.jpg`}
              title="Who we are"
              description="Learn our values, facts about our pastor, and more!"
              link={{
                label: "Let's Go",
                href: PageRoutes.about,
              }}
            />
            <ImageWithTitleDescriptionCard
              alt="Group in Bible study session"
              src={`${AWS_ASSET_BASE_URL}/placeholder-media/lxg_meet.webp`}
              title="Try our Deep Dives"
              description="Explore the Word in a deeper way with small-group Bible studies."
              link={{
                label: "Let's Go",
                href: PageRoutes.deepDive,
              }}
            />
            <ImageWithTitleDescriptionCard
              alt="Group in Bible study session"
              src={`${AWS_ASSET_BASE_URL}/placeholder-media/outreach.png`}
              title="Looking to minister?"
              description="We have ministries for every age and stage."
              link={{
                label: "Let's Go",
                href: PageRoutes.ministries,
              }}
            />
            <ImageWithTitleDescriptionCard
              alt="Children in a classroom during youth service"
              src={`${AWS_ASSET_BASE_URL}/placeholder-media/family.jpeg`}
              title="Know your gifts!"
              description="Discover your spiritual gifts with our easy assessment!"
              link={{
                label: "Let's Go",
                href: PageRoutes.giftAssessment,
              }}
            />
            <ImageWithTitleDescriptionCard
              alt="Group in Bible study session"
              src={`${AWS_ASSET_BASE_URL}/images/wind_church_building.webp`}
              title="Have an event?"
              description="Interested in renting our church? Get details and request your date today."
              link={{
                label: "Let's Go",
                href: PageRoutes.churchRental,
              }}
            />
          </div>
        </div>

        <MediaBackgroundAndContent
          noFlex
          centerContent
          color={ColorBackground.YELLOW}
          content={
            <div>
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
              {/* <SimpleCarousel
                slides={liveStreams.map((video) => (
                  <VideoCard
                    key={video.videoUrl}
                    poster={video.thumbnail}
                    title={video.title}
                    date={video.published_at}
                    link={video.videoUrl}
                  />
                ))}
              /> */}
            </div>
          }
        />

        {/* FAQs */}
        <div className="px-padding flex flex-col gap-xl md:gap-xxl max-width-center">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Let us tell you more about The Wind"
          />
          <Accordion
            content={[
              {
                title: 'What about parking?',
                description:
                  'Parking is self-serve. There are designated parking spots close to the church entry for those with a disabled placard. Most Sundays, you will find an attendant that can assist you as needed.',
              },
              {
                title: 'What about my kids/teenagers?',
                description: (
                  <>
                    <div className="flex gap-xs">
                      <Caret fill="#FFD300" className="rotate-90" />
                      <p className="body-large">
                        During worship, kids will sit in the designated area.
                      </p>
                    </div>

                    <div className="flex gap-xs py-sm">
                      <Caret fill="#FFD300" className="rotate-90" />
                      <p className="body-large">
                        For service, kids will be lead to our classrooms where they can be taught at
                        a level for them.
                      </p>
                    </div>

                    <div className="flex gap-xs">
                      <Caret fill="#FFD300" className="rotate-90" />
                      <Link
                        href={PageRoutes.nextGen}
                        className="underline text-light-navy dark:text-dark-navy"
                      >
                        <p className="body-large">Learn your kids cirriculum</p>
                      </Link>
                    </div>
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
                  "At The Wind Church, you'll find a warm, family- like atmosphere with uplifting worship and practical, Bible-based teaching. Our Sunday service is a time to connect with God through music, relevant messages, and moments of prayer. Whether you're exploring faith or deepening your walk with God, we welcome you to come as you are and grow with us.",
              },
              {
                title: 'What is the worship music like?',
                description:
                  'Our worship services are designed to create an uplifting and transformative experience for everyone. Each service typically includes a blend of contemporary worship music and timeless hymns, aimed at fostering a spirit of connection with God. You can expect a dynamic atmosphere where heartfelt praise and worship are encouraged, allowing individuals to express their adoration freely. Our worship team leads with a focus on glorifying God, engaging the congregation, and creating an inviting environment for all to encounter His presence. Whether through powerful lyrics, inspiring melodies, or moments of reflection, our goal is to cultivate an atmosphere where worship is both meaningful and impactful.',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
