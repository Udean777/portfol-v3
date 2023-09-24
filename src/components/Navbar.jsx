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
      <div className="navbar justify-evenly backdrop-blur-sm z-50 shadow-sm fixed">
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
                  strokeWidth="2"
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
          <div className="transition-all ease-in-out">
            <img
              onMouseOver={handleHover}
              onMouseOut={handleHoverOut}
              id="image"
              src={images[image]}
              alt="logo"
              className="cursor-pointer hover:scale-105 transition w-10 rounded-full ring-2 ring-yellow-600 ring-offset-2 ring-offset-slate-700"
            />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="font-bold" to="/">
                Projects
              </Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary className="font-bold">About</summary>
                <ul className="p-2 w-32 backdrop-blur-sm bg-base-100/90">
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
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
