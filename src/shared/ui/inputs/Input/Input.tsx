import { ComponentProps, InputHTMLAttributes } from 'react';

import styles from './Input.module.scss';

type TInputProps = {
  label?: string;
  error?: boolean;
  errorText?: string;
  value?: string;
  onChange?: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement> &
  ComponentProps<'input'>;

export const Input = ({
  name,
  defaultValue,
  type = 'text',
  minLength,
  required = false,
  pattern,
  title,
  placeholder,
  value,
  onChange,
  label,
  className,
  error,
  errorText,
}: TInputProps) => {
  return (
    <label className={`${styles.inputWrapper} ${className}`}>
      {label}:
      <input
        name={name}
        defaultValue={defaultValue}
        type={type}
        minLength={minLength}
        required={required}
        pattern={pattern}
        title={title}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div>{error && errorText}</div>
    </label>
  );
};
