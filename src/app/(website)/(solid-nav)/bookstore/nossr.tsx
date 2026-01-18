'use client';

import PageScrollUpButton from '@/components/buttons/page-scroll-up-button/PageScrollUpButton';
import ProductCard from '@/components/cards/product-card/ProductCard';
import ProductCardSkeleton from '@/components/cards/product-card/ProductCard.skeleton';
import ErrorPage from '@/components/error-page/ErrorPage';
import PageHeaderWithBackground from '@/components/heroes/page-header-with-background/PageHeaderWithBackground';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import SectionHeaderSkeleton from '@/components/sections/section-header/SectionHeader.skeleton';
import { AWS_ASSET_BASE_URL } from '@/data/constants';
import { useGetStorefrontCollections } from '@/data/services/shopify/queries/collections';

const BookstoreClient = () => {
  const { collections, collectionsLoading, collectionsError } = useGetStorefrontCollections();

  if (collectionsError) {
    return (
      <ErrorPage description="There are no store products at this time. Please check again later." />
    );
  }

  return (
    <div className="px-padding flex flex-col gap-3xl lg:gap-4xl 2xl:gap-5xl max-width-center">
      <PageHeaderWithBackground
        media={{
          src: `${AWS_ASSET_BASE_URL}/placeholder-media/open_sign.webp`,
          alt: 'Decorative Background Image',
          poster: '',
        }}
        title="Bookstore"
        subtitle="Grab the latest Wind Gear and supplies here."
      />

      <div className="relative max-width-center flex flex-col gap-xxl">
        {/* LOADING */}
        {collectionsLoading &&
          Array.from({ length: 4 }).map((_, index) => (
            <div key={`bookstore-collections-skeleton-${index}`} className="flex flex-col gap-md">
              <SectionHeaderSkeleton />

              <div className="pt-lg grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-lg place-items-center">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <ProductCardSkeleton key={`bookstore-collections-skeleton-card-${index}`} />
                ))}
              </div>
            </div>
          ))}

        {/* COLLECTIONS */}
        {!collectionsLoading &&
          collections &&
          collections.map((coll) => (
            <div
              key={`bookstore-collections-${coll.handle}`}
              id={coll.handle}
              className="flex flex-col gap-xl"
            >
              <SectionHeader title={coll.title} />

              <div className="pt-lg grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-lg place-items-center">
                {coll.products
                  .sort((a, b) => a.title.localeCompare(b.title))
                  .map((prod) => (
                    <ProductCard
                      key={`bookstore-product-${prod.title}`}
                      image={prod.image}
                      title={prod.title}
                      minPrice={prod.minPrice}
                      maxPrice={prod.maxPrice}
                      totalInventory={prod.total_inventory}
                      handle={prod.handle}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>

      {/* PAGE SCROLL-UP BUTTON */}
      <PageScrollUpButton />
    </div>
  );
};

export default BookstoreClient;
