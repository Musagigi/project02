import { ChangeEvent, InputHTMLAttributes } from 'react';
import styles from './TextInput.module.scss';

type TFieldInput = {
  label: string;
  value: string;
  error?: boolean;
  errorText?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export const FieldInput = ({
  label,
  value,
  type = 'text',
  minLength = 1,
  required = false,
  pattern,
  error,
  errorText,
  onChange,
}: TFieldInput) => {
  return (
    <fieldset className={styles.field}>
      <label>
        {label}:
        <input
          value={value}
          type={type}
          minLength={minLength}
          required={required}
          pattern={pattern}
          onChange={onChange}
        />
        <div>{error && errorText}</div>
      </label>
    </fieldset>
  );
};
