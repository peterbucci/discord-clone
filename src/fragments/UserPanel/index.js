import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import ChannelLeft from "../../components/ChannelLeft";
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
    <ChannelLeft.Footer>
      <ChannelLeft.UserInfoWrapper>
        <ChannelLeft.AvatarWrapper>
          <Avatar
            status={user.status}
            image={user.avatar ?? `default_avatars/${user.tag % 6}`}
          />
        </ChannelLeft.AvatarWrapper>
        <ChannelLeft.NameTag>
          <ChannelLeft.NameTagRow weight="600">
            {user.name}
          </ChannelLeft.NameTagRow>
          <ChannelLeft.NameTagRow
            fontSize="12px"
            color={themeContext.interactiveNormal}
          >
            #{user.tag}
          </ChannelLeft.NameTagRow>
        </ChannelLeft.NameTag>
      </ChannelLeft.UserInfoWrapper>
      <ChannelLeft.IconsWrapper>
        <ChannelLeft.IconWrapper
          onClick={() =>
            updateSettings({ enableMicrophone: !enableMicrophone })
          }
        >
          <Icons.Microphone enabled={enableMicrophone} />
        </ChannelLeft.IconWrapper>
        <ChannelLeft.IconWrapper
          onClick={() =>
            updateSettings({ enableHeadphones: !enableHeadphones })
          }
        >
          <Icons.Headphones enabled={enableHeadphones} />
        </ChannelLeft.IconWrapper>
        <ChannelLeft.IconWrapper
          onClick={() => updateSettings({ enableSettings: !enableSettings })}
        >
          <Icons.Cogwheel />
        </ChannelLeft.IconWrapper>
      </ChannelLeft.IconsWrapper>
    </ChannelLeft.Footer>
  );
}
