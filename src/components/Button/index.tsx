"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton, IconWrapper } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode
  iconPosition?: "left" | "right";
  width?: string;
}

export const Button = ({
  children,
  icon,
  iconPosition = "left",
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton {...rest}>
      {icon && iconPosition === "left" && (
        <IconWrapper>{icon}</IconWrapper>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <IconWrapper>{icon}</IconWrapper>
      )}
    </StyledButton>
  );
};
