import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";

function Header() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>LFG</h3>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">New Games</a>
        <a href="/#">Classics</a>
        <a href="/#">About Us</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn nav-close-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Header;
