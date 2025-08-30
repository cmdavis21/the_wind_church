import { useQueryClient, useMutation } from "@tanstack/react-query";


import { PrayerRequest } from "@/data/types";
import { API_ENDPOINTS } from "@/data/constants";

import { HttpClient } from "../http-client";

export const createPrayerRequestClient = async (data: PrayerRequest) => {
  return HttpClient.post(API_ENDPOINTS.PRAYER_REQUESTS, data);
};

export const useCreatePrayerRequest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createPrayerRequestClient,
    mutationKey: ["Prayer Request Submission"],
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["Prayer Request Submission"],
      });
    },
  });
};
