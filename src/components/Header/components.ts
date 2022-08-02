import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background: ${({ theme }) => theme.config.headerBg};
  color: ${({ theme }) => theme.config.headerColor};
`;

export const HeaderLinkList = styled.ul`
  display: flex;
`;

export const HeaderLink = styled(NavLink)`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 24px;
  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.config.headerColor};
  }
`;
