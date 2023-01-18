import { forwardRef } from "react";
import {
  AvatarWrapper,
  BadgeList,
  BadgeListGroup,
  Banner,
  BannerForeignObject,
  BannerInner,
  BannerMask,
  BannerMaskCircle,
  BannerMaskRect,
  Container,
  CustomStatus,
  CustomStatusEmoji,
  CustomStatusText,
  Header,
  InnerContainer,
  Note,
  NoteEdit,
  Username,
  UserPanelDivider,
  UserPanelOverlay,
  UserPanelSection,
  UserPanelSectionHead,
  UserPanelSectionText,
  UserTag,
  UserText,
} from "./styles/profile_panel";

const ProfilePanel = forwardRef(({ children, ...restProps }, ref) => {
  return (
    <Container ref={ref} {...restProps}>
      <InnerContainer>{children}</InnerContainer>
    </Container>
  );
});

ProfilePanel.Header = ({ children, ...restProps }) => {
  return <Header {...restProps}>{children}</Header>;
};

ProfilePanel.Banner = ({ absolutePosition, ...restProps }) => {
  return (
    <Banner
      viewBox={`0 0 340 ${absolutePosition ? "60" : "120"}`}
      absolutePosition={absolutePosition}
      {...restProps}
    >
      <BannerMask id={`bannerMask${absolutePosition ? "Absolute" : ""}`}>
        <BannerMaskRect x="0" y="0" />
        <BannerMaskCircle absolutePosition={absolutePosition} />
      </BannerMask>
      <BannerForeignObject
        x="0"
        y="0"
        mask={`url(#bannerMask${absolutePosition ? "Absolute" : ""})`}
      >
        <BannerInner absolutePosition={absolutePosition} />
      </BannerForeignObject>
    </Banner>
  );
};

ProfilePanel.AvatarWrapper = ({ children, ...restProps }) => {
  return <AvatarWrapper {...restProps}>{children}</AvatarWrapper>;
};

ProfilePanel.BadgeListGroup = ({ children, ...restProps }) => {
  return <BadgeListGroup {...restProps}>{children}</BadgeListGroup>;
};

ProfilePanel.BadgeList = ({ children, ...restProps }) => {
  return <BadgeList {...restProps}>{children}</BadgeList>;
};

ProfilePanel.UserPanelOverlay = ({ children, ...restProps }) => {
  return <UserPanelOverlay {...restProps}>{children}</UserPanelOverlay>;
};

ProfilePanel.UserPanelSection = ({ children, ...restProps }) => {
  return <UserPanelSection {...restProps}>{children}</UserPanelSection>;
};

ProfilePanel.UserPanelSectionHead = ({ children, ...restProps }) => {
  return <UserPanelSectionHead {...restProps}>{children}</UserPanelSectionHead>;
};

ProfilePanel.UserPanelSectionText = ({ children, ...restProps }) => {
  return <UserPanelSectionText {...restProps}>{children}</UserPanelSectionText>;
};

ProfilePanel.UserPanelDivider = (props) => {
  return <UserPanelDivider {...props} />;
};

ProfilePanel.UserText = ({ children, ...restProps }) => {
  return <UserText {...restProps}>{children}</UserText>;
};

ProfilePanel.Username = ({ children, ...restProps }) => {
  return <Username {...restProps}>{children}</Username>;
};

ProfilePanel.UserTag = ({ children, ...restProps }) => {
  return <UserTag {...restProps}>{children}</UserTag>;
};

ProfilePanel.CustomStatus = ({ children, ...restProps }) => {
  return <CustomStatus {...restProps}>{children}</CustomStatus>;
};

ProfilePanel.CustomStatusEmoji = (props) => {
  return <CustomStatusEmoji {...props} draggable="false" />;
};

ProfilePanel.CustomStatusText = ({ children, ...restProps }) => {
  return <CustomStatusText {...restProps}>{children}</CustomStatusText>;
};

ProfilePanel.Note = ({ children, ...restProps }) => {
  return <Note {...restProps}>{children}</Note>;
};

ProfilePanel.NoteEdit = (props) => {
  return <NoteEdit {...props} />;
};

export default ProfilePanel;
