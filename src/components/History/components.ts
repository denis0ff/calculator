import styled from 'styled-components';

export const HistoryContainer = styled.aside`
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 35%;
  font-size: 20px;
  border-left: 2px solid ${({ theme }) => theme.config.border};
`;

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
  border: 1px solid ${({ theme }) => theme.config.border};
  background: ${({ theme }) => theme.config.primary};
  border-radius: 5px;
  font-size: 0.7em;
  color: inherit;
  cursor: pointer;
  &:hover {
    border-color: ${({ theme }) => theme.config.primary};
    background-color: ${({ theme }) => theme.config.secondary};
  }
`;
