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
    <button
      type="button"
      className="group min-w-[200px] max-w-[350px] w-full rounded-lg hover:shadow-md p-xs hover:cursor-pointer"
    >
      <div className="relative w-full aspect-video">
        <Image
          fill
          alt={title}
          src={poster}
          className="object-cover pointer-events-none rounded-md group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className="pt-sm text-left">
        <div dangerouslySetInnerHTML={{ __html: title }} className="font-semibold text-lg" />
        <p>{formatDateMMMddyyyy(date)}</p>
      </div>
    </button>
  </Link>
);

export default VideoCard;
