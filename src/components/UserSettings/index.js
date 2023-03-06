import CustomScrollbar from "fragments/CustomScrollbar";
import { forwardRef } from "react";
import {
  Close,
  CloseButton,
  CloseKeybind,
  Container,
  Content,
  ContentColumn,
  ContentRegionScroll,
  ContentTransitionWrap,
  Sidebar,
  SidebarCategory,
  SidebarDivider,
  SidebarItem,
  SidebarNav,
  SidebarScroller,
  Tools,
  ToolsContainer,
} from "./styles/user_settings";

const UserSettingsLayout = forwardRef(({ children, ...restProps }, ref) => {
  return (
    <Container ref={ref} {...restProps}>
      {children}
    </Container>
  );
});

UserSettingsLayout.Sidebar = ({ children, ...restProps }) => {
  return (
    <Sidebar {...restProps}>
      <CustomScrollbar>
        <SidebarScroller>
          <SidebarNav>{children}</SidebarNav>
        </SidebarScroller>
      </CustomScrollbar>
    </Sidebar>
  );
};

UserSettingsLayout.Category = ({ children, ...restProps }) => {
  return <SidebarCategory {...restProps}>{children}</SidebarCategory>;
};

UserSettingsLayout.Item = ({ children, ...restProps }) => {
  return <SidebarItem {...restProps}>{children}</SidebarItem>;
};

UserSettingsLayout.Divider = ({ children, ...restProps }) => {
  return <SidebarDivider {...restProps}>{children}</SidebarDivider>;
};

UserSettingsLayout.Content = ({ children, ...restProps }) => {
  return (
    <Content {...restProps}>
      <ContentTransitionWrap>
        <CustomScrollbar>
          <ContentRegionScroll>{children}</ContentRegionScroll>
        </CustomScrollbar>
      </ContentTransitionWrap>
    </Content>
  );
};

UserSettingsLayout.ContentColumn = ({ children, ...restProps }) => {
  return <ContentColumn {...restProps}>{children}</ContentColumn>;
};

UserSettingsLayout.Tools = ({ children, ...restProps }) => {
  return (
    <ToolsContainer {...restProps}>
      <Tools>{children}</Tools>
    </ToolsContainer>
  );
};

UserSettingsLayout.Close = ({ children, onClick, ...restProps }) => {
  return (
    <Close {...restProps}>
      <CloseButton onClick={onClick}>{children}</CloseButton>
      <CloseKeybind>ESC</CloseKeybind>
    </Close>
  );
};

export default UserSettingsLayout;
