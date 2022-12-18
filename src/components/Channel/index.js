import {
  Right,
  RightHead,
  RightMain,
  RightMainWrapper,
  RightBody,
  RightMainFooter,
  RightSidebar,
  Container,
  Left,
  LeftBody,
  LeftFooter,
  LeftGroup,
  LeftHead,
  LeftRow,
  LeftGroupHeader,
  Nav,
  LeftGroupHeaderText,
  FriendIconWrapper,
} from "./styles/channel";

export const Channel = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Channel.Left = ({ children, ...restProps }) => {
  return <Left {...restProps}>{children}</Left>;
};

Channel.LeftHead = ({ children, ...restProps }) => {
  return <LeftHead {...restProps}>{children}</LeftHead>;
};

Channel.LeftBody = ({ children, ...restProps }) => {
  return <LeftBody {...restProps}>{children}</LeftBody>;
};

Channel.LeftGroup = ({ children, ...restProps }) => {
  return <LeftGroup {...restProps}>{children}</LeftGroup>;
};

Channel.LeftGroupHeader = ({ children, ...restProps }) => {
  return <LeftGroupHeader {...restProps}>{children}</LeftGroupHeader>;
};

Channel.LeftGroupHeaderText = ({ children, ...restProps }) => {
  return <LeftGroupHeaderText {...restProps}>{children}</LeftGroupHeaderText>;
};

Channel.LeftRow = ({ children, url, ...restProps }) => {
  return url ? (
    <Nav to={url}>
      <LeftRow {...restProps}>{children}</LeftRow>
    </Nav>
  ) : (
    <LeftRow {...restProps}>{children}</LeftRow>
  );
};

Channel.LeftFooter = ({ children, ...restProps }) => {
  return <LeftFooter {...restProps}>{children}</LeftFooter>;
};

Channel.Right = ({ children, ...restProps }) => {
  return <Right {...restProps}>{children}</Right>;
};

Channel.RightHead = ({ children, ...restProps }) => {
  return <RightHead {...restProps}>{children}</RightHead>;
};

Channel.RightBody = ({ children, ...restProps }) => {
  return <RightBody {...restProps}>{children}</RightBody>;
};

Channel.RightMainWrapper = ({ children, ...restProps }) => {
  return <RightMainWrapper {...restProps}>{children}</RightMainWrapper>;
};

Channel.RightMain = ({ children, ...restProps }) => {
  return <RightMain {...restProps}>{children}</RightMain>;
};

Channel.RightMainFooter = ({ children, ...restProps }) => {
  return <RightMainFooter {...restProps}>{children}</RightMainFooter>;
};

Channel.RightSidebar = ({ children, ...restProps }) => {
  return <RightSidebar {...restProps}>{children}</RightSidebar>;
};

Channel.FriendIconWrapper = ({ children, ...restProps }) => {
  return <FriendIconWrapper {...restProps}>{children}</FriendIconWrapper>;
};

export default Channel;
