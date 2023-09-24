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
      <button
        className="relative w-7 h-7 flex items-center justify-center"
        onClick={toggle}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={state ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 0 }}
          className="w-full h-full bg-red-100 absolute top-0 left-0 rounded-full"
        ></motion.div>

        <motion.span
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 1.2 }}
          className="text-red-400 text-xl z-[1]"
        >
          {state ? <AiFillHeart /> : <AiOutlineHeart />}
        </motion.span>
      </button>
    </div>
  );
};

export default ButtonLike;
