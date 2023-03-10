import styled from "styled-components";

export const Svg = styled.svg`
  display: block;
  width: ${(props) => (props.width ? props.width : "24px")};
  height: ${(props) => (props.height ? props.height : "24px")};
`;

export const Group = styled.g``;
export const Rect = styled.rect``;
export const Path = styled.path`
  color: ${({ theme }) => theme.interactiveNormal};
`;

export const Polygon = styled.polygon``;
export const ForeignObject = styled.foreignObject`
  & div,
  & img {
    width: 32px;
    height: 32px;
  }
`;
