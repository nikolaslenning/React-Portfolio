import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
    // console.log(props)
    return (
        <div className="container-fluid ml-0 pl-0">
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="nav-name">
                    <Link to="/"><h1 className="h1">Nikolas Lenning</h1></Link>
                    <h4>Full Stack Developer</h4>
                </div>
                <button className="navbar-toggler ml-auto " type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto float-right">
                        <Link className="nav-item nav-link active" to="/"><i className="fas fa-user-ninja" id="ninja" ></i>  About</Link>
                        <Link className="nav-item nav-link passive" to="/portfolio"><i className="fas fa-briefcase" id="briefcase"></i>  Portfolio</Link>
                        <Link className="nav-item nav-link passive" to="/skills"><i className="fas fa-laptop-code" id="laptop"></i>  Skills<span className="sr-only">(current)</span></Link>
                        <Link className="nav-item nav-link passive" to="./images/resume.pdf"><i className="fas fa-file-alt" id="file"></i>  Resume</Link>
                    </div>
                </div>
            </nav> */}
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>
                    <Link to="/"><h1 className="h1">Nikolas Lenning</h1></Link>
                    <h4>Full Stack Developer</h4>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ml-auto float-right">
                        <Nav.Link className="nav-item nav-link active" href="/"><i className="fas fa-user-ninja" id="ninja" ></i>  About</Nav.Link>
                        <Nav.Link className="nav-item nav-link passive" href="/portfolio"><i className="fas fa-briefcase" id="briefcase"></i>  Portfolio</Nav.Link>
                        <Nav.Link className="nav-item nav-link passive" href="/skills"><i className="fas fa-laptop-code" id="laptop"></i>  Skills<span className="sr-only">(current)</span></Nav.Link>
                        <Nav.Link className="nav-item nav-link passive" href="./images/resume.pdf"><i className="fas fa-file-alt" id="file"></i>  Resume</Nav.Link>
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link> */}
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header; 