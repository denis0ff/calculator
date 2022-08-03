import styled from 'styled-components';

export const HistoryList = styled.ul`
  margin-top: 10px;
  width: 100%;
  font-size: 0.9em;
  overflow: auto;
  & > li {
    padding: 5px 0;
    margin-right: 5px;
    border-bottom: 1px solid ${({ theme }) => theme.config.border};
    word-break: break-word;
  }
`;

export const HistoryTitle = styled.h3`
  margin-bottom: 10px;
`;

export const HistoryButton = styled.button`
  width: 100%;
  padding: 0.2em;
  border-radius: 5px;
  font-size: 0.7em;
`;
