import React from "react";
import { NavLink, Link } from "react-router-dom";
import SWLogo from "./Assets/Imgs/SWLogo.png";

const NavBar = () => {
  return (
    <header className="bg-black body-font w-full border-b border-scarlet-500">
      <div className="container mx-auto flex flex-nowrap p-5 items-center justify-center md:justify-between md:flex-row">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base">
          <NavLink
            className="mr-5 flex navbar-brand text-xl text-sunglow-300 hover:text-sunglow-400"
            exact
            to="/"
          >
            <img className="w-20 sm:w-16" src={SWLogo}></img>
            <span> Explorer</span>
          </NavLink>
          <NavLink
            className="mr-5 text-sunglow-300 hover:text-sunglow-400"
            to="/films"
          >
            Films
          </NavLink>
          <NavLink
            className="mr-5 text-sunglow-300 hover:text-sunglow-400"
            to="/people"
          >
            People
          </NavLink>
          <NavLink
            className="mr-5 text-sunglow-300 hover:text-sunglow-400"
            to="/planets"
          >
            Planets
          </NavLink>
        </nav>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <a
            href="https://swapi.dev/"
            className="text-xs sm:texd-base bg-gradient-yellow inline-flex items-center border-2 border-white py-1 px-3 rounded text-black mt-4 md:mt-0"
          >
            SWAPI API
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
