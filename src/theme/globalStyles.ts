import { createGlobalStyle } from 'styled-components';

type ThemeParams = { theme: { config: { [x: string]: string } } };

export default createGlobalStyle<ThemeParams>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.config.font};
    transition: 100ms;
    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.config.secondary};
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.config.primary};
    }
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    & > #root {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  #root {
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.config.body};
    color: ${({ theme }) => theme.config.fontColor};
  }
`;
