import { useRef, useState } from "react";
import Layout from "components/Layout";
import MessageList from "fragments/MessageList";
import MessageSender from "fragments/MessageSender";
import FetchConvoPlaceholder from "fragments/FetchConvoPlaceholder";
import { useStateValue } from "providers/StateProvider";
import * as Icons from "assets/icons";

export default function Channel({ currentChannel }) {
  const conversationRef = useRef(null);
  const [fetching, setFetching] = useState(false);
  const [replyToMessage, setReplyToMessage] = useState(null);
  const {
    state: { unsubscribers },
  } = useStateValue();

  const listener = unsubscribers[currentChannel.id + "messages"];

  return (
    <>
      <Layout.RightHead>
        <Layout.RightHeadTitle>
          <Layout.RightHeadIconWrapper>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              x="0"
              y="0"
              aria-hidden="true"
              role="img"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"
              ></path>
            </svg>
          </Layout.RightHeadIconWrapper>
          <Layout.RightHeadRecipient cursor="default">
            {currentChannel.name}
          </Layout.RightHeadRecipient>
        </Layout.RightHeadTitle>
        <Layout.RightHeadToolbar>
          <Layout.RightHeadIconWrapper>
            <svg
              x="0"
              y="0"
              aria-hidden="true"
              role="img"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill="currentColor"
                d="M5.43309 21C5.35842 21 5.30189 20.9325 5.31494 20.859L5.99991 17H2.14274C2.06819 17 2.01168 16.9327 2.02453 16.8593L2.33253 15.0993C2.34258 15.0419 2.39244 15 2.45074 15H6.34991L7.40991 9H3.55274C3.47819 9 3.42168 8.93274 3.43453 8.85931L3.74253 7.09931C3.75258 7.04189 3.80244 7 3.86074 7H7.75991L8.45234 3.09903C8.46251 3.04174 8.51231 3 8.57049 3H10.3267C10.4014 3 10.4579 3.06746 10.4449 3.14097L9.75991 7H15.7599L16.4523 3.09903C16.4625 3.04174 16.5123 3 16.5705 3H18.3267C18.4014 3 18.4579 3.06746 18.4449 3.14097L17.7599 7H21.6171C21.6916 7 21.7481 7.06725 21.7353 7.14069L21.4273 8.90069C21.4172 8.95811 21.3674 9 21.3091 9H17.4099L17.0495 11.04H15.05L15.4104 9H9.41035L8.35035 15H10.5599V17H7.99991L7.30749 20.901C7.29732 20.9583 7.24752 21 7.18934 21H5.43309Z"
              ></path>
              <path
                fill="currentColor"
                d="M13.4399 12.96C12.9097 12.96 12.4799 13.3898 12.4799 13.92V20.2213C12.4799 20.7515 12.9097 21.1813 13.4399 21.1813H14.3999C14.5325 21.1813 14.6399 21.2887 14.6399 21.4213V23.4597C14.6399 23.6677 14.8865 23.7773 15.0408 23.6378L17.4858 21.4289C17.6622 21.2695 17.8916 21.1813 18.1294 21.1813H22.5599C23.0901 21.1813 23.5199 20.7515 23.5199 20.2213V13.92C23.5199 13.3898 23.0901 12.96 22.5599 12.96H13.4399Z"
              ></path>
            </svg>
          </Layout.RightHeadIconWrapper>
          <Layout.RightHeadIconWrapper>
            <svg
              x="0"
              y="0"
              aria-hidden="true"
              role="img"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 9V14C18 15.657 19.344 17 21 17V18H3V17C4.656 17 6 15.657 6 14V9C6 5.686 8.686 3 12 3C15.314 3 18 5.686 18 9ZM11.9999 21C10.5239 21 9.24793 20.19 8.55493 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21Z"
              ></path>
            </svg>
          </Layout.RightHeadIconWrapper>
          <Layout.RightHeadIconWrapper>
            <Icons.PinnedMessages />
          </Layout.RightHeadIconWrapper>
          <Layout.RightHeadIconWrapper>
            <svg
              x="0"
              y="0"
              aria-hidden="true"
              role="img"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
              ></path>
              <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
              ></path>
              <path
                fill="currentColor"
                d="M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
              ></path>
              <path
                fill="currentColor"
                d="M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
              ></path>
            </svg>
          </Layout.RightHeadIconWrapper>
          <Layout.RightHeadSearchWrapper></Layout.RightHeadSearchWrapper>
          <Layout.RightHeadIconWrapper>
            <Icons.Inbox />
          </Layout.RightHeadIconWrapper>
          <Layout.RightHeadIconWrapper>
            <Icons.Help />
          </Layout.RightHeadIconWrapper>
        </Layout.RightHeadToolbar>
      </Layout.RightHead>
      <Layout.RightBody>
        <Layout.RightMainWrapper>
          <Layout.RightMain ref={conversationRef}>
            <Layout.Conversation>
              {fetching ? <FetchConvoPlaceholder /> : listener && <></>}
              <MessageList
                conversationId={currentChannel.id}
                containerRef={conversationRef}
                setReplyToMessage={setReplyToMessage}
                fetching={fetching}
                setFetching={setFetching}
              />
              <Layout.ConversationSpacer />
            </Layout.Conversation>
          </Layout.RightMain>
          <Layout.RightMainFooter>
            <MessageSender
              replyToMessage={replyToMessage}
              setReplyToMessage={setReplyToMessage}
              categoryId={currentChannel.category}
            />
          </Layout.RightMainFooter>
        </Layout.RightMainWrapper>
      </Layout.RightBody>
    </>
  );
}
