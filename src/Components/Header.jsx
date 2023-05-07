import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/gardion.svg";
import { IoSettingsOutline } from "react-icons/io5";

export const Header = ({ active, setActive }) => {
  return (
    <header className="c-header">
      <Link to="/">
        <img src={Logo} alt="Gardion" />
      </Link>

      <nav className="nav">
        <button 
          type="button" 
          onClick={() => setActive((prev) => !prev)}
          title="menu"
        >
          <IoSettingsOutline />
        </button>
      </nav>
    </header>
  );
};
