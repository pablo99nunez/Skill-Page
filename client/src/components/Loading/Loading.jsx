import React from "react";
import loading from "../../assets/icons/loading.svg";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      animate={{
        rotateZ: 360,
        transition: {
          repeat: Infinity,
          bounce: 0.1,
          stiffness: 10,
          duration: 1,
        },
      }}
      style={{
        display: "flex",
        alignItems: "center",
        width: "100px",
        margin: "1rem auto",
      }}
    >
      <img
        src={loading}
        alt="loading"
        style={{
          width: "100%",
          filter:
            "invert(86%) sepia(65%) saturate(499%) hue-rotate(6deg) brightness(79%) contrast(96%)",
        }}
      />
    </motion.div>
  );
}
