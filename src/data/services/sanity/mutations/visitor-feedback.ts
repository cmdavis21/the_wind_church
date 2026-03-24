import { FORM_TYPES, VISITOR_FEEDBACK_KEY, VisitorFeedback } from '@/data/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { WEBSITE_URL } from '../../env.server';
import { SanityClient } from '../client';
import { createContactClient } from './contact-signup';

export const createVisitorFeedbackClient = async (data: VisitorFeedback) => {
  try {
    const contactId = await createContactClient(data);

    const { first_name, last_name, email, phone, ...formData } = data;

    await SanityClient.create({
      _type: 'visitorFeedback',
      contact: {
        _type: 'reference',
        _ref: contactId,
      },
      ...formData,
    });
  } catch (err: any) {
    console.error('### FAILED TO CREATE VISITOR FEEDBACK', err.message);
    throw new Error('Visitor Feedback creation failed');
  }
};

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
