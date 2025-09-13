import React from 'react';

interface PassageQuoteProps {
  passage: string;
  verse: string;
}

const PassageQuote: React.FC<PassageQuoteProps> = ({ passage, verse }) => (
  <div className="flex flex-col items-center justify-center gap-xl lg:max-w-[80%] mx-auto">
    <div className="w-[75%] h-[0.5px] bg-charcoal dark:bg-softWhite rounded-sm" />
    <h4 className="text-blue dark:text-softBlue text-center leading-loose tracking-wide">
      {passage}
    </h4>
    <div className="w-[25%] h-[0.5px] bg-charcoal dark:bg-softWhite rounded-sm" />
    <h4 className="font-light text-charcoal dark:text-textInverse">{verse}</h4>
  </div>
);

export default PassageQuote;
