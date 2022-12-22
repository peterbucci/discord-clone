import { useLocation, useParams } from "react-router-dom";
import ChannelLeft from "../../components/ChannelLeft";
import { DirectMessagesSearchBar } from "../../components/DirectMessages";
import { useStateValue } from "../../providers/StateProvider";
import { actionTypes } from "../../reducers/state_reducer";
import Avatar from "../Avatar";
import AddIcon from "../Icons/add";
import CogwheelIcon from "../Icons/cogwheel";
import FriendIcon from "../Icons/friend";
import HeadphonesIcon from "../Icons/headphones";
import MicrophoneIcon from "../Icons/microphone";
import NitroIcon from "../Icons/nitro";
import SnowsgivingIcon from "../Icons/snowsgiving";

export default function ConversationList() {
  const { state, dispatch } = useStateValue();
  const user = state.users[state.user];
  const conversations = state.activeConversations.map(
    (id) => state.conversations[id]
  );
  const {
    userSettings: { enableHeadphones, enableMicrophone, enableSettings },
  } = state;
  const location = useLocation();
  const pathname = location.pathname.toLowerCase();
  const params = useParams();
  const conversationId = params.conversationId;

  const updateSettings = (actions) => {
    dispatch({
      type: actionTypes.UPDATE_SETTINGS,
      ...actions,
    });
  };

  return (
    <ChannelLeft>
      <ChannelLeft.Head>
        <DirectMessagesSearchBar>
          Find or start a conversation
        </DirectMessagesSearchBar>
      </ChannelLeft.Head>
      <ChannelLeft.Body>
        <ChannelLeft.Group>
          <ChannelLeft.Row
            url="/channels/@me"
            selected={pathname === "/channels/@me"}
          >
            <FriendIcon
              fill={pathname === "/channels/@me" ? "#dcddde" : "#96989D"}
              className="iconPath"
            />
            Friends
          </ChannelLeft.Row>
          <ChannelLeft.Row>
            <SnowsgivingIcon />
            Snowsgiving
          </ChannelLeft.Row>
          <ChannelLeft.Row url="/store" selected={pathname === "/store"}>
            <NitroIcon
              fill={pathname === "/store" ? "#dcddde" : "#96989D"}
              className="iconPath"
            />
            Nitro
          </ChannelLeft.Row>
        </ChannelLeft.Group>
        <ChannelLeft.Group>
          <ChannelLeft.GroupHeader>
            <ChannelLeft.GroupHeaderText>
              DIRECT MESSAGES
            </ChannelLeft.GroupHeaderText>
            <AddIcon />
          </ChannelLeft.GroupHeader>
          {conversations.map((conversation, i) => {
            const friendId = conversation.users.find((id) => id !== state.user);
            const friend = state.users[friendId];
            return (
              <ChannelLeft.Row
                key={i}
                url={`/channels/@me/${conversation.id}`}
                selected={conversation.id === conversationId}
              >
                <ChannelLeft.ConversationIconWrapper>
                  <Avatar status={friend.status} />
                </ChannelLeft.ConversationIconWrapper>
                {friend.name}
              </ChannelLeft.Row>
            );
          })}
          <ChannelLeft.Row disabled={true}></ChannelLeft.Row>
        </ChannelLeft.Group>
      </ChannelLeft.Body>
      <ChannelLeft.Footer>
        <ChannelLeft.UserInfoWrapper>
          <ChannelLeft.AvatarWrapper>
            <Avatar status={user.status} image={user.avatar} />
          </ChannelLeft.AvatarWrapper>
          <ChannelLeft.NameTag>
            <ChannelLeft.NameTagRow weight="600">
              {user.name}
            </ChannelLeft.NameTagRow>
            <ChannelLeft.NameTagRow fontSize="12px" color="#B9BBBE">
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
            <MicrophoneIcon enabled={enableMicrophone} />
          </ChannelLeft.IconWrapper>
          <ChannelLeft.IconWrapper
            onClick={() =>
              updateSettings({ enableHeadphones: !enableHeadphones })
            }
          >
            <HeadphonesIcon enabled={enableHeadphones} />
          </ChannelLeft.IconWrapper>
          <ChannelLeft.IconWrapper
            onClick={() => updateSettings({ enableSettings: !enableSettings })}
          >
            <CogwheelIcon />
          </ChannelLeft.IconWrapper>
        </ChannelLeft.IconsWrapper>
      </ChannelLeft.Footer>
    </ChannelLeft>
  );
}
