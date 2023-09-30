import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 backdrop-blur-sm bottom-0 fixed z-50">
      <aside>
        <p>
          KopiKanan © 2023 - This website made by{" "}
          <Link
            className="font-bold hover:scale-105 transition"
            to="https://github.com/Udean777"
          >
            Udean
          </Link>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
