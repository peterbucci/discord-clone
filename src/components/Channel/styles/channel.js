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
  background-color: #32353b;
  color: #ffffff;
`;

export const RightHead = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-bottom: 1px;
  padding: 0 8px;
  height: 48px;
  box-shadow: rgba(4, 4, 5, 0.2) 0px 1px 0px;
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
  border-top: 1px solid rgba(79, 84, 92, 0.48);
  pointer-events: none;
  z-index: 1;
`;

export const DailyDividerText = styled.span`
  display: block;
  flex: 0 0 auto;
  margin-top: -1px;
  padding: 2px 4px;
  color: #a3a6aa;
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
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#292b2f"};
  overflow-y: auto;
`;
