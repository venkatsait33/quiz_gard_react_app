import React from "react";
import { motion } from "framer-motion";
const Loading = () => {
  const h1 = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-zinc-700 bg-opacity-70 backdrop-filter backdrop-blur-sm">
      <motion.h1
        variants={h1}
        initial="hidden"
        animate="visible"
        className="text-3xl font-medium text-white"
      >
        Loading....
      </motion.h1>
    </div>
  );
};

export default Loading;
