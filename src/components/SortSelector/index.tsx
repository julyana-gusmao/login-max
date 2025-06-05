"use client";

import { useState, useRef, useEffect } from "react";
import { FiFilter } from "react-icons/fi";
import {
  SortWrapper,
  SortLabel,
  SortPrefix,
  Dropdown,
  DropdownItem,
} from "./styles";

interface SortSelectorProps {
  sortBy: string;
  onChange: (field: string) => void;
}

export default function SortSelector({ sortBy, onChange }: SortSelectorProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const options = [
    { label: "Data", value: "data" },
    { label: "Nome", value: "nome" },
    { label: "Status", value: "status" },
  ];

  const currentLabel =
    options.find((o) => o.value === sortBy)?.label || "Ordenar";

  return (
    <SortWrapper ref={ref} onClick={() => setOpen((o) => !o)}>
      <SortPrefix>Classificado por:</SortPrefix>
      <SortLabel>{currentLabel}</SortLabel>
      <FiFilter size={20} />
      {open && (
        <Dropdown>
          {options.map((opt) => (
            <DropdownItem
              key={opt.value}
              onClick={(event) => {
                event.stopPropagation();
                onChange(opt.value);
                setOpen(false);
              }}
            >
              {opt.label}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </SortWrapper>
  );
}
