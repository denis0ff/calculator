import { routes } from '@constants';
import { HeaderContainer, HeaderLinkList, HeaderLink } from './styled';

const Header = () => (
  <HeaderContainer>
    <h1>Calculator</h1>
    <nav>
      <HeaderLinkList>
        {routes.map(({ path, label }) => (
          <li key={path}>
            <HeaderLink to={path}>{label}</HeaderLink>
          </li>
        ))}
      </HeaderLinkList>
    </nav>
  </HeaderContainer>
);

export default Header;
