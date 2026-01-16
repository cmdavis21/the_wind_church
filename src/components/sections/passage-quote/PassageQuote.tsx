import React from 'react';

interface PassageQuoteProps {
  passage: string;
  verse: string;
}

const PassageQuote: React.FC<PassageQuoteProps> = ({ passage, verse }) => (
  <div className="flex flex-col items-center justify-center gap-xl max-w-[1000px] mx-auto">
    <div className="w-[75%] h-[0.5px] bg-light-gray dark:bg-dark-gray rounded-sm" />
    <h4 className="text-light-navy dark:text-dark-navy text-center font-light leading-loose tracking-wide">
      {passage}
    </h4>
    <div className="w-[25%] h-[0.5px] bg-light-gray dark:bg-dark-gray rounded-sm" />
    <h4 className="font-light text-light-charcoal dark:text-dark-primaryText">{verse}</h4>
  </div>
);

export default PassageQuote;
