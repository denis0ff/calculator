import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  padding: 5px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  background-color: ${({ theme }) => theme.config.colors.error};
`;
