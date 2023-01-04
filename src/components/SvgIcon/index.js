import { forwardRef } from "react";
import {
  Svg,
  Group,
  Path,
  Polygon,
  ForeignObject,
  Rect,
} from "./styles/svg_icon";

const SvgIcon = forwardRef(({ children, ...restProps }, ref) => {
  return (
    <Svg
      ref={ref}
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="img"
      {...restProps}
    >
      {children}
    </Svg>
  );
});

SvgIcon.Rect = ({ children, ...restProps }) => {
  return <Rect {...restProps}>{children}</Rect>;
};

SvgIcon.Group = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>;
};

SvgIcon.Path = ({ children, ...restProps }) => {
  return <Path {...restProps}>{children}</Path>;
};

SvgIcon.Polygon = ({ children, ...restProps }) => {
  return (
    <Polygon fillRule="nonzero" {...restProps}>
      {children}
    </Polygon>
  );
};

SvgIcon.ForeignObject = ({ children, ...restProps }) => {
  return <ForeignObject {...restProps}>{children}</ForeignObject>;
};

export default SvgIcon;
