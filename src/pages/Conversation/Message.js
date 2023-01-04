import { default as NewMessage } from "../../components/Message";
import sameDay from "../../helpers/same_day";

export default function Message({ timestamp, nodes, sender, prevPost }) {
  const renderHeader = () => {
    return (
      !prevPost ||
      prevPost.sender !== sender.id ||
      !sameDay(timestamp.toDate(), prevPost.timestamp.toDate())
    );
  };

  const formatTimestamp = (timestamp, onlyTime) => {
    // Today's date
    const today = new Date();
    // Input Date
    const date = timestamp.toDate();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    let dateString = `${month}/${day}/${year} `;
    if (onlyTime) {
      dateString = "";
    } else if (sameDay(date, today)) {
      dateString = "Today at ";
    } else if (sameDay(date, today, true)) {
      dateString = "Yesterday at ";
    }
    return `${dateString}${date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  };

  const formatText = (nodes) => {
    return nodes.map((node, idx) => {
      return node.type === "paragraph" ? (
        <div key={idx}>{node.children && formatText(node.children)}</div>
      ) : (
        <span
          key={idx}
          style={{
            fontWeight: node.bold ? "500" : "normal",
            fontStyle: node.italic ? "oblique" : "normal",
            textDecoration: node.lineThrough ? "line-through" : "none",
          }}
        >
          {node.text}
        </span>
      );
    });
  };

  return (
    <NewMessage>
      <NewMessage.Wrapper margin={renderHeader()}>
        {renderHeader() ? (
          <>
            <NewMessage.Avatar image={sender.avatar} />
            <NewMessage.Header>
              <NewMessage.HeaderSpan>{sender.name}</NewMessage.HeaderSpan>
              <NewMessage.HeaderSpan>
                {formatTimestamp(timestamp)}
              </NewMessage.HeaderSpan>
            </NewMessage.Header>
          </>
        ) : (
          <NewMessage.Timestamp className="newMessageTimestamp">
            {formatTimestamp(timestamp, true)}
          </NewMessage.Timestamp>
        )}
        <NewMessage.Text>{formatText(nodes)}</NewMessage.Text>
      </NewMessage.Wrapper>
    </NewMessage>
  );
}
