import {
  Container,
  Left,
  IconWrapper,
  Text,
  Divider,
  Nav,
  NavLink,
  AddFriend,
  Right,
  RequestBadge,
} from "./styles/friends_list_head";

export default function FriendsListHead({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

FriendsListHead.Left = ({ children, ...restProps }) => {
  return <Left {...restProps}>{children}</Left>;
};

FriendsListHead.IconWrapper = ({ children, ...restProps }) => {
  return <IconWrapper {...restProps}>{children}</IconWrapper>;
};

FriendsListHead.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

FriendsListHead.Divider = () => {
  return <Divider />;
};

FriendsListHead.Nav = ({ children, ...restProps }) => {
  return <Nav {...restProps}>{children}</Nav>;
};

FriendsListHead.NavLink = ({ children, addFriend, ...restProps }) => {
  return addFriend ? (
    <AddFriend {...restProps}>{children}</AddFriend>
  ) : (
    <NavLink {...restProps}>{children}</NavLink>
  );
};

FriendsListHead.RequestBadge = ({ children, ...restProps }) => {
  return <RequestBadge {...restProps}>{children}</RequestBadge>;
};

FriendsListHead.Right = ({ children, ...restProps }) => {
  return <Right {...restProps}>{children}</Right>;
};
