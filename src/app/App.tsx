import { Link, Outlet } from 'react-router-dom';

import './styles/index.scss';

export const App = () => {
  return (
    <div className="app light">
      <header>
        <Link to="/">главная</Link>
      </header>
      <Outlet />
    </div>
  );
};
