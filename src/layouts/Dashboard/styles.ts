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
  border: rgba(0, 0, 0, 0.1) 1px solid;
  justify-content: center;
  align-items: center;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
`;
