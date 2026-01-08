import React from 'react';

interface PassageQuoteProps {
  passage: string;
  verse: string;
}

const PassageQuote: React.FC<PassageQuoteProps> = ({ passage, verse }) => (
  <div className="flex flex-col items-center justify-center gap-xl lg:max-w-[80%] max-w-[1440px] mx-auto">
    <div className="w-[75%] h-[0.5px] bg-charcoal dark:bg-textInverse rounded-sm" />
    <h4 className="text-light-navy dark:text-dark-navy text-center leading-loose tracking-wide">
      {passage}
    </h4>
    <div className="w-[25%] h-[0.5px] bg-charcoal dark:bg-textInverse rounded-sm" />
    <h4 className="font-light text-light-charcoal dark:text-dark-primaryText">{verse}</h4>
  </div>
);

export default PassageQuote;
