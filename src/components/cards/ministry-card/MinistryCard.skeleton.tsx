const MinistryCardSkeleton = ({ flip }: { flip?: boolean }) => {
  return (
    <div
      className={
        'animate-pulse bg-light-neutral dark:bg-dark-neutral relative md:aspect-[3/1] rounded-xl p-lg md:p-xxl'
      }
    >
      {/* color overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 rounded-xl" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 rounded-xl" />

      <div
        className={`relative w-full h-full z-20 pt-[200px] md:pt-[100px] flex flex-col justify-end ${flip ? 'md:items-start' : 'md:items-end md:text-right'} gap-md text-white`}
      >
        <div className="w-[125px] h-[48px] rounded bg-light-gray"></div>
        <div className="w-[175px] h-[55px] rounded bg-light-gray"></div>
        <div className="w-[50px] h-[25px] rounded-full bg-light-gray"></div>
      </div>
    </div>
  );
};

export default MinistryCardSkeleton;
