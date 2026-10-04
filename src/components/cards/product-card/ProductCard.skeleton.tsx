import UpArrow from '@/components/icons/up-arrow';

const ProductCardSkeleton = () => {
  return (
    <div className="motion-safe:animate-pulse min-w-[300px] max-w-[350px] rounded-xl overflow-hidden bg-light-neutral dark:bg-dark-neutral">
      {/* Cover Image */}
      <div className="w-full aspect-square bg-light-gray/50 dark:bg-dark-gray/50" />

      <div className="p-md flex flex-row items-end justify-between gap-2">
        <div className="flex flex-col gap-xs w-full">
          <div className="w-full h-[44px] rounded-full bg-light-gray/50 dark:bg-dark-gray/50"></div>
          <div className="w-[55%] h-[32px] rounded-full bg-light-charcoal dark:bg-dark-neutral"></div>
        </div>
        <div className="bg-brand-primary/20 rounded-full size-10 min-w-10 flex items-center justify-center">
          <UpArrow className="fill-brand-dark dark:fill-brand-primary rotate-45" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
