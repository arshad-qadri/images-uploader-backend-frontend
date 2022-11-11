import React from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const LoginHeader = () => {
  const location = useLocation();
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <h4 className="text-light">Upload Images</h4>{" "}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link
                to={"/login"}
                className="text-light nav-link fw-bold pb-0"
                style={{
                  borderBottom:
                    location.pathname === "/login" ? "2px solid #fff" : "none",
                }}
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="text-light nav-link fw-bold pb-0"
                style={{
                  borderBottom:
                    location.pathname === "/register"
                      ? "2px solid #fff"
                      : "none",
                }}
              >
                Register
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default LoginHeader;
