import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import updateActiveConversations from "../../api/update_active_conversations";
import updateUser from "../../api/update_user";
import Channel from "../../components/Channel";
import ConversationList from "../../fragments/ConversationList";
import { useStateValue } from "../../providers/StateProvider";
import ProfilePanel from "../../fragments/ProfilePanel";
import LayerContainer from "../../fragments/LayerContainer";
import AtIcon from "./icons/at";
import OfflineIcon from "./icons/offline";
import VoiceCallIcon from "./icons/voice_call";
import VideoCallIcon from "./icons/video_call";
import PinnedMessagesIcon from "./icons/pinned_messages";
import AddFriendIcon from "./icons/add_friend";
import HideProfileIcon from "./icons/hide_profile";
import InboxIcon from "./icons/inbox";
import HelpIcon from "./icons/help";
import Body from "./Body";

export default function Conversation() {
  const profilePanelRef = useRef(null);
  const [layerDetails, setLayerDetails] = useState(null);
  const {
    state: { user, users, conversations, messages },
  } = useStateValue();
  const conversationRef = useRef(null);
  const params = useParams();
  const conversationId = params.conversationId;
  const conversation = conversations[conversationId];

  const sender = users[user];
  const recipientId = Object.keys(conversation.users).find((id) => id !== user);
  const recipient = users[recipientId];

  useLayoutEffect(() => {
    const conversationContainer = conversationRef.current;
    if (conversationContainer) {
      conversationContainer.scrollTo(0, conversationContainer.scrollHeight);
    }
  }, [messages]);

  useEffect(() => {
    if (conversation) {
      updateActiveConversations(user, conversationId, true);
    }
  }, [conversation, conversationId, user]);

  return conversation ? (
    <Channel>
      <ConversationList />
      <Channel.Right>
        <Channel.RightHead>
          <Channel.RightHeadTitle>
            <Channel.RightHeadIconWrapper>
              <AtIcon />
            </Channel.RightHeadIconWrapper>
            <Channel.RightHeadRecipient>
              {recipient && recipient.name}
            </Channel.RightHeadRecipient>
            <Channel.RightHeadRecipientStatus>
              <OfflineIcon />
            </Channel.RightHeadRecipientStatus>
          </Channel.RightHeadTitle>
          <Channel.RightHeadToolbar>
            <Channel.RightHeadIconWrapper>
              <VoiceCallIcon />
            </Channel.RightHeadIconWrapper>
            <Channel.RightHeadIconWrapper>
              <VideoCallIcon />
            </Channel.RightHeadIconWrapper>
            <Channel.RightHeadIconWrapper>
              <PinnedMessagesIcon />
            </Channel.RightHeadIconWrapper>
            <Channel.RightHeadIconWrapper>
              <AddFriendIcon />
            </Channel.RightHeadIconWrapper>
            <Channel.RightHeadIconWrapper
              highlighted={!sender.hideUserProfile}
              onClick={() =>
                updateUser(user, { hideUserProfile: !sender.hideUserProfile })
              }
            >
              <HideProfileIcon />
            </Channel.RightHeadIconWrapper>
            <Channel.RightHeadSearchWrapper></Channel.RightHeadSearchWrapper>
            <Channel.RightHeadIconWrapper>
              <InboxIcon />
            </Channel.RightHeadIconWrapper>
            <Channel.RightHeadIconWrapper>
              <HelpIcon />
            </Channel.RightHeadIconWrapper>
          </Channel.RightHeadToolbar>
        </Channel.RightHead>
        <Body
          conversationRef={conversationRef}
          recipientId={recipientId}
          conversationId={conversationId}
          setLayerDetails={setLayerDetails}
        />
      </Channel.Right>
      <LayerContainer
        anchorRef={layerDetails?.anchorRef}
        onClickOut={setLayerDetails}
      >
        <ProfilePanel
          thisRef={profilePanelRef}
          id={layerDetails?.userId}
          absolutePosition={true}
        />
      </LayerContainer>
    </Channel>
  ) : (
    <Navigate to="/channels/@me" />
  );
}
