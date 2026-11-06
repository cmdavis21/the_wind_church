import { Locale } from '@/data/i18n/utils';
import { localizedFields, NextGenPage } from '@/data/types';
import { getLocalizedValue } from '../utils';
import { SanityQuery } from '../zeus-chain';

const getNextGenPageQuery = async () => {
  return await SanityQuery({
    allNextGenPage: [
      {},
      {
        educators: {
          contact: {
            first_name: true,
            last_name: true,
          },
          position: localizedFields,
          description: localizedFields,
          image: {
            asset: {
              url: true,
            },
          },
          video: {
            asset: {
              url: true,
            },
          },
        },
        cirriculum_file: {
          asset: {
            url: true,
          },
        },
      },
    ],
  }).then((y) => y.allNextGenPage);
};

export const getNextGenPage = async (locale: Locale): Promise<NextGenPage | undefined> => {
  const details = await getNextGenPageQuery();

  const detail = details?.[0];

  if (!detail) return undefined;

  return {
    educators:
      detail.educators?.map((educator) => ({
        first_name: educator.contact?.first_name ?? '',
        last_name: educator.contact?.last_name ?? '',
        position: getLocalizedValue(educator.position, locale) ?? '',
        description: getLocalizedValue(educator.description, locale) ?? '',
        image: educator.image?.asset?.url ?? '',
        video: educator.video?.asset?.url ?? undefined,
      })) ?? [],
    cirriculum_file: detail.cirriculum_file?.asset?.url ?? '',
  };
};
