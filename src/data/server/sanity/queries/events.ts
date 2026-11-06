import { Locale } from '@/data/i18n/utils';
import { Event, localizedFields } from '../../../types';
import { getLocalizedValue } from '../utils';
import { SanityQuery } from '../zeus-chain';

const getAllEventsQuery = async () => {
  return await SanityQuery({
    allEvent: [
      {},
      {
        _id: true,
        name: localizedFields,
        start_date_time: true,
        end_date_time: true,
        categories: true,
        description: localizedFields,
        location: {
          name: true,
          address: true,
          city: true,
          state: true,
          zip: true,
          sublocation: true,
        },
        associated_ministry: {
          name: localizedFields,
        },
        external_organizer: true,
        cost: localizedFields,
        how_to_signup: localizedFields,
        help_needed: localizedFields,
        additional_notes: localizedFields,
        image: {
          asset: {
            url: true,
          },
        },
        image_alt: localizedFields,
      },
    ],
  }).then((e) => e.allEvent);
};

const getMinistryEventsQuery = async (_id: string) => {
  return await SanityQuery({
    allEvent: [
      { where: { associated_ministry: { _id: { eq: _id } } } },
      {
        _id: true,
        name: localizedFields,
        start_date_time: true,
        end_date_time: true,
        categories: true,
        description: localizedFields,
        location: {
          name: true,
          address: true,
          city: true,
          state: true,
          zip: true,
          sublocation: true,
        },
        associated_ministry: {
          name: localizedFields,
        },
        external_organizer: true,
        cost: localizedFields,
        how_to_signup: localizedFields,
        help_needed: localizedFields,
        additional_notes: localizedFields,
        image: {
          asset: {
            url: true,
          },
        },
        image_alt: localizedFields,
      },
    ],
  }).then((e) => e.allEvent);
};

export const getAllEvents = async (locale: Locale): Promise<Event[]> => {
  const events = await getAllEventsQuery();

  if (!events) return [];

  return events
    .map((event) => ({
      _id: (event._id as string) ?? undefined,
      name: getLocalizedValue(event.name, locale) ?? '',
      start_date_time: event.start_date_time as Date,
      end_date_time: event.end_date_time ? (event?.end_date_time as Date) : undefined,
      categories: (event.categories as string[]) ?? undefined,
      description: getLocalizedValue(event.description, locale) ?? '',
      location: {
        name: event.location?.name ?? '',
        address: event.location?.address ?? '',
        city: event.location?.city ?? '',
        state: event.location?.state ?? '',
        zip: event.location?.zip ?? '',
        sublocation: event.location?.sublocation ?? undefined,
      },
      associated_ministry: event.associated_ministry
        ? getLocalizedValue(event.associated_ministry?.name, locale)
        : undefined,
      external_organizer: event.external_organizer ?? undefined,
      cost: getLocalizedValue(event.cost, locale) ?? undefined,
      how_to_signup: getLocalizedValue(event.how_to_signup, locale) ?? undefined,
      help_needed: event.help_needed?.length
        ? event.help_needed.map((item) => getLocalizedValue(item, locale) ?? '')
        : undefined,
      additonal_notes: getLocalizedValue(event.additional_notes, locale) ?? undefined,
      image: {
        src: event.image?.asset?.url ?? '',
        alt: getLocalizedValue(event.image_alt, locale) ?? '',
      },
    }))
    .sort((a, b) => new Date(a.start_date_time).getTime() - new Date(b.start_date_time!).getTime());
};

export const getMinistryEvents = async (locale: Locale, _id?: string): Promise<Event[]> => {
  if (!_id) return [];

  const events = await getMinistryEventsQuery(_id);

  if (!events) return [];

  return events
    .filter((event) => event !== undefined)
    .map((event) => ({
      _id: (event._id as string) ?? undefined,
      name: getLocalizedValue(event.name, locale) ?? '',
      start_date_time: event.start_date_time as Date,
      end_date_time: event.end_date_time ? (event?.end_date_time as Date) : undefined,
      categories: (event.categories as string[]) ?? undefined,
      description: getLocalizedValue(event.description, locale) ?? '',
      location: {
        name: event.location?.name ?? '',
        address: event.location?.address ?? '',
        city: event.location?.city ?? '',
        state: event.location?.state ?? '',
        zip: event.location?.zip ?? '',
        sublocation: event.location?.sublocation ?? undefined,
      },
      associated_ministry: getLocalizedValue(event.associated_ministry?.name, locale) ?? undefined,
      external_organizer: event.external_organizer ?? undefined,
      cost: getLocalizedValue(event.cost, locale) ?? undefined,
      how_to_signup: getLocalizedValue(event.how_to_signup, locale) ?? undefined,
      help_needed: event.help_needed?.length
        ? event.help_needed.map((item) => getLocalizedValue(item, locale) ?? '')
        : undefined,
      additonal_notes: getLocalizedValue(event.additional_notes, locale) ?? undefined,
      image: {
        src: event?.image?.asset?.url ?? '',
        alt: getLocalizedValue(event?.image_alt, locale) ?? '',
      },
    }))
    .sort(
      (a, b) => new Date(a.start_date_time!).getTime() - new Date(b.start_date_time!).getTime()
    );
};
