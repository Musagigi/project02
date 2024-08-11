import { ButtonNavLink } from 'shared/ui/buttons/ButtonNavLink';

import type { TRoute } from 'shared/constans/routing';
import { NAVIGATION_MENU_LABEL } from 'widgets/Header/lib/constans';
import styles from './NavBar.module.scss';

type TNavBar = {
  pagesList: TRoute[];
  classes?: string;
  variant?: 'contained' | 'outlined';
};

export const NavBar = ({ pagesList, classes = '', variant }: TNavBar) => {
  if (pagesList.length === 0) {
    return null;
  }

  return (
    <nav aria-label={NAVIGATION_MENU_LABEL}>
      <ul className={classes || styles.navList}>
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
