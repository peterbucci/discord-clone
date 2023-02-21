import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  color: ${({ theme }) => theme.white};
  z-index: 1000;
`;

export const Sidebar = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1 0 218px;
  box-sizing: border-box;
  z-index: 1;
`;

export const SidebarScroller = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  flex: 1 0 auto;
  padding-right: 8px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  overflow: hidden scroll;
`;

export const SidebarNav = styled.nav`
  padding: 60px 6px 60px 20px;
  width: 218px;
  box-sizing: border-box;
`;

export const SidebarCategory = styled.div`
  flex-shrink: 0;
  padding: 6px 10px;
  padding-top: 0;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.channelsDefault};
  overflow: hidden;
`;

export const SidebarItem = styled.div`
  position: relative;
  flex-shrink: 0;
  margin-bottom: 2px;
  padding: 6px 10px;
  background-color: ${({ theme, selected }) =>
    selected ? theme.backgroundModifierSelected : "inherit"};
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: ${({ theme, selected }) =>
    selected ? theme.white : theme.interactiveNormal};
  font-size: 16px;
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.backgroundModifierHover};
    color: ${({ theme }) => theme.textNormal};
  }
  &:active {
    background-color: ${({ theme }) => theme.backgroundModifierSelected};
    color: ${({ theme }) => theme.white};
  }
`;

export const SidebarDivider = styled.div`
  margin: 8px 10px;
  height: 1px;
  background-color: ${({ theme }) => theme.backgroundModifierAccent};
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex: 1 1 800px;
  background-color: ${({ theme }) => theme.backgroundPrimary};
`;

export const ContentTransitionWrap = styled.div`
  flex: 1;
  height: 100%;
`;

export const ContentRegionScroll = styled.div`
  position: static;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding-right: 0px;
  height: 100%;
  overflow-x: hidden;
  overflow: hidden scroll;
`;

export const ContentColumn = styled.div`
  position: relative;
  flex: 1 1 auto;
  max-width: 740px;
  min-width: 460px;
  min-height: 100%;
  padding: 60px 40px 80px;
`;

export const ToolsContainer = styled.div`
  position: relative;
  flex: 0 0 36px;
  margin-right: 21px;
  padding-top: 60px;
  width: 60px;
  box-sizing: border-box;
`;

export const Tools = styled.div`
  position: fixed;
`;

export const Close = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.interactiveNormal};
  cursor: default;
  &:hover {
    color: ${({ theme }) => theme.textNormal};
    & > :first-child {
      background-color: ${({ theme }) => theme.backgroundModifierHover};
    }
  }
  &:active {
    color: ${({ theme }) => theme.white};
    & > :first-child {
      background-color: ${({ theme }) => theme.backgroundModifierActive};
      transform: translateY(1px);
    }
  }
`;

export const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 36px;
  width: 36px;
  height: 36px;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  cursor: pointer;
`;

export const CloseKeybind = styled.div`
  margin-top: 8px;
  font-weight: 600;
  font-size: 13px;
  text-align: center;
`;
