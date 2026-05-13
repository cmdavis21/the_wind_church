'use client';

import { useScrollShadows } from '@/data/client/use-scroll-shadows';
import cn from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

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
  const [expand, setExapnd] = useState(isActive ?? false);
  const selected = isActive ?? expand;

  return (
    <div className="h-[450px] w-[300px]">
      <button
        onClick={() => {
          if (onToggle) return onToggle();
          setExapnd((p) => !p);
        }}
        className={cn(
          selected ? 'border-light-gray dark:border-dark-gray' : 'border-transparent',
          'relative h-[450px] w-[300px] overflow-hidden rounded-lg border dark:bg-dark-gray shadow-lg text-left group'
        )}
      >
        {/* MEDIA */}
        <div
          className={cn(
            selected
              ? 'top-6 right-6 h-10 w-10 rounded-full'
              : 'top-0 right-0 h-full w-full rounded-lg',
            'absolute overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]'
          )}
        >
          {video ? (
            <video
              loop
              muted
              autoPlay
              playsInline
              poster={image}
              className="h-full w-full object-cover transition-transform duration-300 will-change-transform group-hover:scale-110"
            >
              <source src={video} type="video/mp4" />
            </video>
          ) : (
            <Image
              width={300}
              height={450}
              src={image}
              alt={first_name}
              className="h-full w-full object-cover transition-transform duration-300 will-change-transform group-hover:scale-110"
            />
          )}
        </div>

        {/* OVERLAY */}
        <div
          className={cn(
            'absolute inset-0 transition-all duration-700',
            selected
              ? 'bg-white/5'
              : 'bg-gradient-to-t from-light-bg dark:from-dark-bg via-light-bg/10 dark:via-dark-bg/10 via-50%'
          )}
        />

        {/* CONTENT */}
        <div
          className={cn(
            selected ? 'top-7' : 'top-[285px]',
            'absolute left-6 right-6 bottom-6 flex flex-col transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]'
          )}
        >
          <div className="">
            <h4 className={selected ? 'line-clamp-none mr-[45px]' : 'line-clamp-1'}>
              {first_name} {last_name}
            </h4>
            <h5
              className={cn('font-bold', selected ? 'line-clamp-none mr-[45px]' : 'line-clamp-1')}
            >
              {position}
            </h5>
          </div>
          <div className="w-[45px] h-[2px] bg-brand-primary rounded-full mt-4" />
          <p
            className={cn(
              'text-light-secondaryText dark:text-dark-primaryText body-large flex-1',
              selected ? 'line-clamp-none scrollbar-hide y-scrollbox' : 'line-clamp-2 mt-4'
            )}
          >
            {description}
          </p>
        </div>
      </button>
    </div>
  );
};

export default LeaderCard;
