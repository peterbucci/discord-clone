import {
  Container,
  Button,
  IconWrapper,
  VerticalDivider,
} from "./styles/format_toolbar";

export default function FormatToolbar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

FormatToolbar.Button = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>;
};

FormatToolbar.IconWrapper = ({ children, ...restProps }) => {
  return <IconWrapper {...restProps}>{children}</IconWrapper>;
};

FormatToolbar.VerticalDivider = ({ props }) => {
  return <VerticalDivider {...props} />;
};
