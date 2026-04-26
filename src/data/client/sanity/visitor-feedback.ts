import { createVisitorFeedbackClient } from '@/data/server/sanity/mutations/visitor-feedback';
import { FORM_TYPES, VISITOR_FEEDBACK_KEY } from '@/data/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { WEBSITE_URL } from '../env.client';

export const useCreateVisitorFeedback = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createVisitorFeedbackClient,
    mutationKey: [VISITOR_FEEDBACK_KEY],
    onSettled: async (d, e, variables) => {
      queryClient.invalidateQueries({
        queryKey: [VISITOR_FEEDBACK_KEY],
      });
      await fetch('/api/form-submission', {
        method: 'POST',
        body: JSON.stringify({
          formType: FORM_TYPES.VISITOR_FEEDBACK,
          payload: {
            firstName: variables.first_name,
            lastName: `${variables.last_name.charAt(0)}.`,
            link: `${WEBSITE_URL}/studio/structure/forms;${FORM_TYPES.VISITOR_FEEDBACK}`,
          },
        }),
      });
    },
  });
};
