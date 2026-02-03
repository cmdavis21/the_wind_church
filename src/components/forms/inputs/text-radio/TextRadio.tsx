import cn from 'classnames';
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
    className={cn(
      disabled && 'opacity-50',
      selected
        ? 'bg-brand-light/10 border-brand-primary'
        : 'border-light-gray dark:border-dark-charcoal hover:opacity-75',
      'px-sm py-xs min-w-[45px] max-w-fit border rounded-md'
    )}
  >
    <div className="flex items-center justify-center capitalize gap-[6px]">
      {color && <div style={{ backgroundColor: color }} className="size-4 rounded-full" />}
      <div>{text}</div>
    </div>
  </button>
);

export default TextRadio;
