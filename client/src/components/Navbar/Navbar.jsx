import React from "react";
import "./Navbar.scss";
import menuIco from "../../assets/icons/menu.svg";
import searchIco from "../../assets/icons/search.svg";
import Button from "../Button/Button";
import Hexagon from "../Hexagon/Hexagon";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <img src={menuIco} alt="Menú" />
        <h2>
          torre<span>.co</span>
        </h2>
      </div>
      <div>
        <img src={searchIco} alt="Search" />
        <Button>Sign In</Button>
      </div>
    </nav>
  );
}
