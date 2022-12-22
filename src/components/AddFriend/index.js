import {
  Footer,
  FooterImg,
  FooterText,
  Container,
  ExploreButton,
  ExploreButtonImg,
  ExploreButtonText,
  ExploreButtonWrapper,
  HeadOne,
  HeadOneTitle,
  HeadTwo,
  HeadTwoTitle,
  SearchbarButton,
  SearchbarInnerWrapper,
  SearchbarInput,
  SearchbarInputUnderlay,
  SearchbarOuterWrapper,
  SearchForm,
  SearchFormText,
} from "./styles/add_friend";

export default function AddFriend({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

AddFriend.HeadOne = ({ children, ...restProps }) => {
  return <HeadOne {...restProps}>{children}</HeadOne>;
};

AddFriend.HeadOneTitle = ({ children, ...restProps }) => {
  return <HeadOneTitle {...restProps}>{children}</HeadOneTitle>;
};

AddFriend.SearchForm = ({ children, ...restProps }) => {
  return <SearchForm {...restProps}>{children}</SearchForm>;
};

AddFriend.SearchFormText = ({ children, ...restProps }) => {
  return <SearchFormText {...restProps}>{children}</SearchFormText>;
};

AddFriend.SearchbarOuterWrapper = ({ children, ...restProps }) => {
  return (
    <SearchbarOuterWrapper {...restProps}>{children}</SearchbarOuterWrapper>
  );
};

AddFriend.SearchbarInnerWrapper = ({ children, ...restProps }) => {
  return (
    <SearchbarInnerWrapper {...restProps}>{children}</SearchbarInnerWrapper>
  );
};

AddFriend.SearchbarInput = ({ ...props }) => {
  return <SearchbarInput {...props} />;
};

AddFriend.SearchbarInputUnderlay = ({ ...props }) => {
  return <SearchbarInputUnderlay {...props}></SearchbarInputUnderlay>;
};

AddFriend.SearchbarButton = ({ children, ...restProps }) => {
  return <SearchbarButton {...restProps}>{children}</SearchbarButton>;
};

AddFriend.HeadTwo = ({ children, ...restProps }) => {
  return <HeadTwo {...restProps}>{children}</HeadTwo>;
};

AddFriend.HeadTwoTitle = ({ children, ...restProps }) => {
  return <HeadTwoTitle {...restProps}>{children}</HeadTwoTitle>;
};

AddFriend.ExploreButton = ({ children, ...restProps }) => {
  return (
    <ExploreButtonWrapper>
      <ExploreButton {...restProps}>{children}</ExploreButton>
    </ExploreButtonWrapper>
  );
};

AddFriend.ExploreButtonImg = ({ ...props }) => {
  return <ExploreButtonImg {...props} />;
};

AddFriend.ExploreButtonText = ({ children, ...restProps }) => {
  return <ExploreButtonText {...restProps}>{children}</ExploreButtonText>;
};

AddFriend.Footer = ({ children, ...restProps }) => {
  return <Footer {...restProps}>{children}</Footer>;
};

AddFriend.FooterImg = ({ ...props }) => {
  return <FooterImg {...props} />;
};

AddFriend.FooterText = ({ children, ...restProps }) => {
  return <FooterText {...restProps}>{children}</FooterText>;
};
