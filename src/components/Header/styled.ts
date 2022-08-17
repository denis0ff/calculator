import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  padding: ${({ theme }) => theme.spaces[3]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.headerHeight};
  background: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.headerColor};
`;

export const HeaderLinkList = styled.ul`
  display: flex;
`;

export const HeaderLink = styled(NavLink)`
  margin-right: ${({ theme }) => theme.spaces[3]};
  padding: ${({ theme }) => `${theme.spaces[1]} ${theme.spaces[0]}`};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  &.active {
    border-bottom: ${({ theme }) => theme.blockBorder};
    border-color: ${({ theme }) => theme.headerColor};
  }
`;
