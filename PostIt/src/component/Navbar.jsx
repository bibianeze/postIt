import { useState } from "react";
import "../style/Navbar.css";
import Postit from "../assets/Postit.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light navv">
        <div className="container">
          <div className="postit">
            <div className="navbar-brand mr-auto">
              <img src={Postit} alt="" />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNavbar}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className={`collapse navbar-collapse justify-content-end  ${
              isOpen ? "show" : ""
            } `}
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link  text-dark" href="#home">
                  Stories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#about">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-dark" href="#services">
                  Sign In
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-dark  " href="#contact">
                  <button className="buttonnav border-0 rounded-lg w-10"> Get Started</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
