import styled from "styled-components";
import { Link } from "react-router-dom";

export const Channels = styled.ul`
  position: relative;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Channel = styled.li`
  position: relative;
  padding: 1px 0;
  transition: opacity 0.2s ease-in-out;
`;

export const ChannelContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
  margin-left: 8px;
  box-sizing: border-box;
  background-color: ${({ theme, selected }) =>
    selected ? theme.backgroundModifierSelected : "inherit"};
  border-radius: 4px;
  & a :nth-child(2) {
    color: ${({ theme, selected }) => (selected ? theme.white : "inherit")};
  }
  &:hover {
    background-color: ${({ theme, selected }) =>
      !selected
        ? theme.backgroundModifierHover
        : theme.backgroundModifierSelected};
    & > :nth-child(2) div {
      display: block;
    }
    & a :nth-child(2) {
      color: ${({ theme, selected }) =>
        !selected ? theme.textNormal : theme.white};
    }
  }
`;

export const ChannelLink = styled(Link)`
  all: unset;
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 0;
  min-width: 0;
  color: ${({ theme }) => theme.channelsDefault};
  box-sizing: border-box;
  cursor: pointer;
`;

export const ChannelLinkText = styled.div`
  flex: 1 1 auto;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  white-space: normal;
`;

export const ChannelLinkIcon = styled.div`
  position: relative;
  display: block;
  margin-right: 6px;
  width: 20px;
  height: 20px;
`;

export const ChannelIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
`;

export const ChannelIcon = styled.div`
  display: ${({ selected }) => (selected ? "block" : "none")};
  position: relative;
  margin-left: 4px;
  padding: 6px 0;
  color: ${({ theme }) => theme.channelsDefault};
  line-height: 0;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.textNormal};
  }
`;

export const Category = styled.li`
  position: relative;
  padding-top: 16px;
`;

export const IconVisibility = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 8px;
  padding-left: 16px;
  height: 24px;
  box-sizing: border-box;
  cursor: pointer;
  color: ${({ theme }) => theme.channelsDefault};
  &:hover {
    color: ${({ theme }) => theme.textNormal};
    & h3 {
      color: ${({ theme }) => theme.textNormal};
    }
  }
`;

export const CategoryContent = styled.div`
  flex: 1 1 auto;
  overflow: hidden;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export const CategoryIcon = styled.div`
  position: absolute;
  left: 2px;
  top: 6px;
  display: flex;
  width: 12px;
  height: 12px;
`;

export const CategoryName = styled.h3`
  flex: 1 1 auto;
  box-sizing: border-box;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.02em;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  color: ${({ theme }) => theme.channelsDefault};
`;
