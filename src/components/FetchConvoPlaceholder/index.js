import {
  Attachment,
  AttachmentContainer,
  Avatar,
  Blob,
  Content,
  Contents,
  Header,
  List,
  ListItem,
} from "./styles/fetch_convo_placeholder";

export default function FetchConvoPlaceholder({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
}

FetchConvoPlaceholder.ListItem = ({ children, ...restProps }) => {
  return <ListItem {...restProps}>{children}</ListItem>;
};

FetchConvoPlaceholder.Contents = ({ children, ...restProps }) => {
  return <Contents {...restProps}>{children}</Contents>;
};

FetchConvoPlaceholder.Avatar = (props) => {
  return <Avatar {...props} />;
};

FetchConvoPlaceholder.Header = ({ width, ...restProps }) => {
  return (
    <Header {...restProps}>
      <Blob width={width} opacity="0.170065" />
    </Header>
  );
};

FetchConvoPlaceholder.Content = ({ children, ...restProps }) => {
  return <Content {...restProps}>{children}</Content>;
};

FetchConvoPlaceholder.Blob = (props) => {
  return <Blob {...props} />;
};

FetchConvoPlaceholder.Attachment = (props) => {
  return (
    <AttachmentContainer>
      <Attachment {...props} />
    </AttachmentContainer>
  );
};
