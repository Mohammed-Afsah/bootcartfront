import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './style.css';
export default function NavbarComponent() {
  const inlineStyles = {
    fontFamily: 'serif',
    fontSize: '23px',
  };


  return (
 
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <span style={inlineStyles}>BOOTCART</span>
          </Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="/" className="me-3">Home</Nav.Link>
            <Nav.Link href="./New" className="me-3">New and Featured</Nav.Link>
            <Nav.Link id="men-link"  class="category-link" data-category="Men's"href="./Men" className="me-3">Men</Nav.Link>
            <Nav.Link  class="category-link" data-category="Women's" href="./Women" className="me-3">Women</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="./sign-in">MyProfile</Nav.Link>
            <Nav.Link href="./Cart">
              Cart <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div id="items-container">

  </div>
    </div>
  );
}
