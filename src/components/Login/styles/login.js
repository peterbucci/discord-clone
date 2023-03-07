import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 20px;
  width: 50%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.backgroundPrimary};
`;

export const Logo = styled.img`
  margin-bottom: 20px;
  width: 40%;
  height: auto;
`;

export const LoginLink = styled.div`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.textLink};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Warning = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.statusDanger};
`;

export const ExternalLink = styled.a`
  all: unset;
  margin-top: 10px;
  color: ${({ theme }) => theme.textLink};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
