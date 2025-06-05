import styled from "styled-components";

export const UserBox = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1.8rem 0;
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


