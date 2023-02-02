import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  color: ${({ theme }) => theme.white};
  z-index: 1000;
`;
