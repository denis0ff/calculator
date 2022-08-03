import styled from 'styled-components';

export const HomeContainer = styled.section`
  width: 100%;
  height: calc(100% - 80px);
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const HistoryContainer = styled.aside<{ showHistory: boolean }>`
  position: relative;
  padding: ${({ showHistory }) => (showHistory ? '0.5em' : '0')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: ${({ showHistory }) => (showHistory ? '35%' : '0')};
  font-size: 20px;
  border-left: 2px solid ${({ theme }) => theme.config.border};
`;

export const HistoryButton = styled.button`
  position: absolute;
  left: -6px;
  font-size: 34px;
  width: 10px;
  height: 50px;
  border-radius: 5px;
  top: calc(50% - 50px);
`;
