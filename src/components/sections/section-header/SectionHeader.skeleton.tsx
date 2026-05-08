const SectionHeaderSkeleton = () => {
  return (
    <div className="motion-safe:animate-pulse">
      {/* Desktop Skeleton */}
      <div className="hidden sm:block">
        <div className="flex gap-3">
          <div className="w-[3px] min-h-full bg-brand-primary/50 rounded-full" />
          <div className="flex flex-col gap-2 w-full">
            <div className="w-[300px] h-[24px] rounded-full bg-light-gray/50 dark:bg-dark-gray/50"></div>
            <div className="w-ful md:w-[40%] h-[32px] rounded-full bg-light-gray/50 dark:bg-dark-gray/50"></div>
          </div>
        </div>
      </div>

      {/* Mobile Skeleton */}
      <div className="sm:hidden flex flex-col items-center justify-center gap-3">
        <div className="w-[75%] h-[28px] rounded-full bg-light-gray/50 dark:bg-dark-gray/50"></div>
        <div className="w-10 h-[2px] bg-brand-primary/50 rounded-full" />
        <div className="w-[50%] h-[24px] rounded-full bg-light-gray/50 dark:bg-dark-gray/50"></div>
      </div>
    </div>
  );
};

export default SectionHeaderSkeleton;
