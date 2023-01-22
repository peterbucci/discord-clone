import FriendsListBody from "components/FriendsListBody";
import { useStateValue } from "providers/StateProvider";
import addFriend from "../../../api/add_friend";
import deleteFriendRequest from "../../../api/delete_friend_request";

export default function FriendRequest({ id, outgoing }) {
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
        <FriendsListBody.ListItemTextRow fontSize="12px" color="#B9BBBE">
          {outgoing ? "Outgoing" : "Incoming"} Friend Request
        </FriendsListBody.ListItemTextRow>
      </FriendsListBody.ListItemText>
      <FriendsListBody.ListItemActions>
        {!outgoing && (
          <FriendsListBody.ListItemAction onClick={() => addFriend(user, id)}>
            <svg
              aria-hidden="true"
              role="img"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="#b9bbbe"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.99991 16.17L4.82991 12L3.40991 13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z"
              ></path>
            </svg>
          </FriendsListBody.ListItemAction>
        )}
        <FriendsListBody.ListItemAction
          cancel={true}
          onClick={() => deleteFriendRequest(id, user, request.sender === user)}
        >
          <svg
            aria-hidden="true"
            role="img"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="#b9bbbe"
              d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"
            ></path>
          </svg>
        </FriendsListBody.ListItemAction>
      </FriendsListBody.ListItemActions>
    </FriendsListBody.ListItem>
  );
}
