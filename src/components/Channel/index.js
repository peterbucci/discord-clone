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

Channel.RightMain = ({ children, ...restProps }) => {
  return <RightMain {...restProps}>{children}</RightMain>;
};

Channel.RightMainFooter = ({ children, ...restProps }) => {
  return <RightMainFooter {...restProps}>{children}</RightMainFooter>;
};

Channel.RightSidebar = ({ children, ...restProps }) => {
  return <RightSidebar {...restProps}>{children}</RightSidebar>;
};

export default Channel;
