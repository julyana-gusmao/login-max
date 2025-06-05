"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton, ContentWrapper, IconWrapper } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode;
  border?: boolean;
}

export const ButtonOutline = ({
  children,
  icon,
  border = false,
  ...rest
}: ButtonProps) => (
  <StyledButton border={border} {...rest}>
    <ContentWrapper>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <span>{children}</span>
    </ContentWrapper>
  </StyledButton>
);
