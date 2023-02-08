import { default as Toolbar } from "../../components/FormatToolbar";
import CustomEditor from "./CustomEditor";
import * as Icons from "assets/icons";

export default function FormatToolbar({ displayFormatToolbar, editor }) {
  return (
    <Toolbar id="formatToolbar" visible={displayFormatToolbar}>
      <Toolbar.Button
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleFormatting(editor, "bold");
        }}
      >
        <Toolbar.IconWrapper>
          <Icons.Bold />
        </Toolbar.IconWrapper>
      </Toolbar.Button>
      <Toolbar.Button
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleFormatting(editor, "italic");
        }}
      >
        <Toolbar.IconWrapper>
          <Icons.Italic />
        </Toolbar.IconWrapper>
      </Toolbar.Button>
      <Toolbar.Button
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleFormatting(editor, "lineThrough");
        }}
      >
        <Toolbar.IconWrapper>
          <Icons.LineThrough />
        </Toolbar.IconWrapper>
      </Toolbar.Button>
      <Toolbar.VerticalDivider />
      <Toolbar.Button>
        <Toolbar.IconWrapper>
          <Icons.Quote />
        </Toolbar.IconWrapper>
      </Toolbar.Button>
      <Toolbar.Button
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleCodeBlock(editor);
        }}
      >
        <Toolbar.IconWrapper>
          <Icons.CodeBlock />
        </Toolbar.IconWrapper>
      </Toolbar.Button>
      <Toolbar.Button>
        <Toolbar.IconWrapper>
          <Icons.Hide />
        </Toolbar.IconWrapper>
      </Toolbar.Button>
    </Toolbar>
  );
}
