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
  flex-shrink: 0;
  margin-bottom: 1px;
  padding: 0 8px;
  height: 48px;
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
    fill: ${({ highlighted, theme }) =>
      highlighted ? theme.white : theme.interactiveNormal};
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
  cursor: pointer;
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
  flex: 1;
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

export const DailyDivider = styled.div`
  position: relative;
  left: auto;
  right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  height: 0;
  border-top: ${({ theme }) => `1px solid ${theme.backgroundModifierAccent}`};
  pointer-events: none;
  z-index: 1;
`;

export const DailyDividerText = styled.span`
  display: block;
  flex: 0 0 auto;
  margin-top: -1px;
  padding: 2px 4px;
  color: ${({ theme }) => theme.textMuted};
  line-height: 13px;
  font-size: 11.5px;
  font-weight: 600;
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
