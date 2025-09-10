import React, { ChangeEvent, useTransition } from 'react';
import { Select } from 'flowbite-react';

interface LanguageSelectorSelectProps {
  children: React.ReactNode;
  defaultValue: string;
  label: string;
  changeColor: boolean;
  onLocaleChange: (locale: string) => void;
}

const LanguageSelectorSelect: React.FC<LanguageSelectorSelectProps> = ({
  children,
  defaultValue,
  label,
  changeColor,
  onLocaleChange,
}) => {
  const [isPending, startTransition] = useTransition();

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;
    startTransition(() => {
      onLocaleChange(nextLocale);
    });
  };

  return (
    <label>
      <div className="hidden">{label}</div>
      <Select
        sizing="xs"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
        className={`w-full min-w-[115px] !p-0 !border-0 !ring-0 !outline-none ${
          changeColor
            ? 'text-black dark:text-softWhite'
            : 'text-white lg:text-black dark:text-softWhite'
        }`}
      >
        {children}
      </Select>
    </label>
  );
};

export default LanguageSelectorSelect;
