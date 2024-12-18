import "./navbar.css";
import Logo from "../../../assets/img/JM AgencyOF-Photoroom.png";
import Logo2 from "../../../assets/img/JM AgencyOF-Photoroom.png";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from "react";

const NavbarDesktop = () => {
  return (
    <div className="container-desktop">
      <div className="logo">
        <img src={Logo} alt="Logo1" />
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
      </div>
    </div>
  );
};

{
  /**START MOBILE LOGICAL */
}

const NavbarMobile = () => {
  const [Nav, setNav] = useState(false);

  const handleOpen = () => {
    setNav(true);
  };

  const handleClose = () => {
    setNav(false);
  };

  return (
    <div className="container-mobile">
      <div className="childen1">
        <img src={Logo2} alt="logo2" className="logo2" />
      </div>
      <div className="logical1">
        {!Nav && (
          <div className="button-open">
            <button
              onClick={handleOpen}
              style={{
                background: "none",
                fontSize: "30px",
                color: "white",
                border: "none",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <CiMenuBurger />
            </button>
          </div>
        )}
      </div>

      {Nav && (
        <div className="logical1">
          <button
            onClick={handleClose}
            style={{
              display: "flex",
              background: "none",
              fontSize: "30px",
              color: "white",
              border: "none",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <IoMdCloseCircleOutline />
          </button>
          <div className="links-father">
            <div className="links-mobile">
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { NavbarDesktop, NavbarMobile };

{
  /** function Header() {
  const [Nav, setNav] = useState(false);

  const handleOpen = () => {
    setNav(true);
  };

  const handleClose = () => {
    setNav(false);
  }; */
}

{
  /**  */
}

{
  /**<ul>
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
          </ul> */
}

{
  /**  */
}

{
  /*<div className="user">
        <a href="" className="login">
          Login
        </a>

        <a href="" className="account">
          Beginner
        </a>
      </div> */
}
