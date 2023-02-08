import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { default as Head } from "../../components/FriendsListHead";
import { useStateValue } from "../../providers/StateProvider";
import { actionTypes } from "../../reducers/state_reducer";
import * as Icons from "assets/icons";

export default function FriendsListHead() {
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
    <Head>
      <Head.Left>
        <Head.IconWrapper>
          <Icons.Friend fill={themeContext.channelIcon} />
        </Head.IconWrapper>
        <Head.Text>Friends</Head.Text>
        <Head.Divider />
        <Head.Nav>
          <Head.NavLink
            selected={friendsListTab === "Online"}
            onClick={() => setTab("Online")}
          >
            Online
          </Head.NavLink>
          <Head.NavLink
            selected={friendsListTab === "All Friends"}
            onClick={() => setTab("All Friends")}
          >
            All
          </Head.NavLink>
          <Head.NavLink
            selected={friendsListTab === "Pending"}
            onClick={() => setTab("Pending")}
          >
            Pending
            {friendRequestCount > 0 && (
              <Head.RequestBadge>{friendRequestCount}</Head.RequestBadge>
            )}
          </Head.NavLink>
          <Head.NavLink
            selected={friendsListTab === "Blocked"}
            onClick={() => setTab("Blocked")}
          >
            Blocked
          </Head.NavLink>
          <Head.NavLink
            addFriend={true}
            selected={friendsListTab === "Add Friend"}
            onClick={() => setTab("Add Friend")}
          >
            Add Friend
          </Head.NavLink>
        </Head.Nav>
      </Head.Left>
      <Head.Right>
        <Head.IconWrapper className="iconPath">
          <Icons.GroupDM />
        </Head.IconWrapper>
        <Head.Divider />
        <Head.IconWrapper className="iconPath">
          <Icons.Inbox />
        </Head.IconWrapper>
        <Head.IconWrapper className="iconPath">
          <Icons.Help />
        </Head.IconWrapper>
      </Head.Right>
    </Head>
  );
}
