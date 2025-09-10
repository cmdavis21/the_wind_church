'use client';

import ProductCard from '@/components/cards/product-card/ProductCard';
import PageHeaderWithBackground from '@/components/heroes/page-header-with-background/PageHeaderWithBackground';
import { useGetStorefrontProducts } from '@/data/services/shopify/queries/products';

const BookstoreClient = () => {
  const { products } = useGetStorefrontProducts();
  return (
    <div className="px-padding flex flex-col gap-xxl lg:gap-[100px] 2xl:gap-[125px]">
      <PageHeaderWithBackground
        media={{
          src: '/placeholder-media/open_sign.webp',
          alt: 'Decorative Background Image',
          poster: '',
        }}
        title="Bookstore"
        subtitle="Grab the latest Wind Gear and supplies here."
      />

      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-lg place-items-center max-w-[1440px]">
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
  );
};

export default BookstoreClient;
