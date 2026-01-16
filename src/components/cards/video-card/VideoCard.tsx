import UpArrow from '@/components/icons/up-arrow';
import { formatDateMMMddyyyy } from '@/data/format-date';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface VideoCardProps {
  poster: string;
  title: string;
  date: string;
  link: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ poster, title, date, link }) => (
  <Link href={link} target="_blank">
    <button type="button" className="group w-full max-w-[350px] flex flex-col p-xs cursor-pointer">
      <div className="relative w-full aspect-video">
        <Image
          fill
          alt={title}
          src={poster}
          className="object-cover pointer-events-none rounded-md group-hover:scale-105 transition-all duration-300"
        />
        <div className="group-hover:bg-brand-primary/50 rounded-full size-8 min-w-8 absolute top-2 right-2 flex items-center justify-center transition-colors duration-200">
          <UpArrow className="size-[18px] fill-white rotate-45 group-hover:rotate-90 transition-all duration-300" />
        </div>
      </div>
      <div className="pt-sm text-left">
        <h6 className="text-light-navy dark:text-dark-navy">{formatDateMMMddyyyy(date)}</h6>
        <h5 dangerouslySetInnerHTML={{ __html: title }} />
      </div>
    </button>
  </Link>
);

export default VideoCard;
