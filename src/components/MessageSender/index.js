import {
  AttachButton,
  AttachWrapper,
  Button,
  ButtonsContainer,
  Container,
  Form,
  InnerContainer,
  ScrollableContainer,
  SmileyIcon,
  TextBox,
  TextboxWrapper,
} from "./styles/message_sender";

export default function MessageSender({ children, ...restProps }) {
  return (
    <Form {...restProps}>
      <Container>{children}</Container>
    </Form>
  );
}

MessageSender.ScrollableContainer = ({ children, ...restProps }) => {
  return <ScrollableContainer {...restProps}>{children}</ScrollableContainer>;
};

MessageSender.InnerContainer = ({ children, ...restProps }) => {
  return <InnerContainer {...restProps}>{children}</InnerContainer>;
};

MessageSender.AttachWrapper = ({ children, ...restProps }) => {
  return <AttachWrapper {...restProps}>{children}</AttachWrapper>;
};

MessageSender.AttachButton = ({ children, ...restProps }) => {
  return <AttachButton {...restProps}>{children}</AttachButton>;
};

MessageSender.TextboxWrapper = ({ children, ...restProps }) => {
  return <TextboxWrapper {...restProps}>{children}</TextboxWrapper>;
};

MessageSender.Textbox = (props) => {
  return <TextBox {...props} />;
};

MessageSender.ButtonsContainer = ({ children, ...restProps }) => {
  return <ButtonsContainer {...restProps}>{children}</ButtonsContainer>;
};

MessageSender.Button = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>;
};

MessageSender.SmileyIcon = (props) => {
  return <SmileyIcon {...props} />;
};
