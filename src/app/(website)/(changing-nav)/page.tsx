import HomepageHero from '@/components/heroes/homepage-hero/HomepageHero';
import { WEBSITE_BASE_URL } from '@/data/constants';
import { PageRoutes } from '@/data/page-routes';

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
  // const { lastestEvents } = await getAllEvents();
  return (
    <div>
      <HomepageHero
        media={{
          src: '/placeholder-media/footer_video.mp4',
          poster: '',
        }}
        title="Find your place here..."
        subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        highlightTitle={[[0, 0]]}
        primaryButton={{
          label: 'Learn More',
          id: '#overview',
        }}
        secondaryButton={{
          label: 'Plan Your Visit',
          link: PageRoutes.planYourVisit,
        }}
        facts={[
          { label: '1985', subLabel: 'Founded' },
          { label: '250+', subLabel: 'Sermons' },
          { label: '24/7', subLabel: 'Prayer Support' },
        ]}
      />

      <div className="py-padding flex gap-xxl lg:gap-[100px] 2xl:gap-[125px]">
        {/* <FlipTextMediaCarousel
          slides={[
            {
              header: "Lorem Ipsum Dolor...",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odit excepturi obcaecati hic magnam ex facere, qui suscipit sapiente tempore consequatur non quo? Omnis reprehenderit quae, ipsa architecto accusamus eos!",
              media: { src: "/placeholder-media/church_prayer.jpg" },
            },
            {
              header: "Lorem Ipsum Dolor...",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odit excepturi obcaecati hic magnam ex facere, qui suscipit sapiente tempore consequatur non quo? Omnis reprehenderit quae, ipsa architecto accusamus eos!",
              media: { src: "/placeholder-media/food_bank.jpg" },
            },
            {
              header: "Lorem Ipsum Dolor...",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odit excepturi obcaecati hic magnam ex facere, qui suscipit sapiente tempore consequatur non quo? Omnis reprehenderit quae, ipsa architecto accusamus eos!",
              media: {
                src: "/placeholder-media/church_prayer.jpg",
              },
            },
            {
              header: "Lorem Ipsum Dolor...",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odit excepturi obcaecati hic magnam ex facere, qui suscipit sapiente tempore consequatur non quo? Omnis reprehenderit quae, ipsa architecto accusamus eos!",
              media: { src: "/placeholder-media/family.jpeg" },
            },
            {
              header: "Lorem Ipsum Dolor...",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odit excepturi obcaecati hic magnam ex facere, qui suscipit sapiente tempore consequatur non quo? Omnis reprehenderit quae, ipsa architecto accusamus eos!",
              media: { src: "/placeholder-media/crosses.png" },
            },
          ]}
        /> */}
        {/* <FullscreenLatestSermon
          title="Don't Stop the Roll"
          src="/placeholder-media/footer_video.mp4"
          poster="/images/misc/logo_placeholder.png"
          link="/sermons"
        /> */}
        {/* Testimonials */}
        {/* <div className="p-padding flex flex-col gap-xl md:gap-xxl">
          <CenterTextSection
            noPadding
            highlight={[[4, 5]]}
            title="Testimonials"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <div className="flex flex-wrap gap-xxl justify-center">
            <TestimonialCard
              src="/placeholder-media/people_hug.jpg"
              name="Janice H."
              statement="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex numquam maiores ut. consectetur adipisicing elit. Ex numquam maiores ut."
            />
            <TestimonialCard
              src="/placeholder-media/people_hug.jpg"
              name="Austen J."
              statement="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex numquam maiores ut. consectetur adipisicing elit. Ex numquam maiores ut."
            />
            <TestimonialCard
              src="/placeholder-media/people_hug.jpg"
              name="Susanna M."
              statement="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex numquam maiores ut. consectetur adipisicing elit. Ex numquam maiores ut."
            />
          </div>
        </div> */}
        {/* Message from Alaric Singletary */}
        {/* <div className="p-padding">
          <VideoWithTitle
            rounded
            src="/placeholder-media/footer_video.mp4"
            poster={""}
            title="Message from Alaric Singletary"
            subtitle="The Wind Church Senior Pastor"
          />
        </div>

        <div className="w-full p-padding bg-beige grid grid-cols-1 md:grid-cols-3">
          <div>
            <h1>Why the Wind?</h1>
          </div>
        </div>

        <div className="p-padding flex flex-col gap-xl md:gap-xxl">
          <CenterTextSection
            noPadding
            highlight={[[4, 4]]}
            title="Look out for these events!"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <div className="2xl:px-padding">
            {lastestEvents && lastestEvents.length > 0 ? (
              <EventCardsMasonryGrid
                events={lastestEvents.map((event) => ({
                  ...event,
                  scale: true,
                }))}
              />
            ) : (
              <h4 className="text-center">No events at this time</h4>
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
        </div> */}
        {/* <div className="p-padding flex flex-col gap-xxl lg:gap-[100px] 2xl:gap-[125px]">
          <InfoCardOmbreCarousel
            color={{
              r: "252",
              g: "206",
              b: "47",
            }}
            cards={[
              {
                icon: <HandGift className="size-[30px]" />,
                title: "Lorem Ispum Dolor",
                description:
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo expedita perferendis culpa voluptas mollitia asperiores laudantium. Sed, quas. Numquam optio nostrum, perferendis laborum iste laudantium.",
              },
              {
                icon: <HandGift className="size-[30px]" />,
                title: "Lorem Ispum Dolor",
                description:
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo expedita perferendis culpa voluptas mollitia asperiores laudantium. Sed, quas. Numquam optio nostrum, perferendis laborum iste laudantium.",
              },
              {
                icon: <HandGift className="size-[30px]" />,
                title: "Lorem Ispum Dolor",
                description:
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo expedita perferendis culpa voluptas mollitia asperiores laudantium. Sed, quas. Numquam optio nostrum, perferendis laborum iste laudantium.",
              },
              {
                icon: <HandGift className="size-[30px]" />,
                title: "Lorem Ispum Dolor",
                description:
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo expedita perferendis culpa voluptas mollitia asperiores laudantium. Sed, quas. Numquam optio nostrum, perferendis laborum iste laudantium.",
              },
              {
                icon: <HandGift className="size-[30px]" />,
                title: "Lorem Ispum Dolor",
                description:
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo expedita perferendis culpa voluptas mollitia asperiores laudantium. Sed, quas. Numquam optio nostrum, perferendis laborum iste laudantium.",
              },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl lg:gap-xxl">
            <div className="max-lg:order-first w-full h-full relative">
              <div className="lg:sticky top-[100px]">
                <SectionHeader
                  largeHeader
                  title="Explore the Wind"
                  subtitle="Stay in the know!"
                />
                <h5>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                  ad, dolor iste recusandae expedita atque sint, ex et eligendi
                  iusto asperiores quo beatae cupiditate. Placeat corporis iure
                  dolor minima tempora!
                </h5>
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col gap-lg">
              <ImageLinkTextCard
                media={{
                  src: "/placeholder-media/food_bank.jpg",
                  alt: "",
                }}
                title="Do you know Jesus?"
                subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                link={PageRoutes.salvation}
              />
              <div className="flex gap-lg">
                <ImageLinkTextCard
                  media={{
                    src: "/placeholder-media/food_bank.jpg",
                    alt: "",
                  }}
                  className="max-w-[65%]"
                  title="Join in Ministry"
                  subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                  link={PageRoutes.ministries}
                />
                <ImageLinkTextCard
                  media={{
                    src: "/placeholder-media/food_bank.jpg",
                    alt: "",
                  }}
                  className="max-w-[35%]"
                  title="Visit Us!"
                  subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                  link={PageRoutes.planYourVisit}
                />
              </div>
              <div className="flex gap-lg">
                <ImageLinkTextCard
                  media={{
                    src: "/placeholder-media/food_bank.jpg",
                    alt: "",
                  }}
                  className="max-w-[35%]"
                  title="Donate"
                  subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                  link={PageRoutes.give}
                />
                <ImageLinkTextCard
                  media={{
                    src: "/placeholder-media/food_bank.jpg",
                    alt: "",
                  }}
                  className="max-w-[65%]"
                  title="Deep Dive"
                  subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                  link={PageRoutes.deepDive}
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
