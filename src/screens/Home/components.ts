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
