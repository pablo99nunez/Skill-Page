import React, { useEffect, useState } from "react";
import Hexagon from "../Hexagon/Hexagon";
import "./Avatar.scss";

export default function Avatar({ color, size, borderSize }) {
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
          src="https://res.cloudinary.com/torre-technologies-co/image/upload/v1647228312/origin/starrgate/users/profile_a0861071518a3a5773df65a4813e8681dbe6a520.jpg"
          alt=""
          style={{ "--size": size, "--borderSize": border }}
        />
      </Hexagon>
    </div>
  );
}
