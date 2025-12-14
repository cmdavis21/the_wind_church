'use client';

import PageScrollUpButton from '@/components/buttons/page-scroll-up-button/PageScrollUpButton';
import ProductCard from '@/components/cards/product-card/ProductCard';
import ErrorPage from '@/components/error-page/ErrorPage';
import PageHeaderWithBackground from '@/components/heroes/page-header-with-background/PageHeaderWithBackground';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
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
    <div className="px-padding flex flex-col gap-xxl">
      <PageHeaderWithBackground
        media={{
          src: `${AWS_ASSET_BASE_URL}/placeholder-media/open_sign.webp`,
          alt: 'Decorative Background Image',
          poster: '',
        }}
        title="Bookstore"
        subtitle="Grab the latest Wind Gear and supplies here."
      />

      <div className="relative max-w-[1440px] flex flex-col gap-xxl">
        {/* LOADING */}
        {collectionsLoading && <div />}

        {/* COLLECTIONS */}
        {!collectionsLoading &&
          collections &&
          collections.map((coll) => (
            <div
              key={`bookstore-collections-${coll.handle}`}
              id={coll.handle}
              className="flex flex-col gap-md"
            >
              <SectionHeader title={coll.title} />

              <div className="pt-lg grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-lg">
                {coll.products
                  .sort((a, b) => a.title.localeCompare(b.title))
                  .map((prod) => (
                    <ProductCard
                      image={prod.image}
                      title={prod.title}
                      minPrice={prod.minPrice}
                      maxPrice={prod.maxPrice}
                      totalInventory={prod.totalInventory}
                      handle={prod.handle}
                      options={prod.options}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>

      {/* Page Scroll Button */}
      <PageScrollUpButton />
    </div>
  );
};

export default BookstoreClient;
