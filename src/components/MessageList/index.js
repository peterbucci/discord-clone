import {
  DailyDivider,
  DailyDividerText,
  Container,
} from "./styles/message_list";

export default function MessageListLayout({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

MessageListLayout.DailyDivider = ({ children, ...restProps }) => (
  <DailyDivider {...restProps}>
    <DailyDividerText>{children}</DailyDividerText>
  </DailyDivider>
);
