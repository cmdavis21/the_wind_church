import { GET_ALL_LEADERS } from '@/data/constants';
import { Leader } from '@/data/types';
import { useQuery } from '@tanstack/react-query';
import { SanityQuery } from '../zeus-chain';

const getAllLeadersQuery = async () => {
  return await SanityQuery({
    allLeader: [
      {},
      {
        _id: true,
        contact: {
          first_name: true,
          last_name: true,
        },
        position: true,
        category: true,
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
    ],
  }).then((l) => l.allLeader);
};

export const getAllCategorizedLeaders = async (): Promise<Record<string, Leader[]>> => {
  const leaders = await getAllLeadersQuery();

  let categorizedLeaders: Record<string, Leader[]> = {};

  if (leaders) {
    categorizedLeaders = leaders.reduce<Record<string, Leader[]>>((acc, leader) => {
      const category = leader.category;
      if (category) {
        if (!acc[category]) acc[category] = [];
        acc[category].push({
          _id: (leader._id as string) ?? undefined,
          first_name: leader.contact?.first_name ?? '',
          last_name: leader.contact?.last_name ?? '',
          description: leader.description ?? '',
          position: leader.position ?? '',
          category: leader.category ?? '',
          image: leader.image?.asset?.url ?? '',
          video: leader.video?.asset?.url ?? undefined,
        });
      }
      return acc;
    }, {});
  }

  return categorizedLeaders;
};

export const useGetAllCategorizedLeaders = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [GET_ALL_LEADERS],
    queryFn: getAllCategorizedLeaders,
  });

  return {
    leaders: data,
    leadersLoading: isLoading,
    leadersError: isError,
  };
};
