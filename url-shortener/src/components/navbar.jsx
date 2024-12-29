import React, { useState } from "react";
import logo from "../assets/logo.svg";
import menu from "../assets/menu-outline.svg";

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const handleNavbar = () => {
    setNavbar((prevState) => !prevState);
  };

  return (
    <nav className="relative flex items-center justify-between gap-8 lg:static">
      <a href="#">
        <img src={logo} alt="shotly logo" />
      </a>
      <div
        id="desktopNav"
        className="hidden lg:visible lg:flex lg:w-full lg:justify-between"
      >
        <div className="flex justify-start gap-10">
          <ul className="flex items-center justify-evenly gap-8 text-sm font-bold text-neutral_grayish_violet">
            <li className="hover:text-neutral_very_dark_blue">
              <a href="#">Features</a>
            </li>
            <li className="hover:text-neutral_very_dark_blue">
              <a href="#">Pricing</a>
            </li>
            <li className="hover:text-neutral_very_dark_blue">
              <a href="#">Resources</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-8">
          <a
            href="#"
            className="text-sm font-bold text-neutral_grayish_violet hover:text-neutral_very_dark_blue"
          >
            Login
          </a>
          <button
            type="button"
            className="rounded-full bg-primary_cyan px-6 py-2 text-sm font-bold text-white hover:bg-opacity-60"
          >
            Sign Up
          </button>
        </div>
      </div>
      <div id="mobileNav" className="visible lg:hidden">
        <button type="button" onClick={handleNavbar}>
          <img src={menu} alt="menu icon" className="h-[38px] w-[38px]" />
        </button>
        <div
          className={`${
            navbar
              ? "absolute left-0 w-full place-content-center rounded-lg bg-primary_dark_violet px-6"
              : "hidden"
          }`}
        >
          <div className="mt-6">
            <ul className="grid gap-4 text-center text-sm font-bold text-white">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
            </ul>
          </div>
          <hr className="my-4 border-neutral_grayish_violet" />
          <div className="mb-6 flex flex-col gap-4 text-center">
            <a href="#" className="text-center text-sm font-bold text-white">
              Login
            </a>
            <button
              type="button"
              className="w-full rounded-full bg-primary_cyan py-3 text-sm font-bold text-white hover:bg-opacity-60"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
