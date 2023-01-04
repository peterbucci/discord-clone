import {
  Avatar,
  Header,
  HeaderSpan,
  ListItem,
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

Message.Avatar = ({ image, ...restProps }) => {
  return <Avatar src={image ?? "/assets/default_avatar.png"} {...restProps} />;
};

Message.Header = ({ children, ...restProps }) => {
  return <Header {...restProps}>{children}</Header>;
};

Message.HeaderSpan = ({ children, ...restProps }) => {
  return <HeaderSpan {...restProps}>{children}</HeaderSpan>;
};

Message.Timestamp = ({ children, ...restProps }) => {
  return <Timestamp {...restProps}>{children}</Timestamp>;
};

Message.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};
