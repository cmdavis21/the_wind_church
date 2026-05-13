import CarouselArrows from '../carousel-arrows/CarouselArrows';
import CarouselDot from '../carousel-dot/CarouselDot';

const FullscreenMediaWithTextFadeInOutCarouselSkeleton = () => {
  return (
    <>
      {/* Desktop */}
      <div className="motion-safe:animate-pulse relative w-full h-screen overflow-hidden hidden lg:block">
        {/* visual */}
        <div className="absolute top-0 left-0 w-full h-full"></div>

        {/* color overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70" />

        {/* content */}
        <div className="w-full lg:max-w-[45%] lg:pl-6xl min-[1800px]:pl-[250px] h-full absolute top-0 left-0 transition-opacity duration-300 flex items-center">
          <div className="flex w-full flex-col gap-md">
            <div className="w-[100px] h-[24px] rounded-full bg-light-gray/50 dark:bg-dark-gray/50"></div>
            <div className="w-[45%] h-[32px] rounded-full bg-brand-primary/50"></div>
            <div className="w-[80%] h-[80px] rounded-full bg-light-gray/50 dark:bg-dark-gray/50"></div>
            <div className="w-full h-[72px] rounded-full bg-light-gray/50 dark:bg-dark-gray/50"></div>
            <div className="mt-10 w-[115px] h-[40px] rounded-full bg-brand-primary/50"></div>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-5 w-full">
          <div className="justify-center flex items-center gap-xs">
            {Array.from({ length: 4 }).map((_, dotIndex) => (
              <CarouselDot
                key={`carousel-dot-${dotIndex}`}
                onClick={() => {}}
                active={dotIndex === 1}
              />
            ))}
          </div>
        </div>

        {/* Arrows */}
        <CarouselArrows
          leftArrowProps={{
            onClick: () => {},
            buttonClassName: 'absolute left-xxl min-[1800px]:left-4xl top-[50%] -translate-y-[50%]',
          }}
          rightArrowProps={{
            onClick: () => {},
            buttonClassName:
              'absolute right-xxl min-[1800px]:right-4xl top-[50%] -translate-y-[50%]',
          }}
        />
      </div>

      {/* Mobile */}
      <div className="motion-safe:animate-pulse lg:hidden relative w-full h-screen overflow-hidden">
        {/* visual */}
        <div className="absolute top-0 left-0 w-full h-full"></div>

        {/* color overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/10 via-black/80 to-black/10" />

        <div className="relative flex flex-col h-full w-full items-center justify-center text-center text-white dark:text-dark-primaryText gap-sm">
          <div className="w-[116px] h-[22px] rounded-full bg-light-gray/50 dark:bg-dark-gray/50"></div>
          <div className="w-[200px] h-[24px] rounded-full bg-brand-primary/50"></div>
          <div className="w-[275px] h-[44px] rounded-full bg-light-gray/50 dark:bg-dark-gray/50"></div>
          <div className="w-[275px] h-[66px] rounded-full bg-light-gray/50 dark:bg-dark-gray/50"></div>
          <div className="w-[96px] h-[32px] rounded-full bg-brand-primary/50"></div>
        </div>
      </div>
    </>
  );
};

export default FullscreenMediaWithTextFadeInOutCarouselSkeleton;
