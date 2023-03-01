import styled from "styled-components";

export const List = styled.div`
  height: 4117px;
  contain: strict;
  overflow: hidden;
`;

export const ListItem = styled.div`
  position: relative;
  margin-top: ${({ header }) => (header ? "1rem" : "0")};
  padding-left: 4.5rem;
  padding-right: 1rem;
  box-sizing: border-box;
  contain: paint layout;
  overflow: hidden;
  user-select: text;
  word-wrap: break-word;
`;

export const Contents = styled.div``;

export const Avatar = styled.div`
  position: absolute;
  left: 1rem;
  top: 0.25rem;
  width: 2.5rem;
  height: 2.5rem;
  max-width: 40px;
  max-height: 40px;
  background-color: ${({ theme }) => theme.textNormal};
  border-radius: 50%;
  opacity: 0.08;
`;

export const Header = styled.h3`
  all: unset;
  position: relative;
  display: flex;
  align-items: center;
  height: 1.375rem;
  line-height: 1.375rem;
  overflow: hidden;
  flex-wrap: wrap;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 1.375rem;
  overflow: hidden;
  text-indent: 0;
`;

export const Blob = styled.div.attrs(({ theme, width, opacity }) => ({
  style: {
    width: width,
    backgroundColor: theme.textNormal,
    opacity: opacity ?? "0.06",
  },
}))`
  display: block;
  flex: 0 0 auto;
  vertical-align: middle;
  margin-top: 0.1875rem;
  margin-left: 0.25rem;
  height: 1rem;
  border-radius: 0.5rem;
  line-height: 1.375rem;
  &:first-child {
    margin-left: 0;
  }
`;

export const AttachmentContainer = styled.div`
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
`;

export const Attachment = styled.div`
  margin-top: 0.125rem;
  height: ${({ height }) => height ?? "136px"};
  width: ${({ width }) => width ?? "142px"};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.textNormal};
  opacity: 0.03;
`;
