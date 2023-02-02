import styled from "styled-components";
import { Editable } from "slate-react";

export const Form = styled.form`
  flex-shrink: 0;
  padding-left: 16px;
  padding-right: 16px;
`;

export const Container = styled.div`
  margin: ${({ editMessageLayout }) =>
    editMessageLayout ? "8px 0 0" : "0 0 24px 0"};
`;

export const ScrollableContainer = styled.div`
  padding: 0 16px;
  max-height: 50vh;
  border-radius: ${({ attachedBar }) => (attachedBar ? "0 0 8px 8px" : "8px")};
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.channelTextAreaBackground};
`;

export const InnerContainer = styled.div`
  position: relative;
  display: flex;
`;

export const FileInput = styled.input``;

export const AttachWrapper = styled.div`
  position: sticky;
  flex: 0 0 auto;
`;

export const AttachButton = styled.button`
  all: unset;
  position: sticky;
  top: 0;
  height: 24px;
  margin-left: -16px;
  padding: 10px;
  cursor: pointer;
  &:hover svg path {
    fill: ${({ theme }) => theme.textNormal};
  }
`;

export const TextboxWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const TextBox = styled(Editable)`
  padding: 11px 10px 11px 0;
  font-size: 1rem;
  line-height: 1.375rem;
`;

export const PlaceHolder = styled.div`
  font-size: 1rem;
  line-height: 1.375rem;
  color: ${({ theme }) => theme.channelTextAreaPlaceholder};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: sticky;
  top: 0;
  margin-right: -6px;
  height: 44px;
`;

export const Button = styled.button`
  all: unset;
  padding: 4px;
  margin-left: 4px;
  margin-right: 4px;
  cursor: pointer;
  &:hover svg path {
    fill: ${({ theme }) => theme.textNormal};
  }
`;

export const SmileyIcon = styled.div`
  display: block;
  width: 22px;
  height: 22px;
  background-image: url(/assets/smiley_icons.png);
  background-repeat: no-repeat;
  background-size: 242px 110px;
  background-position: ${({ backgroundX, backgroundY }) =>
    `-${22 * backgroundX}px -${22 * backgroundY}px`};
  filter: grayscale(100%);
  transform: scale(1);
  transition: transform 0.2s, filter 0.2s;
  &:hover {
    filter: none !important;
    transform: scale(1.14) !important;
  }
`;

export const EditOperations = styled.div`
  padding: 7px 0;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textNormal};
`;

export const Clickable = styled.span`
  color: ${({ theme }) => theme.textLink};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const AttachedBars = styled.div`
  padding-top: 3px;
  margin-top: -3px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden;
`;
