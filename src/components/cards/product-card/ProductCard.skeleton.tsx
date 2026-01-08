const ProductCardSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-col items-center rounded-xl overflow-hidden border border-light-gray dark:border-dark-gray bg-white dark:bg-dark-bg">
      {/* Cover Image */}
      <div className="w-full aspect-[3/4] bg-light-neutral dark:bg-dark-neutral" />

      {/* Content */}
      <div className="p-4 w-full h-full text-center flex flex-col items-between gap-2">
        <div className="w-full h-6 rounded-sm bg-light-neutral dark:bg-dark-neutral" />
        <div className="w-8 h-6 rounded-sm bg-light-neutral dark:bg-dark-neutral" />
        <div className="w-full h-[45.6px] rounded-full bg-light-neutral dark:bg-dark-neutral" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
