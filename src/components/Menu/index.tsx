"use client";

import React from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu,
  MenuItem,
  IconWrapper,
  MenuContainer,
  MenuTitle,
} from "./styles";

import dashboardIcon from "@/assets/sidebar/menu/dashboard.png";
import eventosIcon from "@/assets/sidebar/menu/eventos.png";
import equipesIcon from "@/assets/sidebar/menu/equipes.png";
import inscricoesIcon from "@/assets/sidebar/menu/inscricoes.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface MenuItemType {
  label: string;
  href: string;
  icon: StaticImport;
}

const menuItems: MenuItemType[] = [
  { label: "Dashboard", href: "#", icon: dashboardIcon },
  { label: "Eventos", href: "/eventos", icon: eventosIcon },
  { label: "Equipes", href: "#", icon: equipesIcon },
  { label: "Inscrições", href: "#", icon: inscricoesIcon },
];

export function SidebarMenu() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <MenuContainer>
      <MenuTitle>MENU</MenuTitle>
      <Menu>
        {menuItems.map(({ label, href, icon }) => {
          const isActive = pathname === href;

          return (
            <MenuItem
              key={label}
              active={isActive}
              onClick={() => router.push(href)}
            >
              <IconWrapper>
                <Image src={icon} alt={label} width={20} height={20} />
              </IconWrapper>
              {label}
            </MenuItem>
          );
        })}
      </Menu>
    </MenuContainer>
  );
}
