import React from 'react';

interface PassageQuoteProps {
  passage: string;
  verse: string;
}

const PassageQuote: React.FC<PassageQuoteProps> = ({ passage, verse }) => (
  <div className="max-w-[900px] mx-auto flex flex-col items-center gap-xl py-2xl">
    <div className="relative w-full">
      <span className="absolute -top-6 left-0 text-7xl text-light-navy/20 dark:text-dark-navy/20">
        “
      </span>
      <p className="text-center text-[1.5rem] leading-loose font-light tracking-wide text-light-navy dark:text-dark-navy px-md">
        {passage}
      </p>
    </div>
    <p className="text-sm tracking-widest uppercase text-light-charcoal dark:text-dark-primaryText">
      {verse}
    </p>
  </div>
);

export default PassageQuote;
