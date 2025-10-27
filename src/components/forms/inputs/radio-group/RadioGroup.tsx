import { Label, Radio } from 'flowbite-react';
import React, { useImperativeHandle, useRef, useState } from 'react';

interface Option {
  value: string;
  label: string;
}

export interface RadioGroupHandle {
  /** currently selected value */
  value: string;
  /** programmatically set the selected value */
  setValue: (val: string) => void;
  /** focus the first radio input */
  focus: () => void;
}

export interface RadioGroupProps
  extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, 'onChange'> {
  name: string;
  label?: string;
  options: Option[];
  value?: string;
  defaultValue?: string;
  error?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

/**
 * RadioGroup forwards a handle with { value, setValue, focus } so parent forms
 * can read and manipulate the selected radio programmatically.
 */
const RadioGroup = React.forwardRef<RadioGroupHandle, RadioGroupProps>(
  (
    {
      name,
      label,
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
    const [internalValue, setInternalValue] = useState<string>(defaultValue ?? '');
    const value = isControlled ? controlledValue! : internalValue;

    // keep refs for each radio so focus() can target the first available
    const itemRefs = useRef<Array<HTMLInputElement | null>>([]);

    useImperativeHandle(
      ref,
      () => ({
        value,
        setValue: (val: string) => {
          if (!isControlled) setInternalValue(val);
          onChange?.(val);
        },
        focus: () => {
          const first = itemRefs.current.find(Boolean);
          first?.focus();
        },
      }),
      [value, isControlled, onChange]
    );

    const handleChange = (val: string) => {
      if (!isControlled) setInternalValue(val);
      onChange?.(val);
    };

    return (
      <fieldset {...rest} className="flex flex-col gap-xs">
        {label && <Label htmlFor={name} value={label} disabled={disabled} />}
        <div className="flex flex-wrap items-center gap-md">
          {options.map((opt, idx) => (
            <label key={opt.value} className="flex items-center gap-xs">
              <input
                ref={(el) => {
                  if (el) {
                    itemRefs.current[idx] = el;
                  }
                }}
                type="radio"
                name={name}
                value={opt.value}
                checked={value === opt.value}
                onChange={() => handleChange(opt.value)}
                disabled={disabled}
                className="sr-only"
              />
              <Radio
                id={`${name}-${opt.value}`}
                checked={value === opt.value}
                name={name}
                value={opt.value}
                onChange={() => handleChange(opt.value)}
                disabled={disabled}
              />
              <div className="ml-1">{opt.label}</div>
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
