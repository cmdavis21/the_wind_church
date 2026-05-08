const MinistryCardSkeleton = ({ flip }: { flip?: boolean }) => {
  return (
    <div className="motion-safe:animate-pulse bg-light-neutral dark:bg-dark-neutral relative sm:aspect-[3/1] rounded-xl p-lg sm:p-xxl">
      {/* color overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 rounded-xl" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 rounded-xl" />

      <div
        className={`relative w-full h-full z-20 pt-7xl sm:pt-4xl flex flex-col justify-end ${!flip ? 'sm:items-start' : 'sm:items-end'} gap-md`}
      >
        <div className="w-[50%] md:w-[25%] h-[32px] rounded-full bg-light-gray/50 dark:bg-dark-gray/50"></div>
        <div className="w-full md:w-[50%] h-[48px] rounded-full bg-light-gray/50 dark:bg-dark-gray/50"></div>
        <div className="w-full md:w-[33%] h-[40px] rounded-full bg-light-gray/50 dark:bg-dark-gray/50"></div>
      </div>
    </div>
  );
};

export default MinistryCardSkeleton;
