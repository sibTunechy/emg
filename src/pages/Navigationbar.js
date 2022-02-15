import React from 'react'
import {Container, Navbar } from 'react-bootstrap'
import logo from '../logo/LogoMakr-7VVBa6.png';

function Navigationbar() {
  return (<>
        <Navbar bg='light' variant='light'>
            <Container>
                <Navbar.Brand href='/'>
                    <img  alt='logo' src={logo} width='150' height='80' className='d-inline-block align-top'/>{''}
                    
                </Navbar.Brand>
            </Container>
        </Navbar>
  </>  
  )
}

export default Navigationbar;
