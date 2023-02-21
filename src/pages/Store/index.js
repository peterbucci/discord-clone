import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { default as Layout } from "../../components/Layout";
import ConversationSidebar from "../../fragments/ConversationSidebar";
import * as Icons from "assets/icons";

export default function Store() {
  const themeContext = useContext(ThemeContext);
  return (
    <Layout>
      <ConversationSidebar />
      <Layout.Right>
        <Layout.RightHead>
          <Layout.RightHeadTitle>
            <Layout.RightHeadIconWrapper fill={themeContext.channelIcon}>
              <Icons.Nitro />
            </Layout.RightHeadIconWrapper>
            <Layout.RightHeadRecipient cursor="default">
              Nitro
            </Layout.RightHeadRecipient>
          </Layout.RightHeadTitle>
        </Layout.RightHead>
        <Layout.RightBody>
          <Layout.RightMainWrapper>Store</Layout.RightMainWrapper>
        </Layout.RightBody>
      </Layout.Right>
    </Layout>
  );
}
