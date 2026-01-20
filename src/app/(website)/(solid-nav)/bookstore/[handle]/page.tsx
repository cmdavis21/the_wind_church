import ErrorPage from '@/components/misc/error-page/ErrorPage';
import { AWS_ASSET_BASE_URL, WEBSITE_BASE_URL } from '@/data/constants';
import { PageRoutes } from '@/data/page-routes';
import {
  getStorefrontProductByHandle,
  getStorefrontProductHandles,
} from '@/data/services/shopify/queries/products';
import { getTranslations } from 'next-intl/server';
import ProductPage from './nossr';

export async function generateStaticParams() {
  const products = await getStorefrontProductHandles();
  return products.map((product) => ({
    handle: product.handle,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; handle: string }>;
}) {
  const { locale, handle } = await params;
  const t = await getTranslations({ locale, namespace: 'Bookstore' });
  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_BASE_URL}${PageRoutes.bookstore}/${handle}`;
  const image = `${AWS_ASSET_BASE_URL}/placeholder-media/open_sign.webp`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

const SingleProductPage = async ({ params }: { params: Promise<{ handle: string }> }) => {
  const { handle } = await params;
  const product = await getStorefrontProductByHandle(handle);

  if (!product) {
    return <ErrorPage description="This page must be missing! Please try again later." />;
  }

  return <ProductPage {...product} />;
};

export default SingleProductPage;
