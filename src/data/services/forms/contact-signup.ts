import { useQueryClient, useMutation } from "@tanstack/react-query";


import { API_ENDPOINTS } from "@/data/constants";
import { FullContact } from "@/data/types";

import { HttpClient } from "../http-client";

export const createContactSignupClient = async (data: FullContact) => {
  await HttpClient.post(API_ENDPOINTS.CONTACT_SIGNUP, data);
};

export const useCreateContactSignup = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createContactSignupClient,
    mutationKey: [API_ENDPOINTS.CONTACT_SIGNUP],
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [API_ENDPOINTS.CONTACT_SIGNUP],
      });
    },
  });
};
