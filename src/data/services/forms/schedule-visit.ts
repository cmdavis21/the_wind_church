import { useMutation, useQueryClient } from "@tanstack/react-query";

import { HttpClient } from "../http-client";
import { API_ENDPOINTS } from "../../constants";
import { PlanYourVisit } from "../../types";

export const createScheduleVisitClient = async (data: PlanYourVisit) => {
  await HttpClient.post(API_ENDPOINTS.SCHEDULE_VISIT, data, {
    headers: { "Content-Type": "application/json" },
  });
};

export const useCreateScheduleVisit = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createScheduleVisitClient,
    mutationKey: [API_ENDPOINTS.SCHEDULE_VISIT],
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [API_ENDPOINTS.SCHEDULE_VISIT],
      });
    },
  });
};
