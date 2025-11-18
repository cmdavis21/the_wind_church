import { Metadata } from 'next';

import PageScrollUpButton from '@/components/buttons/page-scroll-up-button/PageScrollUpButton';
import ImageCardWithModal from '@/components/cards/image-card-with-modal/ImageCardWithModal';
import SimpleCarousel from '@/components/carousels/simple-carousel/SimpleCarousel';
import ErrorPage from '@/components/error-page/ErrorPage';
import PageHeader from '@/components/heroes/page-header/PageHeader';
import GalleryMasonryGrid from '@/components/masonry-grids/gallery-masonry-grid/GalleryMasonryGrid';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import { WEBSITE_BASE_URL } from '@/data/constants';
import { getGalleryImages } from '@/data/services/aws/gallery';

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
    <div className="px-padding flex flex-col gap-xxl lg:gap-[100px] 2xl:gap-[125px]">
      <PageHeader
        title="The Gallery"
        subtitle="View photos of great times spent together in the Wind family."
      />

      {gallery.gallery.map((category) => (
        <div key={`wind-gallery-${category.title}`} className="flex flex-col gap-xl md:gap-xxl">
          <SectionHeader
            noPadding
            title={category.title}
            subtitle="Select a photo and view the memories"
          />

          {/* Desktop */}
          <div className="hidden md:block">
            <GalleryMasonryGrid images={category.urls} />
          </div>

          {/* Mobile */}
          <SimpleCarousel
            showDots={false}
            className="md:hidden"
            slides={category.urls.map((img) => (
              <ImageCardWithModal
                key={`wind-gallery-mobile-${img}`}
                src={img}
                alt="wind gallery image"
                className="w-full min-w-[200px] max-w-[500px] aspect-square"
              />
            ))}
          />
        </div>
      ))}

      <PageScrollUpButton />
    </div>
  );
};

export default Gallery;
