import styled from "styled-components";
import { default as styledBase } from "styled-components";

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column; 
    gap: 0.5rem;
    justify-content: flex-start;
     align-items: center;
  }
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
  border-radius: ${({ theme }) => theme.radius.sm};
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

  @media (max-width: 768px) {
    width: auto;
    margin-bottom: 0;
    padding: 0.5rem 0.75rem;
    font-size: 14px;
    justify-content: center;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
    border-radius: ${({ theme }) => theme.radius.sm};
    z-index: 999;
  }
`;

export const MenuTitle = styled.p`
  color: ${({ theme }) => theme.colors.gray};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
