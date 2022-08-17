import styled from 'styled-components';
import arrow from '@assets/arrow.svg';

export const SettingsWrapper = styled.div`
  width: 200px;
  height: 100%;
  margin: ${({ theme }) => theme.spaces[4]};
  & > * {
    margin-top: ${({ theme }) => theme.spaces[3]};
    height: 40px;
  }
`;

export const Select = styled.select`
  padding: ${({ theme }) => `${theme.spaces[2]} ${theme.spaces[2]}`};
  display: block;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: ${({ theme }) => theme.fontWeights[2]};
  border: ${({ theme }) => theme.defaultBorder};
  border-radius: ${({ theme }) => theme.borderRadiuses[1]};
  appearance: none;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: right ${({ theme }) => theme.spaces[2]} top 50%;
  background-size: ${({ theme }) => theme.fontSizes[0]};
  background-color: ${({ theme }) => theme.primary};
  color: inherit;
  cursor: pointer;
  outline: none;
  text-transform: capitalize;
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

export const Button = styled.button`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadiuses[1]};
  font-size: ${({ theme }) => theme.fontSizes[2]};
`;
