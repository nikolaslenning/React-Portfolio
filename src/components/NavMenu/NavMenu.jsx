import React, { useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import resume from "../../assets/resume.pdf"


function NavMenu() {
    const { closeMenu } = useContext(MenuContext);
    const { toggleMenu } = useContext(MenuContext);

    return (
        <div className="NavMenu-Location" onClick={closeMenu}>
            {/* <Nav className=" ml-auto float-right"> */}
            <Nav.Link className={window.location.pathname === '/about' ? "nav-item nav-link active" : "nav-item nav-link"} href="/about"><i className="fas fa-user-ninja" id="ninja" ></i>  About</Nav.Link>
            <Nav.Link className={window.location.pathname === '/portfolio' ? "nav-item nav-link active" : "nav-item nav-link"} href="/portfolio"><i className="fas fa-briefcase" id="briefcase"></i>  Portfolio</Nav.Link>
            <Nav.Link className={window.location.pathname === '/skills' ? "nav-item nav-link active" : "nav-item nav-link"} href="/skills"><i className="fas fa-laptop-code" id="laptop"></i>  Skills<span className="sr-only">(current)</span></Nav.Link>
            <Nav.Link rel="noreferrer" target="_blank" className="nav-item nav-link" href={resume}><i className="fas fa-file-alt" id="file"></i>  Resume</Nav.Link>
            <Nav.Link rel="noreferrer" target="blank" className="nav-item nav-link" href="https://github.com/nikolaslenning"><i className="fab fa-github" id="github"></i>  GitHub</Nav.Link>
            <Nav.Link rel="noreferrer" target="_blank" className="nav-item nav-link" href="https://www.linkedin.com/in/nikolas-lenning-8908311b0/"><i className="fab fa-linkedin" id="linkedIn"></i>  LinkedIn</Nav.Link>
            <Nav.Link className="nav-item nav-link" href="mailto:nikolaslenning@gmail.com?subject = Feedback&body = Message"><i className="fas fa-envelope" id="email"></i>  Email</Nav.Link>
            {/* </Nav> */}
            <hr />
            <Nav.Link onClick={closeMenu} className="nav-item nav-link">
                <i className="far fa-window-close" id="close"></i>  Close Menu
            </Nav.Link>
        </div>
    )

}

export default NavMenu;