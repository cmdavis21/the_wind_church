import { Locale } from '@/data/i18n/utils';
import { localizedFields, localizedFieldsRaw, Ministry } from '@/data/types';
import { SANITY_NEXT_GEN_DOC_ID } from '../../env.server';
import { getLocalizedPortableText, getLocalizedValue, portableTextToString } from '../utils';
import { SanityQuery } from '../zeus-chain';

const getAllMinistriesQuery = async () => {
  return await SanityQuery({
    allMinistry: [
      {},
      {
        _id: true,
        name: localizedFields,
        slug: {
          current: true,
        },
        description: localizedFieldsRaw,
        image: {
          asset: {
            url: true,
          },
        },
        image_alt: localizedFields,
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
        name: localizedFields,
        slug: {
          current: true,
        },
        description: localizedFieldsRaw,
        scripture: {
          verse: localizedFields,
          passage: localizedFields,
        },
        coordinators: {
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
        coach: {
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
        image: {
          asset: {
            url: true,
          },
        },
        image_alt: localizedFields,
      },
    ],
  }).then((m) => m.allMinistry);
};

export const getAllMinistries = async (
  locale: Locale
): Promise<
  {
    name: Ministry['name'];
    slug: Ministry['slug'];
    description: Ministry['description'];
    image: Ministry['image'];
  }[]
> => {
  const ministries = await getAllMinistriesQuery();

  if (!ministries) return [];

  return ministries
    .filter((ministry) => ministry._id !== SANITY_NEXT_GEN_DOC_ID)
    .map((ministry) => ({
      name: getLocalizedValue(ministry.name, locale) ?? '',
      slug: ministry.slug?.current ?? '',
      description: portableTextToString(
        getLocalizedPortableText(ministry.description, locale)
      ) as any,
      image: {
        src: ministry.image?.asset?.url ?? '',
        alt: getLocalizedValue(ministry.image_alt, locale) ?? '',
      },
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
};

export const getMinistryBySlug = async (
  slug: string,
  locale: Locale
): Promise<Ministry | undefined> => {
  const ministries = await getMinistryBySlugQuery(slug);

  const ministry = ministries?.[0];

  if (!ministry) return undefined;

  return {
    _id: (ministry._id as string) ?? undefined,
    name: getLocalizedValue(ministry.name, locale) ?? '',
    slug: ministry.slug?.current ?? '',
    scripture: {
      verse: getLocalizedValue(ministry.scripture?.verse, locale) ?? '',
      passage: getLocalizedValue(ministry.scripture?.passage, locale) ?? '',
    },
    description: portableTextToString(
      getLocalizedPortableText(ministry.description, locale)
    ) as any,
    coordinators:
      ministry.coordinators?.map((coordinator) => ({
        first_name: coordinator.contact?.first_name ?? '',
        last_name: coordinator.contact?.last_name ?? '',
        position: getLocalizedValue(coordinator.position, locale) ?? '',
        description: getLocalizedValue(coordinator.description, locale) ?? '',
        image: coordinator.image?.asset?.url ?? '',
        video: coordinator.video?.asset?.url ?? undefined,
      })) ?? [],
    coach: {
      first_name: ministry.coach?.contact?.first_name ?? '',
      last_name: ministry.coach?.contact?.last_name ?? '',
      position: getLocalizedValue(ministry.coach?.position, locale) ?? '',
      description: getLocalizedValue(ministry.coach?.description, locale) ?? '',
      image: ministry.coach?.image?.asset?.url ?? '',
      video: ministry.coach?.video?.asset?.url ?? undefined,
    },
    image: {
      src: ministry.image?.asset?.url ?? '',
      alt: getLocalizedValue(ministry.image_alt, locale) ?? '',
    },
  };
};
