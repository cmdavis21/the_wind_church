import React from 'react';

interface TextRadioProps {
  text: string;
  color?: string;
  selected: boolean;
  disabled?: boolean;
  onSelect: (selected: string) => void;
}

const TextRadio: React.FC<TextRadioProps> = ({ text, color, selected, disabled, onSelect }) => (
  <button
    type="button"
    disabled={disabled}
    onClick={() => onSelect(text)}
    className={`${disabled ? 'opacity-50' : ''} px-sm py-xs min-w-[45px] max-w-fit border-2 rounded-md ${selected ? 'border-brand-primary' : 'border-light-gray dark:border-dark-gray'}`}
  >
    <div className="flex items-center justify-center capitalize gap-[6px]">
      {color && (
        <div
          style={{ backgroundColor: color }}
          className={`size-5 rounded-sm border border-charcoal`}
        />
      )}
      <div>{text}</div>
    </div>
  </button>
);

export default TextRadio;
