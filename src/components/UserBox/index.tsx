"use client";

import React, { useState, useEffect } from "react";
import {
  UserBoxWrapper,
  UserInfo,
  UserPhoto,
  UserName,
  UserRole,
  Dropdown,
  MobileActionsWrapper,
} from "./styles";
import { useAuth } from "@/contexts/AuthContext";
import { ButtonOutline } from "@/components/ButtonOutline";
import UserModal from "../UserModal/UserModal";
import { FaChevronDown, FaSignOutAlt, FaUserEdit } from "react-icons/fa";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function UserBox() {
  const { user, logout, updateUser } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: user?.name || "",
    photoUrl: user?.photoUrl || "",
    role: user?.role || "",
  });
  const [showOptions, setShowOptions] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleSave = (data: { name: string; photoUrl: string }) => {
    const updated = { ...userData, ...data };
    setUserData(updated);
    updateUser({ name: data.name, photoUrl: data.photoUrl });
  };

  const handleLogout = () => {
    logout();
  };

  if (!user) return null;

  if (!isMounted) {
    return (
      <UserBoxWrapper>
        <UserInfo style={{ cursor: "default" }}>
          <UserPhoto
            src={userData.photoUrl || user.photoUrl}
            alt={userData.name}
          />
          <div>
            <UserName>{userData.name}</UserName>
            <UserRole>{userData.role}</UserRole>
          </div>
        </UserInfo>
      </UserBoxWrapper>
    );
  }

  const toggleOptions = () => {
    if (isMobile) setShowOptions((prev) => !prev);
  };

  return (
    <UserBoxWrapper>
      <UserInfo
        onClick={toggleOptions}
        style={{ cursor: isMobile ? "pointer" : "default" }}
      >
        <UserPhoto
          src={userData.photoUrl || user.photoUrl}
          alt={userData.name}
        />
        <div>
          <UserName>{userData.name}</UserName>
          <UserRole>{userData.role}</UserRole>
          {isMobile && <FaChevronDown style={{ marginLeft: 4 }} />}
        </div>
      </UserInfo>

      {isMobile && showOptions && (
        <Dropdown>
          <ButtonOutline
            icon={<FaUserEdit />}
            onClick={() => {
              setIsModalOpen(true);
              setShowOptions(false);
            }}
          >
            Alterar dados
          </ButtonOutline>
          <ButtonOutline
            icon={<FaSignOutAlt />}
            onClick={() => {
              handleLogout();
              setShowOptions(false);
            }}
          >
            Sair
          </ButtonOutline>
        </Dropdown>
      )}

      {!isMobile && (
        <MobileActionsWrapper>
          <ButtonOutline
            icon={<FaUserEdit />}
            onClick={() => setIsModalOpen(true)}
          >
            Alterar dados
          </ButtonOutline>
          <ButtonOutline icon={<FaSignOutAlt />} onClick={handleLogout}>
            Sair
          </ButtonOutline>
        </MobileActionsWrapper>
      )}

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
