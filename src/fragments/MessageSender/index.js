import React, { useState, useCallback, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { createEditor, Editor, Transforms } from "slate";
import { Slate, withReact } from "slate-react";
import { CodeElement, DefaultElement, Leaf } from "./elements";
import { default as NewMessageSender } from "../../components/MessageSender";
import FormatToolbar from "./FormatToolbar";
import { handleKeyboardShortcuts, handleSelection } from "./event_listeners";
import { useStateValue } from "../../providers/StateProvider";
import SmileyIcons from "../SmileyIcons";
import ReplyTo from "./ReplyTo";
import * as Icons from "assets/icons";
import createAndUpdateMessage from "api/create_and_update_message";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

export default function MessageSender({
  replyToMessage,
  setReplyToMessage,
  categoryId,
  messageId,
  setEdit,
}) {
  const mouseDownRef = useRef(false);
  const [displayFormatToolbar, setDisplayFormatToolbar] = useState(false);
  const [editor] = useState(() => withReact(createEditor()));
  const {
    state: { user, messages },
  } = useStateValue();
  const params = useParams();
  const conversationId = categoryId ? params.channelId : params.conversationId;
  const message = messages[conversationId]
    ? messages[conversationId][messageId]
    : null;

  const clearTextEditor = (editor, initialValue) => {
    // Delete all entries leaving 1 empty node
    Transforms.delete(editor, {
      at: {
        anchor: Editor.start(editor, []),
        focus: Editor.end(editor, []),
      },
    });

    // Removes empty node
    Transforms.removeNodes(editor, {
      at: [0],
    });

    // Insert array of children nodes
    Transforms.insertNodes(editor, initialValue);
  };

  const sendMessage = () => {
    if (editor.children.some((child) => !Editor.isEmpty(editor, child))) {
      const collectionPath = categoryId
        ? [
            "servers",
            params.serverId,
            "categories",
            categoryId,
            "channels",
            conversationId,
            "messages",
          ]
        : ["conversations", conversationId, "messages"];

      createAndUpdateMessage(
        collectionPath,
        user,
        editor.children,
        replyToMessage,
        message?.id
      );

      if (!message) clearTextEditor(editor, initialValue);
      else setEdit(null);
      setReplyToMessage && setReplyToMessage(null);
    }
  };

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  const onMouseUp = useCallback(() => {
    if (mouseDownRef.current) {
      handleSelection(editor, setDisplayFormatToolbar, message);
      mouseDownRef.current = false;
    }
  }, [editor, message]);

  useEffect(() => {
    document.addEventListener("mouseup", onMouseUp);

    return () => document.removeEventListener("mouseup", onMouseUp);
  }, [onMouseUp]);

  return (
    <Slate editor={editor} value={message?.nodes ?? initialValue}>
      <NewMessageSender
        onSubmit={(event) => event.preventDefault()}
        editMessageLayout={message}
      >
        {replyToMessage && (
          <NewMessageSender.AttachedBars>
            <ReplyTo
              replyToMessage={replyToMessage}
              setReplyToMessage={setReplyToMessage}
              conversationId={conversationId}
            />
          </NewMessageSender.AttachedBars>
        )}
        <NewMessageSender.ScrollableContainer attachedBar={replyToMessage}>
          <FormatToolbar
            displayFormatToolbar={displayFormatToolbar}
            editor={editor}
          />
          {!message && (
            <NewMessageSender.AttachWrapper>
              <NewMessageSender.AttachButton>
                <Icons.Attach />
              </NewMessageSender.AttachButton>
            </NewMessageSender.AttachWrapper>
          )}
          <NewMessageSender.InnerContainer>
            <NewMessageSender.TextboxWrapper editMessageLayout={message}>
              <NewMessageSender.Textbox
                id={`messageSender${message ? "Edit" : ""}`}
                placeholder={!message ? "Message @" : ""}
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                onBlur={() => setDisplayFormatToolbar(false)}
                onMouseDown={() => {
                  if (displayFormatToolbar) setDisplayFormatToolbar(false);
                  else mouseDownRef.current = true;
                }}
                onKeyDown={(e) =>
                  handleKeyboardShortcuts(e, editor, sendMessage)
                }
              />
            </NewMessageSender.TextboxWrapper>
          </NewMessageSender.InnerContainer>
          <NewMessageSender.ButtonsContainer>
            {!message && (
              <>
                <NewMessageSender.Button>
                  <Icons.Gift />
                </NewMessageSender.Button>
                <NewMessageSender.Button>
                  <Icons.Gif />
                </NewMessageSender.Button>
                <NewMessageSender.Button>
                  <Icons.Stickers />
                </NewMessageSender.Button>
              </>
            )}
            <NewMessageSender.Button>
              <SmileyIcons />
            </NewMessageSender.Button>
          </NewMessageSender.ButtonsContainer>
        </NewMessageSender.ScrollableContainer>
        {message && (
          <NewMessageSender.EditOperations>
            escape to{" "}
            <NewMessageSender.Clickable onClick={() => setEdit(null)}>
              cancel
            </NewMessageSender.Clickable>{" "}
            • enter to{" "}
            <NewMessageSender.Clickable onClick={sendMessage}>
              save
            </NewMessageSender.Clickable>
          </NewMessageSender.EditOperations>
        )}
      </NewMessageSender>
    </Slate>
  );
}
