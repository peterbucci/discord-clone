import { forwardRef } from "react";
import { Container, IconWrapper, ServerName } from "./styles/head_content";

const SidebarHeader = forwardRef(({ children, ...restProps }, ref) => {
  return (
    <Container ref={ref} {...restProps}>
      {children}
    </Container>
  );
});

SidebarHeader.ServerName = ({ children, ...restProps }) => {
  return <ServerName {...restProps}>{children}</ServerName>;
};

SidebarHeader.IconWrapper = ({ children, ...restProps }) => {
  return <IconWrapper {...restProps}>{children}</IconWrapper>;
};

export default SidebarHeader;
