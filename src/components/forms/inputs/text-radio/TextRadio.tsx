import React from 'react';

interface TextRadioProps {
  text: string;
  active: boolean;
  onSelect: (select: boolean) => void;
}

const TextRadio: React.FC<TextRadioProps> = ({ text, active, onSelect }) => (
  <div
    className={`border-[3px] ${
      active ? 'border-yellow' : 'border-white'
    } p-[3px] rounded-full`}
  >
    <button
      type="button"
      onClick={() => onSelect(!active)}
      className="px-md py-xs rounded-full border border-lightGray dark:border-softCharcoal body-large"
    >
      {text}
    </button>
  </div>
);

export default TextRadio;
