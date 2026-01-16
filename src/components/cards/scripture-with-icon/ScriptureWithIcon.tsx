import React from 'react';

interface ScriptureWithIconProps {
  icon: React.FC<React.SVGAttributes<unknown>>;
  title: string;
  verse: string;
  passage: string;
}

const ScriptureWithIcon: React.FC<ScriptureWithIconProps> = ({
  icon: Icon,
  title,
  verse,
  passage,
}) => (
  <div className="flex flex-col items-center justify-center gap-sm w-full min-w-[250px] max-w-[350px]">
    <div className="rounded-full p-2 bg-light-neutral dark:bg-dark-navy">
      <Icon className="size-lg fill-light-navy dark:fill-brand-primary" />
    </div>
    <div className="flex flex-col items-center gap-sm">
      <h5 className="font-bold dark:text-dark-primaryText">{title}</h5>
      <p className="font-light italic text-light-charcoal dark:text-brand-primary">{verse}</p>
      <p className="text-center dark:text-dark-primaryText">{passage}</p>
    </div>
  </div>
);

export default ScriptureWithIcon;
