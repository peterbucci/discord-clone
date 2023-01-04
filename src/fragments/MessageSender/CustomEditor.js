// Import the Slate editor factory.
import { Editor, Transforms, Text } from "slate";

const CustomEditor = {
  isFormatActive(editor, formatKey) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n[formatKey] === true,
      universal: true,
    });

    return !!match;
  },

  isCodeBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === "code",
    });

    return !!match;
  },

  toggleFormatting(editor, formatKey) {
    const isActive = CustomEditor.isFormatActive(editor, formatKey);
    Transforms.setNodes(
      editor,
      { [formatKey]: isActive ? null : true },
      { match: (n) => Text.isText(n), split: true }
    );
  },

  toggleCodeBlock(editor) {
    const isActive = CustomEditor.isCodeBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : "code" },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  },
};

export default CustomEditor;
