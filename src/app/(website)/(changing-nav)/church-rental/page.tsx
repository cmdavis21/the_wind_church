import { Metadata } from 'next';

import CenterModeMediaWithTextCarousel from '@/components/carousels/center-mode-media-with-text-carousel/CenterModeMediaWithTextCarousel';
import EventRentalForm from '@/components/forms/event-rental-form/EventRentalForm';
import PageHero from '@/components/heroes/page-hero/PageHero';
import CenterTextSection from '@/components/sections/center-text-section/CenterTextSection';
import { AWS_ASSET_BASE_URL, WEBSITE_BASE_URL } from '@/data/constants';

export const metadata: Metadata = {
  title: 'Church Rental',
  description:
    'Interested in renting our church facilities? Get details and request your date today.',
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/church-rental`,
  },
};

const ChurchRental = () => (
  <div>
    <PageHero
      size="short"
      title="Church Rental"
      media={{ src: `${AWS_ASSET_BASE_URL}/images/wind_church_building.webp` }}
    />

    <div className="py-padding flex flex-col gap-xxl lg:gap-[100px] 2xl:gap-[125px]">
      <div className="px-padding">
        <CenterTextSection
          highlight={[[4, 5]]}
          title="Looking for your next event space?"
          description="We offer rentals of the parking lot, Fellowship Hall and the Sanctuary. Ideal for weddings, expos, family celebrations and more."
        />
      </div>

      <CenterModeMediaWithTextCarousel
        slides={[
          {
            media: {
              src: `${AWS_ASSET_BASE_URL}/placeholder-media/fellowship_hall.jpeg`,
              alt: 'decorative background image',
            },
            title: 'Fellowship Hall',
            description:
              'This hall is great for hosting a large quantity of guests. Featuring a kitchen for events involving cooking and a projector screen and speaking podium for lecturing sessions.',
          },
          {
            media: {
              src: `${AWS_ASSET_BASE_URL}/placeholder-media/kitchen.jpg`,
              alt: 'decorative background image',
            },
            title: 'Kitchen',
            description:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet reprehenderit error explicabo velit repudiandae? Perferendis reiciendis velit esse deleniti maiores et minima aperiam odit.',
          },
          {
            media: {
              src: `${AWS_ASSET_BASE_URL}/placeholder-media/parking_lot.jpg`,
              alt: 'decorative background image',
            },
            title: 'Parking Lot',
            description:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet reprehenderit error explicabo velit repudiandae? Perferendis reiciendis velit esse deleniti maiores et minima aperiam odit.',
          },
        ]}
      />

      <div className="px-padding flex flex-col gap-xxl lg:gap-[100px] 2xl:gap-[125px]">
        <CenterTextSection
          highlight={[[0, 0]]}
          title="Tailored solutions for your needs"
          description="We offer rentals of the parking lot, Fellowship Hall and the Sanctuary. Ideal for weddings, expos, family celebrations and more."
        />
        <EventRentalForm />
      </div>
    </div>
  </div>
);

export default ChurchRental;
