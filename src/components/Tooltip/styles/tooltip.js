import styled from "styled-components";

export const EmptyContainer = styled.div`
  opacity: 0;
  z-index: 101;
  padding-left: 20px !important;
  transition: padding 0.2s ease-out;
  &[data-show] {
    opacity: 1;
    padding-left: 0 !important;
  }
`;
