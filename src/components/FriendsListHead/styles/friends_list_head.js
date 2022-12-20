import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  height: 48px;
`;

export const Left = styled.div`
  display: flex;
  flex: 1;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 20px;
  font-size: 16px;
  font-weight: 500;
`;

export const IconWrapper = styled.div`
  margin: 0 8px;
  &.iconPath:hover {
    cursor: pointer;
    & path {
      fill: #dcddde;
    }
  }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;

export const Divider = styled.div`
  margin: 0 8px;
  height: 24px;
  width: 1px;
  background-color: rgba(74, 84, 92, 0.48);
`;

export const Nav = styled.div`
  display: flex;
`;

export const NavLink = styled.div`
  margin: 0 8px;
  padding: 2px 8px;
  color: ${({ selected }) => (selected ? "#ffffff" : "#B9BBBE")};
  cursor: ${({ selected }) => (selected ? "default" : "pointer")};
  background-color: ${({ selected }) =>
    selected ? "rgba(79, 84, 92, 0.6)" : "auto"};
  border-radius: 4px;
  &:hover {
    background-color: rgba(79, 84, 92, 0.48);
    color: #dcddde;
  }
`;

export const AddFriend = styled.div`
  margin: 0 8px;
  padding: 2px 8px;
  background-color: ${({ selected }) => (selected ? "auto" : "#2d7d46")};
  border-radius: 4px;
  color: ${({ selected }) => (selected ? "#46C46E" : "#ffffff")};
  cursor: pointer;
`;

export const Right = styled.div`
  display: flex;
  flex: 0;
`;
