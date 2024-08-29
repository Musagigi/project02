import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';

type TButtonProps = {
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant = 'contained',
  size = 'medium',
  children,
  className,
  ...props
}: TButtonProps) => {
  return (
    <button
      {...props}
      type="button"
      className={clsx(styles.button, styles[variant], styles[size], className)}
    >
      <span>{children}</span>
    </button>
  );
};
