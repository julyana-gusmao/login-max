"use client";

import { useState } from "react";
import { InputHTMLAttributes } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import { ptBR } from "date-fns/locale";

import {
  Container,
  Label,
  StyledInput,
  InputWrapper,
  EyeButton,
  DatePickerInput,
} from "./styles";
import eyeIcon from "@/assets/login/passwordEye.png";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  value?: any;
  onChange?: any;
  useDatePicker?: boolean;
}

export const Input = ({
  label,
  type,
  useDatePicker,
  value,
  onChange,
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <Container>
      <Label>{label}</Label>
      <InputWrapper>
        {useDatePicker ? (
          <DatePicker
            selected={value}
            onChange={onChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="dd/mm/aaaa"
            className="date-picker"
            locale={ptBR}
            customInput={<DatePickerInput />}
          />
        ) : (
          <StyledInput
            type={inputType}
            value={value}
            onChange={onChange}
            {...rest}
          />
        )}
        {isPassword && (
          <EyeButton
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            <Image src={eyeIcon} alt="Ver senha" width={20} height={20} />
          </EyeButton>
        )}
      </InputWrapper>
    </Container>
  );
};
