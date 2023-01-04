import { default as Toolbar } from "../../components/FormatToolbar";
import CustomEditor from "./CustomEditor";
import BoldIcon from "../Icons/bold";
import ItalicIcon from "../Icons/Italic";
import LineThroughIcon from "../Icons/line_through";
import CodeBlockIcon from "../Icons/code_block";
import QuoteIcon from "../Icons/quote";
import HideIcon from "../Icons/hide";

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
          <BoldIcon />
        </Toolbar.IconWrapper>
      </Toolbar.Button>
      <Toolbar.Button
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleFormatting(editor, "italic");
        }}
      >
        <Toolbar.IconWrapper>
          <ItalicIcon />
        </Toolbar.IconWrapper>
      </Toolbar.Button>
      <Toolbar.Button
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleFormatting(editor, "lineThrough");
        }}
      >
        <Toolbar.IconWrapper>
          <LineThroughIcon />
        </Toolbar.IconWrapper>
      </Toolbar.Button>
      <Toolbar.VerticalDivider />
      <Toolbar.Button>
        <Toolbar.IconWrapper>
          <QuoteIcon />
        </Toolbar.IconWrapper>
      </Toolbar.Button>
      <Toolbar.Button
        onMouseDown={(event) => {
          event.preventDefault();
          CustomEditor.toggleCodeBlock(editor);
        }}
      >
        <Toolbar.IconWrapper>
          <CodeBlockIcon />
        </Toolbar.IconWrapper>
      </Toolbar.Button>
      <Toolbar.Button>
        <Toolbar.IconWrapper>
          <HideIcon />
        </Toolbar.IconWrapper>
      </Toolbar.Button>
    </Toolbar>
  );
}
