import { Locale } from '@/data/i18n/utils';
import { localizedFields, Testimonial } from '@/data/types';
import { getLocalizedValue } from '../utils';
import { SanityQuery } from '../zeus-chain';

const getAllTestimoniesQuery = async () => {
  return await SanityQuery({
    allTestimonial: [
      {},
      {
        contact: {
          first_name: true,
          last_name: true,
        },
        position: true,
        main_point: localizedFields,
        statement: localizedFields,
        image: {
          asset: {
            url: true,
          },
        },
        image_alt: localizedFields,
      },
    ],
  }).then((d) => d.allTestimonial);
};

export const getAllTestimonies = async (locale: Locale): Promise<Testimonial[]> => {
  const testimonies = await getAllTestimoniesQuery();

  if (!testimonies) return [];

  return testimonies.slice(0, 11).map((testimony) => ({
    main_point: getLocalizedValue(testimony.main_point, locale) ?? '',
    statement: getLocalizedValue(testimony.statement, locale) ?? '',
    first_name: testimony.contact?.first_name ?? '',
    last_name: testimony.contact?.last_name ?? '',
    position: testimony.position ?? '',
    image: {
      src: testimony.image?.asset?.url ?? '',
      alt: getLocalizedValue(testimony.image_alt, locale) ?? '',
    },
  }));
};
