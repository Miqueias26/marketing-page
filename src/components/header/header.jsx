import "./header.css";
<<<<<<< HEAD
import { NavbarDesktop, NavbarMobile } from "./navbar/navbar";

=======
import JMDevs from "../../assets/img/JM AgencyOF-Photoroom.png";
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
>>>>>>> e5908b02ebefca8792316d1d89858226f56d9130
function Header() {
  const [showNav, setShowNav] = useState(false);

  const handleOpen = () => {
    setShowNav(true);
  };

  const handleCloser = () => {
    setShowNav(false);
  };

  return (
    <div className="navbar">
<<<<<<< HEAD
      <NavbarDesktop />

      <div className="mobile">
        <NavbarMobile />;
=======
      {showNav && (
        <div className="toogle-model">
          <div className="toogle-model-menu">
            <ul>
              <li>
                {" "}
                <a href="">Home</a>
              </li>
              <li>
                {" "}
                <a href="">Services</a>
              </li>
              <li>
                {" "}
                <a href="">Team</a>
              </li>
              <li>
                {" "}
                <a href="">Partners</a>
              </li>
              <li>
                {" "}
                <a href="">About Us</a>
              </li>
            </ul>
            <button onClick={handleCloser} className="toogle-close">
              fechar
            </button>
          </div>
        </div>
      )}
      <div className="logo">
        <img src={JMDevs} alt="JM Devs logo" />
      </div>
      <div className="links-content">
        <ul>
          <li>
            {" "}
            <a href="">Home</a>
          </li>
          <li>
            {" "}
            <a href="">Services</a>
          </li>
          <li>
            {" "}
            <a href="">Team</a>
          </li>
          <li>
            {" "}
            <a href="">Partners</a>
          </li>
          <li>
            {" "}
            <a href="">About Us</a>
          </li>
        </ul>
      </div>

      <div className="user">
        <a href="" className="login">
          Login
        </a>

        <a href="" className="account">
          Beginner
        </a>

        {!showNav && (
          <button href="" className="toogle-menu" onClick={handleOpen}>
            <IoMenuOutline />
          </button>
        )}
>>>>>>> e5908b02ebefca8792316d1d89858226f56d9130
      </div>
    </div>
  );
}

export default Header;
