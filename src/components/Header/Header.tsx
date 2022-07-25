import { Routes as AppRoutes } from '@constants/index';
import { HeaderContainer, HeaderLinkList, HeaderLink } from './components';

const Header = () => (
  <HeaderContainer>
    <h1>Calculator</h1>
    <nav>
      <HeaderLinkList>
        {AppRoutes.map(({ path, label }) => (
          <li key={path}>
            <HeaderLink to={path}>{label}</HeaderLink>
          </li>
        ))}
      </HeaderLinkList>
    </nav>
  </HeaderContainer>
);

export default Header;
