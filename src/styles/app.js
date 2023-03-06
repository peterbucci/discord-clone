import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

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
