import Layout from "components/Layout";
import ConversationSidebar from "fragments/ConversationSidebar";
import ActiveNowSidebar from "./ActiveNowSidebar";
import Head from "./Head";
import Body from "./Body";
import useWindowDimensions from "hooks/use_window_dimensions";

export default function FriendsList() {
  const windowDimensions = useWindowDimensions();
  const disabledSidebar = windowDimensions.width < 1130;
  return (
    <Layout>
      <ConversationSidebar />
      <Layout.Right>
        <Layout.RightHead>
          <Head />
        </Layout.RightHead>
        <Layout.RightBody>
          <Body />
          {!disabledSidebar && <ActiveNowSidebar />}
        </Layout.RightBody>
      </Layout.Right>
    </Layout>
  );
}
