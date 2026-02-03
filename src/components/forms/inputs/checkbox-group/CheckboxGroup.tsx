import cn from 'classnames';
import { Checkbox, Label } from 'flowbite-react';
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';

interface Option {
  value: string;
  label: string;
}

export interface CheckboxGroupHandle {
  value: string[];
  setValue: (vals: string[]) => void;
  focus: () => void;
}

export interface CheckboxGroupProps extends Omit<
  React.FieldsetHTMLAttributes<HTMLFieldSetElement>,
  'onChange'
> {
  name: string;
  label?: string;
  options: Option[];
  values?: string[]; // controlled
  defaultValues?: string[]; // uncontrolled
  error?: string;
  onChange?: (values: string[]) => void;
  disabled?: boolean;
}

const CheckboxGroup = forwardRef<CheckboxGroupHandle, CheckboxGroupProps>(
  (
    {
      name,
      label,
      options,
      values: controlledValues,
      defaultValues,
      error,
      onChange,
      disabled,
      ...rest
    },
    ref
  ) => {
    const isControlled = controlledValues !== undefined;
    const [internalValues, setInternalValues] = useState<string[]>(defaultValues ?? []);

    const values = isControlled ? controlledValues! : internalValues;

    const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

    const toggleValue = (val: string) => {
      const newValues = values.includes(val) ? values.filter((v) => v !== val) : [...values, val];

      if (!isControlled) setInternalValues(newValues);
      onChange?.(newValues);
    };

    useImperativeHandle(
      ref,
      () => ({
        value: values,
        setValue: (vals: string[]) => {
          if (!isControlled) setInternalValues(vals);
          onChange?.(vals);
        },
        focus: () => {
          const first = itemRefs.current.find(Boolean);
          first?.focus();
        },
      }),
      [values, isControlled, onChange]
    );

    return (
      <fieldset {...rest} className="w-full flex flex-col gap-xs">
        {label && <Label htmlFor={name} value={label} disabled={disabled} />}
        <div className="flex flex-wrap gap-lg">
          {options.map((opt, idx) => {
            const checked = values.includes(opt.value);

            return (
              <button
                key={opt.value}
                id={`${name}-${opt.value}`}
                ref={(el) => {
                  if (el) itemRefs.current[idx] = el;
                }}
                type="button"
                onClick={() => toggleValue(opt.value)}
                disabled={disabled}
                className={cn(
                  checked
                    ? 'bg-brand-light/10 border-brand-primary'
                    : 'border-light-gray dark:border-dark-charcoal hover:opacity-75',
                  'flex items-center gap-xs cursor-pointer rounded-md p-sm w-fit border'
                )}
              >
                <Checkbox
                  value={opt.value}
                  color="yellow"
                  checked={checked}
                  disabled={disabled}
                  readOnly
                />
                <div>{opt.label}</div>
              </button>
            );
          })}
        </div>
        {error && <div className="text-error">{error}</div>}
      </fieldset>
    );
  }
);

CheckboxGroup.displayName = 'CheckboxGroup';

export default CheckboxGroup;
