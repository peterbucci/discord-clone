import styled from "styled-components";
import { Link } from "react-router-dom";

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.white};
`;

export const LeftHead = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  height: 48px;
  box-shadow: ${({ theme }) => theme.elevationLow};
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
  color: ${({ theme }) => theme.channelsDefault};
  cursor: default;
  & svg {
    margin-right: 2px;
    cursor: pointer;
    &:hover {
      fill: ${({ theme }) => theme.textNormal};
    }
  }
  &:hover {
    color: ${({ theme }) => theme.textNormal};
  }
`;

export const LeftGroupHeaderText = styled.span`
  flex: 1;
`;

export const LeftRow = styled.div`
  display: flex;
  align-items: center;
  height: 42px;
  margin: ${({ channel }) => (channel ? "1px 0 1px 8px" : "1px 8px")};
  padding: ${({ channel }) => (channel ? "0" : "0 8px")};
  background-color: ${({ selected, theme }) =>
    selected ? theme.backgroundModifierSelected : "auto"};
  border-radius: 4px;
  color: ${({ selected, theme }) =>
    selected ? theme.textNormal : theme.channelsDefault};
  font-family: "gg sans", "Noto Sans", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 16px;
  font-weight: 500;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: ${(props) => (props.disabled ? "auto" : "pointer")};
  &:hover {
    background-color: ${({ selected, disabled, theme }) =>
      selected || disabled ? "auto" : theme.backgroundModifierHover};
    color: ${({ theme }) => theme.textNormal};
    & .iconPath {
      fill: ${({ theme }) => theme.textNormal};
    }
    & .deleteConversationIcon {
      opacity: 1;
    }
  }
  &:active {
    background-color: ${({ disabled, theme }) =>
      disabled ? "auto" : theme.backgroundModifierActive};
    color: ${({ theme }) => theme.white};
    & .iconPath {
      fill: ${({ theme }) => theme.white};
    }
  }
  & > svg:first-child {
    margin: 4px;
    margin-right: 16px;
  }
`;

export const ConversationIconWrapper = styled.div`
  margin-right: 12px;
  padding-left: 8px;
  width: 32px;
  height: 32px;
  box-sizing: content-box;
`;

export const LeftRowText = styled.span`
  flex: 1;
  padding-right: 8px;
`;

export const DeleteConversationIcon = styled.div`
  width: 16px;
  height: 16px;
  opacity: 0.7;
  margin: 2px;
  padding-right: 8px;
  box-sizing: content-box;
  opacity: 0;
  &:hover path {
    fill: ${({ theme }) => theme.white};
  }
`;

export const LeftFooter = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 0 8px;
  height: 53px;
  background-color: ${({ theme }) => theme.backgroundSecondaryAlt};
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 8px 0 -2px;
  padding-left: 2px;
  min-width: 120px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.backgroundModifierSelected};
  }
`;

export const AvatarWrapper = styled.div`
  width: 32px;
  height: 32px;
`;

export const NameTag = styled.div`
  margin-right: 4px;
  padding: 4px 0 4px 8px;
  font-family: "gg sans", "Noto Sans", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
`;

export const NameTagRow = styled.div`
  line-height: 15.5px;
  font-size: ${({ fontSize }) => fontSize ?? "14px"};
  font-weight: ${({ weight }) => weight ?? "auto"};
  color: ${({ color }) => color ?? "auto"};
`;

export const IconsWrapper = styled.div`
  display: flex;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.backgroundModifierSelected};
    & .iconPath {
      fill: ${({ theme }) => theme.textNormal};
    }
  }
`;

export const Nav = styled(Link)`
  all: unset;
`;
