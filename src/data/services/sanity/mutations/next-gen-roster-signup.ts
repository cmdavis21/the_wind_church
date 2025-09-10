import { SanityClient } from '../client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createContactClient } from './contact-signup';
import { NEXT_GEN_ROSTER_KEY } from '@/data/constants';
import { getNextGenRosterSignupRecordIdByYouthNamesQuery } from '../queries/next-gen-roster-signup';
import { NextGenRosterSignup } from '@/data/types';

export const nextGenRosterSignupClient = async (data: NextGenRosterSignup) => {
  try {
    for (const child of data.children) {
      // Check if child exists
      const youthRecord = await getNextGenRosterSignupRecordIdByYouthNamesQuery(
        child.first_name,
        child.last_name
      );

      // Create or find guardians
      const guardianContacts: {
        _key: string;
        contact: { _ref: string; _type: string };
        relationship_to_child: string;
      }[] = [];

      for (const guardian of child.guardians) {
        const contactId = await createContactClient(guardian);

        guardianContacts.push({
          _key: contactId,
          contact: {
            _type: 'reference',
            _ref: contactId,
          },
          relationship_to_child: guardian.relationship_to_child,
        });
      }

      if (youthRecord) {
        await SanityClient.patch(youthRecord._id).set({
          _type: 'nextGenRosterSignup',
          first_name: child.first_name,
          last_name: child.last_name,
          age: child.age,
          grade: child.grade,
          gender: child.gender,
          hobbies: child.hobbies,
          allergies: child.allergies,
          guardians: guardianContacts,
        });
      } else {
        await SanityClient.create({
          _type: 'nextGenRosterSignup',
          first_name: child.first_name,
          last_name: child.last_name,
          age: child.age,
          grade: child.grade,
          gender: child.gender,
          hobbies: child.hobbies,
          allergies: child.allergies,
          guardians: guardianContacts,
        });
      }
    }
  } catch (err: any) {
    console.error('### FAILED TO CREATE NEXT GEN ROSTER SIGNUP', err.message);
    throw new Error('Next Gen Roster Signup creation failed');
  }
};

export const useNextGenRosterSignup = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: nextGenRosterSignupClient,
    mutationKey: [NEXT_GEN_ROSTER_KEY],
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [NEXT_GEN_ROSTER_KEY],
      });
    },
  });
};
