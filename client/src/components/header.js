import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";

function Header() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="header">
      <img className="header-image" src="./lfg.png" alt="picture"/>
      {/* <nav ref={navRef}> */}
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          {/* <FaTimes />
        </button>
      </nav>
      <button className="nav-btn nav-close-btn" onClick={showNavBar}>
        <FaBars /> */}
      </button>
    </header>
  );
}

export default Header;
