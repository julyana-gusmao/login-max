import styled, { css } from "styled-components";
import { default as styledBase } from "styled-components";

interface StyledButtonProps {
  border?: boolean;
}

export const StyledButton = styledBase.button.withConfig({
  shouldForwardProp: (prop) => prop !== "border", 
})<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font.roboto};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 500;

  border-radius: ${({ theme }) => theme.radius.full};
  padding: 12px 24px;
  transition: all 0.3s ease;

  border: none;

  ${({ border, theme }) =>
    border &&
    css`
      border: 1.5px solid ${theme.colors.primary};
    `}

  &:hover {
    opacity: 0.9;
    transform: scale(1.02);
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
