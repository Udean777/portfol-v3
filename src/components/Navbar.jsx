import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

function Navbar() {
  return (
    <>
      <div className="navbar justify-evenly backdrop-blur-sm z-50 fixed">
        <div className="navbar-center lg:gap-0 md:gap-96">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40"
            >
              <li>
                <Link
                  className="font-bold"
                  to="https://instagram.com/ssajudn"
                  target="__blank"
                >
                  <FaInstagram size={25} />
                  <p>Instagram</p>
                </Link>
                <Link
                  className="font-bold"
                  to="https://github.com/Udean777"
                  target="__blank"
                >
                  <FaGithub size={25} />
                  <p>Github</p>
                </Link>
                <Link
                  className="font-bold"
                  to="https://www.linkedin.com/in/sajudin-ma-ruf-b9ba01265"
                  target="__blank"
                >
                  <FaLinkedin size={25} />
                  <p>LinkedIn</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-gray-600 ring-offset-slate-700 ring-offset-1 cursor-pointer transition ease-in-out duration-200 hover:scale-105">
              <img id="image" src={"/UDN.png"} alt="logo" />
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="flex flex-row">
              <Link
                className="font-bold"
                to="https://instagram.com/ssajudn"
                target="__blank"
              >
                <FaInstagram size={25} />
              </Link>
              <Link
                className="font-bold"
                to="https://github.com/Udean777"
                target="__blank"
              >
                <FaGithub size={25} />
              </Link>
              <Link
                className="font-bold"
                to="https://www.linkedin.com/in/sajudin-ma-ruf-b9ba01265"
                target="__blank"
              >
                <FaLinkedin size={25} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
