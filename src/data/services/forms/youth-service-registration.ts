import { useMutation, useQueryClient } from "@tanstack/react-query";

import { HttpClient } from "../http-client";
import { API_ENDPOINTS } from "../../constants";
import { YouthRegistrationInquiry } from "../../types";

export const youthServiceRegistrationClient = async (
  data: YouthRegistrationInquiry[]
) => {
  await HttpClient.post(API_ENDPOINTS.YOUTH_SERVICE_REGISTRATION, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const useYouthServiceRegistration = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: youthServiceRegistrationClient,
    mutationKey: [API_ENDPOINTS.YOUTH_SERVICE_REGISTRATION],
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [API_ENDPOINTS.YOUTH_SERVICE_REGISTRATION],
      });
    },
  });
};
