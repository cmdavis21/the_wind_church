import { isAfter } from 'date-fns';
import { portableTextToString } from '../utils';
import { SanityQuery } from '../zeus-chain';
import { Event } from '../../../types';

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
        contact: {
          contact: {
            first_name: true,
            last_name: true,
          },
          position: true,
        },
        cost: true,
        how_to_signup: true,
        help_needed: true,
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

export const getAllEvents = async ({
  latestEvents,
  hostName,
}: {
  latestEvents?: boolean;
  hostName?: string;
} = {}): Promise<Event[]> => {
  const events = await getAllEventsQuery();

  if (events) {
    let newEvents: Event[] = [];

    const normalizedEvents = events.map((event) => ({
      _id: (event._id as string) ?? undefined,
      name: event.name ?? '',
      date: (event.date as Date) ?? new Date(),
      time: {
        hour: event.time?.hour ?? '',
        minute: event.time?.minute ?? '',
        time_of_day: event.time?.time_of_day ?? '',
      },
      categories: (event.categories as string[]) ?? undefined,
      description: portableTextToString(event.description as any) ?? undefined,
      location: event.location ?? '',
      ministry_event: event.ministry_event?.name ?? undefined,
      external_host: event.external_host ?? undefined,
      contact: event.contact
        ? {
            first_name: event.contact?.contact?.first_name ?? '',
            last_name: event.contact?.contact?.last_name ?? '',
            position: event.contact?.position ?? '',
          }
        : undefined,
      cost: event.cost ?? undefined,
      how_to_signup: event.how_to_signup ?? undefined,
      help_needed: (event.help_needed as string[]) ?? undefined,
      image: {
        src: event.image?.asset?.url ?? '',
        alt: event.image?.asset?.altText ?? '',
      },
    }));

    if (hostName) {
      newEvents = normalizedEvents.filter((event) => {
        const host = hostName.toLowerCase();
        const ministryName = event.ministry_event?.toLowerCase();
        const externalHost = event.external_host?.toLowerCase();

        return host === ministryName || host === externalHost;
      });
    }

    if (latestEvents) {
      newEvents = normalizedEvents.filter((a) => isAfter(a.date!, Date.now())).slice(0, 3);
    }

    return newEvents.sort((a, b) => new Date(a.date!).getTime() - new Date(b.date!).getTime());
  }

  return [];
};
