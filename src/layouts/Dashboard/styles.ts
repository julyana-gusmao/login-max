import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: ${({ theme }) => theme.font.poppins};
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: auto;
    gap: 2rem;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuTitle = styled.p`
  color: ${({ theme }) => theme.colors.gray};
`;

export const Sidebar = styled.aside`
  position: relative;
  width: 230px;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  gap: 2.3rem;
  flex-direction: column;
  padding: 2rem;
  border: rgba(0, 0, 0, 0.1) 1px solid;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
