import styled from "styled-components";

export const Svg = styled.svg.attrs(({ size }) => ({
  viewBox: size === "Large" ? "0 0 92 92" : "0 0 40 40",
}))`
  width: ${({ size }) => (size === "Large" ? "92px" : "40px")};
  height: ${({ size }) => (size === "Large" ? "92px" : "40px")};
`;
export const Mask = styled.mask``;
export const TransparentRect = styled.rect`
  fill: ${({ theme }) => theme.black};
`;
export const VisibleCircle = styled.circle`
  fill: ${({ theme }) => theme.white};
`;
export const TransparentCircle = styled.circle`
  fill: ${({ theme }) => theme.black};
`;

export const ForeignObject = styled.foreignObject`
  x: 0;
  y: 0;
  width: ${({ size }) => (size === "Large" ? "80px" : "32px")};
  height: ${({ size }) => (size === "Large" ? "80px" : "32px")};
`;
export const ImageWrapper = styled.div``;
export const Image = styled.img`
  width: ${({ size }) => (size === "Large" ? "80px" : "32px")};
  height: ${({ size }) => (size === "Large" ? "80px" : "32px")};
`;

export const StatusRect = styled.rect`
  x: ${({ size }) => (size === "Large" ? "60px" : "22px")};
  y: ${({ size }) => (size === "Large" ? "60px" : "22px")};
  width: ${({ size }) => (size === "Large" ? "16px" : "10px")};
  height: ${({ size }) => (size === "Large" ? "16px" : "10px")};
  fill ${({ status, theme }) =>
    status === "AFK"
      ? theme.statusAFK
      : status === "Offline"
      ? theme.statusOffline
      : status === "DND"
      ? theme.infoDangerForeground
      : theme.statusGreen600}
`;
