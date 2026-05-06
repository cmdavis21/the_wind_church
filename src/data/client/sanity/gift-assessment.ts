import { FORM_TYPES, GIFT_ASSESSMENT_KEY, GiftAssessmentSubmission } from '@/data/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { WEBSITE_URL } from '../env.client';

export const useCreateGiftAssessment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: GiftAssessmentSubmission) => {
      const res = await fetch('/api/sanity/gift-assessment', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error(`${GIFT_ASSESSMENT_KEY} ERROR`);

      return res.json();
    },
    mutationKey: [GIFT_ASSESSMENT_KEY],
    onSuccess: async (d, variables) => {
      queryClient.invalidateQueries({ queryKey: [GIFT_ASSESSMENT_KEY] });

      await fetch('/api/aws/email', {
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
