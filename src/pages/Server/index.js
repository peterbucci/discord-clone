import React, { useEffect, useState, useRef } from "react";
import { default as ServerSidebar } from "components/ChannelLeft";
import { Navigate, useParams } from "react-router-dom";
import { default as ServerLayout } from "../../components/Channel";
import { useStateValue } from "../../providers/StateProvider";

import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../../firebase";
import ChannelList from "components/Server/ChannelList";
import UserPanel from "fragments/UserPanel";
import MessageList from "fragments/MessageList";
import MessageSender from "fragments/MessageSender";

export default function Server() {
  const conversationRef = useRef(null);
  const [replyToMessage, setReplyToMessage] = useState(null);
  const [categories, setCategories] = useState({});
  const [channels, setChannels] = useState({});
  const unsubscribersRef = useRef({});
  const {
    state: { servers },
  } = useStateValue();
  const params = useParams();
  const server = servers[params.serverId];
  const currentChannel = channels[params.channelId];

  const getDefaultChannel = () => {
    return Object.values(channels).filter(
      (channel) => categories[channel.category].order === 0
    )[0];
  };

  useEffect(() => {
    const unsubscribers = unsubscribersRef.current;
    if (server && !unsubscribers.categories) {
      const categoriesQuery = query(
        collection(db, "servers", server.id, "categories"),
        orderBy("order")
      );
      const categoriesUnsubscriber = onSnapshot(
        categoriesQuery,
        (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            setCategories((prev) => ({
              ...prev,
              [data.id]: data,
            }));
          });
        }
      );
      unsubscribers.categories = categoriesUnsubscriber;
    }
  }, [server]);

  useEffect(() => {
    const categoryKeys = Object.keys(categories);
    const unsubscribers = unsubscribersRef.current;
    if (categoryKeys.length) {
      const channelUnsubscribers = categoryKeys.reduce((currUnsub, key) => {
        if (!unsubscribers.key) {
          const channelsQuery = query(
            collection(db, "servers", server.id, "categories", key, "channels"),
            orderBy("order")
          );
          const unsub = onSnapshot(channelsQuery, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
              const data = doc.data();
              setChannels((prev) => ({
                ...prev,
                [data.id]: data,
              }));
            });
          });

          return {
            ...currUnsub,
            [key]: unsub,
          };
        } else {
          return currUnsub;
        }
      }, {});

      unsubscribersRef.current = {
        ...unsubscribers,
        ...channelUnsubscribers,
      };
    }
  }, [categories, server.id]);

  return server ? (
    currentChannel || Object.keys(channels).length === 0 ? (
      <ServerLayout>
        <ServerSidebar>
          <ServerSidebar.Head>{server.name}</ServerSidebar.Head>
          <ServerSidebar.Body>
            <ChannelList>
              {Object.values(categories).map((category) => {
                const categoryChannels = Object.values(channels).filter(
                  (channel) => channel.category === category.id
                );
                return (
                  <React.Fragment key={category.id}>
                    {category.order !== 0 && (
                      <ChannelList.Category>
                        <ChannelList.CategoryIcon>
                          <svg width="12" height="12" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"
                            ></path>
                          </svg>
                        </ChannelList.CategoryIcon>
                        <ChannelList.CategoryName>
                          {category.name}
                        </ChannelList.CategoryName>
                      </ChannelList.Category>
                    )}
                    {categoryChannels.map((channel) => {
                      return (
                        <ChannelList.Channel
                          key={channel.id}
                          selected={channel.id === currentChannel.id}
                        >
                          <ChannelList.ChannelLink
                            type={channel.type}
                            to={`/channels/${server.id}/${channel.id}`}
                          >
                            {channel.name}
                          </ChannelList.ChannelLink>
                          <ChannelList.ChannelIcons>
                            <ChannelList.ChannelIcon
                              selected={channel.id === currentChannel.id}
                            >
                              <svg
                                aria-hidden="true"
                                role="img"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill="currentColor"
                                  d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"
                                ></path>
                                <path
                                  fill="currentColor"
                                  d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"
                                ></path>
                                <path
                                  fill="currentColor"
                                  d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"
                                ></path>
                              </svg>
                            </ChannelList.ChannelIcon>
                          </ChannelList.ChannelIcons>
                        </ChannelList.Channel>
                      );
                    })}
                  </React.Fragment>
                );
              })}
            </ChannelList>
          </ServerSidebar.Body>
          <UserPanel />
        </ServerSidebar>
        <ServerLayout.Right>
          <ServerLayout.RightHead>Right</ServerLayout.RightHead>
          <ServerLayout.RightBody>
            <ServerLayout.RightMainWrapper>
              <ServerLayout.RightMain ref={conversationRef}>
                <ServerLayout.Conversation>
                  <MessageList
                    conversationId={currentChannel?.id}
                    containerRef={conversationRef}
                    setReplyToMessage={setReplyToMessage}
                  />
                  <ServerLayout.ConversationSpacer />
                </ServerLayout.Conversation>
              </ServerLayout.RightMain>
              <ServerLayout.RightMainFooter>
                <MessageSender
                  replyToMessage={replyToMessage}
                  setReplyToMessage={setReplyToMessage}
                />
              </ServerLayout.RightMainFooter>
            </ServerLayout.RightMainWrapper>
          </ServerLayout.RightBody>
        </ServerLayout.Right>
      </ServerLayout>
    ) : (
      <Navigate
        replace
        to={`/channels/${server.id}/${getDefaultChannel().id}`}
      />
    )
  ) : (
    <Navigate replace to="/channels/@me" />
  );
}
