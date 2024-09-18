"use client";
import { motion } from "framer-motion";

// Flipping text animation for the title
const RouteTitle = ({ firstP, secondP }) => {
  const titleVariants = {
    hidden: { opacity: 0, rotateX: 90 },
    visible: {
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        duration: 2,
      },
    },
  };

  return (
    <div>
      <motion.h2
        className="text-2xl md:text-4xl font-semibold text-title"
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        {firstP} <span className="text-primaryColor">{secondP}</span>
      </motion.h2>
    </div>
  );
};

export default RouteTitle;
