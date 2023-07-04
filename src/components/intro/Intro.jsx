import React from "react";
import { easeIn, motion } from "framer-motion";

const Intro = () => {
  return (
    <>
      <motion.div
        className="w-screen h-screen flex items-center justify-center bg-black fixed top-0 left-0 z-[100] origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, delay: 2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="overflow-hidden">
          <motion.h1
            className="text-4xl font-semibold text-white"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{
              duration: 0.25,
              ease: easeIn
            }}
          >
            <motion.span
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.5
              }}
            >
              Holaaaa!!!!!!
            </motion.span>
          </motion.h1>
        </div>
      </motion.div>
    </>
  );
};

export default Intro;
