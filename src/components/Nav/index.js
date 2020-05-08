import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Portfolio
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                window.location.pathname === "/projects"
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/projects"
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                window.location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
