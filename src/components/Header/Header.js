import React from "react";
import { Jumbotron, Container, Nav, Navbar, NavItem, NavLink } from "reactstrap";

export const Header = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Image Carousel</h1>
        </Container>
      </Jumbotron>
      <Navbar color="light" light expand="md">
        <Nav navbar>
          <NavItem>
            <NavLink href="/with-libraries">With Libraries</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/without-libraries">Without Libraries</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};
