const TimelineItemSkeleton = () => {
  return (
    <div className="relative w-full min-w-7xl max-w-[700px] flex gap-md animate-pulse">
      {/* Timeline line */}
      <div className="absolute left-[6px] -top-2 w-[0.5px] h-full bg-light-gray/30" />

      {/* Dot */}
      <div className="relative min-w-3 size-3 rounded-full bg-light-gray/40" />

      {/* Content */}
      <div className="relative max-w-[90%] flex flex-col gap-xs p-2 pb-16">
        {/* Tag */}
        <div className="h-5 w-24 rounded-full bg-light-gray/25" />

        <div className="flex gap-xs">
          {/* Image */}
          <div className="size-[70px] rounded-md bg-light-gray/20 shrink-0" />

          {/* Text */}
          <div className="flex flex-col gap-2 items-start flex-1">
            {/* Date */}
            <div className="h-3 w-24 rounded-full bg-light-gray/30" />

            {/* Event title */}
            <div className="h-5 w-48 rounded-full bg-light-gray/40" />

            {/* Description */}
            <div className="h-3 w-full max-w-[250px] rounded-full bg-light-gray/25" />

            {/* CTA */}
            <div className="mt-1 h-6 w-14 rounded-md bg-light-gray/35" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItemSkeleton;
