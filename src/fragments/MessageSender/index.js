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
import createDoc from "helpers/create_doc";
import * as Icons from "assets/icons";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

export default function MessageSender({
  editMessageLayout,
  value,
  id,
  setEdit,
  replyToMessage,
  setReplyToMessage,
}) {
  const mouseDownRef = useRef(false);
  const [displayFormatToolbar, setDisplayFormatToolbar] = useState(false);
  const [editor] = useState(() => withReact(createEditor()));
  const {
    state: { user },
  } = useStateValue();
  const params = useParams();
  const conversationId = params.conversationId;

  const sendMessage = () => {
    if (editor.children.some((child) => !Editor.isEmpty(editor, child))) {
      const collectionPath = ["conversations", conversationId, "messages"];
      if (id) {
        createDoc(
          collectionPath,
          {
            nodes: editor.children,
            edited: new Date(),
          },
          id
        );
        setEdit(null);
      } else {
        createDoc(collectionPath, {
          sender: user,
          nodes: editor.children,
          timestamp: new Date(),
          reply: replyToMessage,
        });
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
      }
      setReplyToMessage(null);
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
      handleSelection(editor, setDisplayFormatToolbar, editMessageLayout);
      mouseDownRef.current = false;
    }
  }, [editor, editMessageLayout]);

  useEffect(() => {
    document.addEventListener("mouseup", onMouseUp);

    return () => document.removeEventListener("mouseup", onMouseUp);
  }, [onMouseUp]);

  return (
    <Slate editor={editor} value={value ?? initialValue}>
      <NewMessageSender
        onSubmit={(event) => event.preventDefault()}
        editMessageLayout={editMessageLayout}
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
          <NewMessageSender.InnerContainer>
            {!editMessageLayout && (
              <NewMessageSender.AttachWrapper>
                <NewMessageSender.AttachButton>
                  <Icons.Attach />
                </NewMessageSender.AttachButton>
              </NewMessageSender.AttachWrapper>
            )}
            <NewMessageSender.TextboxWrapper>
              <NewMessageSender.Textbox
                id={`messageSender${editMessageLayout ? "Edit" : ""}`}
                placeholder={!editMessageLayout ? "Message @" : ""}
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
            <NewMessageSender.ButtonsContainer>
              {!editMessageLayout && (
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
          </NewMessageSender.InnerContainer>
        </NewMessageSender.ScrollableContainer>
        {editMessageLayout && (
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
