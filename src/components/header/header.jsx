import "./header.css";
function Header() {
  return (
    <div className="navbar">
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

      <ul>
        <li>
          <a href="" className="login">
            Login
          </a>
        </li>
        <li>
          <a href="" className="account">
            Create account
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Header;
