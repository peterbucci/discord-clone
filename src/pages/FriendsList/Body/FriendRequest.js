import { useContext } from "react";
import { ThemeContext } from "styled-components";
import FriendsListBody from "components/FriendsListBody";
import { useStateValue } from "providers/StateProvider";
import addFriend from "../../../api/add_friend";
import deleteFriendRequest from "../../../api/delete_friend_request";
import * as Icons from "assets/icons";

export default function FriendRequest({ id, outgoing }) {
  const themeContext = useContext(ThemeContext);
  const {
    state: { user, users, friendRequests },
  } = useStateValue();
  const friend = users[id];
  const request = friendRequests[id];

  return (
    <FriendsListBody.ListItem visible={true}>
      <FriendsListBody.AvatarWrapper>
        <FriendsListBody.Avatar
          src={friend.avatar ?? `/assets/default_avatars/${friend.tag % 6}.png`}
        />
      </FriendsListBody.AvatarWrapper>
      <FriendsListBody.ListItemText>
        <FriendsListBody.ListItemTextRow>
          <FriendsListBody.ListItemTextSpan>
            {friend.name}
          </FriendsListBody.ListItemTextSpan>
          <FriendsListBody.ListItemTextSpan tag={true}>
            #{friend.tag}
          </FriendsListBody.ListItemTextSpan>
        </FriendsListBody.ListItemTextRow>
        <FriendsListBody.ListItemTextRow
          fontSize="12px"
          color={themeContext.interactiveNormal}
        >
          {outgoing ? "Outgoing" : "Incoming"} Friend Request
        </FriendsListBody.ListItemTextRow>
      </FriendsListBody.ListItemText>
      <FriendsListBody.ListItemActions>
        {!outgoing && (
          <FriendsListBody.ListItemAction onClick={() => addFriend(user, id)}>
            <Icons.CheckMark />
          </FriendsListBody.ListItemAction>
        )}
        <FriendsListBody.ListItemAction
          cancel={true}
          onClick={() => deleteFriendRequest(id, user, request.sender === user)}
        >
          <Icons.Close width={20} height={20} />
        </FriendsListBody.ListItemAction>
      </FriendsListBody.ListItemActions>
    </FriendsListBody.ListItem>
  );
}
