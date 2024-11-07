import { ButtonNavLink } from 'shared/ui/buttons/ButtonNavLink';

import type { HTMLAttributes } from 'react';
import type { TRoute } from 'shared/constans/routing';

import { NAVIGATION_MENU_LABEL } from '../../lib/constans';

import styles from './NavBar.module.scss';

type TNavBar = {
  pagesList: TRoute[];
  variant?: 'contained' | 'outlined';
} & HTMLAttributes<HTMLElement>;

export const NavBar = ({ pagesList, className, variant }: TNavBar) => {
  if (pagesList.length === 0) {
    return null;
  }

  return (
    <nav aria-label={NAVIGATION_MENU_LABEL}>
      <ul className={className || styles.navList}>
        {pagesList.map((route) => (
          <li key={route.path}>
            <ButtonNavLink
              path={route.path}
              name={route.name}
              variant={variant}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
