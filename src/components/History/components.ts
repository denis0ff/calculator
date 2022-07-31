import styled from 'styled-components';

export const HistoryContainer = styled.aside`
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 35%;
  font-size: 26px;
  border-left: 2px solid #000;
  border-right: 2px solid #000;
`;

export const HistoryList = styled.ul`
  width: 100%;
  margin-top: 10px;
  overflow: auto;

  & > li {
    font-weight: 600;
  }
`;

export const HistoryTitle = styled.h3`
  margin-bottom: 10px;
`;

export const HistoryButton = styled.button`
  width: 100%;
  border: 1px solid #625858;
  background: #fdd1d1;
  border-radius: 10px;
  font-size: 0.7em;
  cursor: pointer;
  &:hover {
    border-color: #000;
    background-color: #eee;
  }
`;
