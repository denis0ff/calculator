import styled from 'styled-components';

export const KeypadContainer = styled.article`
  margin-top: 1em;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-items: center;
  gap: 1em;
`;

export const KeypadButton = styled.button`
  width: 80px;
  height: 80px;
  font-size: 32px;
  border-radius: 24px;
  border: 1px solid #625858;
  cursor: pointer;
  background-color: #fdd1d1;
  &:hover {
    border-color: #000;
    background-color: #eee;
  }
`;
