import { forwardRef } from "react";
import {
  List,
  Item,
  Nav,
  Icon,
  HorizontalLine,
  PillContainer,
  Pill,
} from "./styles/sidebar";

export default function Sidebar({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
}

Sidebar.Item = forwardRef(({ children, url, ...restProps }, ref) => {
  return (
    <Item ref={ref} {...restProps}>
      {url ? <Nav to={url}>{children}</Nav> : children}
    </Item>
  );
});

Sidebar.Icon = ({ children, ...restProps }) => {
  return <Icon {...restProps}>{children}</Icon>;
};

Sidebar.HorizontalLine = (props) => {
  return (
    <Item>
      <HorizontalLine {...props} />
    </Item>
  );
};

Sidebar.Pill = (props) => {
  return (
    <PillContainer>
      <Pill {...props} />
    </PillContainer>
  );
};
