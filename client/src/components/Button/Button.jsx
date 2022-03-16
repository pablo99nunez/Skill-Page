import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./Button.scss";

export default function Button(props) {
  const {
    children,
    color = "var(--color-primary)",
    backgroundColor = "var(--color-dark-bg)",
  } = props;

  return (
    <motion.button
      initial={{ backgroundColor }}
      whileHover={{
        scale: 1.05,
        backgroundColor: "var(--color)",
        color: "var(--backColor)",
      }}
      whileTap={{ scale: 1.03 }}
      style={{
        "--color": color,
        "--backColor": backgroundColor,
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
