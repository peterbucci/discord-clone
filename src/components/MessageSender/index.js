import CustomScrollbar from "fragments/CustomScrollbar";
import {
  AttachButton,
  AttachedBars,
  AttachWrapper,
  Button,
  ButtonsContainer,
  Clickable,
  Container,
  EditOperations,
  Form,
  InnerContainer,
  ScrollableContainer,
  SmileyIcon,
  TextBox,
  TextboxWrapper,
} from "./styles/message_sender";

export default function MessageSender({
  children,
  editMessageLayout,
  ...restProps
}) {
  return (
    <Form {...restProps}>
      <Container editMessageLayout={editMessageLayout}>{children}</Container>
    </Form>
  );
}

MessageSender.ScrollableContainer = ({ children, ...restProps }) => {
  return <ScrollableContainer {...restProps}>{children}</ScrollableContainer>;
};

MessageSender.InnerContainer = ({ children, ...restProps }) => {
  return (
    <CustomScrollbar autoHeight autoHeightMin={22}>
      <InnerContainer {...restProps}>{children}</InnerContainer>
    </CustomScrollbar>
  );
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

MessageSender.EditOperations = ({ children, ...restProps }) => {
  return <EditOperations {...restProps}>{children}</EditOperations>;
};

MessageSender.Clickable = ({ children, ...restProps }) => {
  return <Clickable {...restProps}>{children}</Clickable>;
};

MessageSender.AttachedBars = ({ children, ...restProps }) => {
  return <AttachedBars {...restProps}>{children}</AttachedBars>;
};
