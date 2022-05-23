import React, { useContext } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaRegCopy,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiAngular,
  SiTypescript,
  SiFigma,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGmail,
} from "react-icons/si";
import { DataContext } from "../context/DataProvider";
import { motion } from "framer-motion";

export default function Home() {
  const { theme, setTheme, copy, setCopy } = useContext(DataContext);

  const item = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: -5 },
  };

  return (
    <>
      <Layout>
        <main className="main">
          <motion.div
            className="wrapper-main"
            initial="hidden"
            animate="visible"
            variants={item}
            transition={{ dutarion: 1 }}
          >
            <p className={theme ? "presentation-night" : "presentation-day"}>
              ¡Hola! Soy Desarrollador Web enfocado en el Front-end
            </p>

            <div className="containerMe">
              <Image
                src="/image/photoNico.png"
                alt={"photoMe"}
                width={120}
                height={120}
              />
              <div className="containerName">
                <Link href={"https://www.linkedin.com/in/nicoschonfeld/"}>
                  <a target={"_blank"} rel="noopener noreferrer">
                    <h1 className={theme ? "titleName-night" : "titleName-day"}>
                      Nicolás Schönfeld
                    </h1>
                  </a>
                </Link>
                <p className={theme ? "parrafoName-night" : "parrafoName-day"}>
                  Desarrollador web - Ilustrador - Diseñador Grafico
                </p>
              </div>
            </div>

            <div>
              <h3 className={theme ? "about-night" : "about-day"}>Quien soy</h3>
              <p className={theme ? "parrafoAbout-night" : "parrafoAbout-day"}>
                Desarrollador web actualmente con la librería React & Next.js,
                pero en constante aprendizaje sobre nuevas librerías/frameworks.
                <br />
                tengo 20 años, resido en Cruz del Eje Córdoba Argentina.
                <br />
                Soy creativo y me esfuerzo por innovar o mejorar lo existente.
              </p>
            </div>
            <div className="containerBtnProject">
              <Link href={"/Projects"}>
                <a className="btnProyects">Mis Proyectos</a>
              </Link>
            </div>

            <div>
              <h4
                className={
                  theme ? "misHabilidades-night" : "misHabilidades-day"
                }
              >
                Mis Habilidades
              </h4>
              <div className="containerHabilidadesIcon">
                <div>
                  <p
                    className={
                      theme ? "titleHabilidades-night" : "titleHabilidades-day"
                    }
                  >
                    Front-end
                  </p>
                  <ul className="ulHabilidades">
                    <li
                      className={
                        theme ? "liHabilidades-night" : "liHabilidades-day"
                      }
                    >
                      <FaHtml5 /> Html 5
                    </li>
                    <li
                      className={
                        theme ? "liHabilidades-night" : "liHabilidades-day"
                      }
                    >
                      <FaCss3Alt /> Css
                    </li>
                    <li
                      className={
                        theme ? "liHabilidades-night" : "liHabilidades-day"
                      }
                    >
                      <FaJs /> JavaScript
                    </li>
                    <li
                      className={
                        theme ? "liHabilidades-night" : "liHabilidades-day"
                      }
                    >
                      <SiTypescript /> TypeScript
                    </li>
                    <li
                      className={
                        theme ? "liHabilidades-night" : "liHabilidades-day"
                      }
                    >
                      <FaReact /> React.js
                    </li>
                    <li
                      className={
                        theme ? "liHabilidades-night" : "liHabilidades-day"
                      }
                    >
                      <SiNextdotjs /> Next.js
                    </li>
                  </ul>
                </div>

                <div>
                  <p
                    className={
                      theme ? "titleHabilidades-night" : "titleHabilidades-day"
                    }
                  >
                    Diseño
                  </p>
                  <ul className="ulHabilidades">
                    <li
                      className={
                        theme ? "liHabilidades-night" : "liHabilidades-day"
                      }
                    >
                      <SiFigma /> Figma
                    </li>
                    <li
                      className={
                        theme ? "liHabilidades-night" : "liHabilidades-day"
                      }
                    >
                      <SiAdobeillustrator /> Illustrator
                    </li>
                    <li
                      className={
                        theme ? "liHabilidades-night" : "liHabilidades-day"
                      }
                    >
                      <SiAdobephotoshop /> Photoshop
                    </li>
                  </ul>
                </div>
                <div>
                  <p
                    className={
                      theme ? "titleHabilidades-night" : "titleHabilidades-day"
                    }
                  >
                    Aprendiendo
                  </p>
                  <ul className="ulHabilidades">
                    <li
                      className={
                        theme ? "liHabilidades-night" : "liHabilidades-day"
                      }
                    >
                      <SiNodedotjs /> Node.js
                    </li>
                    <li
                      className={
                        theme ? "liHabilidades-night" : "liHabilidades-day"
                      }
                    >
                      <SiExpress /> Express
                    </li>
                    <li
                      className={
                        theme ? "liHabilidades-night" : "liHabilidades-day"
                      }
                    >
                      <SiMongodb /> MongoDB
                    </li>
                    <li
                      className={
                        theme ? "liHabilidades-night" : "liHabilidades-day"
                      }
                    >
                      <SiAngular /> Angular
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className={theme ? "misRedes-night" : "misRedes-day"}>
                Mis Redes
              </h4>
              <ul className="ulRedes">
                <li>
                  <Link href={"https://www.instagram.com/nicoschonfeld_/"}>
                    <a
                      className={theme ? "liRedes-night" : "liRedes-day"}
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      <FaInstagram /> Instagram
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"https://github.com/NicoSchonfeld"}>
                    <a
                      className={theme ? "liRedes-night" : "liRedes-day"}
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> Github
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"https://www.linkedin.com/in/nicoschonfeld/"}>
                    <a
                      className={theme ? "liRedes-night" : "liRedes-day"}
                      target={"_blank"}
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin /> Linkedin
                    </a>
                  </Link>
                </li>
                <li className={theme ? "liRedes-night" : "liRedes-day"}>
                  <div className="d-flex-email">
                    <SiGmail /> nicoschonfeld88@gmail.com
                  </div>
                  <CopyToClipboard text="nicoschonfeld88@gmail.com">
                    <FaRegCopy
                      className="iconCopy"
                      onClick={() => setCopy(!copy)}
                    />
                  </CopyToClipboard>
                </li>
                {copy ? (
                  <>
                    <div
                      className={
                        theme ? "containerCopy-night" : "containerCopy-day"
                      }
                    >
                      <p className={theme ? "copyText-night" : "copyText-day"}>
                        !Copiado al portapapeles¡
                      </p>
                    </div>
                  </>
                ) : null}
              </ul>
            </div>

            <footer>
              <p className={theme ? "copy-night" : "copy-day"}>
                ® NICO SCHÖNFELD. Todos los derechos reservados.
              </p>
            </footer>
          </motion.div>
        </main>
      </Layout>
    </>
  );
}
