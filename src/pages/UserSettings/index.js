import React, { useState, useRef } from "react";
import { Transition } from "react-transition-group";
import { useStateValue } from "providers/StateProvider";
import { actionTypes } from "reducers/state_reducer";
import UserSettingsLayout from "components/UserSettings";
import settingsMenu from "assets/text/settings_menu";
import logOut from "api/auth/log_out";

const duration = 300;

const defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
};

const transitionStyles = {
  entering: { transform: "scale(1)", opacity: 1 },
  entered: { transform: "scale(1)", opacity: 1 },
  exiting: { transform: "scale(1.10)", opacity: 0 },
  exited: { transform: "scale(1.10)", opacity: 0, height: 0 },
};

export default function UserSettings() {
  const nodeRef = useRef(null);
  const [selected, setSelected] = useState("My Account");
  const {
    state: { user, userSettings, unsubscribers },
    dispatch,
  } = useStateValue();

  const updateSettings = (actions) => {
    dispatch({
      type: actionTypes.UPDATE_SETTINGS,
      ...actions,
    });
  };

  return (
    <Transition
      nodeRef={nodeRef}
      in={userSettings.enableSettings}
      timeout={duration}
    >
      {(state) => (
        <UserSettingsLayout
          ref={nodeRef}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <UserSettingsLayout.Sidebar>
            {settingsMenu.map((item, i) => {
              return (
                <React.Fragment key={i}>
                  {item.divider && <UserSettingsLayout.Divider />}
                  {item.type === "category" ? (
                    <UserSettingsLayout.Category>
                      {item.name}
                    </UserSettingsLayout.Category>
                  ) : (
                    <UserSettingsLayout.Item
                      selected={selected === item.name}
                      onClick={() =>
                        item.name === "Log Out"
                          ? logOut(user, unsubscribers, dispatch)
                          : setSelected(item.name)
                      }
                    >
                      {item.name}
                    </UserSettingsLayout.Item>
                  )}
                </React.Fragment>
              );
            })}
            <UserSettingsLayout.Divider />
          </UserSettingsLayout.Sidebar>
          <UserSettingsLayout.Content>
            <UserSettingsLayout.ContentColumn>
              {selected}
            </UserSettingsLayout.ContentColumn>
            <UserSettingsLayout.Tools>
              <UserSettingsLayout.Close
                onClick={() => updateSettings({ enableSettings: false })}
              >
                <svg
                  aria-hidden="true"
                  role="img"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"
                  ></path>
                </svg>
              </UserSettingsLayout.Close>
            </UserSettingsLayout.Tools>
          </UserSettingsLayout.Content>
        </UserSettingsLayout>
      )}
    </Transition>
  );
}
