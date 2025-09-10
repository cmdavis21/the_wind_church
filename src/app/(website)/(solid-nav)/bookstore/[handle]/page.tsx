import ErrorMessage from '@/components/error-message/ErrorMessage';
import { WEBSITE_BASE_URL } from '@/data/constants';
import {
  getStorefrontProductByHandle,
  getStorefrontProductHandles,
} from '@/data/services/shopify/queries/products';
import ProductPage from './nossr';

export async function generateStaticParams() {
  const products = await getStorefrontProductHandles();
  return products.map((product) => ({
    handle: product.handle,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  return {
    title: 'Bookstore',
    description: '',
    alternates: {
      canonical: `${WEBSITE_BASE_URL}/bookstore/${handle}`,
    },
  };
}

const SingleProductPage = async ({ params }: { params: Promise<{ handle: string }> }) => {
  const { handle } = await params;
  const product = await getStorefrontProductByHandle(handle);

  if (!product) {
    return <ErrorMessage message="Sorry, this page must be missing! Please try again later." />;
  }

  return <ProductPage {...product} />;
};

export default SingleProductPage;
