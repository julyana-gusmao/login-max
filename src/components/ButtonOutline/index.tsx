"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton, ContentWrapper } from "./styles";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: StaticImport;
  border?: boolean;
}

export const ButtonOutline = ({ children, icon, border = false, ...rest }: ButtonProps) => (
  <StyledButton border={border} {...rest}>
    <ContentWrapper>
      {icon && (
        <Image
          src={icon}
          alt="Ícone"
          width={18}
          height={18}
        />
      )}
      <span>{children}</span>
    </ContentWrapper>
  </StyledButton>
);
