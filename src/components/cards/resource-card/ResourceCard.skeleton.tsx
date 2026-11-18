const ResourceCardSkeleton = () => {
  return (
    <div className="w-[325px] flex flex-col gap-md rounded-xl border border-light-gray dark:border-dark-gray p-md animate-pulse">
      {/* Header */}
      <div className="flex gap-md">
        {/* Icon */}
        <div className="size-[48px] min-w-[48px] rounded-lg bg-light-gray/20 dark:bg-dark-gray/40" />

        {/* Title + Date */}
        <div className="flex flex-col gap-2 flex-1">
          <div className="h-5 w-[180px] rounded-full bg-light-gray/35" />
          <div className="h-3 w-[110px] rounded-full bg-light-gray/20" />
        </div>
      </div>

      {/* Description */}
      <div className="flex flex-col gap-2">
        <div className="h-3 w-full rounded-full bg-light-gray/20" />
        <div className="h-3 w-[90%] rounded-full bg-light-gray/15" />
        <div className="h-3 w-[60%] rounded-full bg-light-gray/10" />
      </div>

      {/* Action Button */}
      <div className="mt-auto">
        <div className="h-10 w-full rounded-full bg-light-gray/25" />
      </div>
    </div>
  );
};

export default ResourceCardSkeleton;
