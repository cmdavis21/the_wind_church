import Image from 'next/image';

import { PageRoutes } from '@/data/page-routes';
import { WEBSITE_URL } from '@/data/server/env.server';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'RightNowMedia' });
  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_URL}${PageRoutes.rightnowMedia}`;
  const image = '/images/rightnow-media.webp';
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

const Rightnowmedia = async () => {
  const t = await getTranslations('RightNowMedia');

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative w-full h-full pointer-events-none">
          <Image fill className="object-cover" alt={t('alt')} src="/images/rightnow-media.webp" />
        </div>
      </div>

      {/* Color Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/90 backdrop-blur-[8px]" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/90" />

      {/* Content */}
      <div className="relative w-full min-h-screen flex items-center p-padding">
        <div className="pt-20 lg:max-w-[60%] flex flex-col gap-xl text-white">
          <h3>
            {t.rich('title', {
              bold: (chunks) => <span className="text-brand-primary">{chunks}</span>,
            })}
          </h3>

          <h5>{t('descriptions.0')}</h5>

          <div className="flex flex-col gap-md">
            <p className="font-semibold">{t('included.label')}</p>

            <ul className="space-y-xs">
              <li>{t('included.items.0')}</li>
              <li>{t('included.items.1')}</li>
              <li>{t('included.items.2')}</li>
              <li>{t('included.items.3')}</li>
            </ul>
          </div>

          <h5>
            {t.rich('descriptions.1', {
              bold: (chunks) => <span className="text-brand-primary font-semibold">{chunks}</span>,
            })}
          </h5>

          <h5>
            {t.rich('descriptions.2', {
              link: (chunks) => (
                <Link href="tel:9513590203" className="text-link underline font-semibold">
                  {chunks}
                </Link>
              ),
            })}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Rightnowmedia;
