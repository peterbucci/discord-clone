import { useRef } from "react";
import { Transition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import { Navigate, Outlet } from "react-router";
import UserSettings from "pages/UserSettings";
import { AnimatedContainer, Container } from "styles/app";
import Sidebar from "fragments/Sidebar";
import { useStateValue } from "providers/StateProvider";
import AddAServer from "pages/AddAServer";

const duration = 300;

const defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
};

const transitionStyles = {
  entering: { transform: "scale(1)", opacity: 1 },
  entered: { transform: "scale(1)", opacity: 1 },
  exiting: { transform: "scale(.90)", opacity: 0 },
  exited: { transform: "scale(.90)", opacity: 0 },
};

export default function AnimatedRoot() {
  const nodeRef = useRef(null);
  const {
    state: { userSettings, initialRender, uid },
  } = useStateValue();
  const location = useLocation();

  return !initialRender && !uid ? (
    <Navigate replace to="/login" />
  ) : location.pathname === "/" ? (
    <Navigate replace to="/channels/@me" />
  ) : (
    <Transition
      nodeRef={nodeRef}
      in={!userSettings.enableSettings}
      timeout={duration}
    >
      {(state) => (
        <AnimatedContainer>
          <Container
            ref={nodeRef}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <Sidebar />
            <Outlet />
          </Container>
          <UserSettings />
          <AddAServer />
        </AnimatedContainer>
      )}
    </Transition>
  );
}
