import { FORM_TYPES, NEXT_GEN_GUARDIAN_KEY } from '@/data/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createNextGenGuardianInquiryClient } from '@/data/server/sanity/mutations/next-gen-guardian-inquiry';
import { WEBSITE_URL } from '../env.client';

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
