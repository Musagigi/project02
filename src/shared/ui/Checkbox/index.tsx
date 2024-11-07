import { ChangeEvent } from 'react';

import styles from './Checkbox.module.scss';

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export const Checkbox = ({
  label,
  checked,
  onChange,
  className,
}: CheckboxProps) => {
  return (
    <label className={`${className} ${styles.checkbox}`}>
      <span>{label}:</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
    </label>
  );
};
