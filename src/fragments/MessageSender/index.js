import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createEditor, Editor, Transforms } from "slate";
import { Slate, withReact, ReactEditor } from "slate-react";
import { CodeElement, DefaultElement, Leaf } from "./elements";
import { default as NewMessageSender } from "../../components/MessageSender";
import FormatToolbar from "./FormatToolbar";
import { handleKeyboardShortcuts, handleSelection } from "./event_listeners";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useStateValue } from "../../providers/StateProvider";
import AttachIcon from "../Icons/attach";
import GiftIcon from "../Icons/gift";
import GifIcon from "../Icons/gif";
import StickersIcon from "../Icons/stickers";
import SmileyIcons from "../SmileyIcons";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

export default function MessageSender() {
  const [displayFormatToolbar, setDisplayFormatToolbar] = useState(false);
  const [editor] = useState(() => withReact(createEditor()));
  const {
    state: { user },
  } = useStateValue();
  const params = useParams();
  const conversationId = params.conversationId;

  const sendMessage = () => {
    if (editor.children.some((child) => !Editor.isEmpty(editor, child))) {
      const newMessageRef = doc(
        collection(db, "conversations", conversationId, "messages")
      );
      setDoc(newMessageRef, {
        id: newMessageRef.id,
        sender: user,
        nodes: editor.children,
        timestamp: new Date(),
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
    handleSelection(editor, setDisplayFormatToolbar);
  }, [editor]);

  useEffect(() => {
    document.addEventListener("mouseup", onMouseUp);

    return () => document.removeEventListener("mouseup", onMouseUp);
  }, [onMouseUp]);

  return (
    <Slate editor={editor} value={initialValue}>
      <NewMessageSender onSubmit={(event) => event.preventDefault()}>
        <NewMessageSender.ScrollableContainer>
          <FormatToolbar
            displayFormatToolbar={displayFormatToolbar}
            editor={editor}
          />
          <NewMessageSender.InnerContainer>
            <NewMessageSender.AttachWrapper>
              <NewMessageSender.AttachButton>
                <AttachIcon />
              </NewMessageSender.AttachButton>
            </NewMessageSender.AttachWrapper>
            <NewMessageSender.TextboxWrapper>
              <NewMessageSender.Textbox
                id="messageSender"
                placeholder="Message @"
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                onBlur={() => setDisplayFormatToolbar(false)}
                onMouseDown={() => {
                  ReactEditor.deselect(editor);
                  setDisplayFormatToolbar(false);
                }}
                onKeyDown={(e) =>
                  handleKeyboardShortcuts(e, editor, sendMessage)
                }
              />
            </NewMessageSender.TextboxWrapper>
            <NewMessageSender.ButtonsContainer>
              <NewMessageSender.Button>
                <GiftIcon />
              </NewMessageSender.Button>
              <NewMessageSender.Button>
                <GifIcon />
              </NewMessageSender.Button>
              <NewMessageSender.Button>
                <StickersIcon />
              </NewMessageSender.Button>
              <NewMessageSender.Button>
                <SmileyIcons />
              </NewMessageSender.Button>
            </NewMessageSender.ButtonsContainer>
          </NewMessageSender.InnerContainer>
        </NewMessageSender.ScrollableContainer>
      </NewMessageSender>
    </Slate>
  );
}
