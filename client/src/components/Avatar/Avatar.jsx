import React, { useEffect, useState } from "react";
import Hexagon from "../Hexagon/Hexagon";
import "./Avatar.scss";

export default function Avatar({ color, size, borderSize, src }) {
  const [border, setBorder] = useState(borderSize);
  useEffect(() => {
    if (borderSize == null) {
      const numberOnSize = size.match(/\d/g).join("");
      const unitOfSize = size.replace(numberOnSize, "");
      setBorder(numberOnSize * 0.1 + unitOfSize);
    }
    console.log(borderSize, border);
  }, [size]);
  return (
    <div className="avatar">
      <Hexagon color={color} size={size}>
        <img
          src={src}
          alt=""
          style={{ "--size": size, "--borderSize": border }}
        />
      </Hexagon>
    </div>
  );
}
