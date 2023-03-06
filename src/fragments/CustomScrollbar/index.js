import { Scrollbars } from "react-custom-scrollbars-2";

export default function CustomScrollbar({ children, ...restProps }) {
  return <Scrollbars {...restProps}>{children}</Scrollbars>;
}
