'use client';

import { useScrollShadows } from '@/data/client/use-scroll-shadows';
import cn from 'classnames';
import { Kbd } from 'flowbite-react';
import Image from 'next/image';
import { useId, useState } from 'react';

type LeaderCardProps = {
  first_name: string;
  last_name: string;
  position: string;
  description: string;
  image: string;
  video?: string;
  isActive?: boolean;
  onToggle?: () => void;
};

const LeaderCard: React.FC<LeaderCardProps> = ({
  first_name,
  last_name,
  position,
  description,
  image,
  video,
  isActive,
  onToggle,
}) => {
  useScrollShadows();
  const descId = useId();
  const [flipped, setFlipped] = useState(isActive ?? false);
  const selected = isActive ?? flipped;

  return (
    <div className="h-[400px] w-[300px] [perspective:1200px]">
      <button
        aria-controls={descId}
        aria-expanded={selected}
        aria-label={`${first_name} ${last_name}, ${position}. ${
          selected ? 'Currently showing bio, press to show photo' : 'Press to read bio'
        }`}
        onClick={() => (onToggle ? onToggle() : setFlipped((p) => !p))}
        className={cn(
          'group relative h-full w-full rounded-lg text-left shadow-lg',
          'transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d]',
          'motion-reduce:transition-none',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-primary focus-visible:outline-offset-2',
          selected && '[transform:rotateY(180deg)]'
        )}
      >
        {/* FRONT */}
        <div className="absolute inset-0 overflow-hidden rounded-lg border-[1.5px] border-light-gray dark:border-dark-gray dark:bg-dark-gray [backface-visibility:hidden]">
          {video ? (
            <video
              loop
              muted
              autoPlay
              playsInline
              preload="auto"
              poster={image}
              className="h-full w-full object-cover transition-transform duration-300 will-change-transform group-hover:scale-110"
            >
              <source src={video} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={image}
              width={300}
              height={400}
              alt={`Profile picture of ${first_name} ${last_name}`}
              className="h-full w-full object-cover transition-transform duration-300 will-change-transform group-hover:scale-110"
            />
          )}

          {/* BLUR */}
          <div
            className={cn(
              'backdrop-blur-sm',
              'pointer-events-none absolute inset-x-0 bottom-0 h-[60%]',
              '[mask-image:linear-gradient(to_top,black_0%,black_15%,rgba(0,0,0,0.8)_40%,transparent_100%)]',
              '[-webkit-mask-image:linear-gradient(to_top,black_0%,black_15%,rgba(0,0,0,0.8)_40%,transparent_100%)]'
            )}
          />

          {/* GRADIENT */}
          <div
            className={cn(
              'pointer-events-none absolute inset-0',
              'bg-gradient-to-t from-black/90 via-30% via-black/20 to-75% to-black/10'
            )}
          />

          <div className="absolute inset-0 flex flex-col justify-end p-5 pb-2 text-light-gray dark:bg-dark-gray">
            <h5 className="font-bold text-white">
              {first_name} {last_name}
            </h5>
            <h6 className="font-normal">{position}</h6>
            <p
              aria-hidden="true"
              className={cn(
                'peek line-clamp-2',
                'mt-0 max-h-0 opacity-0 translate-y-2 overflow-hidden overscroll-contain',
                'transition-all duration-300 ease-out motion-reduce:transition-none',
                '[.group:focus-visible_&]:mt-3 [.group:focus-visible_&]:max-h-16 [.group:focus-visible_&]:opacity-100 [.group:focus-visible_&]:translate-y-0'
              )}
            >
              {description}
            </p>
            <span
              className={cn(
                'text-xs uppercase tracking-wide text-brand-primary',
                'opacity-0 transition-opacity duration-300 motion-reduce:transition-none',
                '[.group:focus-visible_&]:opacity-100 [.group:focus-visible_&]:mb-5 [.group:focus-visible_&]:mt-3'
              )}
            >
              <Kbd>Enter</Kbd> to read full bio
            </span>
          </div>
        </div>

        {/* BACK */}
        <div
          id={descId}
          className="absolute inset-0 overflow-hidden rounded-lg border-[1.5px] border-light-gray dark:border-dark-gray bg-white dark:bg-dark-gray p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
              <Image
                width={48}
                height={48}
                src={image}
                alt={`Profile picture of ${first_name} ${last_name}`}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <h5 className="font-bold">
                {first_name} {last_name}
              </h5>
              <h6 className="font-normal">{position}</h6>
            </div>
          </div>

          <p className="mt-3 text-light-secondaryText dark:text-dark-primaryText overflow-y-auto scrollbar-hide max-h-[300px] y-scrollbox overscroll-contain">
            {description}
          </p>

          <span
            aria-hidden="true"
            className={cn(
              'text-xs uppercase tracking-wide text-light-secondaryText dark:text-dark-primaryText',
              'opacity-0 transition-opacity duration-300 motion-reduce:transition-none',
              '[.group:focus-visible_&]:opacity-100 [.group:focus-visible_&]:mt-3'
            )}
          >
            <Kbd>Enter</Kbd> to go back
          </span>
        </div>
      </button>
    </div>
  );
};

export default LeaderCard;
