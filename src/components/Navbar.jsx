"use client";

import React from "react";
import { useTheme } from "next-themes";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import LogoNS from "./LogoNS";

const NavbarComp = () => {
  const { theme, setTheme } = useTheme();

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Navbar maxWidth="2xl">
      <NavbarBrand>
        <span
          className="font-bold text-inherit cursor-pointer"
          onClick={() => scrollUp()}
        >
          <LogoNS color={theme == "dark" ? "white" : "black"} />
        </span>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComp;
