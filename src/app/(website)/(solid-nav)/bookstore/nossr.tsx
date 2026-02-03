'use client';

import ErrorAlert from '@/components/alerts/error-alert/ErrorAlert';
import PageScrollUpButton from '@/components/buttons/page-scroll-up-button/PageScrollUpButton';
import ProductCard from '@/components/cards/product-card/ProductCard';
import ProductCardSkeleton from '@/components/cards/product-card/ProductCard.skeleton';
import SelectInput from '@/components/forms/inputs/select-input/SelectInput';
import PageHeaderWithBackground from '@/components/heroes/page-header-with-background/PageHeaderWithBackground';
import Filter from '@/components/icons/filter';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import SectionHeaderSkeleton from '@/components/sections/section-header/SectionHeader.skeleton';
import { AWS_ASSET_BASE_URL } from '@/data/constants';
import { useGetStorefrontCollections } from '@/data/services/shopify/queries/collections';
import { useState } from 'react';

const BookstoreClient = () => {
  const [filter, setFilter] = useState('');
  const { collections, collectionsLoading, collectionsError } = useGetStorefrontCollections();

  if (collectionsError) return <ErrorAlert />;

  return (
    <div className="px-padding flex flex-col gap-3xl sm:gap-4xl max-width-center">
      <PageHeaderWithBackground
        media={{
          src: `${AWS_ASSET_BASE_URL}/placeholder-media/open_sign.webp`,
          alt: 'Decorative Background Image',
          poster: '',
        }}
        title="Bookstore"
        subtitle="Grab the latest Wind Gear and supplies here."
      />

      {/* FILTERING */}
      {collections && (
        <div className="w-full flex md:justify-end">
          <div className="w-full md:w-fit">
            <SelectInput
              icon={Filter}
              className="sm:w-fit"
              disabled={collectionsLoading || collectionsError}
              onChange={(e) => setFilter(e.target.value)}
              options={[
                { label: 'All Products', value: '' },
                ...collections.map((c) => ({ label: c.title, value: c.title })),
              ]}
            />
          </div>
        </div>
      )}

      {/* LOADING */}
      {collectionsLoading &&
        Array.from({ length: 4 }).map((_, index) => (
          <div
            key={`bookstore-collections-skeleton-${index}`}
            className="flex flex-col gap-xl md:gap-xxl"
          >
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
        collections
          .filter((c) => filter === '' || c.title === filter)
          .map((coll) => (
            <div
              key={`bookstore-collections-${coll.handle}`}
              id={coll.handle}
              className="flex flex-col gap-xl md:gap-xxl"
            >
              <SectionHeader title={coll.title} />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-[1800px]:grid-cols-5 gap-xl place-items-center">
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

      {/* PAGE SCROLL-UP BUTTON */}
      <PageScrollUpButton />
    </div>
  );
};

export default BookstoreClient;
