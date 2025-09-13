import React from 'react';

interface SectionHeaderProps {
  id?: string;
  title: string;
  subtitle?: string;
  right?: boolean;
  light?: boolean;
  noPadding?: boolean;
  className?: string;
  blueBar?: boolean;
  largeHeader?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  id,
  title,
  subtitle,
  right,
  light,
  noPadding,
  className,
  blueBar,
  largeHeader,
}) => (
  <div id={id} className={`relative ${className ?? ''} ${!noPadding ? 'py-[25px]' : ''}`}>
    {/* Desktop */}
    <div className="hidden md:block">
      <div className=" flex gap-3">
        <div
          className={`w-[3px] min-h-full ${blueBar ? 'bg-blue' : 'bg-primary dark:bg-primaryDark'} rounded-md ${right ? 'order-last' : ''}`}
        />
        <div className="flex flex-col gap-2 w-full">
          {largeHeader ? (
            <>
              {subtitle && (
                <h4
                  className={`font-light ${light ? 'text-primary dark:text-primaryDark' : 'text-blue dark:text-primaryDark'} ${
                    right ? 'text-right' : 'text-left'
                  } tracking-wider uppercase`}
                >
                  {subtitle}
                </h4>
              )}
              <h1
                className={`${light ? 'text-white' : 'text-black dark:text-textInverse'} ${
                  right ? 'text-right' : 'text-left'
                } capitalize`}
              >
                {title}
              </h1>
            </>
          ) : (
            <>
              {subtitle && (
                <h5
                  className={`font-light ${light ? 'text-primary dark:text-primaryDark' : 'text-blue dark:text-primaryDark'} ${
                    right ? 'text-right' : 'text-left'
                  } tracking-wider uppercase`}
                >
                  {subtitle}
                </h5>
              )}
              <h2
                className={`${light ? 'text-white' : 'text-black dark:text-textInverse'} ${
                  right ? 'text-right' : 'text-left'
                } capitalize`}
              >
                {title}
              </h2>
            </>
          )}
        </div>
      </div>
    </div>

    {/* Mobile */}
    <div className="md:hidden flex flex-col items-center justify-center gap-3">
      <h2
        className={`${light ? 'text-white' : 'text-black dark:text-textInverse'} text-center capitalize`}
      >
        {title}
      </h2>
      <div
        className={`w-[40px] h-[2px] ${blueBar ? 'bg-blue' : 'bg-primary dark:bg-primaryDark'} rounded-md`}
      />
      {subtitle && (
        <h5
          className={`font-light ${light ? 'text-primary dark:text-primaryDark' : 'text-blue dark:text-primaryDark'} text-center tracking-wider uppercase`}
        >
          {subtitle}
        </h5>
      )}
    </div>
  </div>
);

export default SectionHeader;
