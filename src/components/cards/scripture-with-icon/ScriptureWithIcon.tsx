import React from 'react';

interface ScriptureWithIconProps {
  icon: React.FC<React.SVGAttributes<unknown>>;
  title?: string;
  verse: string;
  passage: string;
  horizontal?: boolean;
}

const ScriptureWithIcon: React.FC<ScriptureWithIconProps> = ({
  icon: Icon,
  title,
  verse,
  passage,
  horizontal,
}) => (
  <div
    className={`${
      horizontal ? 'flex' : 'flex flex-col'
    } items-center justify-center gap-sm w-full min-w-[250px] max-w-[350px] dark:text-textInverse`}
  >
    <div className="rounded-full p-2 bg-lightGray/50">
      <Icon className="size-[25px] fill-softBlue" />
    </div>
    <div className={`flex flex-col ${!horizontal ? 'items-center ' : ''} gap-sm`}>
      {title && <h5 className="font-bold">{title}</h5>}
      <p className="font-light italic text-charcoal dark:text-primaryDark">{verse}</p>
      <p className="text-center">{passage}</p>
    </div>
  </div>
);

export default ScriptureWithIcon;
