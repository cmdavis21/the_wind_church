import { PlanYourVisit } from '@/data/types';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { SanityClient } from '../client';
import { createContactClient } from './contact-signup';

export const createScheduleVisitClient = async (data: PlanYourVisit) => {
  try {
    const contactId = await createContactClient(data);

    const { first_name, last_name, email, phone, ...formData } = data;

    await SanityClient.create({
      _type: 'scheduledVisit',
      contact: {
        _type: 'reference',
        _ref: contactId,
      },
      ...formData,
    });
  } catch (err: any) {
    console.error('### FAILED TO CREATE SCHEDULE VISIT', err.message);
    throw new Error('Schedule Visit creation failed');
  }
};

export const useCreateScheduleVisit = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createScheduleVisitClient,
    mutationKey: ['SANITY MUTATION CREATE SCHEDULE VISIT'],
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['SANITY MUTATION CREATE SCHEDULE VISIT'],
      });
    },
  });
};
