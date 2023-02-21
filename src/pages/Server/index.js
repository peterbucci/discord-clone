import React, { useEffect, useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { useStateValue } from "../../providers/StateProvider";
import getChannelCategories from "api/snapshots/get_channel_categories";
import getChannels from "api/snapshots/get_channels";
import Siderbar from "./Sidebar";
import getChannelMessages from "api/snapshots/get_channel_messages";
import Channel from "./Channel";

export default function Server() {
  const {
    state: { servers, unsubscribers, channelCategories, channels },
    dispatch,
  } = useStateValue();
  const params = useParams();
  const server = servers[params.serverId];
  const currentChannel = channels[params.channelId];
  const serverCategories = useMemo(
    () => channelCategories[server.id] ?? {},
    [channelCategories, server.id]
  );
  const serverChannels = Object.values(channels).filter(
    (channel) => serverCategories[channel.category]
  );

  const getDefaultChannel = () => {
    const firstCategory = Object.values(serverCategories)[0];
    return serverChannels.filter(
      (channel) => firstCategory.id === channel.category
    )[0];
  };

  useEffect(() => {
    if (server && !unsubscribers[server.id + "categories"])
      getChannelCategories(server.id, dispatch);
  }, [server, unsubscribers, dispatch]);

  useEffect(() => {
    Object.keys(serverCategories).forEach((key) => {
      if (!unsubscribers[key]) getChannels(key, server.id, dispatch);
    });
  }, [server.id, dispatch, unsubscribers, serverCategories]);

  useEffect(() => {
    if (currentChannel && !unsubscribers[currentChannel.id])
      getChannelMessages(
        server.id,
        currentChannel.category,
        currentChannel.id,
        dispatch
      );
  }, [currentChannel, dispatch, server.id, unsubscribers]);

  return server ? (
    currentChannel || serverChannels.length === 0 ? (
      <Layout>
        <Siderbar
          server={server}
          serverCategories={serverCategories}
          serverChannels={serverChannels}
          currentChannel={currentChannel}
        />
        <Layout.Right>
          {currentChannel ? <Channel currentChannel={currentChannel} /> : <></>}
        </Layout.Right>
      </Layout>
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
