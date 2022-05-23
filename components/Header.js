import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { DataContext } from "../context/DataProvider";

export default function Header() {
  const { theme, setTheme, menu, setMenu } = useContext(DataContext);
  return (
    <>
      <header className="header">
        <div className="wrapper-header">
          <Link href={"/"}>
            <a className="container-logo-header">
              {theme ? (
                <Image
                  className="logo-header"
                  src={"/image/Logo.svg"}
                  alt={"Logo"}
                  width={20}
                  height={30}
                />
              ) : (
                <Image
                  className="logo-header"
                  src={"/image/Logo2.svg"}
                  alt={"Logo2"}
                  width={20}
                  height={30}
                />
              )}

              <p className={theme ? "name-header-night" : "name-header-day"}>
                Nicolás Schönfeld
              </p>
            </a>
          </Link>

          <div className="container-menu-header">
            {theme ? (
              <BsSunFill className="day" onClick={() => setTheme(!theme)} />
            ) : (
              <BsMoonFill className="night" onClick={() => setTheme(!theme)} />
            )}

            {menu ? (
              <div
                className={
                  theme ? "container-menu-night" : "container-menu-day"
                }
                onClick={() => setMenu(!menu)}
              >
                <FaTimes />
              </div>
            ) : (
              <div
                className={
                  theme ? "container-menu-night" : "container-menu-day"
                }
                onClick={() => setMenu(!menu)}
              >
                <FaBars />
              </div>
            )}
          </div>
        </div>
      </header>

      {menu ? (
        <div className="containerNav">
          <nav className={theme ? "nav-night" : "nav-day"}>
            <ul className="menu">
              <li>
                <Link href={"/"}>
                  <a
                    className={theme ? "menuItem-night" : "menuItem-day"}
                    onClick={() => setMenu(!menu)}
                  >
                    Inicio
                  </a>
                </Link>
              </li>
              <l>
                <Link href={"/Projects"}>
                  <a
                    className={theme ? "menuItem-night" : "menuItem-day"}
                    onClick={() => setMenu(!menu)}
                  >
                    Mis Proyectos
                  </a>
                </Link>
              </l>
              <li>
                <Link
                  href={
                    "https://drive.google.com/file/d/1AgVJGDAxES-Ko6-EKHwVwkLTzPysVTbU/view?usp=sharing"
                  }
                >
                  <a
                    className={theme ? "menuItem-night" : "menuItem-day"}
                    target={"_blank"}
                    rel="noopener noreferrer"
                    onClick={() => setMenu(!menu)}
                  >
                    Descargar CV
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </>
  );
}
