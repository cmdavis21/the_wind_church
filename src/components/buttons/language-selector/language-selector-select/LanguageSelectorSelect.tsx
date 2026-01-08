import { Select } from 'flowbite-react';
import React, { ChangeEvent, useTransition } from 'react';

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
    startTransition(() => onLocaleChange(nextLocale));
  };

  return (
    <label>
      <div className="hidden">{label}</div>
      <Select
        sizing="xs"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
        className={`${
          changeColor
            ? 'text-light-primaryText dark:text-dark-primaryText'
            : 'text-white lg:text-light-primaryText dark:text-dark-primaryText'
        }`}
      >
        {children}
      </Select>
    </label>
  );
};

export default LanguageSelectorSelect;
