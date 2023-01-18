import styled from "styled-components";

export const ListItem = styled.li`
  position: relative;
  background-color: ${({ edit }) => (edit ? "#2f3136" : "initial")};
  &:hover {
    background-color: #2f3136;
    & .newMessageTimestamp {
      opacity: 1;
    }
    & #newMessageButtons {
      display: block !important;
    }
  }
`;

export const Wrapper = styled.div`
  position: relative;
  margin-top: ${({ margin }) => (margin ? "17px" : "0")};
  padding: 0 48px 0 72px;
`;

export const Content = styled.div`
  position: relative;
`;

export const Reply = styled.div`
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 4px;
  font-size: 0.875rem;
  color: #b9bbbe;
  &:before {
    content: "";
    display: block;
    position: absolute;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    top: 9px;
    left: 35px;
    width: 33px;
    height: 16px;
    border-left: 2px solid #4f545c;
    border-bottom: 0 solid #4f545c;
    border-right: 0 solid #4f545c;
    border-top: 2px solid #4f545c;
    border-top-left-radius: 6px;
  }
`;

export const ReplyAvatar = styled.img`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  margin-right: 0.25rem;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  user-select: none;
`;

export const OriginalSender = styled.span`
  flex-shrink: 0;
  margin-right: 0.25rem;
  font-weight: 500;
  opacity: 0.64;
`;

export const OriginalMessage = styled.div`
  width: 0;
  min-width: calc(100% - 60px);
  overflow: hidden;
  white-space: pre;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 0;
  left: -56px;
  margin-top: calc(6px - 0.125rem);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
`;

export const Header = styled.h3`
  display: block;
  position: relative;
  margin: 0;
  line-height: 1.375rem;
  min-height: 1.375rem;
  white-space: break-spaces;
`;

export const HeaderSpan = styled.span`
  &:first-child {
    margin-right: 0.25rem;
    font-size: 0.85em;
    font-weight: 500;
  }
  &:last-child {
    margin-left: 0.25rem;
    font-size: 0.65em;
    font-weight: 400;
    color: #a3a6aa;
  }
`;

export const Timestamp = styled.div`
  position: absolute;
  top: ${({ edit }) => (edit ? "8px" : "0")};
  left: 0;
  height: 1.375rem;
  width: 56px;
  line-height: 1.35rem;
  font-size: 0.6875rem;
  text-align: right;
  color: #a3a6aa;
  user-select: none;
  opacity: 0;
  z-index: 1;
`;

export const Text = styled.div`
  user-select: text;
  margin-left: -72px;
  padding-left: 72px;
  color: #dcddde;
`;

export const Paragraph = styled.div`
  line-height: 22px;
`;

export const Leaf = styled.span``;

export const ButtonsOuterContainer = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
`;
export const ButtonsInnerContainer = styled.div`
  position: absolute;
  top: ${({ isHeader }) => (isHeader ? "-16px" : "-25px")};
  right: 0;
  padding: 0 14px 0 32px;
  z-index: 1;
`;

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  height: 32px;
  box-shadow 0 0 0 1px rgba(4, 4, 5 ,0.15);
  border-radius: 4px;
  background-color: #36393f;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  width: 32px;
  cursor: pointer;
  &:hover {
    background-color: rgba(79, 84, 92, 0.4);
  }
  &:hover svg path {
    fill: #dcddde;
  }
`;

export const EditedTimestamp = styled.span`
  position: relative;
  font-size: 0.65rem;
  line-height: 1.375rem;
  color: #a3a6aa;
  vertical-align: baseline;
  cursor: default;
  user-select: none;
  &:hover div {
    display: inline-block;
  }
`;

export const EditedTimestampHover = styled.div`
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translate(-50%, 0);
  display: none;
  padding: 6px;
  white-space: nowrap;
  background-color: #18191c;
  box-shadow: rgba(0, 0, 0, 0.24) 0 8px 16px;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #b9bbbe;
  z-index: 100;
  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #18191c;
  }
`;
