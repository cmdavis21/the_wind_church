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
        },
        categories: true,
        description: true,
        location: true,
        ministry_event: {
          name: true,
        },
        external_host: true,
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
      { where: { ministry_event: { name: { eq: name } } } },
      {
        _id: true,
        name: true,
        date: true,
        time: {
          hour: true,
          minute: true,
          time_of_day: true,
        },
        categories: true,
        description: true,
        location: true,
        ministry_event: {
          name: true,
        },
        external_host: true,
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
      },
      categories: (event.categories as string[]) ?? undefined,
      description: event.description ?? '',
      location: event.location ?? '',
      ministry_event: event.ministry_event?.name ?? undefined,
      external_host: event.external_host ?? undefined,
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

export const getMinistryEvents = async (name: string): Promise<Event[]> => {
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
      },
      categories: (event.categories as string[]) ?? undefined,
      description: event.description ?? '',
      location: event.location ?? '',
      ministry_event: event.ministry_event?.name ?? undefined,
      external_host: event.external_host ?? undefined,
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
