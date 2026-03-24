import { PageRoutes } from '@/data/page-routes';
import { AWS_ASSET_URL, WEBSITE_URL } from '@/data/services/env.server';
import { getTranslations } from 'next-intl/server';
import CartPage from './nossr';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Cart' });
  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_URL}${PageRoutes.cart}`;
  const image = `${AWS_ASSET_URL}/placeholder-media/open_sign.webp`;
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

const Cart = () => <CartPage />;

export default Cart;
