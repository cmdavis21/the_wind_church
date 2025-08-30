import { Label, Select } from 'flowbite-react';
import React, { useImperativeHandle, useRef } from 'react';

interface SelectInputProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
}

const SelectInput = React.forwardRef<HTMLSelectElement, SelectInputProps>(
  ({ label, options, error, ...rest }, ref) => {
    const inputRef = useRef<HTMLSelectElement>(null);

    // Forward the internal inputRef to the parent ref
    useImperativeHandle(ref, () => inputRef.current as HTMLSelectElement);

    return (
      <div className="w-full flex flex-col gap-xs">
        <Label htmlFor="select" value={label} disabled={rest.disabled} />
        <Select ref={inputRef} name="select" {...rest}>
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        {error && <div className="text-red">{error}</div>}
      </div>
    );
  }
);

SelectInput.displayName = 'SelectInput';

export default SelectInput;
