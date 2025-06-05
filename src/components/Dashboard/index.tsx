"use client";

import React, { ReactNode } from "react";
import { Container, Sidebar, MainContent, SidebarContent } from "./styles";
import { UserBox } from "./UserBox";
import { SidebarMenu } from "./Menu";
import Image from "next/image";
import logo from "@/assets/login/logo.png";
import { usePathname } from "next/navigation";

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
