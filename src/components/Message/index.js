import { forwardRef } from "react";
import {
  Avatar,
  Button,
  ButtonsInnerContainer,
  ButtonsOuterContainer,
  ButtonsWrapper,
  Content,
  EditedTimestamp,
  EditedTimestampHover,
  Header,
  HeaderSpan,
  Leaf,
  ListItem,
  OriginalMessage,
  OriginalSender,
  Paragraph,
  Reply,
  ReplyAvatar,
  Text,
  Timestamp,
  Wrapper,
} from "./styles/message";

export default function Message({ children, ...restProps }) {
  return <ListItem {...restProps}>{children}</ListItem>;
}

Message.Wrapper = ({ children, ...restProps }) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Message.Reply = ({ children, ...restProps }) => {
  return <Reply {...restProps}>{children}</Reply>;
};

Message.ReplyAvatar = forwardRef(({ image, ...restProps }, ref) => {
  return (
    <ReplyAvatar
      ref={ref}
      src={image ? `/assets/${image}.png` : "/assets/default_avatar.png"}
      {...restProps}
    />
  );
});

Message.OriginalSender = forwardRef(({ children, ...restProps }, ref) => {
  return (
    <OriginalSender ref={ref} {...restProps}>
      {children}
    </OriginalSender>
  );
});

Message.OriginalMessage = ({ children, ...restProps }) => {
  return <OriginalMessage {...restProps}>{children}</OriginalMessage>;
};

Message.Content = ({ children, ...restProps }) => {
  return <Content {...restProps}>{children}</Content>;
};

Message.Avatar = forwardRef(({ image, ...restProps }, ref) => {
  return (
    <Avatar
      ref={ref}
      src={image ? `/assets/${image}.png` : "/assets/default_avatar.png"}
      {...restProps}
    />
  );
});

Message.Header = ({ children, ...restProps }) => {
  return <Header {...restProps}>{children}</Header>;
};

Message.HeaderSpan = forwardRef(({ children, ...restProps }, ref) => {
  return (
    <HeaderSpan ref={ref} {...restProps}>
      {children}
    </HeaderSpan>
  );
});

Message.Timestamp = ({ children, ...restProps }) => {
  return <Timestamp {...restProps}>{children}</Timestamp>;
};

Message.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

Message.Paragraph = ({ children, ...restProps }) => {
  return <Paragraph {...restProps}>{children}</Paragraph>;
};

Message.Leaf = ({ children, ...restProps }) => {
  return <Leaf {...restProps}>{children}</Leaf>;
};

Message.Buttons = ({ children, isHeader, ...restProps }) => {
  return (
    <ButtonsOuterContainer {...restProps}>
      <ButtonsInnerContainer isHeader={isHeader}>
        <ButtonsWrapper>{children}</ButtonsWrapper>
      </ButtonsInnerContainer>
    </ButtonsOuterContainer>
  );
};

Message.Button = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>;
};

Message.EditedTimestamp = ({ children, ...restProps }) => {
  return <EditedTimestamp {...restProps}>{children}</EditedTimestamp>;
};

Message.EditedTimestampHover = ({ children, ...restProps }) => {
  return <EditedTimestampHover {...restProps}>{children}</EditedTimestampHover>;
};
