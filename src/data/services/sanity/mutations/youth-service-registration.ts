import { YouthRegistrationInquiry } from '@/data/types';
import { SanityClient } from '../client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createContactClient } from './contact-signup';
import { getYouthServiceRegistrationIdByYouthNamesQuery } from '../queries/youth-service-registration';

export const youthServiceRegistrationClient = async (data: YouthRegistrationInquiry) => {
  try {
    for (const child of data.children) {
      // Check if child exists
      const youthRecord = await getYouthServiceRegistrationIdByYouthNamesQuery(
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
          _type: 'youthServiceRegistration',
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
          _type: 'youthServiceRegistration',
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
    console.error('### FAILED TO CREATE YOUTH SERVICE REGISTRATION', err.message);
    throw new Error('Youth Service Registration creation failed');
  }
};

export const useYouthServiceRegistration = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: youthServiceRegistrationClient,
    mutationKey: ['SANITY MUTATION CREATE YOUTH SERVICE REGISTRATION'],
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['SANITY MUTATION CREATE YOUTH SERVICE REGISTRATION'],
      });
    },
  });
};
