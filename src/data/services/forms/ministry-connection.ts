import { useMutation, useQueryClient } from "@tanstack/react-query";

import { HttpClient } from "../http-client";
import { API_ENDPOINTS } from "../../constants";
import { MinistryConnection } from "../../types";

export const createMinistryConnectionClient = async (
  data: MinistryConnection
) => {
  await HttpClient.post(API_ENDPOINTS.MINISTRY_CONNECTION, data, {
    headers: { "Content-Type": "application/json" },
  });
};

export const useCreateMinistryConnection = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createMinistryConnectionClient,
    mutationKey: [API_ENDPOINTS.MINISTRY_CONNECTION],
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [API_ENDPOINTS.MINISTRY_CONNECTION],
      });
    },
  });
};
