import React from "react";
import { Checkbox, Slider, SwitchContainer } from "./styles";

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export function Switch({ checked, onChange, label }: SwitchProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <SwitchContainer>
        <Checkbox
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <Slider />
      </SwitchContainer>
      {label && <span>{label}</span>}
    </div>
  );
}
