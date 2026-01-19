import { AWS_ASSET_BASE_URL, WEBSITE_BASE_URL } from '@/data/constants';
import { PageRoutes } from '@/data/page-routes';
import { getTranslations } from 'next-intl/server';
import DeepDivesClient from './nossr';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'DeepDive' });
  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_BASE_URL}${PageRoutes.deepDive}`;
  const image = `${AWS_ASSET_BASE_URL}/images/wind_church_building.webp`;
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

const DeepDive = async () => <DeepDivesClient />;

export default DeepDive;
