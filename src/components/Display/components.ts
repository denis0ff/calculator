import styled from 'styled-components';

export const DisplayContainer = styled.article`
  margin-left: 10px;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 100px;
  font-size: 32px;
  border-bottom: 2px solid;

  & p:first-child {
    font-size: 16px;
  }
`;
