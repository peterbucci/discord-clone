import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 12px 16px;
  height: 100%;
  box-sizing: border-box;
  background-color: ${({ theme, menuOpen }) =>
    menuOpen ? theme.backgroundModifierHover : "inherit"};
  font-weight: 500;
  color: ${({ theme }) => theme.white};
  transition: background-color 0.1s linear;
  z-index: 3;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.backgroundModifierHover};
  }
`;

export const ServerName = styled.div`
  flex: 1;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  z-index: 1;
`;

export const IconWrapper = styled.div`
  position: relative;
  z-index: 4;
  & svg {
    position: relative;
    top: 3px;
    display: flex;
    margin-left: 4px;
    z-index: 2;
    opacity: 0.8;
    transition: transform 0.2s ease-out, stroke-dasharray 0.2s ease-out,
      -webkit-transform 0.2s ease-out;
    ${({ menuOpen }) =>
      menuOpen && "transform: translate3d(0, -3px, 0) rotate(-90deg);"}
  }
  & svg path {
    color: ${({ theme }) => theme.white};
    stroke-width: 2px;
    stroke-dashoffset: 1;
    transition: stroke-dasharray 0.2s ease;
    ${({ menuOpen }) => {
      return menuOpen ? "stroke-dasharray: 14;" : "stroke-dasharray: 7;";
    }}
  }
`;
