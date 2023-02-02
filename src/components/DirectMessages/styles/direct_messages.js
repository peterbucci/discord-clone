import styled from "styled-components";

export const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10px;
  padding: 1px 6px;
  height: 28px;
  background-color: ${({ theme }) => theme.backgroundTertiary};
  border-radius: 4px;
  color: ${({ theme }) => theme.textMuted};
  font-family: "gg sans", "Noto Sans", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-overflow: ellipsis;
  line-height: 24px;
  white-space: nowrap;
  cursor: pointer;
`;
