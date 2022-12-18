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
  background-color: rgb(32, 34, 37);
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
  background-color: ${(props) =>
    props.selected ? props.color ?? "#6370f4" : "#36393f"};
  border-radius: ${(props) => (props.selected ? "15px" : "99%")};
  color: ${(props) => (props.selected ? "#ffffff" : "rgb(220, 221, 222)")};
  font-size: 16px;
  font-weight: 500;
  overflow: hidden;
  cursor: pointer;
  transition: all 150ms ease-out 0s;
  &:hover {
    background-color: ${(props) => props.color ?? "#6370f4"};
    border-radius: 15px;
    color: #ffffff;
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
  margin: 0 0 8px 0;
  width: 50%;
  height: 2px;
  background-color: rgba(79, 84, 92, 0.48);
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
  background-color: #ffffff;
  border-radius: 0 4px 4px 0;
  transition: all 150ms ease-out 0s;
`;
