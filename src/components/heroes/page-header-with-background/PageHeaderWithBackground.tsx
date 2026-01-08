import Image from 'next/image';
import React from 'react';

interface PageHeaderWithBackgroundProps {
  media: {
    src: string;
    alt: string;
    poster: string;
  };
  title: string;
  subtitle?: string;
  short?: boolean;
}

const PageHeaderWithBackground: React.FC<PageHeaderWithBackgroundProps> = ({
  media,
  title,
  subtitle,
  short,
}) => (
  // <div
  //   className={`relative ${
  //     short ? 'h-[45vh]' : 'h-[65vh]'
  //   } rounded-xl overflow-hidden pointer-events-none`}
  // >
  //   {findMediaType(media.src) === MediaType.IMAGE ? (
  //     <div className="relative w-full h-full">
  //       <Image
  //         src={media.src}
  //         alt={media.alt}
  //         fill
  //         className="object-cover object-center rounded-xl"
  //       />
  //     </div>
  //   ) : (
  //     <video
  //       loop
  //       muted
  //       autoPlay
  //       playsInline
  //       src={media.src}
  //       poster={media.poster}
  //       className="rounded-xl"
  //     ></video>
  //   )}

  //   {/* color overlay */}
  //   <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 rounded-xl" />
  //   <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 rounded-xl" />

  //   <div className="absolute bottom-[10%] w-full px-padding">
  //     <div className="w-full 2xl:max-w-[70%] text-white">
  //       <div className={`font-display text-[36px] md:text-[75px] leading-snug`}>{title}</div>
  //       {subtitle && <h3>{subtitle}</h3>}
  //     </div>
  //   </div>
  // </div>
  <div
    className={`
    relative
    ${short ? 'h-[45vh]' : 'h-[65vh]'}
    rounded-xl
    overflow-hidden
  `}
  >
    {/* Scroll container that creates the fixed illusion */}
    <div className="absolute inset-0 will-change-transform">
      <div className="sticky top-0 h-screen w-full">
        <Image src={media.src} alt={media.alt} fill className="object-cover object-center" />
      </div>
    </div>

    {/* Overlays */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 rounded-xl" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 rounded-xl" />

    {/* Text */}
    <div className="absolute bottom-[10%] w-full px-padding">
      <div className="w-full 2xl:max-w-[70%] text-white">
        <div className="font-display text-[36px] md:text-[75px] leading-snug">{title}</div>
        {subtitle && <h3>{subtitle}</h3>}
      </div>
    </div>
  </div>
);

export default PageHeaderWithBackground;
