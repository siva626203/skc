import { Fragment, useEffect,useState } from "react";
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import '../css/form.css'
function Header(){
    return<Fragment>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand><div className="navbar-head">SRI KALISWARI COLLEGE SIVAKASI</div></Navbar.Brand><br/>
        <Navbar.Text><div className="navbar-text">DEPARTMENT OF INFORMATION TECHNOLOGY</div></Navbar.Text>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link style={{paddingLeft: 13, textDecoration: 'none'}} to={'/'}>Home</Link></Nav.Link>
            <Nav.Link><Link style={{paddingLeft: 13, textDecoration: 'none'}} to={'/activitys'}>Activitys</Link></Nav.Link>
            <Nav.Link><Link style={{paddingLeft: 13, textDecoration: 'none'}} to={'/galary'}>Galary</Link></Nav.Link>
            <Nav.Link><Link style={{paddingLeft: 13, textDecoration: 'none'}} to={'/alloncement'}>Alloncements</Link></Nav.Link>
            <Nav.Link><Link style={{paddingLeft: 13, textDecoration: 'none'}} to={'/course'}>Course</Link></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link><Link style={{paddingLeft: 13, textDecoration: 'none'}} to={'/login'}>Login</Link></Nav.Link>
            <Nav.Link eventKey={2}>
              <Link style={{paddingLeft: 13, textDecoration: 'none'}} to={'/register'}>
              Register
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Fragment>
}

export default Header;