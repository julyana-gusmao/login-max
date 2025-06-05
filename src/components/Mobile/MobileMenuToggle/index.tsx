"use client";

import { MdMenu, MdClose } from "react-icons/md";
import styled from "styled-components";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

export default function MobileMenuToggle({ isOpen, toggle }: Props) {
  return (
    <ToggleButton onClick={toggle}>
      {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
    </ToggleButton>
  );
}

const ToggleButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background: transparent;
    border: none;
    cursor: pointer;
    margin-left: auto;
     z-index: 1100;
  }
`;
