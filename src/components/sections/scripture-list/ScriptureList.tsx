import cn from 'classnames';
import React from 'react';

interface ScriptureListProps {
  scriptures: string[];
  lightText?: boolean;
}

const ScriptureList: React.FC<ScriptureListProps> = ({ scriptures, lightText }) => {
  return (
    <div
      className={cn(
        lightText ? 'text-light-neutral' : 'text-light-navy dark:text-brand-light',
        'max:width-[500px] flex flex-wrap gap-xs items-center text-lg font-light'
      )}
    >
      {scriptures.map((verse, index) => (
        <React.Fragment key={`scriptures-list-${verse}`}>
          {verse}
          {index !== scriptures.length - 1 && (
            <div className="rounded-full size-[5px] bg-brand-dark dark:bg-brand-primary" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ScriptureList;
