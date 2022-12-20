import styled from "styled-components";

export const Svg = styled.svg.attrs((props) => ({
  viewBox: "0 0 40 40",
}))`
  width: 40px;
  height: 40px;
`;
export const Mask = styled.mask``;
export const TransparentRect = styled.rect`
  fill: #000000;
`;
export const VisibleCircle = styled.circle`
  fill: #ffffff;
`;
export const TransparentCircle = styled.circle`
  fill: #000000;
`;

export const ForeignObject = styled.foreignObject`
  x: 0;
  y: 0;
  width: 32px;
  height: 32px;
`;
export const ImageWrapper = styled.div``;
export const Image = styled.img`
  width: 32px;
  height: 32px;
`;

export const StatusRect = styled.rect`
  x: 22px;
  y: 22px;
  width: 10px;
  height: 10px;
  fill ${({ status }) =>
    status === "AFK"
      ? "#faa61a"
      : status === "Offline"
      ? "#747f8d"
      : status === "DND"
      ? "#ED4245"
      : "#3ba55c"}
`;
