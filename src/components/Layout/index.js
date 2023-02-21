import { forwardRef } from "react";
import {
  Right,
  RightHead,
  RightMain,
  RightMainWrapper,
  RightBody,
  RightMainFooter,
  RightSidebar,
  Container,
  RightMainSearch,
  RightMainHead,
  Conversation,
  ConversationSpacer,
  RightHeadTitle,
  RightHeadIconWrapper,
  RightHeadRecipient,
  RightHeadRecipientStatus,
  RightHeadToolbar,
  RightHeadSearchWrapper,
} from "./styles/channel";

export const Layout = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Layout.Right = ({ children, ...restProps }) => {
  return <Right {...restProps}>{children}</Right>;
};

Layout.RightHead = ({ children, ...restProps }) => {
  return <RightHead {...restProps}>{children}</RightHead>;
};

Layout.RightHeadTitle = ({ children, ...restProps }) => {
  return <RightHeadTitle {...restProps}>{children}</RightHeadTitle>;
};

Layout.RightHeadIconWrapper = ({ children, ...restProps }) => {
  return <RightHeadIconWrapper {...restProps}>{children}</RightHeadIconWrapper>;
};

Layout.RightHeadRecipient = ({ children, ...restProps }) => {
  return <RightHeadRecipient {...restProps}>{children}</RightHeadRecipient>;
};

Layout.RightHeadRecipientStatus = ({ children, ...restProps }) => {
  return (
    <RightHeadRecipientStatus {...restProps}>
      {children}
    </RightHeadRecipientStatus>
  );
};

Layout.RightHeadToolbar = ({ children, ...restProps }) => {
  return <RightHeadToolbar {...restProps}>{children}</RightHeadToolbar>;
};

Layout.RightHeadSearchWrapper = ({ children, ...restProps }) => {
  return (
    <RightHeadSearchWrapper {...restProps}>{children}</RightHeadSearchWrapper>
  );
};

Layout.RightBody = ({ children, ...restProps }) => {
  return <RightBody {...restProps}>{children}</RightBody>;
};

Layout.RightMainWrapper = ({ children, ...restProps }) => {
  return <RightMainWrapper {...restProps}>{children}</RightMainWrapper>;
};

Layout.RightMainSearch = ({ children, ...restProps }) => {
  return <RightMainSearch {...restProps}>{children}</RightMainSearch>;
};

Layout.RightMainHead = ({ children, ...restProps }) => {
  return <RightMainHead {...restProps}>{children}</RightMainHead>;
};

Layout.RightMain = forwardRef(({ children, ...restProps }, ref) => (
  <RightMain ref={ref} {...restProps}>
    {children}
  </RightMain>
));

Layout.Conversation = ({ children, ...restProps }) => (
  <Conversation {...restProps}>{children}</Conversation>
);

Layout.ConversationSpacer = (props) => <ConversationSpacer {...props} />;

Layout.RightMainFooter = ({ children, ...restProps }) => {
  return <RightMainFooter {...restProps}>{children}</RightMainFooter>;
};

Layout.RightSidebar = ({ children, ...restProps }) => {
  return <RightSidebar {...restProps}>{children}</RightSidebar>;
};

export default Layout;
