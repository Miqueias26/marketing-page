import "./header.css";
import JMDevs from "../../assets/img/JM Agency-Photoroom.png";
function Header() {
  return (
    <div className="navbar">
<<<<<<< HEAD
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
=======
      <p>Logo</p>
      <ul>
        <li>
          {" "}
          <a href="">Link1s Miqueias</a>
        </li>
        <li>
          {" "}
          <a href="">Link2sMiqueias</a>
        </li>
        <li>
          {" "}
          <a href="">Link3</a>
        </li>
        <li>
          {" "}
          <a href="">Link4</a>
        </li>
        <li>
          {" "}
          <a href="">Link5</a>
        </li>
      </ul>
>>>>>>> 69ef3c60b5b14f82a4ff4da3b368974a21e287b9

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
