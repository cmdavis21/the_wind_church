'use client';

import ProductCard from '@/components/cards/product-card/ProductCard';
import PageHeaderWithBackground from '@/components/heroes/page-header-with-background/PageHeaderWithBackground';
import { AWS_ASSET_BASE_URL } from '@/data/constants';
import { useGetStorefrontProducts } from '@/data/services/shopify/queries/products';

const BookstoreClient = () => {
  const { products } = useGetStorefrontProducts();
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

      <div className="relative max-w-[1440px]">
        {/* <div className="sticky top-0 z-10 bg-white dark:bg-backgroundDark flex w-full justify-end gap-lg py-lg border border-gray border-t-0 border-x-0">
          <Button color="secondary">Sort</Button>
          <Button color="secondary">Filters</Button>
        </div> */}
        <div className="pt-lg grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-lg">
          {products?.map((prod) => (
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
    </div>
  );
};

export default BookstoreClient;
