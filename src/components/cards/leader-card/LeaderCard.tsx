'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

import CornerButton from '@/components/buttons/corner-button/CornerButton';

interface LeaderCardProps {
  first_name: string;
  last_name: string;
  position: string;
  description: string;
  roles: string[];
  image: string;
  video?: string;
}

const LeaderCard: React.FC<LeaderCardProps> = ({
  first_name,
  last_name,
  position,
  description,
  roles,
  image,
  video,
}) => {
  const [open, setOpen] = useState(false);
  const card = useRef<HTMLDivElement | null>(null);
  const videoCard = useRef<HTMLVideoElement | null>(null);
  const playVideo = () => {
    if (videoCard.current) videoCard.current.play();
  };
  const pauseVideo = () => {
    if (videoCard.current) {
      videoCard.current.pause();
      videoCard.current.currentTime = 0;
    }
  };

  useEffect(() => {
    if (card.current) {
      if (video && video !== '') {
        card.current.addEventListener('mouseenter', playVideo);
      }
      card.current.addEventListener('mouseleave', pauseVideo);
    }
  }, [video]);

  return (
    <div
      ref={card}
      className="relative overflow-hidden w-full aspect-[3/4] min-w-[200px] max-w-[400px] border border-gray dark:border-grayDark rounded-lg"
    >
      {/* video */}
      {video ? (
        <button onClick={() => setOpen(!open)} className="group w-full h-full hover:cursor-pointer">
          <video
            loop
            muted
            playsInline
            ref={videoCard}
            poster={image}
            data-testid="leader-video"
            className="w-full h-full object-cover rounded-lg grayscale group-hover:grayscale-0 group-hover:bg-gradient-to-t from-primary/80 transition-all duration-500"
          >
            <source src={video} type="video/mp4" />
          </video>
        </button>
      ) : (
        <Image
          fill
          src={image}
          alt={`profile image of ${first_name} ${last_name}, ${position}`}
          className="w-full h-full object-cover rounded-lg grayscale group-hover:grayscale-0 group-hover:bg-gradient-to-t from-primary/80 transition-all duration-500"
        />
      )}

      {/* content box */}
      <div
        style={{
          height: open ? `${card.current?.offsetHeight}px` : '0px',
        }}
        className={`${
          open
            ? 'bg-white dark:bg-grayDark overflow-scroll'
            : 'opacity-0 pointer-events-none overflow-hiden'
        } transition-[height, opacity] duration-500 absolute top-0 left-0 rounded-lg scrollbar-hide`}
      >
        <div className="relative w-full h-full flex flex-col gap-xs p-md text-charcoal dark:text-textInverse scrollbar-hide">
          <CornerButton onClick={setOpen} className="absolute z-10 right-0 top-0" />
          <h4 className="text-black dark:text-primaryDark">
            {first_name} {last_name}
          </h4>
          <h5>{position}</h5>
          {roles && roles.length > 0 && (
            <div className="italic font-light">
              Other roles: {roles.map((r, idx) => (idx >= roles.length - 1 ? r : `${r}, `))}
            </div>
          )}
          <div className="w-[45px] h-[2px] bg-primary rounded-xs mb-2" />
          <div className="max-h-full overflow-y-scroll scrollbar-hide overscroll-contain y-scrollbox">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderCard;
