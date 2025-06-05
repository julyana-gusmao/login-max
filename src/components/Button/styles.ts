import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 24px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.font.roboto};
  transition: background 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;
