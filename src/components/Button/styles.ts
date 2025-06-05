import styled from "styled-components";

export const StyledButton = styled.button<{ width?: string }>`
  background-color: ${({ theme }) => theme.colors.primary[100]};
  border-radius: ${({ theme }) => theme.radius.lg};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-family: ${({ theme }) => theme.font.roboto};
  color: #fff;
  border: none;
  padding: 0.6rem 1.5rem;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;

  width: ${({ width }) => width || "auto"};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
`;
