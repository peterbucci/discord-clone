import { Svg, Mask, Rect, Circle, Polygon } from "./styles/status_icon";

export default function StatusIcon({ children, ...restProps }) {
  return <Svg {...restProps}>{children}</Svg>;
}

StatusIcon.Mask = ({ children, ...restProps }) => {
  return <Mask {...restProps}>{children}</Mask>;
};

StatusIcon.Rect = (props) => {
  return <Rect {...props}></Rect>;
};

StatusIcon.Circle = (props) => {
  return <Circle {...props}></Circle>;
};

StatusIcon.Polygon = (props) => {
  return <Polygon {...props}></Polygon>;
};
