interface SectionHeaderSkeletonProps {
  subtitle?: boolean;
}

const SectionHeaderSkeleton: React.FC<SectionHeaderSkeletonProps> = ({ subtitle = true }) => {
  return (
    <div className="motion-safe:animate-pulse">
      <div className="flex flex-col gap-3 w-fit">
        <div className="w-[200px] h-[24px] rounded-full bg-light-gray/50 dark:bg-dark-gray/50"></div>
        {subtitle && (
          <>
            <div className="w-[300px] h-[32px] rounded-full bg-light-gray/50 dark:bg-dark-gray/50"></div>
            <div className="w-[15%] h-[2px] bg-brand-primary rounded-full" />
          </>
        )}
      </div>
    </div>
  );
};

export default SectionHeaderSkeleton;
