import React, { useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavMenu from "../NavMenu/NavMenu";
import resume from "../../assets/resume.pdf"
import  menuIcon  from "../../assets/menuIcon.png";
import "./Header.css";

function Header() {
    const { closeMenu } = useContext(MenuContext);
    const { toggleMenu } = useContext(MenuContext);
    // console.log(props)
    return (
        <div className="container-fluid ml-0 pl-0">

            <Navbar bg="light" expand="lg">
                <Navbar.Brand>
                    <Link to="/about"><h1 className="nameLink">Nikolas Lenning</h1></Link>
                    <h4>Full Stack Developer</h4>
                </Navbar.Brand>
                {/* <NavMenu/> */}
                {/* 
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"> */}
                <button onClick={toggleMenu} className="primary-button ml-auto float-right">
                <img id="menuIcon" alt="menuIcon" src={menuIcon}></img>
            </button>
                {/* <Nav onclick={closeMenu} className=" ml-auto float-right">
                    <Nav.Link className={window.location.pathname === '/about' ? "nav-item nav-link active" : "nav-item nav-link"} href="/about"><i className="fas fa-user-ninja" id="ninja" ></i>  About</Nav.Link>
                    <Nav.Link className={window.location.pathname === '/portfolio' ? "nav-item nav-link active" : "nav-item nav-link"} href="/portfolio"><i className="fas fa-briefcase" id="briefcase"></i>  Portfolio</Nav.Link>
                    <Nav.Link className={window.location.pathname === '/skills' ? "nav-item nav-link active" : "nav-item nav-link"} href="/skills"><i className="fas fa-laptop-code" id="laptop"></i>  Skills<span className="sr-only">(current)</span></Nav.Link>
                    <Nav.Link className="nav-item nav-link" href={resume}><i className="fas fa-file-alt" id="file"></i>  Resume</Nav.Link>
                </Nav> */}

                {/* </Navbar.Collapse> */}
            </Navbar>
        </div>
    )
}

export default Header; 