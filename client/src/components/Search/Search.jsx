import React, { useState } from "react";
import Button from "../Button/Button";
import "./Search.scss";

export default function Search() {
  const [value, setValue] = useState("");
  return (
    <div className="search">
      <input
        type="text"
        value={value}
        onChange={setValue}
        placeholder="Ir a usuario..."
      />
      <Button>Ir</Button>
    </div>
  );
}
