import { ChangeEvent } from 'react';
import styles from './Checkbox.module.scss';

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  classes?: string;
};

export const Checkbox = ({
  label,
  checked,
  onChange,
  classes,
}: CheckboxProps) => {
  return (
    <label className={classes || styles.checkbox}>
      <span>{label}:</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
    </label>
  );
};
