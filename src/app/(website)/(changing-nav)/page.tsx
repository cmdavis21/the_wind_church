import ImageAndTextLinkCard from '@/components/cards/image-and-text-link-card/ImageAndTextLinkCard';
import HomepageHero from '@/components/heroes/homepage-hero/HomepageHero';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import MediaBackgroundAndContent from '@/components/sections/media-background-and-content/MediaBackgroundAndContent';
import FullscreenLatestSermon from '@/components/video/fullscreen-latest-sermon/FullscreenLatestSermon';
import { AWS_ASSET_BASE_URL, WEBSITE_BASE_URL, YOUTUBE_CHANNEL } from '@/data/constants';
import { PageRoutes } from '@/data/page-routes';
import { Button } from 'flowbite-react';
import { getTranslations } from 'next-intl/server';

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
  const t = await getTranslations('About');
  const exploreOptions = [
    {
      image: {
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/people_hug.jpg`,
        alt: t('alt'),
      },
      text: 'Recieve Salvation',
      link: PageRoutes.salvation,
    },
    {
      image: {
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/people_hug.jpg`,
        alt: t('alt'),
      },
      text: 'Ministries',
      link: PageRoutes.ministries,
    },
    {
      image: {
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/people_hug.jpg`,
        alt: t('alt'),
      },
      text: 'Deep Dives',
      link: PageRoutes.deepDive,
    },
    {
      image: {
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/people_hug.jpg`,
        alt: t('alt'),
      },
      text: 'Events',
      link: PageRoutes.events,
    },
    {
      image: {
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/people_hug.jpg`,
        alt: t('alt'),
      },
      text: 'About the Wind',
      link: PageRoutes.about,
    },
    {
      image: {
        src: `${AWS_ASSET_BASE_URL}/placeholder-media/people_hug.jpg`,
        alt: t('alt'),
      },
      text: 'Visit the Wind',
      link: PageRoutes.planYourVisit,
    },
  ];
  return (
    <div>
      <HomepageHero
        media={{
          src: `${AWS_ASSET_BASE_URL}/placeholder-media/footer_video.mp4`,
          poster: '',
        }}
        title={{
          text: 'Find your place here...',
          hightlight: [[0, 0]],
        }}
        subtitle={{
          text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        }}
        primaryButton={{
          label: 'Learn More',
          id: '#overview',
        }}
        secondaryButton={{
          label: 'Plan Your Visit',
          link: PageRoutes.planYourVisit,
        }}
      />

      <div className="py-padding flex flex-col gap-xxl lg:gap-[100px] 2xl:gap-[125px]">
        {/* <FlipTextMediaCarousel
          slides={[
            {
              header: 'Lorem Ipsum Dolor...',
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odit excepturi obcaecati hic magnam ex facere, qui suscipit sapiente tempore consequatur non quo? Omnis reprehenderit quae, ipsa architecto accusamus eos!',
              media: { src: '/placeholder-media/church_prayer.jpg' },
            },
            {
              header: 'Lorem Ipsum Dolor...',
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odit excepturi obcaecati hic magnam ex facere, qui suscipit sapiente tempore consequatur non quo? Omnis reprehenderit quae, ipsa architecto accusamus eos!',
              media: { src: '/placeholder-media/food_bank.jpg' },
            },
            {
              header: 'Lorem Ipsum Dolor...',
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odit excepturi obcaecati hic magnam ex facere, qui suscipit sapiente tempore consequatur non quo? Omnis reprehenderit quae, ipsa architecto accusamus eos!',
              media: {
                src: '/placeholder-media/church_prayer.jpg',
              },
            },
            {
              header: 'Lorem Ipsum Dolor...',
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odit excepturi obcaecati hic magnam ex facere, qui suscipit sapiente tempore consequatur non quo? Omnis reprehenderit quae, ipsa architecto accusamus eos!',
              media: { src: '/placeholder-media/family.jpeg' },
            },
            {
              header: 'Lorem Ipsum Dolor...',
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odit excepturi obcaecati hic magnam ex facere, qui suscipit sapiente tempore consequatur non quo? Omnis reprehenderit quae, ipsa architecto accusamus eos!',
              media: { src: '/placeholder-media/crosses.png' },
            },
          ]}
        /> */}
        <FullscreenLatestSermon
          title="Don't Stop the Roll"
          src="/placeholder-media/footer_video.mp4"
          poster="/images/misc/logo_placeholder.png"
          link="/sermons"
        />

        <div className="px-padding flex flex-col gap-xl md:gap-xxl">
          <CenterTextSection
            noPadding
            title={'Explore the Wind'}
            description={t('values.subtitle')}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-lg md:gap-xl">
            {exploreOptions.map((item) => (
              <ImageAndTextLinkCard
                key={item.text}
                image={item.image}
                text={item.text}
                link={item.link}
              />
            ))}
          </div>
        </div>

        <div className="px-padding">
          <MediaBackgroundAndContent
            rounded
            background={{
              src: `${AWS_ASSET_BASE_URL}/placeholder-media/church_prayer.jpg`,
            }}
            content={
              <div className="flex flex-col gap-xs">
                <h2>More great videos</h2>
                <h2>available on YouTube!</h2>
                <Button
                  pill
                  size="lg"
                  color="primary"
                  className="mt-lg w-fit font-bold whitespace-nowrap"
                  href={YOUTUBE_CHANNEL}
                >
                  Go to our Channel
                </Button>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
