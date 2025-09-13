'use client';

import React, { ReactElement, useState } from 'react';
import { Button } from 'flowbite-react';

import ToggleSlider from '@/components/buttons/toggle-slider/ToggleSlider';

interface MultiFormContainerProps {
  forms: {
    buttonLabel: string;
    header?: {
      title: string;
      description: string;
    };
    form: ReactElement;
  }[];
}

const MultiFormContainer: React.FC<MultiFormContainerProps> = ({ forms }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="w-full h-full flex flex-col gap-xl md:gap-xxl">
      {/* Mobile Buttons */}
      <div className="md:hidden w-full flex flex-wrap justify-center gap-md">
        {forms.map((item, idx) => (
          <Button
            key={`multi-form-container-button-${item.buttonLabel}`}
            pill
            size="sm"
            color={active === idx ? 'yellow' : 'info'}
            onClick={() => setActive(idx)}
          >
            {item.buttonLabel}
          </Button>
        ))}
      </div>

      {/* Desktop Toggler */}
      <div className="hidden md:block mx-auto">
        <ToggleSlider
          options={forms.map((i, idx) => ({
            label: i.buttonLabel,
            onSelect: () => setActive(idx),
          }))}
        />
      </div>

      {forms[active] && forms[active].header && (
        <div
          className={
            'flex flex-col gap-[25px] max-w-[1000px] mx-auto text-center font-light dark:text-textInverse'
          }
        >
          <h1>{forms[active].header.title}</h1>
          <h4 className="text-charcoal dark:text-textInverse">
            {forms[active].header.description}
          </h4>
        </div>
      )}

      {forms[active] && forms[active].form}
    </div>
  );
};

export default MultiFormContainer;
