import React from 'react';

interface ColorRadioProps {
  color: string;
  active: boolean;
  onSelect: (select: boolean) => void;
}

const ColorRadio: React.FC<ColorRadioProps> = ({ color, active, onSelect }) => (
  <div
    className={`border-[3px] ${
      active ? 'border-yellow' : 'border-white'
    } p-[3px] rounded-full`}
  >
    <button
      type="button"
      onClick={() => onSelect(!active)}
      className="p-sm rounded-full aspect-square size-[38px] border border-lightGray dark:border-softGray"
      style={{ backgroundColor: color }}
    />
  </div>
);

export default ColorRadio;
