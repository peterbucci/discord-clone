import React, { useState } from "react";
import LayoutLeft from "components/LayoutLeft";
import ChannelList from "components/Server/ChannelList";
import UserPanel from "fragments/UserPanel";
import * as Icons from "assets/icons";
import SidebarHeader from "components/Server/SidebarHeader";
import Tooltip from "fragments/Tooltip";
import Menu from "./Menu";

export default function Siderbar({
  server,
  serverCategories,
  serverChannels,
  currentChannel,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <LayoutLeft>
      <LayoutLeft.Head>
        <Tooltip offset={[0, -15]} type="Menu" onChangeState={setMenuOpen}>
          <SidebarHeader menuOpen={menuOpen}>
            <SidebarHeader.ServerName>{server.name}</SidebarHeader.ServerName>
            <SidebarHeader.IconWrapper menuOpen={menuOpen}>
              <Icons.CloseToDownArrow />
            </SidebarHeader.IconWrapper>
          </SidebarHeader>
          <Menu />
        </Tooltip>
      </LayoutLeft.Head>
      <LayoutLeft.Body>
        <ChannelList>
          {Object.values(serverCategories).map((category) => {
            const categoryChannels = serverChannels.filter(
              (channel) => channel.category === category.id
            );
            return (
              <React.Fragment key={category.id}>
                {category.order !== 0 && (
                  <ChannelList.Category>
                    <ChannelList.CategoryIcon>
                      <Icons.DownArrow />
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
                          <Icons.AddFriendAlt />
                        </ChannelList.ChannelIcon>
                      </ChannelList.ChannelIcons>
                    </ChannelList.Channel>
                  );
                })}
              </React.Fragment>
            );
          })}
        </ChannelList>
      </LayoutLeft.Body>
      <UserPanel />
    </LayoutLeft>
  );
}
