import { useEffect, useState } from "react";
import Page from "components/AddAServer/Page";

export default function JoinAServer({ closeMenu, setPage, page }) {
  const [render, setRender] = useState(page === 2.2);
  const [inviteLink, setInviteLink] = useState("");

  useEffect(() => {
    setInviteLink("");
    if (page !== 2.2) {
      setTimeout(() => {
        setRender(false);
      }, "200");
    } else {
      setRender(true);
    }
  }, [page]);

  return render ? (
    <Page>
      <Page.Header closeMenu={closeMenu} padding="16px">
        <Page.Title>Join a server</Page.Title>
        <Page.Subtitle>
          Enter an invite below to join an existing server
        </Page.Subtitle>
      </Page.Header>
      <Page.Content padding="0 16px" margin="0">
        <Page.JoinForm value={inviteLink} setValue={setInviteLink} />
        <Page.Examples />
        <Page.Option
          image="explore"
          marginBottom="16px"
          padding="12px"
          background="primary160"
          iconMargin="0 12px 0 0"
          subtitle="Check out publick communities in Server Discovery."
        >
          Don't have an invite?
        </Page.Option>
      </Page.Content>
      <Page.Footer flexDirection="row">
        <Page.BackButton onClick={() => setPage(1)} />
        <Page.CreateButton value="Join Server" />
      </Page.Footer>
    </Page>
  ) : (
    <></>
  );
}
