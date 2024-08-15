import { InputHTMLAttributes } from 'react';
import InputMask from 'react-input-mask';

import { InputCommon } from 'shared/ui/inputs/InputCommon';

type TEmployeeInput = {
  label?: string;
  error?: string;
  errorText?: string;
  mask?: string | (string | RegExp)[];
} & InputHTMLAttributes<HTMLInputElement>;

export const EmployeeInput = ({
  name,
  defaultValue,
  type = 'text',
  minLength,
  required = false,
  pattern,
  title,
  placeholder,
  mask,
  label,
  className,
  error,
  errorText,
}: TEmployeeInput) => {
  if (type === 'tel' && mask) {
    return (
      <label className={className}>
        {label}:
        <InputMask
          defaultValue={defaultValue}
          name={name}
          mask={mask}
          placeholder={placeholder}
          required={required}
        />
        <div>{error && errorText}</div>
      </label>
    );
  }

  return (
    <InputCommon
      defaultValue={defaultValue}
      name={name}
      type={type}
      minLength={minLength}
      required={required}
      pattern={pattern}
      title={title}
      placeholder={placeholder}
      label={label}
      className={className}
    />
  );
};
