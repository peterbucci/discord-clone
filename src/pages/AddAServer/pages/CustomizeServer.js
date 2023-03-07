import createServer from "api/server/create_server";
import Page from "components/AddAServer/Page";
import { useStateValue } from "providers/StateProvider";
import { useEffect, useState } from "react";

export default function CustomizeServer({
  closeMenu,
  setPage,
  page,
  serverTemplate,
}) {
  const {
    state: { user, users },
  } = useStateValue();
  const currUser = users[user];
  const [render, setRender] = useState(page === 3);
  const [serverName, setServerName] = useState(currUser.name + "'s server");

  useEffect(() => {
    setServerName(currUser.name + "'s server");
    if (page !== 3) {
      setTimeout(() => {
        setRender(false);
      }, "200");
    } else {
      setRender(true);
    }
  }, [page, currUser]);

  return render ? (
    <Page>
      <Page.Header closeMenu={closeMenu} padding="24px 24px 0">
        <Page.Title>Customize your server</Page.Title>
        <Page.Subtitle>
          Give your new server a personality with a name and an icon. You can
          always change it later.
        </Page.Subtitle>
      </Page.Header>
      <Page.Content padding="0 16px" margin="16px 0">
        <Page.Upload />
        <Page.ServerForm value={serverName} setValue={setServerName} />
      </Page.Content>
      <Page.Footer flexDirection="row">
        <Page.BackButton onClick={() => setPage(2)} />
        <Page.CreateButton
          value="Create"
          onClick={() =>
            serverName.length &&
            createServer(serverName, serverTemplate, user).then(() =>
              closeMenu()
            )
          }
        />
      </Page.Footer>
    </Page>
  ) : (
    <></>
  );
}
