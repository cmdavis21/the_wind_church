import { TextInput as FlowbiteTextInput, Label } from 'flowbite-react';
import React, { useImperativeHandle, useRef } from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, ...rest }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    // Forward the internal inputRef to the parent ref
    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    return (
      <div className="w-full flex flex-col gap-xs">
        {label && <Label htmlFor="input" value={label} disabled={rest.disabled} />}
        <FlowbiteTextInput ref={inputRef} name="input" {...rest} />
        {error && <div className="text-error">{error}</div>}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';

export default TextInput;
