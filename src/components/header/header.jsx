import "./header.css";
import JMDevs from "../../assets/img/JM AgencyOF-Photoroom.png";
function Header() {
  return (
    <div className="navbar">
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
      </div>
    </div>
  );
}
export default Header;
