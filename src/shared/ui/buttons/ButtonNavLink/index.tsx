import { NavLink } from 'react-router-dom';

import type { TRoute } from 'shared/constans/routing';
import styles from './ButtonNavLink.module.scss';

type TButtonNavLink = TRoute & {
  variant?: 'contained' | 'outlined';
};

export const ButtonNavLink = ({
  path,
  name,
  variant = 'outlined',
}: TButtonNavLink) => {
  const className = styles[variant];

  return (
    <NavLink
      to={path}
      className={`${className}`}
    >
      {name}
    </NavLink>
  );
};
