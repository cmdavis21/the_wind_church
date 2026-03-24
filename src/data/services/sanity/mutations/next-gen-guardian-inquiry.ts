import { FORM_TYPES, NEXT_GEN_GUARDIAN_KEY, NextGenGuardianInquiry } from '@/data/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { WEBSITE_URL } from '../../env.server';
import { SanityClient } from '../client';
import { createContactClient } from './contact-signup';

export const createNextGenGuardianInquiryClient = async (data: NextGenGuardianInquiry) => {
  try {
    const contactId = await createContactClient(data);

    const { first_name, last_name, email, phone, ...formData } = data;

    await SanityClient.create({
      _type: 'nextGenGuardianInquiry',
      contact: {
        _type: 'reference',
        _ref: contactId,
      },
      ...formData,
    });
  } catch (err: any) {
    console.error('### FAILED TO CREATE NEXT GEN GUARDIAN INQUIRY', err.message);
    throw new Error('Next Gen Guardian Inquiry creation failed');
  }
};

export const useCreateNextGenGuardianInquiry = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createNextGenGuardianInquiryClient,
    mutationKey: [NEXT_GEN_GUARDIAN_KEY],
    onSettled: async (d, e, variables) => {
      queryClient.invalidateQueries({
        queryKey: [NEXT_GEN_GUARDIAN_KEY],
      });
      await fetch('/api/form-submission', {
        method: 'POST',
        body: JSON.stringify({
          formType: FORM_TYPES.NEXT_GEN_GUARDIAN_INQUIRY,
          payload: {
            firstName: variables.first_name,
            lastName: `${variables.last_name.charAt(0)}.`,
            link: `${WEBSITE_URL}/studio/structure/forms;${FORM_TYPES.NEXT_GEN_GUARDIAN_INQUIRY}`,
          },
        }),
      });
    },
  });
};
