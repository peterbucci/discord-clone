import {
  AvatarWrapper,
  Avatar,
  Container,
  Username,
  Description,
  Strong,
  Toolbar,
  NoServers,
  Divider,
  Button,
  ButtonText,
  FriendRequestSent,
} from "./styles/conversation_head";

export default function ConversationHead({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

ConversationHead.Avatar = ({ image, ...restProps }) => {
  return (
    <AvatarWrapper>
      <Avatar
        src={image ? `/assets/${image}.png` : "/assets/default_avatar.png"}
        {...restProps}
      />
    </AvatarWrapper>
  );
};

ConversationHead.Username = ({ children, ...restProps }) => {
  return <Username {...restProps}>{children}</Username>;
};

ConversationHead.Description = ({ children, ...restProps }) => {
  return <Description {...restProps}>{children}</Description>;
};

ConversationHead.Strong = ({ children, ...restProps }) => {
  return <Strong {...restProps}>{children}</Strong>;
};

ConversationHead.Toolbar = ({ children, ...restProps }) => {
  return <Toolbar {...restProps}>{children}</Toolbar>;
};

ConversationHead.NoServers = ({ children, ...restProps }) => {
  return <NoServers {...restProps}>{children}</NoServers>;
};

ConversationHead.Divider = (props) => {
  return <Divider {...props} />;
};

ConversationHead.Button = ({ children, ...restProps }) => {
  return (
    <Button {...restProps}>
      <ButtonText>{children}</ButtonText>
    </Button>
  );
};

ConversationHead.FriendRequestSent = ({ children, ...restProps }) => {
  return <FriendRequestSent {...restProps}>{children}</FriendRequestSent>;
};
