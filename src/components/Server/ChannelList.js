import {
  Category,
  CategoryContent,
  CategoryIcon,
  CategoryName,
  Channel,
  ChannelContent,
  ChannelIcon,
  ChannelIcons,
  ChannelLink,
  ChannelLinkIcon,
  ChannelLinkText,
  Channels,
  IconVisibility,
} from "./styles/channel_list";
import * as Icons from "assets/icons";

export default function ChannelList({ children, ...restProps }) {
  return <Channels {...restProps}>{children}</Channels>;
}

ChannelList.Category = ({ children, ...restProps }) => {
  return (
    <Category {...restProps}>
      <IconVisibility>
        <CategoryContent>{children}</CategoryContent>
      </IconVisibility>
    </Category>
  );
};

ChannelList.CategoryIcon = ({ children, ...restProps }) => {
  return <CategoryIcon {...restProps}>{children}</CategoryIcon>;
};

ChannelList.CategoryName = ({ children, ...restProps }) => {
  return <CategoryName {...restProps}>{children}</CategoryName>;
};

ChannelList.Channel = ({ children, selected, ...restProps }) => {
  return (
    <Channel {...restProps}>
      <ChannelContent selected={selected}>{children}</ChannelContent>
    </Channel>
  );
};

ChannelList.ChannelLink = ({ children, type, ...restProps }) => {
  return (
    <ChannelLink {...restProps}>
      <ChannelLinkIcon>
        {type === "voice" ? <Icons.VoiceChat /> : <Icons.TextChat />}
      </ChannelLinkIcon>
      <ChannelLinkText>{children}</ChannelLinkText>
    </ChannelLink>
  );
};

ChannelList.ChannelIcons = ({ children, ...restProps }) => {
  return <ChannelIcons {...restProps}>{children}</ChannelIcons>;
};

ChannelList.ChannelIcon = ({ children, ...restProps }) => {
  return <ChannelIcon {...restProps}>{children}</ChannelIcon>;
};
