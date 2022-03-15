import React from "react";
import "./Navbar.scss";
import menuIco from "../../assets/icons/menu.svg";
import searchIco from "../../assets/icons/search.svg";
import Button from "../Button/Button";
import Hexagon from "../Hexagon/Hexagon";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={menuIco} alt="Menú" />
      <h2>torre.co</h2>
      <img src={searchIco} alt="Search" />
      <Button>Sign In</Button>
    </nav>
  );
}
