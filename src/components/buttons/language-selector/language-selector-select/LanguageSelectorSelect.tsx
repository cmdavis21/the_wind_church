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
            ? 'text-textSecondary dark:text-textInverse'
            : 'text-white lg:text-textSecondary dark:text-textInverse'
        }`}
      >
        {children}
      </Select>
    </label>
  );
};

export default LanguageSelectorSelect;
