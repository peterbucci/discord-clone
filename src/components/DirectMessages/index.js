import { SearchBar } from "./styles/direct_messages";

export const DirectMessagesSearchBar = ({ children, ...restProps }) => {
  return <SearchBar {...restProps}>{children}</SearchBar>;
};
