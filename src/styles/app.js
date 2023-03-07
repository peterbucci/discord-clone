import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    height: 100%;
  }
  body {
    margin: 0;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #2a2b32;
  }
  #root {
    height: 100%;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

export const AnimatedContainer = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundTertiary};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  max-height: 100%;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  overflow: hidden;
`;
