import styled from "styled-components";

export const Layer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ exited }) => exited && `height: 0;`}
  background-color: ${({ exited, theme }) =>
    !exited ? theme.layerBackground : "transparent"};
  pointer-events: ${({ exited }) => (!exited ? "auto" : "none")};
  transition: background 0.3s ease-out;
  overflow: hidden;
`;

export const Container = styled.div`
  width: 440px;
  max-height: 720px;
  min-height: 200px;
  overflow: hidden;
`;

export const AnimatedHeight = styled.div`
  position: relative;
  display: flex;
  width: 440px;
  height: ${({ height }) => height ?? "396px"};
  transition: height 200ms ease-in-out;
  overflow: hidden;
`;

export const AbsoluteContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ left }) => left ?? "0"};
  right: ${({ right }) => right ?? "0"};
  width: 440px;
  backface-visibility: hidden;
  transition: right 200ms, left 200ms ease-in-out;
`;
