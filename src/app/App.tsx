import { Outlet } from 'react-router-dom';

import { Header } from 'widgets/Header';
import { Footer } from 'widgets/Footer';
import { Container } from 'shared/ui/Container';

import './styles/index.scss';

export const App = () => {
  return (
    <div className="app light">
      <Header />

      <Container component="main">
        <Outlet />
      </Container>

      <Footer />
    </div>
  );
};
