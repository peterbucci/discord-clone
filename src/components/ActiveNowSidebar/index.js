import {
  ActiveNowEmpty,
  ActiveNowEmptyHead,
  ActiveNowEmptyText,
  ActiveNowHead,
  Container,
} from "./styles/active_now_sidebar";

export default function ActiveNowSidebar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

ActiveNowSidebar.Head = ({ children, ...restProps }) => {
  return <ActiveNowHead {...restProps}>{children}</ActiveNowHead>;
};

ActiveNowSidebar.Empty = ({ children, ...restProps }) => {
  return <ActiveNowEmpty {...restProps}>{children}</ActiveNowEmpty>;
};

ActiveNowSidebar.EmptyHead = ({ children, ...restProps }) => {
  return <ActiveNowEmptyHead {...restProps}>{children}</ActiveNowEmptyHead>;
};

ActiveNowSidebar.EmptyText = ({ children, ...restProps }) => {
  return <ActiveNowEmptyText {...restProps}>{children}</ActiveNowEmptyText>;
};
