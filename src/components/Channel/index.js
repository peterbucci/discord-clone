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
  DailyDivider,
  DailyDividerText,
  RightHeadTitle,
  RightHeadIconWrapper,
  RightHeadRecipient,
  RightHeadRecipientStatus,
  RightHeadToolbar,
  RightHeadSearchWrapper,
} from "./styles/channel";

export const Channel = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Channel.Right = ({ children, ...restProps }) => {
  return <Right {...restProps}>{children}</Right>;
};

Channel.RightHead = ({ children, ...restProps }) => {
  return <RightHead {...restProps}>{children}</RightHead>;
};

Channel.RightHeadTitle = ({ children, ...restProps }) => {
  return <RightHeadTitle {...restProps}>{children}</RightHeadTitle>;
};

Channel.RightHeadIconWrapper = ({ children, ...restProps }) => {
  return <RightHeadIconWrapper {...restProps}>{children}</RightHeadIconWrapper>;
};

Channel.RightHeadRecipient = ({ children, ...restProps }) => {
  return <RightHeadRecipient {...restProps}>{children}</RightHeadRecipient>;
};

Channel.RightHeadRecipientStatus = ({ children, ...restProps }) => {
  return (
    <RightHeadRecipientStatus {...restProps}>
      {children}
    </RightHeadRecipientStatus>
  );
};

Channel.RightHeadToolbar = ({ children, ...restProps }) => {
  return <RightHeadToolbar {...restProps}>{children}</RightHeadToolbar>;
};

Channel.RightHeadSearchWrapper = ({ children, ...restProps }) => {
  return (
    <RightHeadSearchWrapper {...restProps}>{children}</RightHeadSearchWrapper>
  );
};

Channel.RightBody = ({ children, ...restProps }) => {
  return <RightBody {...restProps}>{children}</RightBody>;
};

Channel.RightMainWrapper = ({ children, ...restProps }) => {
  return <RightMainWrapper {...restProps}>{children}</RightMainWrapper>;
};

Channel.RightMainSearch = ({ children, ...restProps }) => {
  return <RightMainSearch {...restProps}>{children}</RightMainSearch>;
};

Channel.RightMainHead = ({ children, ...restProps }) => {
  return <RightMainHead {...restProps}>{children}</RightMainHead>;
};

Channel.RightMain = forwardRef(({ children, ...restProps }, ref) => (
  <RightMain ref={ref} {...restProps}>
    {children}
  </RightMain>
));

Channel.Conversation = ({ children, ...restProps }) => (
  <Conversation {...restProps}>{children}</Conversation>
);

Channel.DailyDivider = ({ children, ...restProps }) => (
  <DailyDivider {...restProps}>
    <DailyDividerText>{children}</DailyDividerText>
  </DailyDivider>
);

Channel.ConversationSpacer = (props) => <ConversationSpacer {...props} />;

Channel.RightMainFooter = ({ children, ...restProps }) => {
  return <RightMainFooter {...restProps}>{children}</RightMainFooter>;
};

Channel.RightSidebar = ({ children, ...restProps }) => {
  return <RightSidebar {...restProps}>{children}</RightSidebar>;
};

export default Channel;
