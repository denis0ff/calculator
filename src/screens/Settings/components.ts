import styled from 'styled-components';

export const SettingsWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
`;

export const Select = styled.select`
  margin-top: 20px;
  padding: 0.6em 1.4em 0.5em 0.8em;
  display: block;
  font-size: 16px;
  font-weight: 600;
  width: 200px;
  border: 1px solid ${({ theme }) => theme.config.border};
  border-radius: 0.5em;
  appearance: none;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
  background-color: ${({ theme }) => theme.config.primary};
  color: inherit;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: ${({ theme }) => theme.config.secondary};
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  width: 200px;
  height: 40px;
  border-radius: 0.5em;
  font-size: 16px;
`;