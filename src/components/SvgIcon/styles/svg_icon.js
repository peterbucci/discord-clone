import styled from "styled-components";

export const Svg = styled.svg`
  display: block;
  width: ${(props) => (props.width ? props.width : "48px")};
  height: ${(props) => (props.height ? props.height : "48px")};
  border-radius: ${(props) =>
    props.active || props.selected ? "15px" : "99%"};
  cursor: pointer;
`;

export const Group = styled.g``;
export const Rect = styled.rect``;
export const Path = styled.path``;
