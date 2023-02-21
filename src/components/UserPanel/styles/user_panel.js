import styled from "styled-components";

export const Container = styled.div`
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
