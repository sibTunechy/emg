import React from 'react'
import {Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import logo from '../logo/LogoMakr-7VVBa6.png';

function Navigationbar() {
  return (<>
        <Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
            <Container>
                <Navbar.Brand href='/'>
                    <img  alt='logo' src={logo} width='150' height='80' className='d-inline-block align-top'/>{''}                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav' className='collapse' variant='outline-success'>
                    <Nav className='me-auto' >
                        <div>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/about'>About Us</Nav.Link>
                            <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
                            <NavDropdown.Item href='/info'>Information</NavDropdown.Item>
                            <NavDropdown.Item href='/news'>News</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href='/services'>Services</Nav.Link>
                            <Nav.Link eventKey={2} href='/about'>About</Nav.Link>
                        </div> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  </>  
  )
}

export default Navigationbar;
