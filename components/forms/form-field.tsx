import React, { TextareaHTMLAttributes } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
interface FormFieldProps {
  label: string;
  id: string;
  name: string;
  placeholder?: string;
  required?: boolean; // often not needed if using HTML validation
  onChange?: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  error?: string[];
  helperText?: string;
  textarea?: boolean;
}

export default function FormField({
  label,
  id,
  name,
  placeholder,
  required,
  onChange,
  error,
  helperText,
  textarea,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label} {required && <span className="text-destructive">*</span>}
      </Label>
      {textarea ? (
        <Textarea
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          onChange={onChange as any} // or properly type if used
        />
      ) : (
        <Input
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          onChange={onChange as any}
        />
      )}
      {helperText && (
        <p className="text-xs text-muted-foreground">{helperText}</p>
      )}
      {error?.length ? (
        <p className="text-sm text-destructive">{error.join(", ")}</p>
      ) : null}
    </div>
  );
}