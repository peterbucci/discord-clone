import styled from "styled-components";

export const ListItem = styled.li`
  position: relative;
  &:hover {
    background-color: #2f3136;
    & .newMessageTimestamp {
      opacity: 1;
    }
  }
`;

export const Wrapper = styled.div`
  margin-top: ${({ margin }) => (margin ? "17px" : "0")};
  padding: 2px 48px 2px 72px;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 0;
  left: 16px;
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
