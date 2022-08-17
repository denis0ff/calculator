import styled from 'styled-components';

export const HomeContainer = styled.section`
  width: 100%;
  height: calc(100% - ${({ theme }) => theme.headerHeight});
  padding: ${({ theme }) => theme.spaces[1]};
  display: flex;
  justify-content: space-between;
`;

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const HistoryContainer = styled.aside<{ showHistory: boolean }>`
  position: relative;
  padding: ${({ showHistory, theme }) => (showHistory ? theme.spaces[2] : theme.spaces[0])};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: ${({ showHistory }) => (showHistory ? '35%' : '0')};
  font-size: ${({ theme }) => theme.fontSizes[3]};
  border-left: ${({ theme }) => theme.blockBorder};
`;

export const HistoryButton = styled.button`
  position: absolute;
  top: calc(50% - ${({ theme }) => theme.spaces[4]} * 2);
  left: calc(-${({ theme }) => theme.blockBorderWidth} - ${({ theme }) => theme.spaces[1]});
  padding: ${({ theme }) => `${theme.spaces[4]} ${theme.spaces[1]}`};
  border: ${({ theme }) => theme.defaultBorder};
  border-radius: ${({ theme }) => theme.borderRadiuses[1]};
`;
