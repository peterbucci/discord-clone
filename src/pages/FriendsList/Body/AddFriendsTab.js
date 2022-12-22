import { useState } from "react";
import AddFriend from "../../../components/AddFriend";

export default function AddFriendsTab() {
  const [searchText, setSearchText] = useState("");

  const formatText = () => {
    const textMatch = searchText.match(/#\d*/);
    let postText = "#0000";
    if (textMatch) {
      postText = postText.slice(textMatch[0].length, postText.length);
    }
    return searchText + postText;
  };

  const onChange = (e) => {
    const nextValue = e.target.value;
    const nextMatch = nextValue.match(/#\d*/);
    if (
      !nextMatch ||
      nextValue.length < searchText.length ||
      (nextMatch && nextMatch[0].length <= 5)
    ) {
      setSearchText(e.target.value);
    }
  };

  return (
    <AddFriend>
      <AddFriend.HeadOne>
        <AddFriend.HeadOneTitle>Add Friend</AddFriend.HeadOneTitle>
        <AddFriend.SearchForm>
          <AddFriend.SearchFormText>
            You can add a friend with their Discord Tag. It's cAsE sEnSitIvE!
          </AddFriend.SearchFormText>
          <AddFriend.SearchbarOuterWrapper>
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
        <svg
          fill="none"
          height="20"
          viewBox="0 0 20 20"
          width="20"
          style={{ marginLeft: "auto", marginRight: "16px" }}
        >
          <path
            clipRule="evenodd"
            d="m5.41667 4.2625 5.66573 5.7375-5.66573 5.7375 1.74426 1.7625 7.42237-7.5-7.42237-7.5z"
            fill="#B9BBBE"
            fillRule="evenodd"
          ></path>
        </svg>
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
