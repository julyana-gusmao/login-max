"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import { theme } from "../styles/theme";
import { AuthProvider } from "../contexts/AuthContext";
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
import ProtectedRoute from "@/components/ProtectedRoute";
import { DashboardLayout } from "@/layouts/Dashboard";
import "react-datepicker/dist/react-datepicker.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${roboto.variable} ${poppins.variable}`}>
      <body>
        <AuthProvider>
          <ProtectedRoute>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <DashboardLayout>{children}</DashboardLayout>
            </ThemeProvider>
          </ProtectedRoute>
        </AuthProvider>
      </body>
    </html>
  );
}
