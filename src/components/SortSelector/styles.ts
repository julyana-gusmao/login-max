import styled from "styled-components";

export const SortWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
`;

export const SortPrefix = styled.span`
  font-size: 14px;
  color: #666;
  font-family: ${({ theme }) => theme.font.poppins};
`;

export const SortLabel = styled.span`
  font-weight: 600;
  font-size: 14px;
  font-family: ${({ theme }) => theme.font.poppins};
`;

export const Dropdown = styled.ul`
  position: absolute;
  top: 32px;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 6px 0;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  z-index: 10;
  list-style: none;
  width: 140px;
`;

export const DropdownItem = styled.li`
  padding: 8px 16px;
  font-size: 14px;
  color: #333;
  font-family: ${({ theme }) => theme.font.poppins};
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;