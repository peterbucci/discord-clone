import {
  Left,
  LeftHead,
  LeftBody,
  LeftGroup,
  LeftGroupHeader,
  LeftGroupHeaderText,
  LeftRow,
  ConversationIconWrapper,
  Nav,
  LeftRowText,
  DeleteConversationIcon,
} from "./styles/layout_left";

export default function LayoutLeft({ children, ...restProps }) {
  return <Left {...restProps}>{children}</Left>;
}

LayoutLeft.Head = ({ children, ...restProps }) => {
  return <LeftHead {...restProps}>{children}</LeftHead>;
};

LayoutLeft.Body = ({ children, ...restProps }) => {
  return <LeftBody {...restProps}>{children}</LeftBody>;
};

LayoutLeft.Group = ({ children, ...restProps }) => {
  return <LeftGroup {...restProps}>{children}</LeftGroup>;
};

LayoutLeft.GroupHeader = ({ children, ...restProps }) => {
  return <LeftGroupHeader {...restProps}>{children}</LeftGroupHeader>;
};

LayoutLeft.GroupHeaderText = ({ children, ...restProps }) => {
  return <LeftGroupHeaderText {...restProps}>{children}</LeftGroupHeaderText>;
};

LayoutLeft.Row = ({ children, url, ...restProps }) => {
  return url ? (
    <Nav to={url}>
      <LeftRow {...restProps}>{children}</LeftRow>
    </Nav>
  ) : (
    <LeftRow {...restProps}>{children}</LeftRow>
  );
};

LayoutLeft.ConversationIconWrapper = ({ children, ...restProps }) => {
  return (
    <ConversationIconWrapper {...restProps}>{children}</ConversationIconWrapper>
  );
};

LayoutLeft.RowText = ({ children, url, ...restProps }) => {
  return <LeftRowText {...restProps}>{children}</LeftRowText>;
};

LayoutLeft.DeleteConversationIcon = ({ children, url, ...restProps }) => {
  return (
    <DeleteConversationIcon {...restProps}>{children}</DeleteConversationIcon>
  );
};
