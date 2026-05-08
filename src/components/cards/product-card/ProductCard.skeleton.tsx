import UpArrow from '@/components/icons/up-arrow';

const ProductCardSkeleton = () => {
  return (
    <div className="motion-safe:animate-pulse min-w-[300px] max-w-[350px] rounded-xl overflow-hidden bg-light-neutral dark:bg-dark-neutral">
      {/* Cover Image */}
      <div className="w-full aspect-square bg-light-gray/50 dark:bg-dark-gray/50" />

      <div className="p-md flex flex-row items-end justify-between gap-2">
        <div className="flex flex-col gap-xs w-full">
          <div className="w-full h-[44px] rounded-full bg-light-gray/50 dark:bg-dark-gray/50"></div>
          <div className="w-[55%] h-[32px] rounded-full bg-brand-primary/50"></div>
        </div>
        <div className="bg-light-gray/50 dark:bg-dark-gray rounded-full size-12 min-w-12 flex items-center justify-center">
          <UpArrow className="size-[25px] fill-light-charcoal dark:fill-dark-charcoal rotate-45" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
