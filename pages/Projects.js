import React, { useContext } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { DataContext } from "../context/DataProvider";
import { motion } from "framer-motion";

export default function Projects() {
  const { theme, setTheme } = useContext(DataContext);

  const item = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: -5 },
  };

  return (
    <>
      <Layout>
        <section className="sectionProjects">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={item}
            transition={{ dutarion: 1 }}
            className="wrapper-projects"
          >
            <h3 className={theme ? "titleProjects-night" : "titleProjects-day"}>
              Mis Proyectos
            </h3>

            <div className="containerImgProjects">
              <Image
                className="imgProjects"
                src={"/image/Nsfrontend.png"}
                alt={"NsFrontend"}
                width={350}
                height={190}
              />

              <p className={theme ? "textProject-night" : "textProject-day"}>
                Ns-Frontend Es una plataforma donde podras aprender las bases
                del Desarrollo Web.
              </p>

              <p className={theme ? "tec-night" : "tec-day"}>
                React.js - Next.js - FramerMotion
              </p>

              <div className="containerBtn">
                <Link href={"https://github.com/NicoSchonfeld/NsFrontend"}>
                  <a
                    className="btnGithub"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </Link>

                <Link href={"http://nsfrontend.vercel.app/"}>
                  <a
                    className="btnDemo"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </Link>
              </div>
            </div>

            <div className="containerImgProjects">
              <Image
                className="imgProjects"
                src={"/image/MajorKey.png"}
                alt={"MajorKey"}
                width={350}
                height={190}
              />

              <p className={theme ? "textProject-night" : "textProject-day"}>
                MajorKey TodoList es un challenge de la empresa que trata de
                crear una aplicación de tareas.
              </p>

              <p className={theme ? "tec-night" : "tec-day"}>
                React.js - Next.js - FramerMotion
              </p>

              <div className="containerBtn">
                <Link
                  href={"https://github.com/NicoSchonfeld/majorkey-challenge"}
                >
                  <a
                    className="btnGithub"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </Link>

                <Link href={"https://majorkey-challenge.vercel.app/"}>
                  <a
                    className="btnDemo"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </Link>
              </div>
            </div>

            <div className="containerImgProjects">
              <Image
                className="imgProjects"
                src={"/image/Ecommerce.png"}
                alt={"Ecommerce"}
                width={350}
                height={190}
              />

              <p className={theme ? "textProject-night" : "textProject-day"}>
                Ecommerce bastante simple, adaptable a distintos dispositivos
                con la funcionalidad básica de una tienda online.
              </p>

              <p className={theme ? "tec-night" : "tec-day"}>
                React.js - Next.js - FramerMotion - Drump
              </p>

              <div className="containerBtn">
                <Link
                  href={"https://github.com/NicoSchonfeld/ecommerce-practica"}
                >
                  <a
                    className="btnGithub"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </Link>

                <Link href={"https://ecommerce-practica.vercel.app/"}>
                  <a
                    className="btnDemo"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </Link>
              </div>
            </div>

            <footer>
              <p className={theme ? "copy-night" : "copy-day"}>
                ® NICO SCHÖNFELD. Todos los derechos reservados.
              </p>
            </footer>
          </motion.div>
        </section>
      </Layout>
    </>
  );
}
