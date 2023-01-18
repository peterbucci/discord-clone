import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 500;
  pointer-events: none;
`;

export const AbsoluteContainer = styled.div`
  position: absolute;
`;

export const AnimationRight = styled.div``;

export const AnimationLeft = styled.div``;

export const InnerContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  pointer-events: auto;
`;
