import UpArrow from '@/components/icons/up-arrow';
import cn from 'classnames';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

type Span = 1 | 2 | 3;

const SPAN_CLASSES: Record<Span, string> = {
  1: 'lg:col-span-1',
  2: 'sm:col-span-2 lg:col-span-2',
  3: 'sm:col-span-2 lg:col-span-3',
};

export interface MasonryGridProps {
  items: {
    image: { src: string; alt?: string };
    title: string;
    description: string;
    href: string;
    span?: Span;
  }[];
}

const MasonryGrid = async ({ items }: MasonryGridProps) => {
  const t = await getTranslations('FormCommon');

  return (
    <ul
      className={cn(
        'grid list-none grid-cols-1 items-start gap-x-5 gap-y-5 sm:grid-cols-2 lg:grid-cols-3'
      )}
    >
      {items.map((item) => (
        <li
          key={`masonry-grid-${item.title}`}
          className={cn('min-w-0', SPAN_CLASSES[item.span ?? 1])}
        >
          <Link href={item.href}>
            <article className="relative rounded-lg h-[350px] lg:h-[450px] cursor-pointer group overflow-hidden">
              <Image
                fill
                src={item.image.src}
                alt={item.image.alt ?? ''}
                className="pointer-events-none object-cover rounded-lg group-hover:scale-110 transition-all duration-300"
              />

              {/* Color Gradient Overlay */}
              <div className="absolute w-full h-full rounded-lg bg-gradient-to-b from-black/60 via-30% to-black/20 to-90%" />

              <div className="relative w-full h-full rounded-lg flex flex-col justify-between px-lg py-xl text-white dark:text-dark-primaryText">
                <div className="flex justify-between gap-5">
                  <div className="flex flex-col items-start gap-xs">
                    <h3 className="font-bold text-left group-hover:text-brand-light transition-colors duration-300">
                      {item.title}
                    </h3>
                    <h5 className="text-left">{item.description}</h5>
                  </div>
                  <div className="group-hover:bg-brand-primary/50 rounded-full size-12 min-w-12 flex items-center justify-center delay-75 transition-colors duration-200">
                    <UpArrow className="size-[30px] fill-white rotate-45 group-hover:rotate-90 transition-all duration-300" />
                  </div>
                </div>
                <div className="w-fit">
                  <h5 className="font-bold text-left">{t('learn')}</h5>
                  <div className="w-0 group-hover:w-[99%] h-[2px] transition-[width] duration-300 bg-brand-primary rounded-full" />
                </div>
              </div>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MasonryGrid;
