const SectionHeaderSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Desktop Skeleton */}
      <div className="hidden md:block">
        <div className="flex gap-3">
          <div className="w-[3px] min-h-full bg-skeletonDarkGray rounded-md" />
          <div className="flex flex-col gap-2 w-full">
            <div className="h-[18px] w-1/3 bg-light-neutral rounded self-start" />
            <div className="h-[32px] w-2/3 bg-light-neutral roundedself-start" />
          </div>
        </div>
      </div>

      {/* Mobile Skeleton */}
      <div className="md:hidden flex flex-col items-center justify-center gap-3">
        <div className="h-[28px] w-2/3 bg-light-neutral rounded" />
        <div className="w-10 h-[2px] bg-skeletonDarkGray rounded-md" />
        <div className="h-[16px] w-1/2 bg-light-neutral rounded" />
      </div>
    </div>
  );
};

export default SectionHeaderSkeleton;
