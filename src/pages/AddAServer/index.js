import { useEffect, useRef, useState } from "react";
import { Transition } from "react-transition-group";
import { default as AddAServerLayout } from "components/AddAServer";
import { useStateValue } from "providers/StateProvider";
import { actionTypes } from "reducers/state_reducer";
import { useLocation } from "react-router";
import {
  CreateAServer,
  CustomizeServer,
  JoinAServer,
  TellUsMore,
} from "./pages";

const duration = 150;

const defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
};

const transitionStyles = {
  entering: { transform: "scale(.50)", opacity: 0 },
  entered: { transform: "scale(1)", opacity: 1 },
  exiting: { transform: "scale(.50)", opacity: 0 },
  exited: { transform: "scale(.50)", opacity: 0 },
};

export default function AddAServer() {
  const [page, setPage] = useState(1);
  const [serverTemplate, setServerTemplate] = useState({});
  const nodeRef = useRef(null);
  const {
    dispatch,
    state: { sidebarSelected },
  } = useStateValue();
  const location = useLocation();

  useEffect(() => {
    if (sidebarSelected !== "addServer") {
      setPage(1);
    }
  }, [sidebarSelected]);

  const closeMenu = () => {
    dispatch({
      type: actionTypes.SET_SIDEBAR_SELECTED,
      selected: location.pathname,
    });
  };

  return (
    <Transition
      nodeRef={nodeRef}
      in={sidebarSelected === "addServer"}
      timeout={duration}
    >
      {(state) => (
        <AddAServerLayout
          ref={nodeRef}
          exited={state === "exited"}
          onLayerClick={closeMenu}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <AddAServerLayout.AnimatedHeight
            height={
              page === 1
                ? "558px"
                : page === 2.2
                ? "436px"
                : page === 3
                ? "404px"
                : null
            }
          >
            <AddAServerLayout.AbsoluteContainer
              left={page > 1 ? "-100%" : null}
            >
              <CreateAServer
                closeMenu={closeMenu}
                setPage={setPage}
                page={page}
                setServerTemplate={setServerTemplate}
              />
            </AddAServerLayout.AbsoluteContainer>
            <AddAServerLayout.AbsoluteContainer left={page < 2 ? "100%" : null}>
              <JoinAServer
                closeMenu={closeMenu}
                setPage={setPage}
                page={page}
              />
            </AddAServerLayout.AbsoluteContainer>
            <AddAServerLayout.AbsoluteContainer
              left={page < 2 ? "100%" : page > 2 ? "-100%" : null}
            >
              <TellUsMore closeMenu={closeMenu} setPage={setPage} page={page} />
            </AddAServerLayout.AbsoluteContainer>
            <AddAServerLayout.AbsoluteContainer
              left={page < 3 ? "100%" : page > 3 ? "-100%" : null}
            >
              <CustomizeServer
                closeMenu={closeMenu}
                setPage={setPage}
                page={page}
                serverTemplate={serverTemplate}
              />
            </AddAServerLayout.AbsoluteContainer>
          </AddAServerLayout.AnimatedHeight>
        </AddAServerLayout>
      )}
    </Transition>
  );
}
