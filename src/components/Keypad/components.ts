import styled from 'styled-components';

export const KeypadContainer = styled.article`
  margin-top: 1em;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-items: center;
  gap: 1em;
`;

export const KeypadButton = styled.button`
  width: 80px;
  height: 80px;
  font-size: 32px;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.config.border};
  cursor: pointer;
  background: ${({ theme }) => theme.config.primary};
  color: inherit;
  &:hover {
    border-color: ${({ theme }) => theme.config.primary};
    background-color: ${({ theme }) => theme.config.secondary};
  }
`;
