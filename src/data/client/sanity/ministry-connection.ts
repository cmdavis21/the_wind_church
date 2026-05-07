import { FORM_TYPES, MINISTRY_CONNECT_KEY, MinistryConnection } from '@/data/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { WEBSITE_URL } from '../env.client';

export const useCreateMinistryConnection = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: MinistryConnection) => {
      const res = await fetch('/api/sanity/ministry-connection', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error(`${MINISTRY_CONNECT_KEY} ERROR`);

      return res.json();
    },
    mutationKey: [MINISTRY_CONNECT_KEY],
    onSuccess: async (d, v) => {
      queryClient.invalidateQueries({ queryKey: [MINISTRY_CONNECT_KEY] });

      await fetch('/api/aws/email', {
        method: 'POST',
        body: JSON.stringify({
          formType: FORM_TYPES.MINISTRY_CONNECTION,
          payload: {
            firstName: v.first_name,
            lastName: `${v.last_name.charAt(0)}.`,
            link: `${WEBSITE_URL}/studio/structure/forms;${FORM_TYPES.MINISTRY_CONNECTION};${d._id}`,
          },
        }),
      });
    },
  });
};
