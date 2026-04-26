import { createContactClient } from '@/data/server/sanity/mutations/contact-signup';
import { CONTACT_SIGNUP_KEY } from '@/data/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateContactSignup = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createContactClient,
    mutationKey: [CONTACT_SIGNUP_KEY],
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [CONTACT_SIGNUP_KEY],
      });
    },
  });
};
