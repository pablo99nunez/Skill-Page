import React from "react";
import "./Hexagon.scss";

export default function Hexagon({
  color = "var(--color-grey)",
  size = "3rem",
  children,
}) {
  return (
    <div
      className="hexagon"
      style={{ "--color": color, color, "--size": size }}
    >
      {children}
    </div>
  );
}
