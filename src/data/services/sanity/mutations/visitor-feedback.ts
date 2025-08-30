import { VisitorFeedback } from '@/data/types';
import { useQueryClient, useMutation } from '@tanstack/react-query';
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
    mutationKey: ['SANITY MUTATION CREATE VISITOR FEEDBACK'],
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['SANITY MUTATION CREATE VISTOR FEEDBACK'],
      });
    },
  });
};
