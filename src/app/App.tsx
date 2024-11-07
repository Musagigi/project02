import clsx from 'clsx';
import { Outlet } from 'react-router-dom';

import { Container } from 'shared/ui/Container';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';

import { useAppSelector } from './store/hooks';
import { themeSelector } from './store/selectors/themeSelector';

import './styles/index.scss';

export const App = () => {
  const theme = useAppSelector(themeSelector);

  return (
    <div className={clsx('app', theme)}>
      <Header />

      <Container component="main">
        <Outlet />
      </Container>

      <Footer />
    </div>
  );
};
