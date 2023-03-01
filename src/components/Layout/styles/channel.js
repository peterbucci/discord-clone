import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  color: ${({ theme }) => theme.white};
`;

export const RightHead = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  margin-bottom: 1px;
  padding: 0 8px;
  height: 48px;
  min-width: 0;
  width: 100%;
  box-shadow: ${({ theme }) => theme.elevationLow};
`;

export const RightHeadTitle = styled.div`
  position: relative;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  min-width: 0;
  overflow: hidden;
`;

export const RightHeadIconWrapper = styled.div`
  flex: 0 0 auto;
  position: relative;
  margin: 0 8px;
  height: 24px;
  width: auto;
  & path {
    fill: ${({ highlighted, theme, fill }) =>
      highlighted ? theme.white : fill ?? theme.interactiveNormal};
  }
`;

export const RightHeadRecipient = styled.div`
  flex: 0 0 auto;
  margin: 0 8px 0 0;
  min-width: auto;
  line-height: 20px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
  cursor: ${({ cursor }) => cursor ?? "pointer"};
`;

export const RightHeadRecipientStatus = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  margin-right: 8px;
`;

export const RightHeadToolbar = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  & div:hover {
    cursor: pointer;
    & path {
      fill: ${({ theme }) => theme.textNormal};
    }
  }
`;

export const RightHeadSearchWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: stretch;
  padding: 0 2px;
  height: 24px;
  width: 144px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.backgroundTertiary};
  color: ${({ theme }) => theme.textNormal};
  cursor: text !important;
  overflow: hidden;
`;

export const RightBody = styled.div`
  display: flex;
  flex: 1;
  height: calc(100% - 48px);
`;

export const RightMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

export const RightMainSearch = styled.div`
  display: flex;
  margin: 16px 20px 8px 30px;
`;

export const RightMainHead = styled.div`
  display: flex;
`;

export const RightMain = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const Conversation = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ConversationSpacer = styled.div`
  height: 30px;
`;

export const RightMainFooter = styled.div`
  flex: 0 0 68px;
`;

export const RightSidebar = styled.div`
  flex-shrink: 0;
  margin: ${({ margin }) => margin ?? "0"};
  padding: ${({ padding }) => padding ?? 0};
  width: ${({ width }) => width ?? "340px"};
  border-left: ${({ border }) => border ?? "0"};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ?? theme.backgroundSecondaryAlt};
  overflow-y: auto;
`;
