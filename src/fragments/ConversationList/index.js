import { useLocation, useParams, useNavigate } from "react-router-dom";
import updateActiveConversations from "../../api/update_active_conversations";
import ChannelLeft from "../../components/ChannelLeft";
import { DirectMessagesSearchBar } from "../../components/DirectMessages";
import { useStateValue } from "../../providers/StateProvider";
import { actionTypes } from "../../reducers/state_reducer";
import Avatar from "../Avatar";
import AddIcon from "./icons/add";
import CloseIcon from "./icons/close";
import CogwheelIcon from "./icons/cogwheel";
import FriendIcon from "./icons/friend";
import HeadphonesIcon from "./icons/headphones";
import MicrophoneIcon from "./icons/microphone";
import NitroIcon from "./icons/nitro";
import SnowsgivingIcon from "./icons/snowsgiving";

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
  const navigate = useNavigate();

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
                channel={true}
              >
                <ChannelLeft.ConversationIconWrapper>
                  <Avatar
                    status={friend.status}
                    image={friend.avatar ?? `default_avatars/${friend.tag % 6}`}
                  />
                </ChannelLeft.ConversationIconWrapper>
                <ChannelLeft.RowText>{friend.name}</ChannelLeft.RowText>
                <ChannelLeft.DeleteConversationIcon
                  className="deleteConversationIcon"
                  onClick={(e) => {
                    updateActiveConversations(
                      state.user,
                      conversation.id,
                      false
                    );
                    e.preventDefault();
                    e.stopPropagation();
                    if (conversationId === conversation.id) {
                      navigate("/channels/@me");
                    }
                  }}
                >
                  <CloseIcon />
                </ChannelLeft.DeleteConversationIcon>
              </ChannelLeft.Row>
            );
          })}
          <ChannelLeft.Row disabled={true}></ChannelLeft.Row>
        </ChannelLeft.Group>
      </ChannelLeft.Body>
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
