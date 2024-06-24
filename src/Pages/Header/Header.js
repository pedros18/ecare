import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import logo from '../../Images/logo.png';

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <Navbar style={{ backgroundColor: '#2f8092' }} variant="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src={logo} alt="Logo" className="logo img-fluid" style={{ width: '80px', marginBottom: '20px' }} /> {/* Adjust the width as needed */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto fs-5 fw-bold">
            <Nav.Link as={NavLink} to="/" activeClassName="active" exact>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" activeClassName="active">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services" activeClassName="active">
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to="/appointment" activeClassName="active">
              Appointment
            </Nav.Link>
            <Nav.Link as={NavLink} to="/addpatient" activeClassName="active">
              Add Patient
            </Nav.Link>
          </Nav>
          <Navbar.Text className="fs-5 fw-bold">
            {user && user.email ? (
              <div>
                <i className="fas fa-user"></i> {user.displayName || 'User'}
                <button onClick={logOut} className="btn btn-secondary text-center ms-2">
                  <i className="fas fa-sign-out-alt mx-auto"></i>
                </button>
              </div>
            ) : (
              <Nav.Link as={NavLink} to="/login" activeClassName="active">
                <i className="fas fa-sign-in-alt me-2"></i>
                Login
              </Nav.Link>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
