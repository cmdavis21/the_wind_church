import { Label, Textarea } from 'flowbite-react';
import React, { useImperativeHandle, useRef } from 'react';

interface TextareaInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const TextareaInput = React.forwardRef<HTMLTextAreaElement, TextareaInputProps>(
  ({ label, error, ...rest }, ref) => {
    const inputRef = useRef<HTMLTextAreaElement>(null);

    // Forward the internal inputRef to the parent ref
    useImperativeHandle(ref, () => inputRef.current as HTMLTextAreaElement);

    return (
      <div className="w-full flex flex-col gap-xs">
        {label && <Label htmlFor="textarea" value={label} disabled={rest.disabled} />}
        <Textarea rows={6} ref={inputRef} name="textarea" {...rest} />
        {error && <div className="text-error">{error}</div>}
      </div>
    );
  }
);

TextareaInput.displayName = 'TextareaInput';

export default TextareaInput;
