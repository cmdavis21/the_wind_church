import { createGiftAssessmentClient } from '@/data/server/sanity/mutations/gift-assessment';
import { FORM_TYPES, GIFT_ASSESSMENT_KEY } from '@/data/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { WEBSITE_URL } from '../env.client';

export const useCreateGiftAssessment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createGiftAssessmentClient,
    mutationKey: [GIFT_ASSESSMENT_KEY],
    onSettled: async (d, e, variables) => {
      queryClient.invalidateQueries({
        queryKey: [GIFT_ASSESSMENT_KEY],
      });
      await fetch('/api/form-submission', {
        method: 'POST',
        body: JSON.stringify({
          formType: FORM_TYPES.GIFT_ASSESSMENT,
          payload: {
            firstName: variables.first_name,
            lastName: `${variables.last_name.charAt(0)}.`,
            link: `${WEBSITE_URL}/studio/structure/forms;${FORM_TYPES.GIFT_ASSESSMENT}`,
          },
        }),
      });
    },
  });
};
