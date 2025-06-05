import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 1.5rem;
  justify-content: flex-end;
`;

interface PageButtonProps {
  active?: boolean;
}

export const PageButton = styled.button<PageButtonProps>`
  background-color: ${({ active }) => (active ? "#CC6237" : "#F5F5F5")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  border: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ active }) =>
      active ? "#CC6237" : "rgba(204, 98, 55, 0.3)"};
  }
`;

interface ArrowButtonProps {
  disabled?: boolean;
  active?: boolean;
}

export const ArrowButton = styled.button<ArrowButtonProps>`
  background-color: ${({ disabled, active }) =>
    disabled ? "#f5f5f5" : active ? "#CC6237" : "#f5f5f5"};
  color: ${({ disabled, active }) =>
    disabled ? "#000" : active ? "#fff" : "#000"};
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  padding: 0 12px;
  border-radius: 8px;
  font-weight: 400;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? "#f5f5f5" : "rgba(204, 98, 55, 0.3)"};
  }
`;
