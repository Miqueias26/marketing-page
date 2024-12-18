import "./header.css";
import { NavbarDesktop, NavbarMobile } from "./navbar/navbar";

function Header() {
  return (
    <div className="navbar">
      <NavbarDesktop />

      <div className="mobile">
        <NavbarMobile />;
      </div>
    </div>
  );
}

export default Header;
