'use client'
import "./Navbar.scss";
import Link from "next/link";
// import Image from "next/image";
// import logo from "/public/logo/logo-1.png";
const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="navbar"
    >
      <div className="container-fluid ">
        <Link
          style={{ color: "#171717" }}
          className="logo"
          href={"/"}
        >
          soft
          <span className="fw-bold">inn</span>
        </Link>
        <div id="navbarNavDropdown">
          <ul className="navbar-nav d-none">
            <li className="nav-item ">Home</li>
            <li className="nav-item ">Pricing</li>
            <li className="nav-item ">Features</li>
            <li className="nav-item ">About us</li>
          </ul>
          <Link
            className="btn-black-hover-blck btn-primary btn-outline btn "
            href={"/login"}
          >
            LOGIN
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
