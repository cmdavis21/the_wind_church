const ProductCardSkeleton = () => {
  return (
    <div className="w-[300px] animate-pulse">
      <div className="h-full flex flex-col rounded-xl overflow-hidden border border-light-gray dark:border-dark-gray">
        {/* Image */}
        <div className="relative aspect-square bg-light-gray/15 dark:bg-dark-gray/40">
          {/* Badge */}
          <div className="absolute top-4 left-4">
            <div className="h-5 w-20 rounded-full bg-light-gray/35" />
          </div>

          {/* Carousel Dots */}
          <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
            <div className="size-2 rounded-full bg-light-gray/30" />
            <div className="size-2 rounded-full bg-light-gray/20" />
            <div className="size-2 rounded-full bg-light-gray/20" />
          </div>
        </div>

        {/* Content */}
        <div className="p-md pt-xs flex items-end justify-between gap-2">
          <div className="flex flex-col gap-2 flex-1">
            {/* Title */}
            <div className="h-4 w-full rounded-full bg-light-gray/30" />
            <div className="h-4 w-[70%] rounded-full bg-light-gray/20" />

            {/* Price */}
            <div className="h-5 w-20 rounded-full bg-light-gray/40 mt-1" />
          </div>

          {/* Arrow */}
          <div className="size-10 min-w-10 rounded-full bg-light-gray/25" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
