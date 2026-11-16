import React from 'react';

interface PassageQuoteProps {
  passage: string;
  verse: string;
}

const PassageQuote: React.FC<PassageQuoteProps> = ({ passage, verse }) => (
  <div className="max-w-[900px] mx-auto flex flex-col items-center gap-[32px] py-3xl">
    <div className="relative w-full">
      <span className="absolute -top-6 left-0 md:-left-4 text-7xl md:text-8xl text-light-navy/20 dark:text-dark-navy/20">
        “
      </span>
      <p className="text-center text-[1.25rem] md:text-[1.7rem] leading-normal font-light tracking-wide text-light-navy dark:text-dark-navy px-md">
        {passage}
      </p>
    </div>
    <p className="text-sm tracking-widest uppercase text-light-charcoal dark:text-dark-primaryText">
      {verse}
    </p>
  </div>
);

export default PassageQuote;
