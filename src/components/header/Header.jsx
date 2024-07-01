import React, {useState} from "react";
import './header.css';
import { HiOutlineHome, HiOutlineUser, HiOutlineBadgeCheck, HiOutlineClipboardList, HiOutlinePhotograph, HiOutlineMail, HiX, HiOutlineMenu } from "react-icons/hi";
import { useEffect } from "react";
import ToggleSwitch from "../Toggleswitch/toggleswitch";
import { Link } from "react-router-dom";

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      const savedMode = JSON.parse(localStorage.getItem("darkMode"));
      if (savedMode !== null) {
        setDarkMode(savedMode);
      }
    }, []);
  
    useEffect(() => {
      if (darkMode) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
    }, [darkMode]);
//end


    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if(this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });
    
   
    const[Toggle, showMenu] = useState(false);
    const[activeNav, setActiveNav] = useState("#home");

    return(
        <header className="header">
            <nav className="nav container">
                <Link to="/" className="nav__logo">Portfolio</Link>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <Link to="/" onClick={() => setActiveNav("#home")}  className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineHome className="nav__icon"/>Home
                                </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/About" onClick={() => setActiveNav("#about")} 
                            className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineUser className="nav__icon"/>About
                                </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/Skills" onClick={() => setActiveNav("#skills")} 
                            className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineBadgeCheck className="nav__icon"/>Skills
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/Services" onClick={() => setActiveNav("#services")} 
                            className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineClipboardList className="nav__icon"/>Services
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/Projects" onClick={() => setActiveNav("#portfolio")} 
                            className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlinePhotograph className="nav__icon"/>Projects
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/Contact" onClick={() => setActiveNav("#contact")} 
                            className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineMail className="nav__icon"/>Contact
                            </Link>
                        </li>
                        <li className="nav__item" ><ToggleSwitch darkMode={darkMode} setDarkMode={setDarkMode} /></li>
                        
                        
                    </ul>

                    <HiX className="nav__close" onClick={() => showMenu(!Toggle)} />
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <HiOutlineMenu />
                </div>
            </nav>
        </header>
    )
}

export default Header