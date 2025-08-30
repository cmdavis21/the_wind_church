import { useQueryClient, useMutation } from "@tanstack/react-query";

import { HttpClient } from "../http-client";
import { API_ENDPOINTS } from "../../constants";
import { RightnowMediaSignup } from "../../types";

export const createRightnowMediaSignupClient = async (
  data: RightnowMediaSignup
) => {
  await HttpClient.post(API_ENDPOINTS.RIGHTNOW_MEDIA, data);
};

export const useCreateRightnowMediaSignup = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createRightnowMediaSignupClient,
    mutationKey: [API_ENDPOINTS.RIGHTNOW_MEDIA],
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [API_ENDPOINTS.RIGHTNOW_MEDIA],
      });
    },
  });
};
