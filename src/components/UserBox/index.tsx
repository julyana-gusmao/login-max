"use client";

import React from "react";
import logoutImage from "@/assets/sidebar/userBox/logout.png";
import userImage from "@/assets/sidebar/userBox/user.png";
import { useState } from "react";
import {
  UserBox as UserBoxWrapper,
  UserInfo,
  UserPhoto,
  UserName,
  UserRole,
} from "./styles";
import { useAuth } from "@/contexts/AuthContext";
import { ButtonOutline } from "@/components/ButtonOutline";
import UserModal from "../UserModal/UserModal";

export function UserBox() {
  const { user, logout, updateUser } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: user?.name || "",
    photoUrl: user?.photoUrl || "",
    role: user?.role || "",
  });

  const handleSave = (data: { name: string; photoUrl: string }) => {
    const updated = { ...userData, ...data };
    setUserData(updated);
    updateUser({ name: data.name, photoUrl: data.photoUrl });
  };

  const handleLogout = () => {
    logout();
  };

  if (!user) return null;

  return (
    <UserBoxWrapper>
      <UserInfo>
        <UserPhoto
          src={userData.photoUrl || user.photoUrl}
          alt={userData.name}
        />
        <div>
          <UserName>{userData.name}</UserName>
          <UserRole>{userData.role}</UserRole>
        </div>
      </UserInfo>

      <div>
        <ButtonOutline icon={userImage} onClick={() => setIsModalOpen(true)}>
          Alterar dados
        </ButtonOutline>
        <ButtonOutline icon={logoutImage} onClick={handleLogout}>
          Sair
        </ButtonOutline>
      </div>

      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSave}
        defaultValues={{
          name: userData.name,
          photoUrl: userData.photoUrl,
        }}
      />
    </UserBoxWrapper>
  );
}
