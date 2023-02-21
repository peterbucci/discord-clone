import styled from "styled-components";

export const EmptyContainer = styled.div`
  opacity: 0;
  z-index: 101;
  &[data-show] {
    opacity: 1;
    & > * {
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const ProfilePanelAnimation = styled.div`
  transform: translate3d(20px, 0, 0);
  transition: transform 0.2s ease-out;
  border-radius: 8px;
  outline: 1px solid transparent;
  overflow: hidden;
`;

export const Menu = styled.div`
  display: flex;
  height: auto;
  max-height: calc(100vh - 32px);
  width: 220px;
  background: ${({ theme }) => theme.backgroundFloating};
  box-shadow: ${({ theme }) => `0 8px 16px ${theme.elevationHigh}`};
  box-sizing: border-box;
  border-radius: 4px;
  transform: ${({ showTooltip }) =>
    showTooltip ? "scale(1)" : "scale(0)"} !important;
  transform-origin: top center;
  transition: transform 0.12s ease-out, opacity 0.12s ease-out,
    -webkit-transform 0.12s ease-out;
  overflow: hidden scroll;
  z-index: 1;
  cursor: default;
`;
