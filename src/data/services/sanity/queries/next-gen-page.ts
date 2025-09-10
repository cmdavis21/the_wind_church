import { NextGenPage } from '@/data/types';
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
          position: true,
          description: true,
          roles: true,
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

export const getNextGenPage = async (): Promise<NextGenPage | undefined> => {
  const details = await getNextGenPageQuery();

  if (details && details[0]) {
    return {
      educators:
        details[0].educators?.map((educator) => ({
          first_name: educator.contact?.first_name ?? '',
          last_name: educator.contact?.last_name ?? '',
          position: educator.position ?? '',
          roles: (educator.roles as string[]) ?? [],
          description: educator.description ?? '',
          image: educator.image?.asset?.url ?? '',
          video: educator.video?.asset?.url ?? undefined,
        })) ?? [],
      cirriculum_file: details[0].cirriculum_file?.asset?.url ?? '',
    };
  }

  return undefined;
};
