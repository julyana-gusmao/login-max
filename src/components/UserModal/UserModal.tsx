"use client";

import { useState, useEffect } from "react";
import { ModalContainer, ModalHeader, Overlay } from "../EventModal/styles";
import { InputsWrapper } from "../EventModal/styles";
import { Input } from "../Input";
import { Button } from "../Button";
import Image from "next/image";
import { LabelUpload } from "./styles";

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; photoUrl: string }) => void;
  defaultValues: { name: string; photoUrl: string };
}

export default function UserModal({
  isOpen,
  onClose,
  onSubmit,
  defaultValues,
}: UserModalProps) {
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  useEffect(() => {
    if (isOpen) {
      setName(defaultValues.name || "");
      setPhotoUrl(defaultValues.photoUrl || "");
    }
  }, [isOpen, defaultValues]);

  if (!isOpen) return null;

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPhotoUrl(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ name, photoUrl });
    onClose();
  };

  return (
    <Overlay>
      <ModalContainer>
        <ModalHeader>
          <h2>Alterar Dados</h2>
          <button onClick={onClose}>✕</button>
        </ModalHeader>
        <form onSubmit={handleSubmit}>
          <InputsWrapper>
            <Input
              label="Nome"
              name="name"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              required
            />
            <LabelUpload>
              <span>Alterar Foto</span>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
              />
              {photoUrl && (
                <Image
                  src={photoUrl}
                  alt="preview"
                  width={100}
                  height={100}
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                />
              )}
            </LabelUpload>
          </InputsWrapper>
          <Button width="100%" type="submit" style={{ marginTop: "25px" }}>
            Salvar
          </Button>
        </form>
      </ModalContainer>
    </Overlay>
  );
}
