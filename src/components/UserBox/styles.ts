import styled from "styled-components";

export const UserBoxWrapper = styled.div`
  margin-top: auto;
  width: 100%;

  @media (max-width: 768px) {
    position: relative;
  }
`;

export const UserBox = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1.8rem 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    border-top: none;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0 1rem;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    justify-content: flex-start;
  }
`;

export const MobileActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 10px;
  align-items: flex-start;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  margin-top: 8px;
  padding: 0 10px;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: ${({ theme }) => theme.radius.sm};
    padding: 0.5rem 1rem;
    margin-top: 0;
    z-index: 1200;
    width: max-content;
    min-width: 140px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const UserPhoto = styled.img`
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.radius.full};
  object-fit: cover;

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

export const UserName = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const UserRole = styled.div`
  font-size: 11px;
  color: rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    display: none;
  }
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

  @media (max-width: 768px) {
    width: auto;
    padding: 0.4rem 0.6rem;
    font-size: 13px;
    margin-bottom: 0;
  }
`;
