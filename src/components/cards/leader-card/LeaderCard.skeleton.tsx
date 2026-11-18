const LeaderCardSkeleton = () => {
  return (
    <div className="h-[400px] w-[300px] animate-pulse">
      <div className="relative h-full w-full overflow-hidden rounded-lg border border-light-gray dark:border-dark-gray">
        {/* Image */}
        <div className="absolute inset-0 bg-light-gray/20 dark:bg-dark-gray/40" />

        {/* Gradient area */}
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-5 pb-4 flex flex-col gap-2">
          {/* Name */}
          <div className="h-6 w-40 rounded-full bg-white/30" />

          {/* Position */}
          <div className="h-4 w-24 rounded-full bg-white/20" />

          {/* Preview bio */}
          <div className="mt-2 flex flex-col gap-2">
            <div className="h-3 w-full rounded-full bg-white/15" />
            <div className="h-3 w-[85%] rounded-full bg-white/10" />
          </div>

          {/* Hint */}
          <div className="mt-2 h-3 w-28 rounded-full bg-brand-primary/30" />
        </div>
      </div>
    </div>
  );
};

export default LeaderCardSkeleton;
