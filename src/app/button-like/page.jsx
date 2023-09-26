"use client";

import HeaderSection from "@/components/HeaderSection";
import ButtonLike from "@/components/HeartComponentButton";
import UserComponent from "@/components/UserComponent";
import {
  Button,
  Card,
  CardBody,
  ScrollShadow,
  Tooltip,
  Snippet,
  Code,
  Divider,
} from "@nextui-org/react";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { useTheme } from "next-themes";
import NextLink from "next/link";

import { BsArrowLeftShort } from "react-icons/bs";

import { motion, AnimatePresence } from "framer-motion";

import SyntaxHighlighter from "react-syntax-highlighter";

const ButtonLikeComp = () => {
  const { theme, setTheme } = useTheme();

  const code = `<section className="container mx-auto max-w-3xl w-full felx items-center flex-col  h-auto">
  <ScrollShadow
    hideScrollBar
    className={'w-full h-screen space-y-5 py-10 px-10 ${theme}'}
  >
    <Card className="w-full text-sm md:text-base">
      <CardBody className="space-y-5">
        <Tooltip content="Volver" placement="right">
          <Button
            as={NextLink}
            href="/"
            isIconOnly
            className="text-3xl"
            variant="light"
            color="primary"
          >
            <BsArrowLeftShort />
          </Button>
        </Tooltip>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <UserComponent />
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-xl md:text-2xl font-bold"
        >
          botón de Like
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Aprende a hacer un botón de like animado con React.js, Tailwind
          CSS y Framer Motion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="w-full h-80 px-5 py-10 border dark:border-white/50 rounded-md flex items-center justify-center transition-all cursor-pointer"
        >
          <div className="relative w-20 h-20 flex items-center justify-center">
            <div className="bg-gray-400/20 dark:bg-gray-100/20 w-full h-full rounded-full absolute"></div>
            <div className="bg-gray-400/20 dark:bg-gray-100/20 w-16 h-16 rounded-full absolute"></div>
            <AiFillHeart className="text-gray-500 dark:text-gray-100 text-4xl z-[1]" />
          </div>
        </motion.div>

        <Divider className="my-5" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p>
            Para hacer este botón de like necesitamos crear un proyecto en
            react.
          </p>

          <div className="w-full flex items-start flex-col justify-center gap-5 px-5 py-5">
            <div className="w-full">
              <p className="text-sm mb-2 ps-3">Vite</p>
              <Snippet className="w-full">npm create vite</Snippet>
            </div>

            <div className="w-full">
              <p className="text-sm mb-2 ps-3">Next.js</p>
              <Snippet className="w-full">
                npx create-next-app@latest .
              </Snippet>
            </div>
          </div>

          <Divider className="my-5" />

          <p>
            Lo siguiente que tenemos que hacer es intalar las librerias{" "}
            <Code>react-icons</Code> para añadir iconos a React y{" "}
            <Code>framer-motion</Code> para añadir animaciones.
          </p>

          <div className="w-full flex items-start flex-col justify-center gap-5 px-5 py-5">
            <div className="w-full">
              <p className="text-sm mb-2 ps-3">React Icons</p>
              <Snippet className="w-full">npm i react-icons</Snippet>
            </div>

            <div className="w-full">
              <p className="text-sm mb-2 ps-3">Framer Motion</p>
              <Snippet className="w-full">npm i framer-motion</Snippet>
            </div>
          </div>

          <Divider className="my-5" />

          <p>
            Para hacer este botón de like necesitamos crear un proyecto en
            react.
          </p>

          <div className="w-full flex items-start flex-col justify-center gap-5 px-5 py-5">
            <div className="w-full">
              <p className="text-sm mb-2 ps-3">Next.js</p>
              <SyntaxHighlighter
                language="javascript"
                customStyle={{ background: "transparent", color: "white" }}
                className={'scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent'}
              >
                {children}
              </SyntaxHighlighter>
            </div>
          </div>

          <Divider className="my-5" />
        </motion.div>

        {/*  <ButtonLike /> */}
      </CardBody>
    </Card>
  </ScrollShadow>
</section>`;

  return (
    <section className="container mx-auto max-w-3xl w-full felx items-center flex-col  h-auto">
      <ScrollShadow
        hideScrollBar
        className={`w-full h-screen space-y-5 py-10 px-10 ${theme}`}
      >
        <Card className="w-full text-sm md:text-base">
          <CardBody className="space-y-5">
            <Tooltip content="Volver" placement="right">
              <Button
                as={NextLink}
                href="/"
                isIconOnly
                className="text-3xl"
                variant="light"
                color="primary"
              >
                <BsArrowLeftShort />
              </Button>
            </Tooltip>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <UserComponent />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xl md:text-2xl font-bold"
            >
              botón de Like
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Aprende a hacer un botón de like animado con React.js, Tailwind
              CSS y Framer Motion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="w-full h-80 px-5 py-10 border dark:border-white/50 rounded-md flex items-center justify-center transition-all cursor-pointer"
            >
              <div className="relative w-20 h-20 flex items-center justify-center">
                <div className="bg-gray-400/20 dark:bg-gray-100/20 w-full h-full rounded-full absolute"></div>
                <div className="bg-gray-400/20 dark:bg-gray-100/20 w-16 h-16 rounded-full absolute"></div>
                <AiFillHeart className="text-gray-500 dark:text-gray-100 text-4xl z-[1]" />
              </div>
            </motion.div>

            <Divider className="my-5" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <p>
                Para hacer este botón de like necesitamos crear un proyecto en
                react.
              </p>

              <div className="w-full flex items-start flex-col justify-center gap-5 px-5 py-5">
                <div className="w-full">
                  <p className="text-sm mb-2 ps-3">Vite</p>
                  <Snippet className="w-full">npm create vite</Snippet>
                </div>

                <div className="w-full">
                  <p className="text-sm mb-2 ps-3">Next.js</p>
                  <Snippet className="w-full">
                    npx create-next-app@latest .
                  </Snippet>
                </div>
              </div>

              <p>
                Lo siguiente que tenemos que hacer es intalar las librerias{" "}
                <Code>react-icons</Code> para añadir iconos a React y{" "}
                <Code>framer-motion</Code> para añadir animaciones.
              </p>

              <div className="w-full flex items-start flex-col justify-center gap-5 px-5 py-5">
                <div className="w-full">
                  <p className="text-sm mb-2 ps-3">React Icons</p>
                  <Snippet className="w-full">npm i react-icons</Snippet>
                </div>

                <div className="w-full">
                  <p className="text-sm mb-2 ps-3">Framer Motion</p>
                  <Snippet className="w-full">npm i framer-motion</Snippet>
                </div>
              </div>

              <p>
                Para hacer este botón de like necesitamos crear un proyecto en
                react.
              </p>

              <div className="w-full flex items-start flex-col justify-center gap-5 px-5 py-5">
                <div className="w-full">
                  <p className="text-sm mb-2 ps-3">Next.js</p>
                  <Snippet className="w-full">npm i framer-motion</Snippet>
                </div>
              </div>
            </motion.div>

            {/*  <ButtonLike /> */}
          </CardBody>
        </Card>
      </ScrollShadow>
    </section>
  );
};

export default ButtonLikeComp;
