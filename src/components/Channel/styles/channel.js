import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 240px;
  height: 100%;
  background-color: #2f3136;
  color: #ffffff;
`;

export const LeftHead = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  height: 48px;
  box-shadow: rgba(4, 4, 5, 0.2) 0px 1px 0px;
`;

export const LeftBody = styled.div`
  flex: 1;
  margin-top: 8px;
  padding-right: 8px;
  overflow-y: auto;
`;

export const LeftGroup = styled.div``;

export const LeftGroupHeader = styled.h2`
  display: flex;
  margin: 0;
  padding: 18px 8px 4px 18px;
  font-size: 12px;
  font-weight: 600;
  color: #96989d;
  cursor: default;
  & svg {
    margin-right: 2px;
    &:hover {
      fill: #dcddde;
    }
  }
  &:hover {
    color: #dcddde;
  }
`;

export const LeftGroupHeaderText = styled.span`
  flex: 1;
`;

export const LeftRow = styled.div`
  display: flex;
  align-items: center;
  height: 42px;
  margin: 1px 8px;
  padding: 0 8px;
  background-color: ${(props) =>
    props.selected ? "rgba(79, 84, 92, 0.6)" : "auto"};
  border-radius: 4px;
  color: ${(props) => (props.selected ? "#dcddde" : "#96989D")};
  font-family: "gg sans", "Noto Sans", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 16px;
  font-weight: 500;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: ${(props) => (props.disabled ? "auto" : "pointer")};
  &:hover {
    background-color: ${(props) =>
      props.selected || props.disabled ? "auto" : "rgba(79, 84, 92, 0.4)"};
    color: #dcddde;
    & .iconPath {
      fill: #dcddde;
    }
  }
  &:active {
    background-color: ${(props) =>
      props.disabled ? "auto" : "rgba(79, 84, 92, 0.7)"};
    color: #ffffff;
    & .iconPath {
      fill: #ffffff;
    }
  }
  & > svg:first-child {
    margin: 4px;
    margin-right: 16px;
  }
`;

export const LeftFooter = styled.div`
  flex-shrink: 0;
  height: 53px;
  background-color: #292b2f;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  background-color: #32353b;
  color: #ffffff;
`;

export const RightHead = styled.div`
  flex-shrink: 0;
  height: 48px;
  box-shadow: rgba(4, 4, 5, 0.2) 0px 1px 0px;
`;

export const RightBody = styled.div`
  display: flex;
  flex: 1;
  height: calc(100% - 48px);
`;

export const RightMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const RightMain = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const RightMainFooter = styled.div`
  flex: 0 0 68px;
`;

export const RightSidebar = styled.div`
  flex-shrink: 0;
  width: 340px;
  background-color: #292b2f;
  overflow-y: auto;
`;

export const FriendIconWrapper = styled.div`
  margin-right: 12px;
  width: 32px;
  height: 32px;
`;

export const Nav = styled(Link)`
  all: unset;
`;
