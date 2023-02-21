import {
  Container,
  UserInfoWrapper,
  AvatarWrapper,
  NameTag,
  NameTagRow,
  IconsWrapper,
  IconWrapper,
} from "./styles/user_panel";

export default function UserPanelLayout({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

UserPanelLayout.UserInfoWrapper = ({ children, ...restProps }) => {
  return <UserInfoWrapper {...restProps}>{children}</UserInfoWrapper>;
};

UserPanelLayout.AvatarWrapper = ({ children, ...restProps }) => {
  return <AvatarWrapper {...restProps}>{children}</AvatarWrapper>;
};

UserPanelLayout.NameTag = ({ children, ...restProps }) => {
  return <NameTag {...restProps}>{children}</NameTag>;
};

UserPanelLayout.NameTagRow = ({ children, ...restProps }) => {
  return <NameTagRow {...restProps}>{children}</NameTagRow>;
};

UserPanelLayout.IconsWrapper = ({ children, ...restProps }) => {
  return <IconsWrapper {...restProps}>{children}</IconsWrapper>;
};

UserPanelLayout.IconWrapper = ({ children, ...restProps }) => {
  return <IconWrapper {...restProps}>{children}</IconWrapper>;
};
