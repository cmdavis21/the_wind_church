'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import VideoCard from '@/components/cards/video-card/VideoCard';

import { YouTubeSnippet } from '@/data/types';
import CarouselArrows from '../carousel-arrows/CarouselArrows';
import CarouselDot from '../carousel-dot/CarouselDot';

interface VideoPlaylistCarouselProps {
  playlist: YouTubeSnippet[];
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
        buttonClassName: 'absolute -left-2 -bottom-3 md:top-1/2 md:-translate-y-1/2',
      }}
      rightArrowProps={{
        onClick: () => next(),
        buttonClassName: 'absolute -right-2 -bottom-3 md:top-1/2 md:-translate-y-1/2',
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
        itemClass="text-center"
        // containerClass="bg-blue-500"
        responsive={responsive}
        customDot={<CustomDot />}
        renderButtonGroupOutside
        renderDotsOutside
        customButtonGroup={<ButtonGroup />}
        dotListClass="flex gap-xs"
      >
        {playlist.map((item) => (
          <VideoCard
            key={`video-playlist-carousel-${item.title}-${item.published_at}`}
            poster={item.thumbnail}
            title={item.title}
            date={item.published_at}
            link={item.videoUrl}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default VideoPlaylistCarousel;
