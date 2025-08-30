import { SANITY_EDITOR_TOKEN, SANITY_MUTATION_API_ENDPOINT } from '@/data/constants';
import { FullContact, sanityMutationReturnType } from '@/data/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { HttpClient } from '../../http-client';
import { sanityMutationBodyStructure } from '../utils';
import { getContactIdByEmailQuery } from '../queries/contacts';

export const createContactSignupClient = async (data: FullContact) =>
  HttpClient.post<sanityMutationReturnType>(
    SANITY_MUTATION_API_ENDPOINT,
    sanityMutationBodyStructure({ createReq: { _type: 'contact', data } }),
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${SANITY_EDITOR_TOKEN}`,
      },
    }
  );

export const findOrCreateContact = async (data: FullContact): Promise<{ _id: string }> => {
  let contactId;
  const existingContact = await getContactIdByEmailQuery(data.email);

  if (existingContact) {
    return existingContact;
  } else {
    contactId = `contact-${data.email.replace(/[^a-zA-Z0-9]/g, '')}`;
    // Then use createIfNotExists with this ID
  }
};

export const useCreateContactSignup = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createContactSignupClient,
    mutationKey: [SANITY_MUTATION_API_ENDPOINT, 'contact'],
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [SANITY_MUTATION_API_ENDPOINT, 'contact'],
      });
    },
  });
};
