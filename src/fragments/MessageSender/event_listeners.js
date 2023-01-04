import { Transforms } from "slate";
import CustomEditor from "./CustomEditor";

export const handleSelection = (editor, setDisplayFormatToolbar) => {
  if (!editor.selection) return;
  const { anchor, focus } = editor.selection;
  const startLine = anchor.path[0];
  const endLine = focus.path[0];
  const startLeaf = anchor.path[1];
  const endLeaf = focus.path[1];
  const startOffset = anchor.offset;
  const endOffset = focus.offset;

  if (startLine - endLine !== 0 || startOffset - endOffset !== 0) {
    const messageSender = document.getElementById("messageSender");
    const el = messageSender.children[endLine];
    const elRect = el.getBoundingClientRect();
    const leaf = el.children[endLeaf];
    const leafRect = leaf.getBoundingClientRect();
    const formatToolbar = document.getElementById("formatToolbar");
    const formatToolbarRect = formatToolbar.getBoundingClientRect();

    setDisplayFormatToolbar({
      top: elRect.top,
      left: leafRect.left + leafRect.width / 2 - formatToolbarRect.width / 2,
    });
  } else {
    setDisplayFormatToolbar(false);
  }
};

export const handleKeyboardShortcuts = (event, editor, sendMessage) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    sendMessage();
  }
  if (!event.ctrlKey) {
    return;
  }

  switch (event.key.toLowerCase()) {
    // When "`" is pressed, keep our existing code block logic.
    case "`": {
      event.preventDefault();
      CustomEditor.toggleCodeBlock(editor);
      break;
    }

    // When "B" is pressed, bold the text in the selection.
    case "b": {
      event.preventDefault();
      CustomEditor.toggleFormatting(editor, "bold");
      break;
    }

    case "i": {
      event.preventDefault();
      CustomEditor.toggleFormatting(editor, "italic");
      break;
    }

    case "x": {
      event.preventDefault();
      CustomEditor.toggleFormatting(editor, "lineThrough");
      break;
    }
  }
};
