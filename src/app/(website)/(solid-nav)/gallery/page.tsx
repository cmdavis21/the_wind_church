import { Metadata } from 'next';

import PageScrollUpButton from '@/components/buttons/page-scroll-up-button/PageScrollUpButton';
import {
  default as ImageCard,
  default as ImageCardWithModal,
} from '@/components/cards/image-card/ImageCard';
import SimpleCarousel from '@/components/carousels/simple-carousel/SimpleCarousel';
import ErrorPage from '@/components/error-page/ErrorPage';
import PageHeader from '@/components/heroes/page-header/PageHeader';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import { WEBSITE_BASE_URL } from '@/data/constants';
import { getGalleryImages } from '@/data/services/aws/s3/gallery';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse our church photo gallery and relive the special moments from recent events and gatherings.',
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/gallery`,
  },
};

const Gallery = async () => {
  const gallery = await getGalleryImages();

  if (!gallery?.gallery) {
    return (
      <ErrorPage description="There was an issue loading the gallery. Please try again later." />
    );
  }

  return (
    <div className="px-padding flex flex-col gap-xxl lg:gap-4xl 2xl:gap-5xl max-width-center">
      <PageHeader
        title="The Gallery"
        subtitle="View photos of great times spent together in the Wind family."
      />

      {gallery.gallery.map((category) => (
        <div key={`wind-gallery-${category.title}`} className="flex flex-col gap-xl md:gap-xxl">
          <SectionHeader title={category.title} subtitle="Select a photo and view the memories" />

          {/* Desktop */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-lg 2xl:px-padding">
            {category.urls.map((src) => (
              <ImageCard
                key={`wind-gallery-${src}`}
                src={src}
                alt="The Wind Church Gallery Image"
              />
            ))}
          </div>

          {/* Mobile */}
          <SimpleCarousel
            showDots={false}
            className="md:hidden"
            slides={category.urls.map((src) => (
              <ImageCardWithModal
                key={`wind-gallery-mobile-${src}`}
                src={src}
                alt="The Wind Church Gallery Image"
              />
            ))}
          />
        </div>
      ))}

      {/* PAGE SCROLL-UP BUTTON */}
      <PageScrollUpButton />
    </div>
  );
};

export default Gallery;
