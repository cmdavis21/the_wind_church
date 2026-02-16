import { PromoBannerDetails } from '@/data/types';
import { cache } from 'react';
import { SanityQuery } from '../zeus-chain';

const getPromoDetailsQuery = async () => {
  return await SanityQuery({
    allPromoBanner: [
      {},
      {
        header: true,
        title: true,
        description: true,
        link: {
          label: true,
          external_href: true,
          internal_href: true,
        },
        image: {
          asset: {
            url: true,
            altText: true,
          },
        },
        video: {
          asset: {
            url: true,
          },
        },
      },
    ],
  }).then((y) => y.allPromoBanner);
};

export const getPromoDetails = cache(async (): Promise<PromoBannerDetails | undefined> => {
  const details = await getPromoDetailsQuery();

  if (details && details[0]) {
    return {
      header: details[0].header ?? '',
      title: details[0].title ?? '',
      description: details[0].description ?? '',
      link: details[0].link
        ? {
            label: details[0].link.label ?? '',
            href: details[0].link.external_href ?? details[0].link.internal_href ?? '#',
          }
        : undefined,
      image: {
        src: details[0].image?.asset?.url ?? '',
        alt: details[0].image?.asset?.altText ?? '',
      },
      video: details[0].video?.asset?.url ?? undefined,
    };
  }

  return undefined;
});
// export const getPromoDetails = async (): Promise<PromoBannerDetails | undefined> => {
//   const details = await getPromoDetailsQuery();

//   if (details && details[0]) {
//     return {
//       header: details[0].header ?? '',
//       title: details[0].title ?? '',
//       description: details[0].description ?? '',
//       link: details[0].link
//         ? {
//             label: details[0].link.label ?? '',
//             href: details[0].link.external_href ?? details[0].link.internal_href ?? '#',
//           }
//         : undefined,
//       image: {
//         src: details[0].image?.asset?.url ?? '',
//         alt: details[0].image?.asset?.altText ?? '',
//       },
//       video: details[0].video?.asset?.url ?? undefined,
//     };
//   }

//   return undefined;
// };
