import {
  Container,
  Group,
  IconWrapper,
  Item,
  Label,
  Scroller,
  Separator,
} from "./styles/server_menu";

const { forwardRef } = require("react");

const ServerMenu = forwardRef(({ children, ...restProps }, ref) => {
  return (
    <Container ref={ref} {...restProps}>
      <Scroller>{children}</Scroller>
    </Container>
  );
});

ServerMenu.Group = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>;
};

ServerMenu.Separator = (props) => {
  return <Separator {...props} />;
};

ServerMenu.Item = ({ children, ...restProps }) => {
  return <Item {...restProps}>{children}</Item>;
};

ServerMenu.Label = ({ children, ...restProps }) => {
  return <Label {...restProps}>{children}</Label>;
};

ServerMenu.IconWrapper = ({ children, ...restProps }) => {
  return <IconWrapper {...restProps}>{children}</IconWrapper>;
};

export default ServerMenu;
