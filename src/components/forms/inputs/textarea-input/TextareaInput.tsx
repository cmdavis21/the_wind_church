import { Label, Textarea } from 'flowbite-react';
import React, { useImperativeHandle, useRef } from 'react';

interface TextareaInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const TextareaInput = React.forwardRef<HTMLTextAreaElement, TextareaInputProps>(
  ({ label, error, ...rest }, ref) => {
    const inputRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => inputRef.current as HTMLTextAreaElement);

    const isRequired = rest.required;

    return (
      <div className="w-full flex flex-col gap-xs">
        {label && (
          <Label htmlFor={rest.name || 'textarea'} disabled={rest.disabled}>
            {label}
            {isRequired && <span className="text-error">*</span>}
          </Label>
        )}

        <Textarea
          ref={inputRef}
          {...rest}
          rows={6}
          required={undefined}
          name={rest.name || 'textarea'}
        />

        {error && <div className="text-error">{error}</div>}
      </div>
    );
  }
);

TextareaInput.displayName = 'TextareaInput';

export default TextareaInput;
