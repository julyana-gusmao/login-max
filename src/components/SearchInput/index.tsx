"use client";

import { FiSearch } from "react-icons/fi";
import { InputWrapper, Input, IconWrapper } from "./styles";

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function SearchInput({
  value,
  onChange,
  placeholder = "Buscar Eventos",
}: SearchInputProps) {
  return (
    <InputWrapper>
      <IconWrapper>
        <FiSearch size={16} color="#CBCBCB" />
      </IconWrapper>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
}
