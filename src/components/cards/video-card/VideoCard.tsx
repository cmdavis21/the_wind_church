import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { formatDateMMMddyyyy } from '@/data/format-date';

interface VideoCardProps {
  poster: string;
  title: string;
  date: string;
  link: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ poster, title, date, link }) => (
  <Link href={link} target="_blank">
    <button
      type="button"
      className="min-w-[200px] max-w-[500px] w-full rounded-lg hover:scale-105 hover:shadow-md hover:cursor-pointer transition-scale duration-300"
    >
      <div className="relative w-full aspect-video">
        <Image
          fill
          alt={title}
          src={poster}
          className="object-cover pointer-events-none rounded-lg"
        />
      </div>
      <div className="p-md space-y-sm text-left">
        <h4 className="leading-none">{title}</h4>
        <p className="font-bold">{formatDateMMMddyyyy(date)}</p>
      </div>
    </button>
  </Link>
);

export default VideoCard;
