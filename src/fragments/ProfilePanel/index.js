import { useState, useEffect, useLayoutEffect } from "react";
import { default as NewPanel } from "../../components/ProfilePanel";
import Avatar from "../../fragments/Avatar";
import { useStateValue } from "../../providers/StateProvider";
import createDoc from "helpers/create_doc";

export default function ProfilePanel({ thisRef, id, absolutePosition }) {
  const {
    state: { user, users, notes },
  } = useStateValue();
  const profile = users[id] ?? {};
  const [placeholderText, setPlaceholderText] = useState("Click to add a note");
  const [note, setNote] = useState(notes[id]?.text ?? "");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (note !== notes[id]?.text) {
        const collectionPath = ["users", user, "notes"];
        createDoc(collectionPath, { text: note }, id);
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [note, id, user, notes]);

  useLayoutEffect(() => {
    setNote(notes[id]?.text ?? "");
  }, [id, notes]);

  useEffect(() => {
    const onClickAndBlur = () =>
      setPlaceholderText(
        document.activeElement.id === "noteEditText"
          ? ""
          : "Click to add a note"
      );
    const noteEditText = document.getElementById("noteEditText");
    noteEditText.addEventListener("click", onClickAndBlur);
    noteEditText.addEventListener("blur", onClickAndBlur);
    return () => {
      noteEditText.removeEventListener("click", onClickAndBlur);
      noteEditText.removeEventListener("blur", onClickAndBlur);
    };
  }, []);

  return (
    <NewPanel ref={thisRef}>
      <NewPanel.Header>
        <NewPanel.Banner absolutePosition={absolutePosition} />
        <NewPanel.AvatarWrapper absolutePosition={absolutePosition}>
          <Avatar
            status={profile.status}
            size="Large"
            image={profile.avatar ?? `default_avatars/${profile.tag % 6}`}
          />
        </NewPanel.AvatarWrapper>
        <NewPanel.BadgeListGroup>
          <NewPanel.BadgeList></NewPanel.BadgeList>
        </NewPanel.BadgeListGroup>
      </NewPanel.Header>
      <NewPanel.UserPanelOverlay>
        <NewPanel.UserPanelSection>
          <NewPanel.UserText>
            <NewPanel.Username>{profile.name}</NewPanel.Username>
            <NewPanel.UserTag>#{profile.tag}</NewPanel.UserTag>
          </NewPanel.UserText>
        </NewPanel.UserPanelSection>
        {profile.customStatus && (
          <NewPanel.UserPanelSection>
            <NewPanel.CustomStatus>
              {profile.customStatus.emoji && (
                <NewPanel.CustomStatusEmoji
                  src={`/assets/emoji/${profile.customStatus.emoji}.svg`}
                  alt={profile.customStatus.emoji}
                />
              )}
              <NewPanel.CustomStatusText>
                {profile.customStatus.text}
              </NewPanel.CustomStatusText>
            </NewPanel.CustomStatus>
          </NewPanel.UserPanelSection>
        )}
        <NewPanel.UserPanelDivider />
        {profile.aboutMe && (
          <NewPanel.UserPanelSection>
            <NewPanel.UserPanelSectionHead>
              About Me
            </NewPanel.UserPanelSectionHead>
            <NewPanel.UserPanelSectionText>
              {profile.aboutMe}
            </NewPanel.UserPanelSectionText>
          </NewPanel.UserPanelSection>
        )}
        <NewPanel.UserPanelSection>
          <NewPanel.UserPanelSectionHead>
            DISCORD MEMBER SINCE
          </NewPanel.UserPanelSectionHead>
          <NewPanel.UserPanelSectionText>
            {profile.signUp?.toDate().toLocaleString("default", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </NewPanel.UserPanelSectionText>
        </NewPanel.UserPanelSection>
        {!absolutePosition && <NewPanel.UserPanelDivider />}
        <NewPanel.UserPanelSection>
          <NewPanel.UserPanelSectionHead>NOTE</NewPanel.UserPanelSectionHead>
          <NewPanel.Note>
            <NewPanel.NoteEdit
              id="noteEditText"
              placeholder={placeholderText}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </NewPanel.Note>
        </NewPanel.UserPanelSection>
      </NewPanel.UserPanelOverlay>
    </NewPanel>
  );
}

<img
  aria-label=":grinning:"
  src="/assets/7c010dc6da25c012643ea22c1f002bb4.svg"
  alt="😀"
  draggable="false"
  class="emoji emoji-V71N2V emoji-3iqL7b customStatusEmoji-1hUpwD"
  data-type="emoji"
  data-name="😀"
></img>;
