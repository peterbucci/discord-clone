import Message from "components/Message";

export default function formatText(nodes, edited) {
  return nodes.map((node, idx, arr) => {
    return node.type === "paragraph" ? (
      <Message.Paragraph key={idx}>
        {node.children && formatText(node.children)}
        {idx === arr.length - 1 && edited && (
          <Message.EditedTimestamp>
            {" "}
            (edited)
            <Message.EditedTimestampHover>
              {edited.toDate().toLocaleString("default", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              {edited.toDate().toLocaleString("default", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Message.EditedTimestampHover>
          </Message.EditedTimestamp>
        )}
      </Message.Paragraph>
    ) : (
      <Message.Leaf
        key={idx}
        style={{
          fontWeight: node.bold ? "500" : "normal",
          fontStyle: node.italic ? "oblique" : "normal",
          textDecoration: node.lineThrough ? "line-through" : "none",
        }}
      >
        {node.text}
      </Message.Leaf>
    );
  });
}
