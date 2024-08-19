import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import { Link, ScrollLink } from "react-scroll";
import menu_icon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? `` : `hide-mobile-menu`}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>

        <li>
          <Link to="gallery" smooth={true} offset={-260} duration={500}>
            Legendary Moments
          </Link>
        </li>
        <li>
          <Link to="BadPicture" smooth={true} offset={-260} duration={500}>
            Bad Pic
          </Link>
        </li>
        <li>
          <Link to="PhotoGallery" smooth={true} offset={-260} duration={500}>
            Photo Gallery
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-260} duration={500}>
            Contact Barney
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
