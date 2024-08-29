import { Outlet } from 'react-router-dom';

import { Header } from 'widgets/Header';
import { Footer } from 'widgets/Footer';
import { Container } from 'shared/ui/Container';

import { useAppSelector } from './store/hooks';
import { themeSelector } from './store/selectors/themeSelector';

import './styles/index.scss';

export const App = () => {
  const theme = useAppSelector(themeSelector);

  return (
    <div className={`app ${theme}`}>
      <Header />

      <Container component="main">
        <Outlet />
      </Container>

      <Footer />
    </div>
  );
};
