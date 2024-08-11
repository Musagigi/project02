import { NavBar } from './ui/NavBar';

import { Container } from 'shared/ui/Container';

import { ROUTES_MAP } from 'shared/constans/routing';
import styles from './Header.module.scss';

const ROUTES_TO_PAGES = [ROUTES_MAP.main, ROUTES_MAP.about];

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <NavBar
          pagesList={ROUTES_TO_PAGES}
          variant="contained"
        />
      </Container>
    </header>
  );
};
