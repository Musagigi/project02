import clsx from 'clsx';
import { createElement } from 'react';

import type { ComponentProps, ReactNode } from 'react';

import styles from './Button.module.scss';

type TValidTags = 'button' | 'a';

type TButtonProps = {
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  tag?: TValidTags;
} & ComponentProps<TValidTags>;

export const Button = ({
  variant = 'contained',
  size = 'medium',
  startIcon,
  endIcon,
  tag = 'button',
  children,
  className,
  ...props
}: TButtonProps) => {
  // TODO кнопка и ссылка реализованы через один компонент
  return createElement(
    tag,
    {
      ...props,
      className: clsx(styles.button, styles[variant], styles[size], className),
    },
    [
      startIcon && <span key="startIcon">{startIcon}</span>,
      <span key="children">{children}</span>,
      endIcon && <span key="endIcon">{endIcon}</span>,
    ],
  );
};
