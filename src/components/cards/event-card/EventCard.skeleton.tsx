const EventCardSkeleton = () => {
  return (
    <div className="w-[300px] sm:w-[350px] flex flex-col overflow-hidden rounded-3xl bg-light-gray/10 animate-pulse">
      {/* Image */}
      <div className="aspect-square w-full bg-light-gray/20" />

      {/* Details */}
      <div className="flex items-center gap-md px-md py-sm">
        {/* Date badge */}
        <div className="flex flex-col gap-1 items-center justify-center shrink-0 w-14 h-16 rounded-lg bg-light-gray/20 p-1">
          <div className="h-3 w-full rounded bg-light-gray/30" />
          <div className="h-5 w-6 rounded bg-light-gray/40" />
          <div className="h-2 w-8 rounded bg-light-gray/30" />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-2">
          {/* Venue */}
          <div className="h-4 w-28 rounded-full bg-light-gray/40" />

          {/* Address */}
          <div className="h-3 w-full rounded-full bg-light-gray/25" />

          {/* Time */}
          <div className="h-4 w-24 rounded-full bg-light-gray/35" />
        </div>
      </div>
    </div>
  );
};

export default EventCardSkeleton;
