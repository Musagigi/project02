import { ChangeEvent, SelectHTMLAttributes } from 'react';

import styles from './Select.module.scss';

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  classes?: string;
  label: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

export const Select = ({
  value,
  onChange,
  options,
  classes,
  label,
}: SelectProps) => {
  return (
    <label className={classes || styles.block}>
      {label}:
      <select
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option
            key={option.label}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};
