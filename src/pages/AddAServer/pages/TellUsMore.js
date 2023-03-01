import { useEffect, useState } from "react";
import Page from "components/AddAServer/Page";

export default function TellUsMore({ closeMenu, setPage, page }) {
  const [render, setRender] = useState(page === 2);

  useEffect(() => {
    if (page !== 2) {
      setTimeout(() => {
        setRender(false);
      }, "200");
    } else {
      setRender(true);
    }
  }, [page]);

  const nextPage = () => setPage(3);

  return render ? (
    <Page>
      <Page.Header closeMenu={closeMenu}>
        <Page.Title>Tell us more about your server</Page.Title>
        <Page.Subtitle>
          In order to help you with your setup, is your new server for just a
          few friends or a larger community?
        </Page.Subtitle>
      </Page.Header>
      <Page.Content>
        <Page.Option image="for_my_friends" onClick={nextPage}>
          For a club or community
        </Page.Option>
        <Page.Option image="for_a_club" onClick={nextPage}>
          For me and my friends
        </Page.Option>
        <Page.SkipQuestion nextPage={nextPage} />
      </Page.Content>
      <Page.Footer>
        <Page.BackButton onClick={() => setPage(1)} />
      </Page.Footer>
    </Page>
  ) : (
    <></>
  );
}
