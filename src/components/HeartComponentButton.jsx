"use client";

import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { motion } from "framer-motion";

const ButtonLike = () => {
  const [state, setState] = React.useState(false);

  const toggle = () => {
    setState(!state);
  };

  return (
    <div className="w-full flex items-center justify-end px-5">
      <div className={styleDiv} onClick={toggle}>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={state ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 0 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
            delay: 0.1,
          }}
          className={styleCircle}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={
            state ? { opacity: 1, scale: 1.2 } : { opacity: 1, scale: 0 }
          }
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className={styleCircle2}
        ></motion.div>
        <motion.span
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 1.2 }}
          className={styleHeart}
        >
          {state ? <AiFillHeart /> : <AiOutlineHeart />}
        </motion.span>
      </div>
    </div>
  );
};

export default ButtonLike;
