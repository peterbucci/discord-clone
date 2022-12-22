import styled from "styled-components";

export const Container = styled.div`
  flex-shrink: 0;
  width: 358px;
  margin: 0 0 0 2px;
  padding: 16px 8px 16px 16px;
  border: 1px solid rgba(74, 84, 92, 0.48);
  backgroundcolor: #32353b;
  overflow-y: auto;
`;

export const ActiveNowHead = styled.h2`
  margin: 8px 0 16px;
  line-height: 24px;
  font-size: 19px;
  font-weight: 800;
`;

export const ActiveNowEmpty = styled.div`
  padding: 16px;
  text-align: center;
`;

export const ActiveNowEmptyHead = styled.h2`
  margin: 0 0 4px;
  line-height: 20px;
  font-size: 15px;
  font-weight: 600;
`;

export const ActiveNowEmptyText = styled.div`
  line-height: 18px;
  font-size: 13px;
  font-weight: 400;
  color: #b9bbbe;
`;
