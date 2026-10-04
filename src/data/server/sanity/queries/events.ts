import { Event } from '../../../types';
import { SanityQuery } from '../zeus-chain';

const getAllEventsQuery = async () => {
  return await SanityQuery({
    allEvent: [
      {},
      {
        _id: true,
        name: true,
        date: true,
        time: {
          hour: true,
          minute: true,
          time_of_day: true,
          time_zone: true,
        },
        categories: true,
        description: true,
        location: {
          name: true,
          address: true,
          city: true,
          state: true,
          zip: true,
          sublocation: true,
        },
        associated_ministry: {
          name: true,
        },
        external_organizer: true,
        cost: true,
        how_to_signup: true,
        help_needed: true,
        additional_notes: true,
        image: {
          asset: {
            url: true,
            altText: true,
          },
        },
      },
    ],
  }).then((e) => e.allEvent);
};

const getMinistryEventsQuery = async (name: string) => {
  return await SanityQuery({
    allEvent: [
      { where: { associated_ministry: { name: { eq: name } } } },
      {
        _id: true,
        name: true,
        date: true,
        time: {
          hour: true,
          minute: true,
          time_of_day: true,
          time_zone: true,
        },
        categories: true,
        description: true,
        location: {
          name: true,
          address: true,
          city: true,
          state: true,
          zip: true,
          sublocation: true,
        },
        associated_ministry: {
          name: true,
        },
        external_organizer: true,
        cost: true,
        how_to_signup: true,
        help_needed: true,
        additional_notes: true,
        image: {
          asset: {
            url: true,
            altText: true,
          },
        },
      },
    ],
  }).then((e) => e.allEvent);
};

export const getAllEvents = async (): Promise<Event[]> => {
  const events = await getAllEventsQuery();

  if (!events) return [];

  return events
    .map((event) => ({
      _id: (event._id as string) ?? undefined,
      name: event.name ?? '',
      date: (event.date as Date) ?? new Date(),
      time: {
        hour: event.time?.hour ?? '',
        minute: event.time?.minute ?? '',
        time_of_day: event.time?.time_of_day ?? '',
        time_zone: event.time?.time_zone ?? '',
      },
      categories: (event.categories as string[]) ?? undefined,
      description: event.description ?? '',
      location: {
        name: event.location?.name ?? '',
        address: event.location?.address ?? '',
        city: event.location?.city ?? '',
        state: event.location?.state ?? '',
        zip: event.location?.zip ?? '',
        sublocation: event.location?.sublocation ?? undefined,
      },
      associated_ministry: event.associated_ministry?.name ?? undefined,
      external_organizer: event.external_organizer ?? undefined,
      cost: event.cost ?? undefined,
      how_to_signup: event.how_to_signup ?? undefined,
      help_needed: (event.help_needed as string[]) ?? undefined,
      additonal_notes: event.additional_notes ?? undefined,
      image: {
        src: event.image?.asset?.url ?? '',
        alt: event.image?.asset?.altText ?? '',
      },
    }))
    .sort((a, b) => new Date(a.date!).getTime() - new Date(b.date!).getTime());
};

export const getMinistryEvents = async (name?: string): Promise<Event[]> => {
  if (!name) return [];

  const events = await getMinistryEventsQuery(name);

  if (!events) return [];

  return events
    .map((event) => ({
      _id: (event._id as string) ?? undefined,
      name: event.name ?? '',
      date: (event.date as Date) ?? new Date(),
      time: {
        hour: event.time?.hour ?? '',
        minute: event.time?.minute ?? '',
        time_of_day: event.time?.time_of_day ?? '',
        time_zone: event.time?.time_zone ?? '',
      },
      categories: (event.categories as string[]) ?? undefined,
      description: event.description ?? '',
      location: {
        name: event.location?.name ?? '',
        address: event.location?.address ?? '',
        city: event.location?.city ?? '',
        state: event.location?.state ?? '',
        zip: event.location?.zip ?? '',
        sublocation: event.location?.sublocation ?? undefined,
      },
      associated_ministry: event.associated_ministry?.name ?? undefined,
      external_organizer: event.external_organizer ?? undefined,
      cost: event.cost ?? undefined,
      how_to_signup: event.how_to_signup ?? undefined,
      help_needed: (event.help_needed as string[]) ?? undefined,
      additonal_notes: event.additional_notes ?? undefined,
      image: {
        src: event.image?.asset?.url ?? '',
        alt: event.image?.asset?.altText ?? '',
      },
    }))
    .sort((a, b) => new Date(a.date!).getTime() - new Date(b.date!).getTime());
};
