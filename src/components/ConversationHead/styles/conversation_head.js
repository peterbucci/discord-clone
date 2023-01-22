import styled from "styled-components";

export const Container = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 16px;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Avatar = styled.img`
  height: auto;
  width: 100%;
`;

export const Username = styled.h3`
  margin: 8px 0;
  line-height: 40px;
  font-size: 32px;
  font-weight: 700;
`;

export const Description = styled.div`
  line-height: 20px;
  font-size: 16px;
  font-weight: 400;
  color: #b9bbbe;
`;

export const Strong = styled.strong`
  font-weight: 600;
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

export const NoServers = styled.div`
  line-height: 18px;
  font-size: 14px;
`;

export const Divider = styled.div`
  margin: 0 16px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #4f545c;
`;

export const FriendRequestSent = styled.div`
  margin-right: 8px;
  line-height: 18px;
  font-size: 14px;
`;

export const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 16px;
  margin-right: 8px;
  width: auto;
  height: 24px;
  min-width: 52px;
  min-height: 24px;
  background: none;
  background-color: ${({ altBackground }) =>
    altBackground ? "#5865F2" : "#4f545c"};
  border: none;
  border-radius: 3px;
  color: #ffffff;
  line-height: 16px;
  font-size: 14px;
  font-weight: 600;
  box-sizing: border-box;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ altBackground }) =>
      altBackground ? "#4752C4" : "#686d73"};
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    &:hover {
      background-color: ${({ altBackground }) =>
        altBackground ? "#5865F2" : "#4f545c"};
    }
  }
`;

export const ButtonText = styled.div`
  margin: 0 auto;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
