import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Button = styled.div`
  cursor: pointer;
`;

export const ButtonText = styled.div`
  margin-left: 16px;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.interactiveNormal};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Recipient = styled.span`
  font-weight: 600;
`;

export const Actions = styled.div`
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const CloseButton = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  padding: 8px 18px 8px 16px;
  line-height: 0;
  cursor: pointer;
  &:hover svg path {
    fill: ${({ theme }) => theme.textNormal};
  }
`;
