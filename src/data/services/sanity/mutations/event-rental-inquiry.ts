import { SANITY_MUTATION_API_ENDPOINT, SANITY_EDITOR_TOKEN } from '@/data/constants';
import { EventRentalInquiry, sanityMutationReturnType } from '@/data/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { HttpClient } from '../../http-client';
import { sanityMutationBodyStructure } from '../utils';
import { getContactIdByEmailQuery } from '../queries/contacts';

export const createEventRentalInquiryClient = async (data: EventRentalInquiry) => {
  let contactId;
  const existingContact = await getContactIdByEmailQuery(data.email);

  if (existingContact) {
    contactId = existingContact._id;
  } else {
    contactId = `contact-${data.email.replace(/[^a-zA-Z0-9]/g, '')}`;
    // Then use createIfNotExists with this ID
  }

  let body = null;
  if (contactId) {
    body = sanityMutationBodyStructure({
      createReq: {
        _type: 'eventRental',
        data: {
          ...data,
          contact: {
            _type: 'reference',
            _ref: contactId._id,
          },
        },
      },
    });
  } else {
    const newC;
    body = sanityMutationBodyStructure({
      createReq: [
        { _type: 'contact', data },
        {
          _type: 'eventRental',
          data: {
            ...data,
            contact: {
              _type: 'reference',
              _ref: contactId.id,
            },
          },
        },
      ],
    });
  }

  console.log(body);
  return await HttpClient.post<sanityMutationReturnType>(SANITY_MUTATION_API_ENDPOINT, body, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SANITY_EDITOR_TOKEN}`,
    },
  });
};

export const useCreateEventRentalInquiry = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createEventRentalInquiryClient,
    mutationKey: [SANITY_MUTATION_API_ENDPOINT, 'eventRental'],
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [SANITY_MUTATION_API_ENDPOINT, 'eventRental'],
      });
    },
  });
};
