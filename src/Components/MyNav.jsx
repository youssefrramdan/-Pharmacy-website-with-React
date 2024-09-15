import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';
import './MyNav.css';

const MyNav = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <Navbar expand="lg" className="bg-light shadow-sm border-bottom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center text-primary fw-bold">
          <img
            src={logo}
            alt="logo"
            className="me-4"
            style={{ width: '40px', height: '40px' }}
          />
          My Pharmacy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="text-primary px-3 py-2 rounded hover:bg-light">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products" className="text-primary px-3 py-2 rounded hover:bg-light">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="text-primary px-3 py-2 rounded hover:bg-light">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-primary px-3 py-2 rounded hover:bg-light">
              About
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {user ? (
              <>
                <span className="text-primary px-3 py-2">{user.name}</span>
                <Nav.Link onClick={handleLogout} className="btn btn-primary rounded-pill px-4 py-2">
                  Logout
                </Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login" className="btn btn-primary rounded-pill px-4 py-2">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
