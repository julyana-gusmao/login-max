"use client";

import React, { ReactNode, useState } from "react";

import { UserBox } from "../../components/UserBox";
import Image from "next/image";
import logo from "@/assets/login/logo.png";
import { usePathname } from "next/navigation";
import {
  Container,
  MainContent,
  Sidebar,
  SidebarContent,
  TopBar,
} from "./styles";
import { SidebarMenu } from "@/components/Menu";
import MobileMenuToggle from "@/components/Mobile/MobileMenuToggle";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (pathname === "/login" || pathname === "/") {
    return <>{children}</>;
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <Container>
      <Sidebar>
        <TopBar>
          <Image src={logo} alt="Logo" />
        </TopBar>

        <SidebarContent>
          <SidebarMenu isMobileOpen={isMobileMenuOpen} />
          <UserBox />
          <MobileMenuToggle
            isOpen={isMobileMenuOpen}
            toggle={toggleMobileMenu}
          />
        </SidebarContent>
      </Sidebar>
      <MainContent>{children}</MainContent>
    </Container>
  );
}
