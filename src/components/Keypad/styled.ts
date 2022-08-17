import styled from 'styled-components';

export const KeypadContainer = styled.article`
  margin: ${({ theme }) => theme.spaces[3]};
  display: grid;
  grid-template-columns: repeat(5, ${({ theme }) => theme.keySize});
  align-items: center;
  justify-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spaces[3]};
`;

export const KeypadButton = styled.button`
  width: ${({ theme }) => theme.keySize};
  height: ${({ theme }) => theme.keySize};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  border-radius: ${({ theme }) => theme.borderRadiuses[3]};
`;
