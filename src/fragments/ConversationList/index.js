import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import updateActiveConversations from "../../api/update_active_conversations";
import ChannelLeft from "../../components/ChannelLeft";
import { DirectMessagesSearchBar } from "../../components/DirectMessages";
import { useStateValue } from "../../providers/StateProvider";
import Avatar from "../Avatar";
import * as Icons from "assets/icons";
import UserPanel from "fragments/UserPanel";

export default function ConversationList() {
  const themeContext = useContext(ThemeContext);
  const { state } = useStateValue();
  const conversations = state.activeConversations.map(
    (id) => state.conversations[id]
  );

  const location = useLocation();
  const pathname = location.pathname.toLowerCase();
  const params = useParams();
  const conversationId = params.conversationId;
  const navigate = useNavigate();

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
            <Icons.Friend
              fill={
                pathname === "/channels/@me"
                  ? themeContext.textNormal
                  : themeContext.channelsDefault
              }
              className="iconPath"
            />
            Friends
          </ChannelLeft.Row>
          <ChannelLeft.Row>
            <Icons.Snowsgiving />
            Snowsgiving
          </ChannelLeft.Row>
          <ChannelLeft.Row url="/store" selected={pathname === "/store"}>
            <Icons.Nitro
              fill={
                pathname === "/store"
                  ? themeContext.textNormal
                  : themeContext.channelsDefault
              }
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
            <Icons.Add />
          </ChannelLeft.GroupHeader>
          {conversations.map((conversation, i) => {
            const friendId = Object.keys(conversation.users).find(
              (id) => id !== state.user
            );
            const friend = state.users[friendId];
            return !friend ? (
              <React.Fragment key={friendId} />
            ) : (
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
                  <Icons.Close fill="textNormal" />
                </ChannelLeft.DeleteConversationIcon>
              </ChannelLeft.Row>
            );
          })}
          <ChannelLeft.Row disabled={true}></ChannelLeft.Row>
        </ChannelLeft.Group>
      </ChannelLeft.Body>
      <UserPanel />
    </ChannelLeft>
  );
}
