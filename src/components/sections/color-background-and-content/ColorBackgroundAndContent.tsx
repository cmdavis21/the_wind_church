import React, { ReactElement } from 'react';

export enum ColorBackground {
  BLUE,
  YELLOW,
}

interface ColorBackgroundAndContentProps {
  background: ColorBackground;
  content: ReactElement;
  outerClassName?: string;
  innerClassName?: string;
  rounded?: boolean;
}

const ColorBackgroundAndContent: React.FC<ColorBackgroundAndContentProps> = ({
  background,
  content,
  outerClassName,
  innerClassName,
  rounded,
}) => (
  <div data-testid="outer" className={`relative ${outerClassName ?? ''}`}>
    <div
      data-testid="inner"
      style={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${
          background === ColorBackground.BLUE
            ? '/images/misc/navy_background.webp'
            : '/images/misc/yellow_background.webp'
        })`,
      }}
      className={`relative ${innerClassName ?? ''} ${
        background === ColorBackground.BLUE
          ? 'text-white dark:text-textInverse'
          : 'text-black dark:text-black'
      } ${rounded ? 'rounded-xl' : ''} overflow-hidden`}
    >
      {/* color overlay */}
      <div
        className={`absolute top-0 left-0 w-full h-full ${
          background === ColorBackground.BLUE
            ? 'bg-blue/80'
            : 'bg-primary/80 dark:bg-primaryDark/80'
        } ${rounded ? 'rounded-xl' : ''} backdrop-blur-sm`}
      />

      <div className="relative">{content}</div>
    </div>
  </div>
);

export default ColorBackgroundAndContent;
