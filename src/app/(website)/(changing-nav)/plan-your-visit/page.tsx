import { Metadata } from 'next';

import Accordion from '@/components/accordion/Accordion';
import OpenWindowWithQueryButton from '@/components/buttons/open-window-with-query-button/OpenWindowWithQueryButton';
import ImageWithTitleDescriptionCard from '@/components/cards/image-with-title-description-card/ImageWithTitleDescriptionCard';
import MultiFormContainer from '@/components/forms/multi-form-container/MultiFormContainer';
import PlanYourVisitForm from '@/components/forms/plan-your-visit-form/PlanYourVisitForm';
import VisitorFeedbackForm from '@/components/forms/visitor-feedback-form/VisitorFeedbackForm';
import PageHero from '@/components/heroes/page-hero/PageHero';
import Caret from '@/components/icons/caret';
import UpArrow from '@/components/icons/upArrow';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import VideoWithTitle from '@/components/video/video-with-title/VideoWithTitle';
import { WEBSITE_BASE_URL, YOUTUBE_CHANNEL } from '@/data/constants';
import { PageRoutes } from '@/data/page-routes';
import { styleSelectedWords } from '@/data/utils';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Plan Your Visit',
  description:
    'Plan your visit to The Wind Church. Find service times, location, and what to expect before you arrive.',
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/plan-your-visit`,
  },
};

const PlanYourVisit = () => (
  <div>
    <PageHero
      short
      title="Plan Your Visit"
      subtitle="Come worship with us"
      media={{
        src: '/placeholder-media/pastor_preaching.jpg',
      }}
      highlightTitle={[[0, 3]]}
    />

    <div className="p-padding flex flex-col gap-xxl lg:gap-[100px] 2xl:gap-[125px]">
      {/* Join Us */}
      <div className="flex flex-col gap-lg py-[20px] md:py-[50px] 2xl:px-[100px]">
        <h1>Join Us for Service!</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: styleSelectedWords({
              text: 'Sundays @ 9AM / Wednesdays @ 7PM',
              array: [[0, 6]],
              htmlTag: 'h2',
              className: 'font-bold',
            }),
          }}
        />
        <h4>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, repellat accusantium debitis
          dolores blanditiis consequatur suscipit adipisci ipsum id eligendi accusamus molestiae
          aspernatur natus ratione veritatis. Explicabo, ipsa tempore. Ipsum.
        </h4>
        <div className="flex flex-col gap-md">
          <OpenWindowWithQueryButton label={'6476 Streeter Avenue Riverside, CA 92504'} />
          <Link target="_blank" href={YOUTUBE_CHANNEL} className="w-fit group">
            <div className="flex items-center gap-xs">
              <UpArrow className="fill-navy dark:fill-navyLight rotate-45 group-hover:rotate-90 transition-all duration-300" />
              <h5 className="text-navy dark:text-navyLight group-hover:underline font-bold">
                Watch Online
              </h5>
            </div>
          </Link>
        </div>
      </div>

      {/* Why the Wind */}
      <VideoWithTitle
        src="/placeholder-media/plan-your-visit-video.mp4"
        poster="/placeholder-media/plan-your-visit-poster.png"
        title="What Makes The Wind Special?"
      />

      {/* More ways to connect */}
      <div className="flex flex-col gap-xl md:gap-xxl">
        <CenterTextSection
          noPadding
          title="More ways to connect!"
          highlight={[[3, 3]]}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, cum reiciendis ad, maiores quaerat"
        />
        <div className="flex flex-wrap gap-xxl justify-center">
          <ImageWithTitleDescriptionCard
            alt=""
            src="/placeholder-media/group_women.jpg"
            title="Personal Bible Studies"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex numquam maiores ut. consectetur adipisicing elit. Ex numquam maiores ut."
          />
          <ImageWithTitleDescriptionCard
            alt=""
            src="/placeholder-media/food_bank.jpg"
            title="Serving Opportunites"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex numquam maiores ut. consectetur adipisicing elit. Ex numquam maiores ut."
            link={{
              label: 'Go to Ministries',
              href: PageRoutes.ministries,
            }}
          />
          <ImageWithTitleDescriptionCard
            alt=""
            src="/placeholder-media/lxg_meet.webp"
            title="Deep Dive Studies"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex numquam maiores ut. consectetur adipisicing elit. Ex numquam maiores ut."
            link={{
              label: 'Go to Deep Dive',
              href: PageRoutes.deepDive,
            }}
          />
        </div>
      </div>

      {/* FAQs */}
      <div className="flex flex-col gap-xl md:gap-xxl">
        <SectionHeader
          noPadding
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
                      For service, kids will be lead to our classrooms where they can be taught at a
                      level for them.
                    </p>
                  </div>

                  <div className="flex gap-xs">
                    <Caret fill="#FFD300" className="rotate-90" />
                    <Link
                      href={PageRoutes.nextGen}
                      className="underline text-navy dark:text-navyLight"
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

      {/* Forms */}
      <MultiFormContainer
        forms={[
          {
            buttonLabel: 'Plan Your Visit',
            header: {
              title: 'New to The Wind?',
              description:
                "Let us know you're planning to attend for the first time so we can prepare a warm welcome for you and your guests.",
            },
            form: <PlanYourVisitForm />,
          },
          {
            buttonLabel: 'Leave Your Feedback',
            header: {
              title: 'Already visited The Wind?',
              description:
                'We’d love to hear about your experience visiting our church—your feedback helps us grow and better serve every guest who walks through our doors.',
            },
            form: <VisitorFeedbackForm />,
          },
        ]}
      />
    </div>
  </div>
);

export default PlanYourVisit;
