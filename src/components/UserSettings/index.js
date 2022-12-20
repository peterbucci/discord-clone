import { Container } from "./styles/user_settings";

export default function UserSettings({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
