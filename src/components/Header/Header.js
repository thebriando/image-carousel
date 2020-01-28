import React from "react";
import { Jumbotron, Container, Nav, Navbar, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <div>
      <Jumbotron className="header-jumbotron" fluid>
        <Container fluid>
          <h1>Image Carousel</h1>
        </Container>
      </Jumbotron>
      <Navbar className="header-navbar" color="light" light expand="md">
        <Nav navbar>
          <NavItem>
            <Link to="/with-libraries" className="nav-link">
              With Libraries
            </Link>
          </NavItem>
          <NavItem>
            <Link to="without-libraries" className="nav-link">
              Without Libraries
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};
