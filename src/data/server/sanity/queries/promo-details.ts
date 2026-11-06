import { Locale } from '@/data/i18n/utils';
import { localizedFields, PromoBannerDetails } from '@/data/types';
import { cache } from 'react';
import { getLocalizedValue } from '../utils';
import { SanityQuery } from '../zeus-chain';

const getPromoDetailsQuery = async () => {
  return await SanityQuery({
    allPromoBanner: [
      {},
      {
        header: localizedFields,
        title: localizedFields,
        description: localizedFields,
        link: {
          label: localizedFields,
          external_href: true,
          internal_href: true,
        },
        image: {
          asset: {
            url: true,
          },
        },
        image_alt: localizedFields,
        video: {
          asset: {
            url: true,
          },
        },
      },
    ],
  }).then((y) => y.allPromoBanner);
};

export const getPromoDetails = cache(
  async (locale: Locale): Promise<PromoBannerDetails | undefined> => {
    const details = await getPromoDetailsQuery();

    const detail = details?.[0];

    if (!detail) return undefined;

    return {
      header: getLocalizedValue(detail.header, locale) ?? '',
      title: getLocalizedValue(detail.title, locale) ?? '',
      description: getLocalizedValue(detail.description, locale) ?? '',
      link: detail.link
        ? {
            label: getLocalizedValue(detail.link.label, locale) ?? '',
            href: detail.link.external_href ?? detail.link.internal_href ?? '#',
          }
        : undefined,
      image: {
        src: detail.image?.asset?.url ?? '',
        alt: getLocalizedValue(detail.image_alt, locale) ?? '',
      },
      video: detail.video?.asset?.url ?? undefined,
    };
  }
);
