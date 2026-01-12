import { Label, Radio } from 'flowbite-react';
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';

interface Option {
  value: string;
  label: string;
}

export interface RadioGroupHandle {
  value: string;
  setValue: (val: string) => void;
  focus: () => void;
}

export interface RadioGroupProps
  extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, 'onChange'> {
  name: string;
  label?: string;
  labelColor?: string;
  options: Option[];
  value?: string; // controlled
  defaultValue?: string; // uncontrolled
  error?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

const RadioGroup = forwardRef<RadioGroupHandle, RadioGroupProps>(
  (
    {
      name,
      label,
      labelColor = 'default',
      options,
      value: controlledValue,
      defaultValue,
      error,
      onChange,
      disabled,
      ...rest
    },
    ref
  ) => {
    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue ?? '');
    const value = isControlled ? controlledValue : internalValue;

    const itemRefs = useRef<Array<HTMLInputElement | null>>([]);

    const updateValue = (val: string) => {
      if (!isControlled) setInternalValue(val);
      onChange?.(val);
    };

    useImperativeHandle(
      ref,
      () => ({
        value,
        setValue: updateValue,
        focus: () => {
          const first = itemRefs.current.find(Boolean);
          first?.focus();
        },
      }),
      [value, isControlled, onChange]
    );

    return (
      <fieldset {...rest} className="flex flex-col gap-xs">
        {label && <Label htmlFor={name} value={label} disabled={disabled} color={labelColor} />}

        <div className="flex flex-wrap items-center gap-md">
          {options.map((opt, idx) => (
            <label key={opt.value} className="flex items-center gap-xs">
              <Radio
                id={`${name}-${opt.value}`}
                ref={(el) => {
                  if (el) itemRefs.current[idx] = el;
                }}
                name={name}
                value={opt.value}
                checked={value === opt.value}
                onChange={() => updateValue(opt.value)}
                disabled={disabled}
              />
              <span className="ml-1">{opt.label}</span>
            </label>
          ))}
        </div>

        {error && <div className="text-error">{error}</div>}
      </fieldset>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
