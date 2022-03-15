import React from "react";
import "./Hexagon.scss";

export default function Hexagon({
  color = "var(--color-grey)",
  size = "3rem",
}) {
  return (
    <div
      className="hexagon"
      style={{ "--color": color, color, "--size": size }}
    ></div>
  );
}
