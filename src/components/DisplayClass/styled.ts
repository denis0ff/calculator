import styled from 'styled-components';

export const DisplayContainer = styled.article`
  margin-left: ${({ theme }) => theme.spaces[2]};
  padding: ${({ theme }) => `${theme.spaces[0]} ${theme.spaces[4]}`};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 100px;
  border-bottom: ${({ theme }) => theme.blockBorder};

  & :first-child {
    height: ${({ theme }) => theme.fontSizes[2]};
    font-size: ${({ theme }) => theme.fontSizes[2]};
  }

  & :last-child {
    height: ${({ theme }) => theme.fontSizes[5]};
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }
`;
