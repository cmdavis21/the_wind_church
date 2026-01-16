import React from 'react';

interface ScriptureListProps {
  scriptures: string[];
}

const ScriptureList: React.FC<ScriptureListProps> = ({ scriptures }) => {
  return (
    <div className="body-large flex flex-wrap gap-sm items-center">
      {scriptures.map((verse, index) => (
        <React.Fragment key={`scriptures-list-${verse}`}>
          {verse}
          {index !== scriptures.length - 1 && (
            <div className="rounded-full size-[5px] bg-light-charcoal dark:bg-dark-charcoal" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ScriptureList;
