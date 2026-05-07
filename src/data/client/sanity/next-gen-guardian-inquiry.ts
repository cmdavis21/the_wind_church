import { FORM_TYPES, NEXT_GEN_GUARDIAN_KEY, NextGenGuardianInquiry } from '@/data/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { WEBSITE_URL } from '../env.client';

export const useCreateNextGenGuardianInquiry = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: NextGenGuardianInquiry) => {
      const res = await fetch('/api/sanity/next-gen-guardian-inquiry', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error(`${NEXT_GEN_GUARDIAN_KEY} ERROR`);

      return res.json();
    },
    mutationKey: [NEXT_GEN_GUARDIAN_KEY],
    onSuccess: async (d, v) => {
      queryClient.invalidateQueries({ queryKey: [NEXT_GEN_GUARDIAN_KEY] });

      await fetch('/api/aws/email', {
        method: 'POST',
        body: JSON.stringify({
          formType: FORM_TYPES.NEXT_GEN_GUARDIAN_INQUIRY,
          payload: {
            firstName: v.first_name,
            lastName: `${v.last_name.charAt(0)}.`,
            link: `${WEBSITE_URL}/studio/structure/forms;${FORM_TYPES.NEXT_GEN_GUARDIAN_INQUIRY};${d._id}`,
          },
        }),
      });
    },
  });
};
