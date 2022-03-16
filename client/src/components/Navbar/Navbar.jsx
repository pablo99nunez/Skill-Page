import React, { useState } from "react";
import "./Navbar.scss";
import menuIco from "../../assets/icons/menu.svg";
import searchIco from "../../assets/icons/search.svg";
import Button from "../Button/Button";
import Hexagon from "../Hexagon/Hexagon";
import Search from "../Search/Search";

export default function Navbar() {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <nav className="navbar">
      <div>
        <img src={menuIco} alt="Menú" />
        <h2>
          torre<span>.co</span>
        </h2>
      </div>
      <div>
        <img
          src={searchIco}
          alt="Search"
          onClick={() => setOpenSearch(!openSearch)}
        />
        <Button>Sign In</Button>
        {openSearch && <Search />}
      </div>
    </nav>
  );
}
