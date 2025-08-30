import { useMutation, useQueryClient } from "@tanstack/react-query";

import { VisitorFeedback } from "@/data/types";

import { HttpClient } from "../http-client";
import { API_ENDPOINTS } from "../../constants";


export const createVisitorFeedbackClient = async (data: VisitorFeedback) => {
  await HttpClient.post(API_ENDPOINTS.VISITOR_FEEDBACK, data);
};

export const useCreateVisitorFeedback = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createVisitorFeedbackClient,
    mutationKey: [API_ENDPOINTS.VISITOR_FEEDBACK],
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [API_ENDPOINTS.VISITOR_FEEDBACK],
      });
    },
  });
};
