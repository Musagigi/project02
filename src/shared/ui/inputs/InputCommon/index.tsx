import { InputHTMLAttributes } from 'react';
import styles from './InputCommon.module.scss';

type TInputCommon = {
  label?: string;
  error?: boolean;
  errorText?: string;
  value?: string;
  onChange?: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputCommon = ({
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
}: TInputCommon) => {
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
