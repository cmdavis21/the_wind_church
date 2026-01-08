import { SCHEDULE_VISIT_KEY, WEBSITE_BASE_URL } from '@/data/constants';
import { FORM_TYPES, PlanYourVisit } from '@/data/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
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
    mutationKey: [SCHEDULE_VISIT_KEY],
    onSettled: async (d, e, variables) => {
      queryClient.invalidateQueries({
        queryKey: [SCHEDULE_VISIT_KEY],
      });
      await fetch('/api/form-submission', {
        method: 'POST',
        body: JSON.stringify({
          formType: FORM_TYPES.PLAN_YOUR_VISIT,
          payload: {
            firstName: variables.first_name,
            lastName: `${variables.last_name.charAt(0)}.`,
            link: `${WEBSITE_BASE_URL}/studio/structure/forms;${FORM_TYPES.PLAN_YOUR_VISIT}`,
          },
        }),
      });
    },
  });
};
