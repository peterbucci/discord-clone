import { forwardRef } from "react";
import { Svg, Group, Rect, Path } from "./styles/svg_icon";

const SvgIcon = forwardRef(({ children, ...restProps }, ref) => {
  return (
    <Svg ref={ref} viewBox="0 0 48 48" {...restProps}>
      {children}
    </Svg>
  );
});

SvgIcon.Group = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>;
};

SvgIcon.Rect = ({ children, ...restProps }) => {
  return <Rect {...restProps}>{children}</Rect>;
};
SvgIcon.Path = ({ children, ...restProps }) => {
  return <Path {...restProps}>{children}</Path>;
};

export default SvgIcon;
