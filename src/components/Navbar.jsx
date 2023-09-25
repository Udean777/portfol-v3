import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [image, setImage] = useState(0);
  const images = ["/UDN.png", "/bocchi.png"];

  const handleHover = () => {
    setImage(image + 1);
    if (image === images.length) {
      setImage(0);
    }
  };

  const handleHoverOut = () => {
    setImage(0);
  };
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
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="font-bold" to="/">
                  Projects
                </Link>
              </li>
              <li>
                <a className="font-bold">About</a>
                <ul className="p-2">
                  <li>
                    <Link className="font-bold" to="/about">
                      About me
                    </Link>
                  </li>
                  <li>
                    <Link className="font-bold" to="/skills">
                      Skills
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-yellow-600 ring-offset-slate-900 ring-offset-2 cursor-pointer transition ease-in-out duration-200 hover:scale-105">
              <img
                onMouseOver={handleHover}
                onMouseOut={handleHoverOut}
                id="image"
                src={images[image]}
                alt="logo"
              />
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="font-bold" to="/">
                Projects
              </Link>
            </li>
            <li>
              <div className="dropdown dropdown-hover dropdown-bottom cursor-pointer">
                <label className="font-bold cursor-pointer">
                  Other Content
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[118px]"
                >
                  <li>
                    <Link className="font-bold" to="/about">
                      About me
                    </Link>
                  </li>
                  <li>
                    <Link className="font-bold" to="/skills">
                      Skills
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
