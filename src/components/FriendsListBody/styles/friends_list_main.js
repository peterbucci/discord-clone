import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";

const rotateOut = keyframes`
  0% {
    transform:rotate(-90deg);
  }
`;

const rotateIn = keyframes`
  0% {
    transform:rotate(90deg);
  }
`;

const rotateAnimation = (props) =>
  css`
    ${props.visible ? rotateIn : rotateOut} .1s ease-in;
  `;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  width: 100%;
  max-width: 440px;
  margin: 0 auto;
`;

export const EmptyImage = styled.div`
  margin-bottom: 40px;
  width: 100%;
  height: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  max-height: ${({ maxHeight }) => maxHeight};
  background-image: ${({ image }) => `url(${image})`};
  background-size: 100% 100%;
`;
export const EmptyText = styled.div`
  margin-top: 8px;
  color: #a3a6aa;
  font-size: 15px;
  font-weight: 500;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-align: center;
`;

export const Search = styled.div`
  position: relative;
  display: flex;
  margin: 16px 20px 8px 30px;
`;

export const SearchIcons = styled.div`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  width: 20px;
  height: 20px;
  cursor: text;
`;

export const IconWrapper = styled.div.attrs((props) => ({
  style: {
    opacity: props.visible ? 1 : 0,
  },
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  animation: ${({ animate }) => (animate ? rotateAnimation : "none")};
  &.clearSearch {
    cursor: ${({ visible }) => (visible ? "pointer" : "text")};
    &:hover > svg > path {
      fill: #ffffff;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 1px;
`;

export const Input = styled.input`
  all: unset;
  flex: 1;
  margin: 1px;
  padding: 0 8px;
  background-color: #202225;
  border-radius: 4px;
  color: #a3a6aa;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 15px;
  font-weight: 500;
  text-overflow: ellipsis;
  line-height: 32px;
  white-space: nowrap;
  &::placeholder {
    color: #a3a6aa;
  }
`;

export const HeadWrapper = styled.div``;

export const Head = styled.h2`
  all: unset;
  display: flex;
  margin: 16px 20px 8px 30px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 11px;
  font-weight: 600;
  color: #b9bbbe;
  text-transform: uppercase;
`;

export const Main = styled.div`
  flex: 1;
  margin-top: 8px;
  padding-bottom: 8px;
  overflow-y: auto;
`;

export const List = styled.div``;

export const ListItemWrapper = styled.div`
  margin: 0 30px;
  height: ${({ visible }) => (visible ? "61px" : "0")};
  border-top: solid 1px rgba(79, 84, 92, 0.48);
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transition: opacity 0.1s ease-in, height 0.1s ease-in;
`;

export const ListItem = styled(Link)`
  all: unset;
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  z-index: 2;
  overflow: visible;
  cursor: pointer;
  &:hover:before {
    content: "";
    background-color: rgba(79, 84, 92, 0.48);
    position: absolute;
    height: 100%;
    left: -8px;
    right: -8px;
    border-radius: 8px;
    z-index: -1;
  }
  &:hover span {
    opacity: 1;
  }
  &:hover #friendsListActions div {
    background-color: #202225;
  }
`;

export const AvatarWrapper = styled.div`
  margin-right: 12px;
  width: 32px;
  height: 32px;
`;

export const Avatar = styled.img`
  margin-right: 12px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
`;

export const ListItemText = styled.div`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 500;
`;

export const ListItemTextRow = styled.div`
  font-size: ${({ fontSize }) => fontSize ?? "15px"};
  color: ${({ color }) => color ?? "#ffffff"};
`;

export const ListItemTextSpan = styled.span`
  font-size: ${({ tag }) => (tag ? "14px" : "auto")};
  line-height: ${({ tag }) => (tag ? "16px" : "auto")};
  font-weight: ${({ tag }) => (tag ? "500" : "auto")};
  color: ${({ tag }) => (tag ? "#B9BBBE" : "auto")};
  opacity: ${({ tag }) => (tag ? "0" : "1")};
`;

export const ListItemActions = styled.div`
  display: flex;
  margin-left: auto;
  line-height: 20px;
`;

export const ListItemAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: #b9bbbe;
  background-color: #2f3136;
  &:last-child {
    margin-left: 10px;
  }
  &:hover svg path {
    fill: ${({ cancel }) => (cancel ? "#ED4245" : "#3BA55D")};
  }
`;
