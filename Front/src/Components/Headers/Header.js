import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Header.css";
function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to={"/"}>
            <Navbar.Brand>Apple Store</Navbar.Brand>
          </LinkContainer>
          <Nav>
            <LinkContainer to={"/Cart"}>
              <Nav.Link href="/cart">
                <i className="fa fa-shopping-cart"></i>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/Profile"}>
              <Nav.Link href="/profile">
                <i className="fa fa-user"></i>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
