import React, { useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import menuIcon from "../../assets/menuIcon.png";
import "./Header.css";

function Header() {
    const { toggleMenu } = useContext(MenuContext);
  
    return (
        <div className="headerDIV container-fluid ml-0 pl-0 pr-0">

            <Navbar  expand="lg">
                <Navbar.Brand>
                    <Link to="/about"><h1 className="nameLink">Nikolas Lenning</h1></Link>
                    <h4 className="text-muted headerTitle">Full Stack Developer</h4>
                </Navbar.Brand>
               
                <button onClick={toggleMenu} className="menuButton ml-auto float-right">
                    <img id="menuIcon" alt="menuIcon" src={menuIcon}></img>
                </button>
                
            </Navbar>
        </div>
    )
}

export default Header; 