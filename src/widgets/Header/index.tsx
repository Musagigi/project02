import { ButtonThemeToogle } from 'entities/ButtonThemeToogle';

import { ROUTES_MAP } from 'shared/constans/routing';
import { Button } from 'shared/ui/buttons';
import { Container } from 'shared/ui/Container';

import styles from './Header.module.scss';
import { NavBar } from './ui/NavBar';

const ROUTES_TO_PAGES = [ROUTES_MAP.main, ROUTES_MAP.about];

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Button>test</Button>
        <Button
          tag="a"
          href="/"
        >
          test2
        </Button>
        <ButtonThemeToogle />
        <NavBar
          pagesList={ROUTES_TO_PAGES}
          variant="contained"
        />
      </Container>
    </header>
  );
};
