import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: ${({ visible }) => (visible ? visible.top - 40 + "px" : "0")};
  left: ${({ visible }) => (visible ? visible.left + "px" : "0")};
  display: flex;
  flex-direction: row;
  height: ${({ visible }) => (visible ? "32px" : "0")};
  background-color: ${({ theme }) => theme.backgroundHover};
  border-radius: 4px;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  overflow: hidden;
  z-index: 100;
`;

export const Button = styled.button`
  all: unset;
  height: 32px;
  width: 32px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.backgroundModifierAccent};
    & svg path {
      fill: ${({ theme }) => theme.white};
    }
  }
`;

export const IconWrapper = styled.div`
  margin: 0 auto;
  width: 20px;
  height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const VerticalDivider = styled.div`
  border-left: ${({ theme }) => `1px solid hsl(${theme.white500HSL} / 0.06)`};
  display: inline-block;
  height: 20px;
  margin: 6px;
`;
