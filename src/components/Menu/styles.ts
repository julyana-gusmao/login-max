import styled from "styled-components";
import { default as styledBase } from "styled-components";
export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

interface MenuItemProps {
  active?: boolean;
}

export const MenuItem = styledBase.div.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})<MenuItemProps>`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  padding: 0.75rem 1rem;
  width: 210px;
  margin-bottom: 10px;
  border-radius: ${({ theme }) => theme.  radius.sm};
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary[100] : "transparent"};
  color: ${({ active, theme }) =>
    active ? theme.colors.white : theme.colors.text};
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ active, theme }) =>
      active ? theme.colors.primary[100] : theme.colors.primary[50]};
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuTitle = styled.p`
  color: ${({ theme }) => theme.colors.gray};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
