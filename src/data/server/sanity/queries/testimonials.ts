import { Testimonial } from '@/data/types';
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
        main_point: true,
        statement: true,
        image: {
          asset: {
            url: true,
            altText: true,
          },
        },
      },
    ],
  }).then((d) => d.allTestimonial);
};

export const getAllTestimonies = async (): Promise<Testimonial[]> => {
  const testimonies = await getAllTestimoniesQuery();

  if (testimonies) {
    return testimonies.slice(0, 11).map((testimony) => ({
      main_point: testimony.main_point ?? '',
      statement: testimony.statement ?? '',
      first_name: testimony.contact?.first_name ?? '',
      last_name: testimony.contact?.last_name ?? '',
      position: testimony.position ?? '',
      image: {
        src: testimony.image?.asset?.url ?? '',
        alt: testimony.image?.asset?.altText ?? '',
      },
    }));
  }

  return [];
};
