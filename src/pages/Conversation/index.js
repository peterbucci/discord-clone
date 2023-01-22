import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import updateActiveConversations from "../../api/update_active_conversations";
import updateUser from "../../api/update_user";
import Channel from "../../components/Channel";
import ConversationList from "../../fragments/ConversationList";
import { useStateValue } from "../../providers/StateProvider";
import Message from "./Message";
import sameDay from "../../helpers/same_day";
import MessageSender from "../../fragments/MessageSender";
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
import Head from "./Head";

export default function Conversation() {
  const profilePanelRef = useRef(null);
  const [layerDetails, setLayerDetails] = useState(null);
  const [messageToEdit, setMessageToEdit] = useState(null);
  const [messageToReply, setMessageToReply] = useState(null);
  const {
    state: { user, users, conversations, messages },
  } = useStateValue();
  const conversationRef = useRef(null);
  const params = useParams();
  const conversationId = params.conversationId;
  const conversation = conversations[conversationId];
  const conversationMessages = messages[conversationId]
    ? Object.values(messages[conversationId])
    : [];

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
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMessageToEdit(null);
    };
    if (messageToEdit) {
      document.addEventListener("keydown", onKeyDown);
    }
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [messageToEdit]);

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
        <Channel.RightBody>
          <Channel.RightMainWrapper>
            <Channel.RightMain ref={conversationRef}>
              <Channel.Conversation>
                <Head recipientId={recipientId} />
                {conversationMessages.map(
                  ({ sender, id, ...message }, idx, arr) => {
                    const date = message.timestamp.toDate();
                    const prevDate = arr[idx - 1]?.timestamp.toDate();
                    return (
                      <React.Fragment key={id}>
                        {(!prevDate || !sameDay(date, prevDate)) && (
                          <Channel.DailyDivider>
                            {date.toLocaleString("default", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </Channel.DailyDivider>
                        )}
                        <Message
                          {...message}
                          sender={users[sender]}
                          id={id}
                          prevPost={arr[idx - 1]}
                          edit={messageToEdit === id}
                          conversationId={conversationId}
                          setEdit={setMessageToEdit}
                          setMessageToReply={setMessageToReply}
                          setLayerDetails={setLayerDetails}
                        />
                      </React.Fragment>
                    );
                  }
                )}
                <Channel.ConversationSpacer />
              </Channel.Conversation>
            </Channel.RightMain>
            <Channel.RightMainFooter>
              <MessageSender
                messageToReply={messageToReply}
                setMessageToReply={setMessageToReply}
              />
            </Channel.RightMainFooter>
          </Channel.RightMainWrapper>
          {!sender.hideUserProfile && <ProfilePanel id={recipientId} />}
        </Channel.RightBody>
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
