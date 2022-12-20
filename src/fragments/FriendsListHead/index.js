import { default as Head } from "../../components/FriendsListHead";
import FriendIcon from "../../fragments/Icons/friend";
import GroupDMIcon from "../../fragments/Icons/group_dm";
import HelpIcon from "../../fragments/Icons/help";
import InboxIcon from "../../fragments/Icons/inbox";
import { useStateValue } from "../../providers/StateProvider";
import { actionTypes } from "../../reducers/state_reducer";

export default function FriendsListHead() {
  const {
    state: { friendsListTab },
    dispatch,
  } = useStateValue();

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
          <FriendIcon fill="#8E9297" />
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
          <GroupDMIcon />
        </Head.IconWrapper>
        <Head.Divider />
        <Head.IconWrapper className="iconPath">
          <InboxIcon />
        </Head.IconWrapper>
        <Head.IconWrapper className="iconPath">
          <HelpIcon />
        </Head.IconWrapper>
      </Head.Right>
    </Head>
  );
}
