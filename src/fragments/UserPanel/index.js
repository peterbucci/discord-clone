import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import UserPanelLayout from "../../components/UserPanel";
import { useStateValue } from "../../providers/StateProvider";
import { actionTypes } from "../../reducers/state_reducer";
import Avatar from "../Avatar";
import * as Icons from "assets/icons";

export default function UserPanel() {
  const themeContext = useContext(ThemeContext);
  const { state, dispatch } = useStateValue();
  const user = state.users[state.user];

  const {
    userSettings: { enableHeadphones, enableMicrophone, enableSettings },
  } = state;

  const updateSettings = (actions) => {
    dispatch({
      type: actionTypes.UPDATE_SETTINGS,
      ...actions,
    });
  };

  return (
    <UserPanelLayout>
      <UserPanelLayout.UserInfoWrapper>
        <UserPanelLayout.AvatarWrapper>
          <Avatar
            status={user.status}
            image={user.avatar ?? `default_avatars/${user.tag % 6}`}
          />
        </UserPanelLayout.AvatarWrapper>
        <UserPanelLayout.NameTag>
          <UserPanelLayout.NameTagRow weight="600">
            {user.name}
          </UserPanelLayout.NameTagRow>
          <UserPanelLayout.NameTagRow
            fontSize="12px"
            color={themeContext.interactiveNormal}
          >
            #{user.tag}
          </UserPanelLayout.NameTagRow>
        </UserPanelLayout.NameTag>
      </UserPanelLayout.UserInfoWrapper>
      <UserPanelLayout.IconsWrapper>
        <UserPanelLayout.IconWrapper
          onClick={() =>
            updateSettings({ enableMicrophone: !enableMicrophone })
          }
        >
          <Icons.Microphone enabled={enableMicrophone} />
        </UserPanelLayout.IconWrapper>
        <UserPanelLayout.IconWrapper
          onClick={() =>
            updateSettings({ enableHeadphones: !enableHeadphones })
          }
        >
          <Icons.Headphones enabled={enableHeadphones} />
        </UserPanelLayout.IconWrapper>
        <UserPanelLayout.IconWrapper
          onClick={() => updateSettings({ enableSettings: !enableSettings })}
        >
          <Icons.Cogwheel />
        </UserPanelLayout.IconWrapper>
      </UserPanelLayout.IconsWrapper>
    </UserPanelLayout>
  );
}
