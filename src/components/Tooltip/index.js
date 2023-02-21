import { forwardRef } from "react";
import { EmptyContainer, Menu, ProfilePanelAnimation } from "./styles/tooltip";

const Tooltip = forwardRef(({ children, ...restProps }, ref) => {
  return (
    <EmptyContainer ref={ref} {...restProps}>
      {children}
    </EmptyContainer>
  );
});

Tooltip.ProfilePanel = ({ children, ...restProps }) => {
  return (
    <ProfilePanelAnimation {...restProps}>{children}</ProfilePanelAnimation>
  );
};

Tooltip.Menu = ({ children, ...restProps }) => {
  return <Menu {...restProps}>{children}</Menu>;
};

export default Tooltip;
