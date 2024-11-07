import clsx from 'clsx';

import type { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './Button.module.scss';

type TButtonProps = {
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant = 'contained',
  size = 'medium',
  startIcon,
  endIcon,
  children,
  className,
  ...props
}: TButtonProps) => {
  return (
    <button
      {...props}
      type="button"
      data-testid="button"
      className={clsx(styles.button, styles[variant], styles[size], className)}
    >
      {startIcon && <span>{startIcon}</span>}
      <span>{children}</span>
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
};
