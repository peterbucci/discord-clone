import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: ${({ visible }) => (visible ? visible.top - 40 + "px" : "0")};
  left: ${({ visible }) => (visible ? visible.left + "px" : "0")};
  display: flex;
  flex-direction: row;
  height: 32px;
  background-color: #18191c;
  border-radius: 4px;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  z-index: 100;
`;

export const Button = styled.button`
  all: unset;
  height: 32px;
  width: 32px;
  cursor: pointer;
  &:hover {
    background-color: rgba(79, 84, 92, 0.48);
    & svg path {
      fill: #ffffff;
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
  border-left: 1px solid rgba(255, 255, 255, 0.06);
  display: inline-block;
  height: 20px;
  margin: 6px;
`;
