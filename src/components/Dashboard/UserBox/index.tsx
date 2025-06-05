"use client";

import React, { useState } from "react";
import logoutImage from "@/assets/sidebar/userBox/logout.png";
import userImage from "@/assets/sidebar/userBox/user.png";
import {
  UserBox as UserBoxWrapper,
  UserInfo,
  UserPhoto,
  UserName,
  UserRole,
  ModalOverlay,
  ModalContent,
} from "../styles";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/Button";
import { ButtonOutline } from "@/components/ButtonOutline";

export function UserBox() {
  const { user, logout } = useAuth();
  const [showEditModal, setShowEditModal] = useState(false);

  const handleLogout = () => {
    logout();
  };

  if (!user) return null;

  return (
    <UserBoxWrapper>
      <UserInfo>
        <UserPhoto src={user.photoUrl} alt={user.name} />
        <div>
          <UserName>{user.name}</UserName>
          <UserRole>{user.role}</UserRole>
        </div>
      </UserInfo>

      <div>
        <ButtonOutline icon={userImage} onClick={() => setShowEditModal(true)}>
          Alterar dados
        </ButtonOutline>
        <ButtonOutline icon={logoutImage} onClick={handleLogout}>
          Sair
        </ButtonOutline>
      </div>

      {showEditModal && (
        <ModalOverlay onClick={() => setShowEditModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h2>Alterar dados (estático)</h2>
            <p>Aqui você pode colocar inputs para alterar dados.</p>
            <Button onClick={() => setShowEditModal(false)}>Fechar</Button>
          </ModalContent>
        </ModalOverlay>
      )}
    </UserBoxWrapper>
  );
}
