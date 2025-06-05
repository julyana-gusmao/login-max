"use client";

import { useState } from "react";
import Image from "next/image";
import { InputHTMLAttributes } from "react";
import { Container, Label, StyledInput, InputWrapper, EyeButton } from "./styles";
import eyeIcon from "@/assets/login/passwordEye.png";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = ({ label, type, ...rest }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <Container>
      <Label>{label}</Label>
      <InputWrapper>
        <StyledInput type={inputType} {...rest} />
        {isPassword && (
          <EyeButton type="button" onClick={() => setShowPassword(!showPassword)}>
            <Image src={eyeIcon} alt="Ver senha" width={20} height={20} />
          </EyeButton>
        )}
      </InputWrapper>
    </Container>
  );
};
