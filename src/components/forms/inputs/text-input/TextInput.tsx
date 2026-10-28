import { TextInput as FlowbiteTextInput, Label } from 'flowbite-react';
import React, { useImperativeHandle, useRef } from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, ...rest }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const isRequired = rest.required;

    return (
      <div className="w-full flex flex-col gap-xs">
        {label && (
          <Label htmlFor={rest.name || 'input'} disabled={rest.disabled}>
            {label}
            {isRequired && <span className="text-error">*</span>}
          </Label>
        )}

        <FlowbiteTextInput
          ref={inputRef}
          {...rest}
          required={undefined}
          name={rest.name || 'input'}
        />

        {error && <div className="text-error">{error}</div>}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';

export default TextInput;
