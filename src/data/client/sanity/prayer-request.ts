import { FORM_TYPES, PRAYER_REQUEST_KEY, PrayerRequest } from '@/data/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { WEBSITE_URL } from '../env.client';

export const useCreatePrayerRequest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: PrayerRequest) => {
      const res = await fetch('/api/sanity/prayer-request', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error(`${PRAYER_REQUEST_KEY} ERROR`);

      return res.json();
    },
    mutationKey: [PRAYER_REQUEST_KEY],
    onSuccess: async (d, v) => {
      queryClient.invalidateQueries({ queryKey: [PRAYER_REQUEST_KEY] });

      await fetch('/api/aws/email', {
        method: 'POST',
        body: JSON.stringify({
          formType: FORM_TYPES.PRAYER_REQUEST,
          payload: {
            firstName: v.first_name,
            lastName: `${v.last_name.charAt(0)}.`,
            link: `${WEBSITE_URL}/studio/structure/forms;${FORM_TYPES.PRAYER_REQUEST};${d._id}`,
          },
        }),
      });
    },
  });
};
