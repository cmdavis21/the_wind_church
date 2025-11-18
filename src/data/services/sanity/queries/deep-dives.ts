import { GET_ALL_DEEP_DIVES } from '@/data/constants';
import { DeepDive } from '@/data/types';
import { useQuery } from '@tanstack/react-query';
import { portableTextToString } from '../utils';
import { SanityQuery } from '../zeus-chain';

const getAllDeepDivesQuery = async () => {
  return await SanityQuery({
    allDeepDive: [
      {},
      {
        _id: true,
        name: true,
        slug: {
          current: true,
        },
        descriptionRaw: true,
        instructors: {
          contact: {
            first_name: true,
            last_name: true,
          },
          position: true,
          roles: true,
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
        meeting_details: {
          day: true,
          time: {
            hour: true,
            minute: true,
            time_of_day: true,
          },
          location: true,
        },
        start_date: true,
        end_date: true,
        required_materials: true,
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
        name: true,
        slug: {
          current: true,
        },
        descriptionRaw: true,
        instructors: {
          contact: {
            first_name: true,
            last_name: true,
          },
          position: true,
          roles: true,
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
        meeting_details: {
          day: true,
          time: {
            hour: true,
            minute: true,
            time_of_day: true,
          },
          location: true,
        },
        start_date: true,
        end_date: true,
        required_materials: true,
        accepting_new_students: true,
      },
    ],
  }).then((d) => d.allDeepDive);
};

export const getAllDeepDives = async (): Promise<DeepDive[]> => {
  const deepDives = await getAllDeepDivesQuery();

  if (deepDives) {
    return deepDives
      .sort((a, b) => {
        const nameA = a.name ?? '';
        const nameB = b.name ?? '';
        return nameA.localeCompare(nameB);
      })
      .map((deepDive) => ({
        _id: (deepDive._id as string) ?? undefined,
        name: deepDive.name ?? '',
        slug: deepDive.slug?.current ?? '',
        description: deepDive.descriptionRaw
          ? portableTextToString(deepDive.descriptionRaw as any)
          : '',
        instructors:
          deepDive.instructors?.map((instructor) => ({
            first_name: instructor.contact?.first_name ?? '',
            last_name: instructor.contact?.last_name ?? '',
            position: instructor.position ?? '',
            roles: (instructor.roles as string[]) ?? [],
            description: instructor.description ?? '',
            image: instructor.image?.asset?.url ?? '',
            video: instructor.video?.asset?.url ?? undefined,
          })) ?? [],
        image: {
          src: deepDive.image?.asset?.url ?? '',
          alt: deepDive.image?.asset?.altText ?? '',
        },
        meeting_details:
          deepDive.meeting_details?.map((detail) => ({
            day: detail.day ?? '',
            time: {
              hour: detail.time?.hour ?? '',
              minute: detail.time?.minute ?? '',
              time_of_day: detail.time?.time_of_day ?? '',
            },
            location: detail.location ?? '',
          })) ?? [],
        start_date: (deepDive.start_date as Date) ?? new Date(),
        end_date: (deepDive.end_date as Date) ?? new Date(),
        required_materials: (deepDive.required_materials as string[]) ?? undefined,
        accepting_new_students: (deepDive.accepting_new_students as boolean) ?? false,
      }));
  }

  return [];
};

export const getDeepDiveBySlug = async (slug: string): Promise<DeepDive | undefined> => {
  const deepDive = await getDeepDiveBySlugQuery(slug);

  if (deepDive && deepDive[0]) {
    return {
      _id: (deepDive[0]._id as string) ?? undefined,
      name: deepDive[0].name ?? '',
      slug: deepDive[0].slug?.current ?? '',
      description: deepDive[0].descriptionRaw
        ? portableTextToString(deepDive[0].descriptionRaw as any)
        : '',
      instructors:
        deepDive[0].instructors?.map((instructor) => ({
          first_name: instructor.contact?.first_name ?? '',
          last_name: instructor.contact?.last_name ?? '',
          position: instructor.position ?? '',
          roles: (instructor.roles as string[]) ?? [],
          description: instructor.description ?? '',
          image: instructor.image?.asset?.url ?? '',
          video: instructor.video?.asset?.url ?? undefined,
        })) ?? [],
      image: {
        src: deepDive[0].image?.asset?.url ?? '',
        alt: deepDive[0].image?.asset?.altText ?? '',
      },
      meeting_details:
        deepDive[0].meeting_details?.map((detail) => ({
          day: detail.day ?? '',
          time: {
            hour: detail.time?.hour ?? '',
            minute: detail.time?.minute ?? '',
            time_of_day: detail.time?.time_of_day ?? '',
          },
          location: detail.location ?? '',
        })) ?? [],
      start_date: (deepDive[0].start_date as Date) ?? new Date(),
      end_date: (deepDive[0].end_date as Date) ?? new Date(),
      required_materials: (deepDive[0].required_materials as string[]) ?? undefined,
      accepting_new_students: (deepDive[0].accepting_new_students as boolean) ?? false,
    };
  }

  return undefined;
};

export const useGetAllDeepDives = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [GET_ALL_DEEP_DIVES],
    queryFn: getAllDeepDives,
  });
  return {
    deepDives: data ?? [],
    deepDivesLoading: isLoading,
    deepDivesError: isError,
  };
};
