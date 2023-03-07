import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import LayoutLeft from "components/LayoutLeft";
import { DirectMessagesSearchBar } from "components/DirectMessages";
import Avatar from "fragments/Avatar";
import UserPanel from "fragments/UserPanel";
import { useStateValue } from "providers/StateProvider";
import updateActiveConversations from "api/update_active_conversations";
import * as Icons from "assets/icons";

export default function ConversationSidebar() {
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
    <LayoutLeft>
      <LayoutLeft.Head>
        <DirectMessagesSearchBar>
          Find or start a conversation
        </DirectMessagesSearchBar>
      </LayoutLeft.Head>
      <LayoutLeft.Body>
        <LayoutLeft.Group>
          <LayoutLeft.Row
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
          </LayoutLeft.Row>
          <LayoutLeft.Row url="/store" selected={pathname === "/store"}>
            <Icons.Nitro
              fill={
                pathname === "/store"
                  ? themeContext.textNormal
                  : themeContext.channelsDefault
              }
              className="iconPath"
            />
            Nitro
          </LayoutLeft.Row>
        </LayoutLeft.Group>
        <LayoutLeft.Group>
          <LayoutLeft.GroupHeader>
            <LayoutLeft.GroupHeaderText>
              DIRECT MESSAGES
            </LayoutLeft.GroupHeaderText>
            <Icons.Add />
          </LayoutLeft.GroupHeader>
          {conversations.map((conversation, i) => {
            const friendId = conversation
              ? Object.keys(conversation.users).find((id) => id !== state.user)
              : null;
            const friend = state.users[friendId];
            return !friend ? (
              <React.Fragment key={friendId} />
            ) : (
              <LayoutLeft.Row
                key={i}
                url={`/channels/@me/${conversation.id}`}
                selected={conversation.id === conversationId}
                channel={true}
              >
                <LayoutLeft.ConversationIconWrapper>
                  <Avatar
                    status={friend.status}
                    image={friend.avatar ?? `default_avatars/${friend.tag % 6}`}
                  />
                </LayoutLeft.ConversationIconWrapper>
                <LayoutLeft.RowText>{friend.name}</LayoutLeft.RowText>
                <LayoutLeft.DeleteConversationIcon
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
                </LayoutLeft.DeleteConversationIcon>
              </LayoutLeft.Row>
            );
          })}
          <LayoutLeft.Row disabled={true}></LayoutLeft.Row>
        </LayoutLeft.Group>
      </LayoutLeft.Body>
      <UserPanel />
    </LayoutLeft>
  );
}
