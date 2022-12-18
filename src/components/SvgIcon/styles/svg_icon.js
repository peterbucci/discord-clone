import styled from "styled-components";

export const Svg = styled.svg`
  display: block;
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
  cursor: pointer;
`;

export const Group = styled.g``;
export const Rect = styled.rect``;
export const Path = styled.path``;
export const Polygon = styled.polygon``;
export const ForeignObject = styled.foreignObject`
  & div,
  & img {
    width: 32px;
    height: 32px;
  }
`;
