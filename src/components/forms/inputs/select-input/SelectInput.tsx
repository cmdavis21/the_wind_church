import { Label, Select } from 'flowbite-react';
import React, { useImperativeHandle, useRef } from 'react';

interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  icon?: React.FC<React.SVGAttributes<unknown>>;
  options: { value: string; label: string }[];
  error?: string;
}

const SelectInput = React.forwardRef<HTMLSelectElement, SelectInputProps>(
  ({ label, options, error, ...rest }, ref) => {
    const inputRef = useRef<HTMLSelectElement>(null);

    useImperativeHandle(ref, () => inputRef.current as HTMLSelectElement);

    const isRequired = rest.required;

    return (
      <div className="w-full flex flex-col gap-xs">
        {label && (
          <Label htmlFor={rest.name || 'select'} disabled={rest.disabled}>
            {label}
            {isRequired && <span className="text-error">*</span>}
          </Label>
        )}

        <Select
          ref={inputRef}
          {...rest}
          icon={rest.icon}
          required={undefined}
          name={rest.name || 'select'}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>

        {error && <div className="text-error">{error}</div>}
      </div>
    );
  }
);

SelectInput.displayName = 'SelectInput';

export default SelectInput;
