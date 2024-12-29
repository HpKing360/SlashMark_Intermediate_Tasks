import React from "react";
import logo from "../assets/logo.svg";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";

function Footer() {
  return (
    <div className="bg-neutral_very_dark_violet py-8">
      <div className="container flex flex-col items-center justify-center gap-8 px-3 text-white lg:mx-auto lg:flex-row lg:items-start lg:justify-between lg:px-[6rem]">
        <a href="#">
          <img src={logo} alt="shortly logo" className="contrast-200 invert" />
        </a>
        <div className="flex flex-col gap-14 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
          <div id="features">
            <a href="#" className="font-semibold text-white">
              Features
            </a>
            <ul className="mt-4 grid gap-2 text-xs font-normal text-neutral_grayish_violet">
              <li className="hover:text-primary_cyan">
                <a href="#">Link Shortening</a>
              </li>
              <li className="hover:text-primary_cyan">
                <a href="#">Branded Links</a>
              </li>
              <li className="hover:text-primary_cyan">
                <a href="#">Analytics</a>
              </li>
            </ul>
          </div>

          <div id="resources">
            <a href="#" className="font-semibold text-white">
              Resources
            </a>
            <ul className="mt-4 grid gap-2 text-xs font-normal text-neutral_grayish_violet">
              <li className="hover:text-primary_cyan">
                <a href="#">Blog</a>
              </li>
              <li className="hover:text-primary_cyan">
                <a href="#">Developers</a>
              </li>
              <li className="hover:text-primary_cyan">
                <a href="#">Support</a>
              </li>
            </ul>
          </div>

          <div id="company">
            <a href="#" className="font-semibold text-white">
              Company
            </a>
            <ul className="mt-4 grid gap-2 text-xs font-normal text-neutral_grayish_violet">
              <li className="hover:text-primary_cyan">
                <a href="#">About</a>
              </li>
              <li className="hover:text-primary_cyan">
                <a href="#">Our Team</a>
              </li>
              <li className="hover:text-primary_cyan">
                <a href="#">Careers</a>
              </li>
              <li className="hover:text-primary_cyan">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div id="socialIcons">
            <ul className="flex gap-4">
              <li>
                <a href="#">
                  <img src={facebook} alt="facebook page" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={twitter} alt="twitter page" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={pinterest} alt="pinterest page" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={instagram} alt="instagram page" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
