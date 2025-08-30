import { Metadata } from "next";
import React from "react";

import PageScrollUpButton from "@/components/buttons/page-scroll-up-button/PageScrollUpButton";
import SimpleCarousel from "@/components/carousels/simple-carousel/SimpleCarousel";
import PageHeader from "@/components/heroes/page-header/PageHeader";
import SectionHeader from "@/components/sections/section-header/SectionHeader";
import { WEBSITE_BASE_URL } from "@/data/constants";
import { getGalleryImages } from "@/data/services/aws/gallery";
import GalleryMasonryGrid from "@/components/masonry-grids/gallery-masonry-grid/GalleryMasonryGrid";
import ImageCardWithModal from "@/components/cards/image-card-with-modal/ImageCardWithModal";
import ErrorMessage from "@/components/error-message/ErrorMessage";
import { PageRoutes } from "@/data/page-routes";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our church photo gallery and relive the special moments from recent events and gatherings.",
  alternates: {
    canonical: `${WEBSITE_BASE_URL}/gallery`,
  },
};

const Gallery = async () => {
  const { gallery } = await getGalleryImages();
  return (
    <div className="px-padding flex flex-col gap-xxl lg:gap-[100px] 2xl:gap-[125px]">
      <PageHeader
        title="The Gallery"
        subtitle="View photos of great times spent together in the Wind family."
      />

      {gallery && gallery.length > 0 ? (
        gallery.map((category) => (
          <div
            key={`wind-gallery-${category.title}`}
            className="flex flex-col gap-xl md:gap-xxl"
          >
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
        ))
      ) : (
        <ErrorMessage
          message="Sorry, there was an error fetching you our photots. Please try again later."
          routeToPage={{
            label: "Plan your visit",
            link: PageRoutes.planYourVisit,
          }}
        />
      )}

      <PageScrollUpButton />
    </div>
  );
};

export default Gallery;
