import {
  Actions,
  ButtonText,
  CloseButton,
  Recipient,
  Button,
  Container,
} from "./styles/reply_to";

export default function ReplyTo({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

ReplyTo.Button = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>;
};

ReplyTo.ButtonText = ({ children, ...restProps }) => {
  return <ButtonText {...restProps}>{children}</ButtonText>;
};

ReplyTo.Recipient = ({ children, ...restProps }) => {
  return <Recipient {...restProps}>{children}</Recipient>;
};

ReplyTo.Actions = ({ children, ...restProps }) => {
  return <Actions {...restProps}>{children}</Actions>;
};

ReplyTo.CloseButton = ({ children, ...restProps }) => {
  return <CloseButton {...restProps}>{children}</CloseButton>;
};
