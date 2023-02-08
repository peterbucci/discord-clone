import React, { useState, useRef, useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";
import { useLocation } from "react-router-dom";
import { default as NewSidebar } from "../../components/Sidebar";
import DirectMessagesIcon from "./DirectMessagesIcon";
import Icon from "./Icon";
import { useStateValue } from "../../providers/StateProvider";

const ADDITIONAL_ICONS = [
  {
    id: "addServer",
    path: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z",
  },
  {
    id: "exploreServers",
    path: "M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z",
    pill: true,
    url: "/guild-discovery",
  },
  {
    id: "downloadApps",
    path: "M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 12.586V2H13V12.586L16.293 9.293ZM18 20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 20V18H6V20H18Z",
    hr: true,
    pill: true,
    pathProps: {
      fillRule: "evenodd",
      clipRule: "evenodd",
    },
  },
];

export default function Sidebar() {
  const themeContext = useContext(ThemeContext);
  const {
    state: { servers },
  } = useStateValue();
  const serversArr = Object.values(servers);
  const location = useLocation();
  const [iconSelected, setIconSelected] = useState(location.pathname);
  const iconsRef = useRef([]);

  useEffect(() => {
    setIconSelected(location.pathname);
  }, [location]);

  const directMessagesSelected =
    iconSelected.startsWith("/channels/@me") ||
    iconSelected.startsWith("/store");

  return (
    <NewSidebar>
      <NewSidebar.Item
        id="directMessages"
        ref={(el) => (iconsRef.current[0] = el)}
        url={directMessagesSelected ? null : "/channels/@me"}
      >
        <NewSidebar.Icon selected={directMessagesSelected}>
          <DirectMessagesIcon selected={directMessagesSelected} />
        </NewSidebar.Icon>
        <NewSidebar.Pill selected={directMessagesSelected} />
      </NewSidebar.Item>
      <NewSidebar.HorizontalLine />
      {serversArr.map(({ id, ...server }, idx) => {
        const url = "/channels/" + id;
        const selected = iconSelected.startsWith(url);
        return (
          <NewSidebar.Item
            key={id}
            ref={(el) => (iconsRef.current[idx + 1] = el)}
            url={url}
          >
            <NewSidebar.Icon selected={selected}>{server.tag}</NewSidebar.Icon>
            <NewSidebar.Pill selected={selected} height="8px" />
          </NewSidebar.Item>
        );
      })}
      {ADDITIONAL_ICONS.map((icon, idx) => {
        const { id, path, hr, pill, pathProps, url } = icon;
        const selected = iconSelected.startsWith(url ?? id);
        return (
          <React.Fragment key={id}>
            {hr && <NewSidebar.HorizontalLine />}
            <NewSidebar.Item
              ref={(el) => (iconsRef.current[serversArr.length + idx + 1] = el)}
              onClick={() => setIconSelected(url ?? id)}
              url={url}
            >
              <NewSidebar.Icon
                color={themeContext.statusGreen600}
                fillStyleHover={themeContext.white}
                selected={selected}
              >
                <Icon selected={selected} path={path} pathProps={pathProps} />
              </NewSidebar.Icon>
              {pill && <NewSidebar.Pill selected={selected} />}
            </NewSidebar.Item>
          </React.Fragment>
        );
      })}
    </NewSidebar>
  );
}
