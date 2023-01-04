export const CodeElement = (props) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

export const DefaultElement = (props) => {
  return <div {...props.attributes}>{props.children}</div>;
};

export const Leaf = (props) => {
  return (
    <span
      {...props.attributes}
      style={{
        fontWeight: props.leaf.bold ? "bold" : "normal",
        fontStyle: props.leaf.italic ? "oblique" : "normal",
        textDecoration: props.leaf.lineThrough ? "line-through" : "none",
      }}
    >
      {props.children}
    </span>
  );
};
