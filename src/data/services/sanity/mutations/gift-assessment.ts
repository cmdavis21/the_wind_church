import { useMutation, useQueryClient } from '@tanstack/react-query';

import { SANITY_MUTATION_API_ENDPOINT, SANITY_EDITOR_TOKEN } from '@/data/constants';
import { sanityMutationBodyStructure } from '../utils';
import { GiftAssessmentSubmission } from '@/data/types';
import { HttpClient } from '../../http-client';

export const createGiftAssessmentClient = async (data: GiftAssessmentSubmission) => {
  await HttpClient.post(
    SANITY_MUTATION_API_ENDPOINT,
    sanityMutationBodyStructure({ createReq: { _type: 'giftAssessment', data } }),
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${SANITY_EDITOR_TOKEN}`,
      },
    }
  );
};

export const useCreateGiftAssessment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createGiftAssessmentClient,
    mutationKey: [SANITY_MUTATION_API_ENDPOINT, 'giftAssessment'],
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [SANITY_MUTATION_API_ENDPOINT, 'giftAssessment'],
      });
    },
  });
};
