import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logoutButton";
import LoginButton from "./loginButton";

function Header() {
  const navRef = useRef();
  const { isAuthenticated } = useAuth0();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="header">
      <div className="logo">
        <img
          className="header-image"
          src="./lfg-high-resolution-logo-transparent copy.png"
          alt="picture"
        />
      </div>
      <div className="login-header">
        {/* if isAuthenticated is truthy return logout else return login */}
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
      <nav ref={navRef}>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          / <FaTimes />
        </button>
      </nav>
      <button className="nav-btn nav-close-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Header;
