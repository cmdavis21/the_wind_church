import { FORM_TYPES, VISITOR_FEEDBACK_KEY, VisitorFeedback } from '@/data/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { WEBSITE_URL } from '../env.client';

export const useCreateVisitorFeedback = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: VisitorFeedback) => {
      const res = await fetch('/api/sanity/visitor-feedback', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error(`${VISITOR_FEEDBACK_KEY} ERROR`);

      return res.json();
    },
    mutationKey: [VISITOR_FEEDBACK_KEY],
    onSuccess: async (d, variables) => {
      queryClient.invalidateQueries({ queryKey: [VISITOR_FEEDBACK_KEY] });

      await fetch('/api/aws/email', {
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
