import updateUser from "api/update_user";
import Channel from "components/Channel";
import * as Icons from "assets/icons/index";

export default function Head({ sender, recipient }) {
  return (
    <Channel.RightHead>
      <Channel.RightHeadTitle>
        <Channel.RightHeadIconWrapper>
          <Icons.At />
        </Channel.RightHeadIconWrapper>
        <Channel.RightHeadRecipient>
          {recipient && recipient.name}
        </Channel.RightHeadRecipient>
        <Channel.RightHeadRecipientStatus>
          <Icons.Offline />
        </Channel.RightHeadRecipientStatus>
      </Channel.RightHeadTitle>
      <Channel.RightHeadToolbar>
        <Channel.RightHeadIconWrapper>
          <Icons.VoiceCall />
        </Channel.RightHeadIconWrapper>
        <Channel.RightHeadIconWrapper>
          <Icons.VideoCall />
        </Channel.RightHeadIconWrapper>
        <Channel.RightHeadIconWrapper>
          <Icons.PinnedMessages />
        </Channel.RightHeadIconWrapper>
        <Channel.RightHeadIconWrapper>
          <Icons.AddFriend />
        </Channel.RightHeadIconWrapper>
        <Channel.RightHeadIconWrapper
          highlighted={!sender.hideUserProfile}
          onClick={() =>
            updateUser(sender.id, { hideUserProfile: !sender.hideUserProfile })
          }
        >
          <Icons.HideProfile />
        </Channel.RightHeadIconWrapper>
        <Channel.RightHeadSearchWrapper></Channel.RightHeadSearchWrapper>
        <Channel.RightHeadIconWrapper>
          <Icons.Inbox />
        </Channel.RightHeadIconWrapper>
        <Channel.RightHeadIconWrapper>
          <Icons.Help />
        </Channel.RightHeadIconWrapper>
      </Channel.RightHeadToolbar>
    </Channel.RightHead>
  );
}
