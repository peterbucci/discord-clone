import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 12px 0 0 0;
  width: 72px;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundTertiary};
  list-style: none;
`;
export const Item = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
  width: 100%;
`;
export const Nav = styled(Link)`
  all: unset;
`;
export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: ${({ selected, color, theme }) =>
    selected ? color ?? theme.brand : theme.backgroundPrimary};
  border-radius: ${(props) => (props.selected ? "15px" : "99%")};
  color: ${({ selected, theme }) =>
    selected ? theme.white : theme.textNormal};
  font-size: 16px;
  font-weight: 500;
  overflow: hidden;
  cursor: pointer;
  transition: all 150ms ease-out 0s;
  &:hover {
    background-color: ${({ color, theme }) => color ?? theme.brand};
    border-radius: 15px;
    color: ${({ theme }) => theme.white};
    & svg > path {
      fill: ${(props) => props.fillStyleHover ?? "auto"};
    }
  }
  &:hover + div {
    & div {
      height: 20px;
    }
  }
`;
export const HorizontalLine = styled.div`
  width: 32px;
  height: 2px;
  border-radius: 1px;
  background-color: ${({ theme }) => theme.backgroundModifierAccent};
`;
export const PillContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 8px;
  height: 48px;
`;

export const Pill = styled.div`
  position: inline-block;
  width: 8px;
  height: ${(props) =>
    props.selected ? "40px !important" : props.height ?? "0px"};
  margin-left: -4px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 0 4px 4px 0;
  transition: all 150ms ease-out 0s;
`;
