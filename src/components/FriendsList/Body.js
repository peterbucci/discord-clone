import {
  Avatar,
  AvatarWrapper,
  Container,
  Empty,
  EmptyImage,
  EmptyText,
  Head,
  HeadWrapper,
  IconWrapper,
  Input,
  InputWrapper,
  List,
  ListItem,
  ListItemAction,
  ListItemActions,
  ListItemText,
  ListItemTextRow,
  ListItemTextSpan,
  ListItemWrapper,
  Main,
  Search,
  SearchIcons,
} from "./styles/body";

export default function FriendsListBody({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

FriendsListBody.Empty = ({ children, ...restProps }) => {
  return <Empty {...restProps}>{children}</Empty>;
};

FriendsListBody.EmptyImage = ({ children, ...restProps }) => {
  return <EmptyImage {...restProps}>{children}</EmptyImage>;
};

FriendsListBody.EmptyText = ({ children, ...restProps }) => {
  return <EmptyText {...restProps}>{children}</EmptyText>;
};

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

FriendsListBody.Avatar = (props) => {
  return <Avatar {...props} />;
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

FriendsListBody.ListItemActions = ({ children, ...restProps }) => {
  return (
    <ListItemActions id="friendsListActions" {...restProps}>
      {children}
    </ListItemActions>
  );
};

FriendsListBody.ListItemAction = ({ children, ...restProps }) => {
  return <ListItemAction {...restProps}>{children}</ListItemAction>;
};
