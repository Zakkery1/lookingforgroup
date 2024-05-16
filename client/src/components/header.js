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
      <img src="../public/LFG.png" alt=""></img>
      <nav ref={navRef}>
        
       
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
