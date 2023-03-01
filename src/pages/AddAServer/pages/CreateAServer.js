import { useEffect, useState } from "react";
import Page from "components/AddAServer/Page";

const createMyOwn = {
  categories: [
    {
      name: "Text Channels",
      channels: [
        {
          name: "general",
          type: "text",
        },
      ],
    },
    {
      name: "Voice Channels",
      channels: [
        {
          name: "General",
          type: "voice",
        },
      ],
    },
  ],
};

export default function CreateAServer({
  closeMenu,
  setPage,
  page,
  setServerTemplate,
}) {
  const [render, setRender] = useState(page === 1);

  useEffect(() => {
    if (page !== 1) {
      setTimeout(() => {
        setRender(false);
      }, "200");
    } else {
      setRender(true);
    }
  }, [page]);

  const nextPage = () => setPage(2);

  return render ? (
    <Page>
      <Page.Header closeMenu={closeMenu}>
        <Page.Title>Create a server</Page.Title>
        <Page.Subtitle>
          Your server is where you and your friends hang out. Make yours and
          start talking.
        </Page.Subtitle>
      </Page.Header>
      <Page.Content height="330px">
        <Page.Option
          image="create_my_own"
          onClick={() => {
            setServerTemplate(createMyOwn);
            nextPage();
          }}
        >
          Create My Own
        </Page.Option>
        <Page.OptionHeader>Start From A Template</Page.OptionHeader>
        <Page.Option image="gaming" onClick={nextPage}>
          Gaming
        </Page.Option>
        <Page.Option image="school_club" onClick={nextPage}>
          School Club
        </Page.Option>
        <Page.Option image="study_group" onClick={nextPage}>
          Study Group
        </Page.Option>
        <Page.Option image="friends" onClick={nextPage}>
          Friends
        </Page.Option>
        <Page.Option image="creators" onClick={nextPage}>
          Artists & Creators
        </Page.Option>
        <Page.Option image="local_community" onClick={nextPage}>
          Local Community
        </Page.Option>
      </Page.Content>
      <Page.Footer>
        <Page.FooterHeader>Have an invite already?</Page.FooterHeader>
        <Page.JoinAServerButton onClick={() => setPage(2.2)} />
      </Page.Footer>
    </Page>
  ) : (
    <></>
  );
}
