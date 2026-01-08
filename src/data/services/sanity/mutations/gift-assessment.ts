import { GIFT_ASSESSMENT_KEY, WEBSITE_BASE_URL } from '@/data/constants';
import { FORM_TYPES, GiftAssessmentSubmission } from '@/data/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SanityClient } from '../client';
import { createContactClient } from './contact-signup';

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
            link: `${WEBSITE_BASE_URL}/studio/structure/forms;${FORM_TYPES.GIFT_ASSESSMENT}`,
          },
        }),
      });
    },
  });
};
