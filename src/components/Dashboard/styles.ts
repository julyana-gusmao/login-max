import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: ${({ theme }) => theme.font.poppins};
  background-color: ${({ theme }) => theme.colors.background};
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuTitle = styled.p`
  color: ${({ theme }) => theme.colors.gray};
`;

export const Sidebar = styled.aside`
  width: 14%;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  gap: 2.3rem;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid #black;
  justify-content: center;
  align-items: center;
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

interface MenuItemProps {
  active?: boolean;
}

export const MenuItem = styled.div<MenuItemProps>`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  padding: 0.75rem 1rem;
  width: 210px;
  margin-bottom: 10px;
  border-radius: ${({ theme }) => theme.radius.sm};
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary : "transparent"};
  color: ${({ active, theme }) =>
    active ? theme.colors.white : theme.colors.text};
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ active, theme }) =>
      active ? theme.colors.primary : "rgba(232, 130, 88, 0.3)"};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserBox = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 2.3rem 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserPhoto = styled.img`
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.radius.full};
  object-fit: cover;
`;

export const UserName = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
`;

export const UserRole = styled.div`
  font-size: 11px;
  color: rgba(0, 0, 0, 0.5);
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: none;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;
  transition: background-color 0.3s;

  &:hover {
    opacity: 0.85;
  }
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

// Modal styles
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  min-width: 320px;
`;
