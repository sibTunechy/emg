import React from 'react'
import {Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from '../logo/LogoMakr-7VVBa6.png';

function Navigationbar() {
  return (<>
        <Navbar collapseOnSelect expand='lg' bg='info' variant='light'>
            <Container>
                <Navbar.Brand href='/'>
                    <img  alt='logo' src={logo} width='150' height='80' className='d-inline-block align-top'/>{''}                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav' variant='outline-success'>
                    <Nav className='nav-design'  >
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/about'>About Us</Nav.Link>
                            <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
                            <NavDropdown.Item href='/info'>Information</NavDropdown.Item>
                            <NavDropdown.Item href='/news'>News</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href='/services'>Services</Nav.Link>
                            <Nav.Link eventKey={2} href='/about'>About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  </>  
  )
}

export default Navigationbar;
