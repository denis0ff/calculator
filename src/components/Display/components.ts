import styled from 'styled-components';

export const DisplayContainer = styled.article`
  margin-left: 10px;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 100px;
  border-bottom: 2px solid ${({ theme }) => theme.config.border};

  & :first-child {
    height: 16px;
    font-size: 16px;
  }

  & :last-child {
    height: 32px;
    font-size: 32px;
  }
`;
