// import { Fragment } from 'react';
// import { Link } from 'react-router-dom';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function MainNavigation() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/" exact>
          <Navbar.Brand>Elijah Romer</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <LinkContainer to="/" exact activeClassName="active">
              <Nav.Link>Bio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/work" exact activeClassName="active">
              <Nav.Link>Work</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/resume" exact activeClassName="active">
              <Nav.Link>Resume</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" exact activeClassName="active">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavigation;
