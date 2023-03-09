import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg="light"  className="navbar navbar-expand-sm bg-dark navbar-dark" fixed="top" varient="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Pro Shop</Navbar.Brand>  
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex ms-auto order-5">
              <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i>
                Cart</Nav.Link>
              <Nav.Link href="/login"><i class="fa-solid fa-user"></i>
                Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header