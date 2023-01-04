import {
  Left,
  LeftHead,
  LeftBody,
  LeftGroup,
  LeftGroupHeader,
  LeftGroupHeaderText,
  LeftRow,
  ConversationIconWrapper,
  LeftFooter,
  UserInfoWrapper,
  AvatarWrapper,
  NameTag,
  NameTagRow,
  IconsWrapper,
  IconWrapper,
  Nav,
  LeftRowText,
  DeleteConversationIcon,
} from "./styles/channel_left";

export default function ChannelLeft({ children, ...restProps }) {
  return <Left {...restProps}>{children}</Left>;
}

ChannelLeft.Head = ({ children, ...restProps }) => {
  return <LeftHead {...restProps}>{children}</LeftHead>;
};

ChannelLeft.Body = ({ children, ...restProps }) => {
  return <LeftBody {...restProps}>{children}</LeftBody>;
};

ChannelLeft.Group = ({ children, ...restProps }) => {
  return <LeftGroup {...restProps}>{children}</LeftGroup>;
};

ChannelLeft.GroupHeader = ({ children, ...restProps }) => {
  return <LeftGroupHeader {...restProps}>{children}</LeftGroupHeader>;
};

ChannelLeft.GroupHeaderText = ({ children, ...restProps }) => {
  return <LeftGroupHeaderText {...restProps}>{children}</LeftGroupHeaderText>;
};

ChannelLeft.Row = ({ children, url, ...restProps }) => {
  return url ? (
    <Nav to={url}>
      <LeftRow {...restProps}>{children}</LeftRow>
    </Nav>
  ) : (
    <LeftRow {...restProps}>{children}</LeftRow>
  );
};

ChannelLeft.ConversationIconWrapper = ({ children, ...restProps }) => {
  return (
    <ConversationIconWrapper {...restProps}>{children}</ConversationIconWrapper>
  );
};

ChannelLeft.RowText = ({ children, url, ...restProps }) => {
  return <LeftRowText {...restProps}>{children}</LeftRowText>;
};

ChannelLeft.DeleteConversationIcon = ({ children, url, ...restProps }) => {
  return (
    <DeleteConversationIcon {...restProps}>{children}</DeleteConversationIcon>
  );
};

ChannelLeft.Footer = ({ children, ...restProps }) => {
  return <LeftFooter {...restProps}>{children}</LeftFooter>;
};

ChannelLeft.UserInfoWrapper = ({ children, ...restProps }) => {
  return <UserInfoWrapper {...restProps}>{children}</UserInfoWrapper>;
};

ChannelLeft.AvatarWrapper = ({ children, ...restProps }) => {
  return <AvatarWrapper {...restProps}>{children}</AvatarWrapper>;
};

ChannelLeft.NameTag = ({ children, ...restProps }) => {
  return <NameTag {...restProps}>{children}</NameTag>;
};

ChannelLeft.NameTagRow = ({ children, ...restProps }) => {
  return <NameTagRow {...restProps}>{children}</NameTagRow>;
};

ChannelLeft.IconsWrapper = ({ children, ...restProps }) => {
  return <IconsWrapper {...restProps}>{children}</IconsWrapper>;
};

ChannelLeft.IconWrapper = ({ children, ...restProps }) => {
  return <IconWrapper {...restProps}>{children}</IconWrapper>;
};
