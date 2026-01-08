'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import VideoCard from '@/components/cards/video-card/VideoCard';

import CarouselArrows from '../carousel-arrows/CarouselArrows';
import CarouselDot from '../carousel-dot/CarouselDot';

interface VideoPlaylistCarouselProps {
  playlist: {
    poster: string;
    title: string;
    date: string;
    link: string;
  }[];
}

const VideoPlaylistCarousel: React.FC<VideoPlaylistCarouselProps> = ({ playlist }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1800 },
      items: 4,
      partialVisibilityGutter: 300,
    },
    desktop: {
      breakpoint: { max: 1800, min: 1024 },
      items: 3,
      partialVisibilityGutter: 300,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 200,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 100,
    },
  };

  const CustomDot = ({ onClick, ...rest }: any) => {
    const { active } = rest;
    return <CarouselDot onClick={onClick} active={active} />;
  };

  const ButtonGroup = ({ next, previous }: any) => (
    <CarouselArrows
      leftArrowProps={{
        onClick: () => previous(),
        buttonClassName: 'absolute -left-2 top-[50%] -translate-y-[50%]',
      }}
      rightArrowProps={{
        onClick: () => next(),
        buttonClassName: 'absolute -right-2 top-[50%] -translate-y-[50%]',
      }}
    />
  );

  return (
    <div className="relative">
      <Carousel
        arrows={false}
        infinite
        showDots
        draggable
        swipeable
        itemClass="p-sm"
        containerClass="pb-md"
        responsive={responsive}
        customDot={<CustomDot />}
        renderButtonGroupOutside
        customButtonGroup={<ButtonGroup />}
        dotListClass="flex gap-xs"
      >
        {playlist.map((item) => (
          <VideoCard
            key={`video-playlist-carousel-${item.title}-${item.date}`}
            poster={item.poster}
            title={item.title}
            date={item.date}
            link={item.link}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default VideoPlaylistCarousel;
