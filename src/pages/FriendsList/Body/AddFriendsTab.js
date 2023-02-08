import { useState } from "react";
import AddFriend from "components/AddFriend";
import searchForFriend from "api/search_for_friend";
import { useStateValue } from "providers/StateProvider";
import * as Icons from "assets/icons";

const formatAlertMessage = (alert, searchText) => {
  return alert === "success" ? (
    <AddFriend.Alert success={true} key="success">
      Success! Your friend request to <strong>{searchText}</strong> was sent.
    </AddFriend.Alert>
  ) : alert === "noTag" ? (
    <AddFriend.Alert>
      We need {searchText}'s four digit tag so we know which one they are.
    </AddFriend.Alert>
  ) : (
    <AddFriend.Alert>
      Hm, didn't work. Double check that the capitalization, spelling, any
      spaces, and numbers are correct.
    </AddFriend.Alert>
  );
};

export default function AddFriendsTab() {
  const [searchText, setSearchText] = useState("");
  const [alert, setAlert] = useState(null);
  const { state } = useStateValue();

  const formatText = () => {
    const textMatch = searchText.match(/#\d*/);
    let postText = "#0000";
    if (textMatch) {
      postText = postText.slice(textMatch[0].length, postText.length);
    }
    return searchText + postText;
  };

  const onChange = (e) => {
    setAlert(null);
    const nextValue = e.target.value;
    const nextMatchNoAnchor = nextValue.match(/#\d*/);
    const nextMatch = nextValue.match(/#\d*$/);
    const lastChar = nextValue.slice(-1);
    if (
      !nextMatchNoAnchor ||
      nextValue.length < searchText.length ||
      (nextMatch && nextMatch[0].length === 1) ||
      (nextMatch &&
        nextMatch[0].length <= 5 &&
        lastChar >= "0" &&
        lastChar <= "9")
    ) {
      setSearchText(e.target.value);
    }
  };

  return (
    <AddFriend>
      <AddFriend.HeadOne>
        <AddFriend.HeadOneTitle>Add Friend</AddFriend.HeadOneTitle>
        <AddFriend.SearchForm
          onSubmit={(e) => {
            e.preventDefault();
            const usernameAndTag = searchText.split("#");
            if (usernameAndTag.length === 1) {
              setAlert(formatAlertMessage("noTag", usernameAndTag[0]));
            } else if (usernameAndTag[1].length !== 4) {
              setAlert(formatAlertMessage("checkSpelling"));
            } else {
              searchForFriend(state.user, usernameAndTag).then((res) => {
                if (res === "success") setSearchText("");
                setAlert(formatAlertMessage(res, searchText));
              });
            }
          }}
        >
          <AddFriend.SearchFormText>
            You can add a friend with their Discord Tag. It's cAsE sEnSitIvE!
          </AddFriend.SearchFormText>
          <AddFriend.SearchbarOuterWrapper alert={alert}>
            <AddFriend.SearchbarInnerWrapper>
              <AddFriend.SearchbarInput
                placeholder="Enter a Username#0000"
                value={searchText}
                onChange={onChange}
              />
              {searchText.length > 0 && (
                <AddFriend.SearchbarInputUnderlay>
                  {formatText()}
                </AddFriend.SearchbarInputUnderlay>
              )}
            </AddFriend.SearchbarInnerWrapper>
            <AddFriend.SearchbarButton disabled={searchText.length === 0}>
              Send Friend Request
            </AddFriend.SearchbarButton>
          </AddFriend.SearchbarOuterWrapper>
          {alert && alert}
        </AddFriend.SearchForm>
      </AddFriend.HeadOne>
      <AddFriend.HeadTwo>
        <AddFriend.HeadTwoTitle>
          Other Places to Make Friends
        </AddFriend.HeadTwoTitle>
      </AddFriend.HeadTwo>
      <AddFriend.ExploreButton>
        <AddFriend.ExploreButtonImg src="/assets/explore_public_servers.svg" />
        <AddFriend.ExploreButtonText>
          Explore Public Servers
        </AddFriend.ExploreButtonText>
        <Icons.RightArrow />
      </AddFriend.ExploreButton>
      <AddFriend.Footer>
        <AddFriend.FooterImg />
        <AddFriend.FooterText>
          Wumpus is waiting on friends. You don't have to though!
        </AddFriend.FooterText>
      </AddFriend.Footer>
    </AddFriend>
  );
}
