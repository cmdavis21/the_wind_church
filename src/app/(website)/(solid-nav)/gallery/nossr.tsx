'use client';

import PageScrollUpButton from '@/components/buttons/page-scroll-up-button/PageScrollUpButton';
import ImageCardWithModal from '@/components/cards/image-card-with-modal/ImageCardWithModal';
import ImageCardWithModalSkeleton from '@/components/cards/image-card-with-modal/ImageCardWithModal.skeleton';
import SimpleCarousel from '@/components/carousels/simple-carousel/SimpleCarousel';
import ErrorMessage from '@/components/error-message/ErrorMessage';
import PageHeader from '@/components/heroes/page-header/PageHeader';
import GalleryMasonryGrid from '@/components/masonry-grids/gallery-masonry-grid/GalleryMasonryGrid';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import SectionHeaderSkeleton from '@/components/sections/section-header/SectionHeader.skeleton';
import { PageRoutes } from '@/data/page-routes';
import { useGetGalleryImages } from '@/data/services/aws/gallery';

const GalleryClient = () => {
  const { gallery, galleryLoading, galleryError } = useGetGalleryImages();
  return (
    <div className="px-padding flex flex-col gap-xxl lg:gap-[100px] 2xl:gap-[125px]">
      <PageHeader
        title="The Gallery"
        subtitle="View photos of great times spent together in the Wind family."
      />

      {galleryError && (
        <ErrorMessage
          message="Sorry, there was an error fetching you our photots. Please try again later."
          routeToPage={{
            label: 'Plan your visit',
            link: PageRoutes.planYourVisit,
          }}
        />
      )}

      {galleryLoading &&
        Array.from({ length: 2 }).map((_, index) => (
          <div key={`gallery-skeletons-${index}`} className="flex flex-col gap-xl md:gap-xxl">
            <SectionHeaderSkeleton />

            {/* Desktop */}
            <div className="hidden md:grid grid-cols-3 2xl:grid-cols-4 gap-[25px]">
              {Array.from({ length: 8 }).map((_, idx) => (
                <ImageCardWithModalSkeleton key={`gallery-desktop-skeleton-item-${idx}`} />
              ))}
            </div>

            {/* Mobile */}
            <div className="md:hidden">
              <ImageCardWithModalSkeleton />
            </div>
          </div>
        ))}

      {gallery &&
        gallery.gallery &&
        gallery.gallery.map((category) => (
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

export default GalleryClient;
