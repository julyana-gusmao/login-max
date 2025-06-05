"use client";

import React, { ReactNode } from "react";

import { UserBox } from "../../components/UserBox";
import Image from "next/image";
import logo from "@/assets/login/logo.png";
import { usePathname } from "next/navigation";
import { Container, MainContent, Sidebar, SidebarContent } from "./styles";
import { SidebarMenu } from "@/components/Menu";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();

  if (pathname === "/login") {
    return <>{children}</>;
  }

  return (
    <Container>
      <Sidebar>
        <Image src={logo} alt="Logo" />
        <SidebarContent>
          <SidebarMenu />
          <UserBox />
        </SidebarContent>
      </Sidebar>
      <MainContent>{children}</MainContent>
    </Container>
  );
}
