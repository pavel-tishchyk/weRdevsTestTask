import React from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../../images/Logo.png';
import { Navbar, Nav, Image } from 'react-bootstrap';

const Header = ({ history }) => {
  const { location: { pathname } } = history;

  const onSelect = (eventKey) => history.push(eventKey);
  
  return (
    <Navbar 
      collapseOnSelect 
      expand="md"
      fixed="top" 
      bg="white" 
      variant="light"
      role="navigation">
      <Navbar.Brand>
        <Image src={logo} className="brand-logo" alt="logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav justify-content-end" >
        <Nav className="justify-content-end" activeKey={pathname}>
          <Nav.Link eventKey="/" onSelect={onSelect}>
            Home
          </Nav.Link>
          <Nav.Link eventKey="/about" onSelect={onSelect}>
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
