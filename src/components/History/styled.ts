import styled from 'styled-components';

export const HistoryList = styled.ul`
  margin-top: ${({ theme }) => theme.spaces[2]};
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  overflow: auto;
  & > li {
    padding: ${({ theme }) => `${theme.spaces[1]} ${theme.spaces[0]}`};
    margin-right: ${({ theme }) => theme.spaces[1]};
    border-bottom: ${({ theme }) => theme.defaultBorder};
    word-break: break-word;
  }
`;

export const HistoryTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spaces[2]};
`;

export const HistoryButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spaces[1]};
  border-radius: ${({ theme }) => theme.borderRadiuses[1]};
  font-size: ${({ theme }) => theme.fontSizes[2]};
`;
