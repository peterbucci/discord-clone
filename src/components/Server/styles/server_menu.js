import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  user-select: none;
`;

export const Scroller = styled.div`
  position: relative;
  flex: 1 1 auto;
  padding-right: 0px;
  padding: 6px 8px;
  min-height: 0;
  box-sizing: border-box;
  overflow: hidden scroll;
`;

export const Group = styled.div``;

export const Separator = styled.div`
  box-sizing: border-box;
  margin: 4px;
  border-bottom: ${({ theme }) =>
    `1px solid ${theme.backgroundModifierAccent}`};
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 8px;
  margin: 2px 0;
  min-height: 32px;
  box-sizing: border-box;
  border-color: ${({ theme }) => theme.interactiveNormal};
  border-radius: 2px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme, color }) =>
    color ? theme[color] : theme.interactiveNormal};
  cursor: pointer;
  & path {
    fill: ${({ theme, color }) =>
      color ? theme[color] : theme.interactiveNormal};
  }
  &:hover {
    background-color: ${({ theme, background }) =>
      background ? theme[background] : theme.brand560};
    color: ${({ theme }) => theme.white};
    & path {
      fill: ${({ theme }) => theme.white};
    }
  }
`;

export const Label = styled.div`
  flex: 1 1 auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const IconWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 0 0 auto;
  margin-left: 8px;
  height: 18px;
  width: 18px;
`;
