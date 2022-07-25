import { Link } from 'react-router-dom';
import { Routes as AppRoutes } from '@constants/router';
import { Header as Container } from './components';

const Header = () => {
  return (
    <Container>
      <h1>Calculator</h1>
      <nav>
        <ul>
          {AppRoutes.map(({ path, label }) => (
            <li key={path}>
              <Link to={path}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
