import React, { useContext } from "react";
import Head from "next/head";
import Header from "./Header";
import { DataContext } from "../context/DataProvider";

export default function Layout({ children }) {
  const { theme, setTheme } = useContext(DataContext);

  return (
    <>
      <Head>
        <meta name="description" content="Sitio web de Nicolás Schönfeld" />
        <title>Sitio Web | Nico Schönfeld</title>
        <link rel="icon" href="/image/Logo.svg" />
        <meta name="author" content="Nicolás Schönfeld" />
        <meta
          name="keywords"
          content="Porfolio website portafolio trabajos html css javascript react next angular"
        />
        <meta name="reply-to" content="nicoschonfeld88@gmail.com" />
        <meta
          name="copyright"
          content="® NICO SCHÖNFELD. Todos los derechos reservados"
        />
        <meta name="distribution" content="Global" />
        <meta name="lenguage" content="ES" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <div className={theme ? "theme-night" : "theme-day"}>{children}</div>
    </>
  );
}

Layout.defaultProps = {
  title: "Sitio Web | Nico Schönfeld",
  description: "Sitio web de Nicolás Schönfeld",
};
