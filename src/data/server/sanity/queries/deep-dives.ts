import { Locale } from '@/data/i18n/utils';
import { DeepDive, localizedFields, localizedFieldsRaw } from '@/data/types';
import { getLocalizedPortableText, getLocalizedValue, portableTextToString } from '../utils';
import { SanityQuery } from '../zeus-chain';

const getAllDeepDivesQuery = async () => {
  return await SanityQuery({
    allDeepDive: [
      {},
      {
        _id: true,
        name: localizedFields,
        slug: {
          current: true,
        },
        description: localizedFieldsRaw,
        instructors: {
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
        meeting_details: {
          day: true,
          time: true,
          attendance_type: true,
        },
        start_date: true,
        end_date: true,
        required_materials: localizedFields,
        accepting_new_students: true,
      },
    ],
  }).then((d) => d.allDeepDive);
};

const getDeepDiveBySlugQuery = async (slug: string) => {
  return await SanityQuery({
    allDeepDive: [
      { where: { slug: { current: { eq: slug } } } },
      {
        _id: true,
        name: localizedFields,
        slug: {
          current: true,
        },
        description: localizedFieldsRaw,
        instructors: {
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
        meeting_details: {
          day: true,
          time: true,
          attendance_type: true,
        },
        start_date: true,
        end_date: true,
        required_materials: localizedFields,
        accepting_new_students: true,
      },
    ],
  }).then((d) => d.allDeepDive);
};

export const getAllDeepDives = async (locale: Locale): Promise<DeepDive[]> => {
  const deepDives = await getAllDeepDivesQuery();

  if (!deepDives) return [];

  return deepDives
    .map((deepDive) => ({
      _id: (deepDive._id as string) ?? undefined,
      name: getLocalizedValue(deepDive.name, locale) ?? '',
      slug: deepDive.slug?.current ?? '',
      description: portableTextToString(
        getLocalizedPortableText(deepDive.description, locale)
      ) as any,
      instructors:
        deepDive.instructors?.map((instructor) => ({
          first_name: instructor.contact?.first_name ?? '',
          last_name: instructor.contact?.last_name ?? '',
          position: getLocalizedValue(instructor.position, locale) ?? '',
          description: getLocalizedValue(instructor.description, locale) ?? '',
          image: instructor.image?.asset?.url ?? '',
          video: instructor.video?.asset?.url ?? undefined,
        })) ?? [],
      image: {
        src: deepDive.image?.asset?.url ?? '',
        alt: getLocalizedValue(deepDive.image_alt, locale) ?? '',
      },
      meeting_details:
        deepDive.meeting_details?.map((detail) => ({
          day: detail.day ?? '',
          time: detail.time ?? '',
          attendance_type: detail.attendance_type ?? '',
        })) ?? [],
      start_date: (deepDive.start_date as Date) ?? new Date(),
      end_date: (deepDive.end_date as Date) ?? new Date(),
      required_materials: deepDive.required_materials?.length
        ? deepDive.required_materials.map((item) => getLocalizedValue(item, locale) ?? '')
        : undefined,
      accepting_new_students: (deepDive.accepting_new_students as boolean) ?? false,
    }))
    .sort((a, b) => {
      const nameA = a.name ?? '';
      const nameB = b.name ?? '';
      return nameA.localeCompare(nameB);
    });
};

export const getDeepDiveBySlug = async (
  slug: string,
  locale: Locale
): Promise<DeepDive | undefined> => {
  const deepDiveQuery = await getDeepDiveBySlugQuery(slug);

  const deepDive = deepDiveQuery?.[0];

  if (!deepDive) return undefined;

  return {
    _id: (deepDive._id as string) ?? undefined,
    name: getLocalizedValue(deepDive.name, locale) ?? '',
    slug: deepDive.slug?.current ?? '',
    description: portableTextToString(
      getLocalizedPortableText(deepDive.description, locale)
    ) as any,
    instructors:
      deepDive.instructors?.map((instructor) => ({
        first_name: instructor.contact?.first_name ?? '',
        last_name: instructor.contact?.last_name ?? '',
        position: getLocalizedValue(instructor.position, locale) ?? '',
        description: getLocalizedValue(instructor.description, locale) ?? '',
        image: instructor.image?.asset?.url ?? '',
        video: instructor.video?.asset?.url ?? undefined,
      })) ?? [],
    image: {
      src: deepDive.image?.asset?.url ?? '',
      alt: getLocalizedValue(deepDive.image_alt, locale) ?? '',
    },
    meeting_details:
      deepDive.meeting_details?.map((detail) => ({
        day: detail.day ?? '',
        time: detail.time ?? '',
        attendance_type: detail.attendance_type ?? '',
      })) ?? [],
    start_date: (deepDive.start_date as Date) ?? new Date(),
    end_date: (deepDive.end_date as Date) ?? new Date(),
    required_materials: deepDive.required_materials?.length
      ? deepDive.required_materials.map((item) => getLocalizedValue(item, locale) ?? '')
      : undefined,
    accepting_new_students: (deepDive.accepting_new_students as boolean) ?? false,
  };
};
