import { useContext } from "react";
import { ThemeContext } from "styled-components";
import FriendsListHead from "components/FriendsList/Head";
import { useStateValue } from "providers/StateProvider";
import { actionTypes } from "reducers/state_reducer";
import * as Icons from "assets/icons";

export default function Head() {
  const themeContext = useContext(ThemeContext);
  const {
    state: { friendsListTab, friendRequests, user },
    dispatch,
  } = useStateValue();

  const friendRequestCount = Object.keys(friendRequests).filter(
    (id) => friendRequests[id].sender !== user
  ).length;

  const setTab = (tab) => {
    dispatch({
      type: actionTypes.SET_FRIENDS_LIST_TAB,
      tab,
    });
  };

  return (
    <FriendsListHead>
      <FriendsListHead.Left>
        <FriendsListHead.IconWrapper>
          <Icons.Friend fill={themeContext.channelIcon} />
        </FriendsListHead.IconWrapper>
        <FriendsListHead.Text>Friends</FriendsListHead.Text>
        <FriendsListHead.Divider />
        <FriendsListHead.Nav>
          <FriendsListHead.NavLink
            selected={friendsListTab === "Online"}
            onClick={() => setTab("Online")}
          >
            Online
          </FriendsListHead.NavLink>
          <FriendsListHead.NavLink
            selected={friendsListTab === "All Friends"}
            onClick={() => setTab("All Friends")}
          >
            All
          </FriendsListHead.NavLink>
          <FriendsListHead.NavLink
            selected={friendsListTab === "Pending"}
            onClick={() => setTab("Pending")}
          >
            Pending
            {friendRequestCount > 0 && (
              <FriendsListHead.RequestBadge>
                {friendRequestCount}
              </FriendsListHead.RequestBadge>
            )}
          </FriendsListHead.NavLink>
          <FriendsListHead.NavLink
            selected={friendsListTab === "Blocked"}
            onClick={() => setTab("Blocked")}
          >
            Blocked
          </FriendsListHead.NavLink>
          <FriendsListHead.NavLink
            addFriend={true}
            selected={friendsListTab === "Add Friend"}
            onClick={() => setTab("Add Friend")}
          >
            Add Friend
          </FriendsListHead.NavLink>
        </FriendsListHead.Nav>
      </FriendsListHead.Left>
      <FriendsListHead.Right>
        <FriendsListHead.IconWrapper className="iconPath">
          <Icons.GroupDM />
        </FriendsListHead.IconWrapper>
        <FriendsListHead.Divider />
        <FriendsListHead.IconWrapper className="iconPath">
          <Icons.Inbox />
        </FriendsListHead.IconWrapper>
        <FriendsListHead.IconWrapper className="iconPath">
          <Icons.Help />
        </FriendsListHead.IconWrapper>
      </FriendsListHead.Right>
    </FriendsListHead>
  );
}
