import { useMutation, useQueryClient } from '@tanstack/react-query';

import { HttpClient } from '../http-client';

import { GiftAssessmentSubmission } from '../../types';

export const createGiftAssessmentClient = async (data: GiftAssessmentSubmission) => {
  await HttpClient.post('', data);
};

export const useCreateGiftAssessment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createGiftAssessmentClient,
    mutationKey: [''],
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [''],
      });
    },
  });
};
