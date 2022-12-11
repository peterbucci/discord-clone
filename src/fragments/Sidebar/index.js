import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { default as NewSidebar } from "../../components/Sidebar";
import DirectMessagesIcon from "./DirectMessagesIcon";
import Icon from "./Icon";

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
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
    },
  },
];

export default function Sidebar({ channels }) {
  const location = useLocation();
  const [iconActive, setIconActive] = useState(false);
  const [iconSelected, setIconSelected] = useState(location.pathname);
  const iconsRef = useRef([]);

  useEffect(() => {
    setIconSelected(location.pathname);
  }, [location]);

  useEffect(() => {
    const icons = iconsRef.current;
    const onMouseOver = (e) => setIconActive(e.currentTarget.id);
    const onMouseOut = () => setIconActive(null);
    icons.map((icon) => {
      icon.addEventListener("mouseover", onMouseOver);
      icon.addEventListener("mouseout", onMouseOut);
    });

    return () => {
      icons.map((icon) => {
        icon.removeEventListener("mouseover", onMouseOver);
        icon.removeEventListener("mouseout", onMouseOut);
      });
    };
  });

  return (
    <NewSidebar>
      <NewSidebar.Item
        id="directMessages"
        ref={(el) => (iconsRef.current[0] = el)}
        url="/channels/@me"
      >
        <NewSidebar.Pill
          selected={iconSelected.startsWith("/channels/@me")}
          active={
            iconActive === "directMessages" &&
            !iconSelected.startsWith("/channels/@me")
          }
          hidden={
            iconActive !== "directMessages" &&
            !iconSelected.startsWith("/channels/@me")
          }
        />
        <DirectMessagesIcon
          active={iconActive === "directMessages"}
          selected={iconSelected.startsWith("/channels/@me")}
        />
      </NewSidebar.Item>
      <NewSidebar.HorizontalLine />
      {channels.map(({ id, ...channel }, idx) => {
        const url = "/channels/" + id;
        const active = iconActive === id;
        const selected = iconSelected.startsWith(url);
        return (
          <NewSidebar.Item
            id={id}
            ref={(el) => (iconsRef.current[idx + 1] = el)}
            url={url}
          >
            <NewSidebar.Pill active={active} selected={selected} />
            <NewSidebar.Icon active={active} selected={selected}>
              {channel.tag}
            </NewSidebar.Icon>
          </NewSidebar.Item>
        );
      })}
      {ADDITIONAL_ICONS.map((icon, idx) => {
        const { id, path, hr, pill, pathProps, url } = icon;
        const active = iconActive === id;
        const selected = iconSelected.startsWith(url ?? id);
        return (
          <>
            {hr && <NewSidebar.HorizontalLine />}
            <NewSidebar.Item
              id={id}
              ref={(el) => (iconsRef.current[channels.length + idx + 1] = el)}
              onClick={() => setIconSelected(url ?? id)}
              url={url}
            >
              <NewSidebar.Icon
                color="#3BA55D"
                active={active}
                selected={selected}
              >
                {pill && (
                  <NewSidebar.Pill
                    selected={selected}
                    active={active && !selected}
                    hidden={!active && !selected}
                  />
                )}
                <Icon
                  active={active}
                  selected={selected}
                  path={path}
                  pathProps={pathProps}
                />
              </NewSidebar.Icon>
            </NewSidebar.Item>
          </>
        );
      })}
    </NewSidebar>
  );
}
