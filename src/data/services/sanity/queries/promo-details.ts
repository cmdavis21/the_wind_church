import { PromoBannerDetails } from '@/data/types';
import { SanityQuery } from '../zeus-chain';

const getPromoDetailsQuery = async () => {
  return await SanityQuery({
    allPromoBanner: [
      {},
      {
        header: true,
        title: true,
        description: true,
        link: true,
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

export const getPromoDetails = async (): Promise<PromoBannerDetails | undefined> => {
  const details = await getPromoDetailsQuery();

  if (details && details[0]) {
    return {
      header: details[0].header ?? '',
      title: details[0].title ?? '',
      description: details[0].description ?? '',
      link: details[0].link ?? undefined,
      image: details[0].image?.asset?.url ?? '',
      video: details[0].video?.asset?.url ?? undefined,
    };
  }

  return undefined;
};
