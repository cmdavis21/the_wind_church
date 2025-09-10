import { useMutation, useQueryClient } from '@tanstack/react-query';
import { GiftAssessmentSubmission } from '@/data/types';
import { SanityClient } from '../client';
import { createContactClient } from './contact-signup';
import { GIFT_ASSESSMENT_KEY } from '@/data/constants';

export const createGiftAssessmentClient = async (data: GiftAssessmentSubmission) => {
  try {
    const contactId = await createContactClient(data);

    const { first_name, last_name, email, phone, ...formData } = data;

    await SanityClient.create({
      _type: 'giftAssessment',
      contact: {
        _type: 'reference',
        _ref: contactId,
      },
      ...formData,
    });
  } catch (err: any) {
    console.error('### FAILED TO CREATE GIFT ASSESSMENT', err.message);
    throw new Error('Gift Assessment creation failed');
  }
};

export const useCreateGiftAssessment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createGiftAssessmentClient,
    mutationKey: [GIFT_ASSESSMENT_KEY],
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [GIFT_ASSESSMENT_KEY],
      });
    },
  });
};
