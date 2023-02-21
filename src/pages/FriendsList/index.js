import Layout from "components/Layout";
import ConversationSidebar from "fragments/ConversationSidebar";
import ActiveNowSidebar from "./ActiveNowSidebar";
import Head from "./Head";
import Body from "./Body";

export default function FriendsList() {
  return (
    <Layout>
      <ConversationSidebar />
      <Layout.Right>
        <Layout.RightHead>
          <Head />
        </Layout.RightHead>
        <Layout.RightBody>
          <Body />
          <ActiveNowSidebar />
        </Layout.RightBody>
      </Layout.Right>
    </Layout>
  );
}
