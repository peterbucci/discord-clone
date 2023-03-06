import styled from "styled-components";

export const Container = styled.div``;

export const DailyDivider = styled.div`
  position: relative;
  left: auto;
  right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 1rem 0.5rem 1rem;
  height: 0;
  border-top: ${({ theme }) => `1px solid ${theme.backgroundModifierAccent}`};
  pointer-events: none;
  z-index: 1;
`;

export const DailyDividerText = styled.span`
  display: block;
  flex: 0 1 auto;
  margin-top: -1px;
  padding: 2px 4px;
  color: ${({ theme }) => theme.textMuted};
  line-height: 13px;
  font-size: 11.5px;
  font-weight: 600;
`;
