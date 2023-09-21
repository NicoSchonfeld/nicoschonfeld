"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import NavbarComp from "@/components/Navbar";

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <NextThemesProvider /* attribute="class" */ defaultTheme="dark">
        <NavbarComp />
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
