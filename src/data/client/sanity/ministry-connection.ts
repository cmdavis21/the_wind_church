import { createMinistryConnectionClient } from '@/data/server/sanity/mutations/ministry-connection';
import { FORM_TYPES, MINISTRY_CONNECT_KEY } from '@/data/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { WEBSITE_URL } from '../env.client';

export const useCreateMinistryConnection = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createMinistryConnectionClient,
    mutationKey: [MINISTRY_CONNECT_KEY],
    onSettled: async (d, e, variables) => {
      queryClient.invalidateQueries({
        queryKey: [MINISTRY_CONNECT_KEY],
      });
      await fetch('/api/form-submission', {
        method: 'POST',
        body: JSON.stringify({
          formType: FORM_TYPES.MINISTRY_CONNECTION,
          payload: {
            firstName: variables.first_name,
            lastName: `${variables.last_name.charAt(0)}.`,
            link: `${WEBSITE_URL}/studio/structure/forms;${FORM_TYPES.MINISTRY_CONNECTION}`,
          },
        }),
      });
    },
  });
};
