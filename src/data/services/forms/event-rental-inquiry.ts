import { useMutation, useQueryClient } from "@tanstack/react-query";

import { HttpClient } from "../http-client";
import { API_ENDPOINTS } from "../../constants";
import { EventRentalInquiry } from "../../types";

export const createEventRentalInquiryClient = async (
  data: EventRentalInquiry
) => {
  await HttpClient.post(API_ENDPOINTS.RENTAL_INQUIRY, data);
};

export const useCreateEventRentalInquiry = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createEventRentalInquiryClient,
    mutationKey: [API_ENDPOINTS.RENTAL_INQUIRY],
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [API_ENDPOINTS.RENTAL_INQUIRY],
      });
    },
  });
};
