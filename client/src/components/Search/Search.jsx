import React, { useState } from "react";
import Button from "../Button/Button";
import "./Search.scss";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Search({ open, setOpen }) {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${value}`);
    setOpen(false);
  };
  return open ? (
    <motion.form
      className="search"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Ir a usuario..."
        />
        <Button>Ir</Button>
      </div>
    </motion.form>
  ) : null;
}
