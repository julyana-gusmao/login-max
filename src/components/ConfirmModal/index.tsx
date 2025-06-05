import React from "react";
import {
  Overlay,
  ModalContainer,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "./styles";
import { Button } from "../Button";

interface ConfirmModalProps {
  isOpen: boolean;
  title?: string;
  message: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
  confirmColor?: string;
}

export default function ConfirmModal({
  isOpen,
  title = "Confirmar",
  message,
  onConfirm,
  onCancel,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
  confirmColor = "red",
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <ModalHeader>
          <h2>{title}</h2>
          <button aria-label="Fechar modal" onClick={onCancel}>
            ✕
          </button>
        </ModalHeader>

        <ModalBody>{message}</ModalBody>

        <ModalFooter>
          <Button onClick={onCancel}>{cancelText}</Button>
          <Button
            onClick={onConfirm}
            style={{ backgroundColor: confirmColor, color: "#fff" }}
          >
            {confirmText}
          </Button>
        </ModalFooter>
      </ModalContainer>
    </Overlay>
  );
}
