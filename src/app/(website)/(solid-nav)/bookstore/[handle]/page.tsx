import ErrorAlert from '@/components/alerts/error-alert/ErrorAlert';
import { Locale } from '@/data/i18n/utils';
import { PageRoutes } from '@/data/page-routes';
import { WEBSITE_URL } from '@/data/server/env.server';
import {
  getStorefrontProductByHandle,
  getStorefrontProductHandles,
} from '@/data/server/shopify/queries/product';
import { getLocale, getTranslations } from 'next-intl/server';
import ProductPage from './nossr';

export async function generateStaticParams() {
  const products = await getStorefrontProductHandles();
  return products.map((product) => ({ handle: product.handle }));
}

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const locale = (await getLocale()) as Locale;

  const t = await getTranslations({ locale, namespace: 'Bookstore' });
  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_URL}${PageRoutes.bookstore}/${handle}`;
  const image = '/images/open-sign.webp';

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
  const locale = (await getLocale()) as Locale;

  const product = await getStorefrontProductByHandle(handle, locale);

  if (!product) return <ErrorAlert reloadPage={false} />;

  return <ProductPage {...product} />;
};

export default SingleProductPage;
