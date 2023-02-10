import { forwardRef } from "react";
import { EmptyContainer } from "./styles/tooltip";

const Tooltip = forwardRef(({ children, ...restProps }, ref) => {
  return (
    <EmptyContainer ref={ref} {...restProps}>
      {children}
    </EmptyContainer>
  );
});

export default Tooltip;
