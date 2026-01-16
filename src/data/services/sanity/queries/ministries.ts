import { GET_ALL_MINISTRIES } from '@/data/constants';
import { Ministry } from '@/data/types';
import { useQuery } from '@tanstack/react-query';
import { portableTextToString } from '../utils';
import { SanityQuery } from '../zeus-chain';

const getAllMinistriesQuery = async () => {
  return await SanityQuery({
    allMinistry: [
      {},
      {
        name: true,
        slug: {
          current: true,
        },
        descriptionRaw: true,
        image: {
          asset: {
            url: true,
            altText: true,
          },
        },
      },
    ],
  }).then((m) => m.allMinistry);
};

const getMinistryBySlugQuery = async (slug: string) => {
  return await SanityQuery({
    allMinistry: [
      { where: { slug: { current: { eq: slug } } } },
      {
        _id: true,
        name: true,
        slug: {
          current: true,
        },
        descriptionRaw: true,
        scripture: {
          verse: true,
          passage: true,
        },
        coordinators: {
          contact: {
            first_name: true,
            last_name: true,
          },
          position: true,
          description: true,
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
        coach: {
          contact: {
            first_name: true,
            last_name: true,
          },
          position: true,
          description: true,
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
        image: {
          asset: {
            url: true,
            altText: true,
          },
        },
      },
    ],
  }).then((m) => m.allMinistry);
};

export const getAllMinistries = async (): Promise<
  {
    name: Ministry['name'];
    slug: Ministry['slug'];
    description: Ministry['description'];
    image: Ministry['image'];
  }[]
> => {
  const ministries = await getAllMinistriesQuery();

  if (ministries) {
    return ministries
      .filter((ministry) => ministry.name?.toLowerCase() !== 'youth service')
      .map((ministry) => ({
        name: ministry.name ?? '',
        slug: ministry.slug?.current ?? '',
        image: {
          src: ministry.image?.asset?.url ?? '',
          alt: ministry.image?.asset?.altText ?? '',
        },
        description: ministries[0].descriptionRaw
          ? portableTextToString(ministries[0].descriptionRaw as any)
          : '',
      }));
  }

  return [];
};

export const getMinistryBySlug = async (slug: string): Promise<Ministry | undefined> => {
  const ministries = await getMinistryBySlugQuery(slug);

  if (ministries && ministries[0]) {
    return {
      _id: (ministries[0]._id as string) ?? undefined,
      name: ministries[0].name ?? '',
      slug: ministries[0].slug?.current ?? '',
      scripture: {
        verse: ministries[0].scripture?.verse ?? '',
        passage: ministries[0].scripture?.passage ?? '',
      },
      description: ministries[0].descriptionRaw
        ? portableTextToString(ministries[0].descriptionRaw as any)
        : '',
      coordinators:
        ministries[0].coordinators?.map((coordinator) => ({
          first_name: coordinator.contact?.first_name ?? '',
          last_name: coordinator.contact?.last_name ?? '',
          position: coordinator.position ?? '',
          description: coordinator.description ?? '',
          image: coordinator.image?.asset?.url ?? '',
          video: coordinator.video?.asset?.url ?? undefined,
        })) ?? [],
      coach: {
        first_name: ministries[0].coach?.contact?.first_name ?? '',
        last_name: ministries[0].coach?.contact?.last_name ?? '',
        position: ministries[0].coach?.position ?? '',
        description: ministries[0].coach?.description ?? '',
        image: ministries[0].coach?.image?.asset?.url ?? '',
        video: ministries[0].coach?.video?.asset?.url ?? undefined,
      },
      image: {
        src: ministries[0].image?.asset?.url ?? '',
        alt: ministries[0].image?.asset?.altText ?? '',
      },
    };
  }

  return undefined;
};

export const useGetAllMinistries = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [GET_ALL_MINISTRIES],
    queryFn: getAllMinistries,
  });
  return {
    ministries: data ?? [],
    ministriesLoading: isLoading,
    ministriesError: isError,
  };
};
