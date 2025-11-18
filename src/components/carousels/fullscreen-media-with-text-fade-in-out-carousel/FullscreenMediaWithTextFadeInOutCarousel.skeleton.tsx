import CarouselArrows from '../carousel-arrows/CarouselArrows';
import CarouselDot from '../carousel-dot/CarouselDot';

const FullscreenMediaWithTextFadeInOutCarouselSkeleton = () => {
  return (
    <>
      {/* Desktop */}
      <div className="relative w-full h-screen overflow-hidden hidden lg:block">
        {/* visual */}

        <div className={`absolute top-0 left-0 w-full h-full`}></div>

        {/* color overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70" />

        {/* content */}

        <div
          className={`w-full lg:max-w-[45%] lg:pl-[150px] min-[1800px]:pl-[250px] h-full absolute top-0 left-0 transition-opacity duration-300 flex items-center`}
        >
          <div className="flex flex-col gap-md text-white dark:text-textInverse">
            <h5></h5>
            <h3 className="text-primary line-clamp-1"></h3>
            <h1 className="leading-none"></h1>
            <div className="min-h-[100px]"></div>
            <div className="bg-primary w-[200px]">Learn more</div>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-5 left-[50%] -translate-y-[50%] flex items-center gap-xs">
          {Array.from({ length: 4 }).map((_, dotIndex) => (
            <CarouselDot
              key={`carousel-dot-${dotIndex}`}
              onClick={() => {}}
              active={dotIndex === 1}
            />
          ))}
        </div>

        {/* Arrows */}
        <CarouselArrows
          leftArrowProps={{
            onClick: () => {},
            buttonClassName:
              'bg-charcoal p-sm absolute left-[50px] min-[1800px]:left-[100px] top-[50%] -translate-y-[50%]',
            iconClassName: 'fill-white size-[25px]',
          }}
          rightArrowProps={{
            onClick: () => {},
            buttonClassName:
              'bg-charcoal p-sm absolute right-[50px] min-[1800px]:right-[100px] top-[50%] -translate-y-[50%]',
            iconClassName: 'fill-white size-[25px]',
          }}
        />
      </div>

      {/* Mobile */}
      <div className="lg:hidden relative w-full h-screen overflow-hidden">
        {/* visual */}
        <div className={`absolute top-0 left-0 w-full h-full`}></div>

        {/* color overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/10 via-black/80 to-black/10" />

        <div className="relative flex flex-col h-full w-full items-center justify-center text-center text-white dark:text-textInverse gap-sm">
          <h6 className="font-normal"></h6>
          <h5 className="text-primary"></h5>
          <h3 className="leading-none"></h3>
          <p className="line-clamp-3"></p>
          <div>Learn more</div>
        </div>
      </div>
    </>
  );
};

export default FullscreenMediaWithTextFadeInOutCarouselSkeleton;
