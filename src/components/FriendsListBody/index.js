import {
  AvatarWrapper,
  Container,
  Head,
  HeadWrapper,
  IconWrapper,
  Input,
  InputWrapper,
  List,
  ListItem,
  ListItemText,
  ListItemTextRow,
  ListItemTextSpan,
  ListItemWrapper,
  Main,
  Search,
  SearchIcons,
} from "./styles/friends_list_main";

export default function FriendsListBody({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

FriendsListBody.Search = ({ children, ...restProps }) => {
  return <Search {...restProps}>{children}</Search>;
};

FriendsListBody.SearchIcons = ({ children, ...restProps }) => {
  return <SearchIcons {...restProps}>{children}</SearchIcons>;
};

FriendsListBody.IconWrapper = ({ children, ...restProps }) => {
  return <IconWrapper {...restProps}>{children}</IconWrapper>;
};

FriendsListBody.Input = ({ placeholder, ...restProps }) => {
  return (
    <InputWrapper>
      <Input placeholder={placeholder ?? "Search"} {...restProps} />
    </InputWrapper>
  );
};

FriendsListBody.Head = ({ children, ...restProps }) => {
  return (
    <HeadWrapper {...restProps}>
      <Head>{children}</Head>
    </HeadWrapper>
  );
};

FriendsListBody.Main = ({ children, ...restProps }) => {
  return <Main {...restProps}>{children}</Main>;
};

FriendsListBody.List = ({ children, ...restProps }) => {
  return <List {...restProps}>{children}</List>;
};

FriendsListBody.ListItem = ({ children, visible, ...restProps }) => {
  return (
    <ListItemWrapper visible={visible}>
      <ListItem {...restProps}>{children}</ListItem>
    </ListItemWrapper>
  );
};

FriendsListBody.AvatarWrapper = ({ children, ...restProps }) => {
  return <AvatarWrapper {...restProps}>{children}</AvatarWrapper>;
};

FriendsListBody.ListItemText = ({ children, ...restProps }) => {
  return <ListItemText {...restProps}>{children}</ListItemText>;
};

FriendsListBody.ListItemTextRow = ({ children, ...restProps }) => {
  return <ListItemTextRow {...restProps}>{children}</ListItemTextRow>;
};

FriendsListBody.ListItemTextSpan = ({ children, ...restProps }) => {
  return <ListItemTextSpan {...restProps}>{children}</ListItemTextSpan>;
};
