import {
  Container,
  ExternalLink,
  LoginLink,
  Logo,
  Warning,
  Wrapper,
} from "./styles/login";

export default function Login({ onClick, ...restProps }) {
  return (
    <Wrapper>
      <Container {...restProps}>
        <Logo src="discord_logo_full.svg" />
        <LoginLink onClick={onClick}>Sign in with Google</LoginLink>
        <Warning>
          This is a personal project to clone the Discord app and is not
          affiliated with Discord in any way. Check out my{" "}
          <ExternalLink href="https://github.com/peterbucci/discord-clone-2/">
            Github
          </ExternalLink>{" "}
          for more details.
        </Warning>
      </Container>
    </Wrapper>
  );
}
