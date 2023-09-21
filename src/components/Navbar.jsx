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
import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

const NavbarComp = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Navbar maxWidth="2xl">
      <NavbarBrand>
        <h3
          className="font-bold text-inherit cursor-pointer"
          onClick={() => scrollUp()}
        >
          NICO SCHÖNFELD
        </h3>
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
