import { Locale } from '@/data/i18n/utils';
import { Leader, localizedFields } from '@/data/types';
import { getLocalizedValue } from '../utils';
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
        position: localizedFields,
        category: true,
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
    ],
  }).then((l) => l.allLeader);
};

export const getAllCategorizedLeaders = async (
  locale: Locale
): Promise<Record<string, Leader[]>> => {
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
          description: getLocalizedValue(leader.description, locale) ?? '',
          position: getLocalizedValue(leader.position, locale) ?? '',
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
