import styled from "styled-components";

export const Container = styled.aside`
  flex-shrink: 0;
  width: 340px;
  background-color: ${({ theme }) => theme.backgroundSecondaryAlt};
  overflow-y: auto;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border-radius: 8px 8px 0 0;
  color: ${({ theme }) => theme.white};
`;

export const Header = styled.div`
  position: relative;
`;

export const Banner = styled.svg`
  min-width: 340px;
  min-height: ${({ absolutePosition }) =>
    absolutePosition ? "60px" : "120px"};
  overflow-clip-margin: content-box;
  overflow: hidden;
`;

export const BannerMask = styled.mask``;

export const BannerMaskRect = styled.rect`
  width: 100%;
  height: 100%;
  fill: ${({ theme }) => theme.white};
`;

export const BannerMaskCircle = styled.circle`
  fill: ${({ theme }) => theme.black};
  cx: 58;
  cy: ${({ absolutePosition }) =>
    absolutePosition ? "calc(112 - 60)" : "112"};
  r: 46;
`;

export const BannerForeignObject = styled.foreignObject`
  width: 100%;
  height: 100%;
  overflow: visible;
`;

export const BannerInner = styled.div`
  background-color: rgb(116, 124, 140);
  height: ${({ absolutePosition }) => (absolutePosition ? "60px" : "120px")};
  width: 100%;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  z-index: 100;
  top: ${({ absolutePosition }) => (absolutePosition ? "12px" : "72px")};
  left: 18px;
`;

export const BadgeListGroup = styled.div`
  display: flex;
  justify-content: center;
  margin: 8px 16px 0 0;
  min-height: 28px;
`;

export const BadgeList = styled.div`
  margin-left: auto;
  max-width: 198px;
  width: fit-content;
  height: 100%;
`;

export const UserPanelOverlay = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 16px;
  padding: 0 12px 12px;
  background-color: ${({ theme }) => theme.backgroundHover};
  border-radius: 8px;
  overflow: hidden;
`;

export const UserPanelSection = styled.div`
  padding-top: 12px;
`;

export const UserPanelSectionHead = styled.h2`
  all: unset;
  display: flex;
  margin-bottom: 6px;
  line-height: 16px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.02em;
`;

export const UserPanelSectionText = styled.div`
  font-size: 14px;
  line-height: 18px;
`;

export const UserPanelDivider = styled.div`
  position: sticky;
  top: 0;
  margin-top: 12px;
  height: 1px;
  background-color: ${({ theme }) => theme.backgroundModifierAccent};
`;

export const UserText = styled.div`
  font-weight: 600;
  display: block;
  font-size: 19px;
  line-height: 24px;
  word-break: break-word;
  white-space: normal;
`;

export const Username = styled.span`
  overflow: auto;
  word-break: break-all;
  text-overflow: unset;
`;

export const UserTag = styled.span`
  color: ${({ theme }) => theme.interactiveNormal};
  vertical-align: top;
`;

export const CustomStatus = styled.div`
  position: relative;
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  box-sizing: border-box;
  overflow-wrap: break-word;
`;

export const CustomStatusEmoji = styled.img`
  display: block;
  margin: -1px 4px -1px 0;
  float: left;
  width: 20px;
  height: 20px;
`;

export const CustomStatusText = styled.span``;

export const Note = styled.div``;

export const NoteEdit = styled.textarea`
  all: unset;
  padding: 4px;
  height: ${({ lines }) => (lines ? lines * 14 + 36 + "px" : "36px")};
  max-height: 88px;
  width: 100%;
  line-height: 14px;
  font-size: 12px;
  color: ${({ theme }) => theme.white};
  box-sizing: border-box;
  &::placeholder {
    color: ${({ theme }) => theme.interactiveNormal};
  }
`;
