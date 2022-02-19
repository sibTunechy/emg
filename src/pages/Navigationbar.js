import React from 'react'
// import {Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Logo from '../logo/LogoMakr-7VVBa6.png';
import {FaBars} from 'react-icons/fa';
import '../components/Navbar.css'
// import { NavList } from '../components/NavList';
// import '../App.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={Logo} alt='logo'/>
            </div>
            <ul className='nav-menu'>
                <li className='nav-item'><a href='/'>Home</a></li>
                <li className='nav-item'><a href='/about'>About</a></li>
                <li className='nav-item'><a href='/contact'>Contact</a></li>
                <li className='nav-item'><a href='/services'>Services</a></li>
            </ul>
            <div className='hamburger'>
                <FaBars size={30} style={{color: '#f8f8f8'}}/>
            </div>

        </div>
    )
}



export default Navbar;
















// function Navigationbar () {
//         const mynavList = NavList.map(({url,title}, index) => {
//             return (
//                 <li key={index}>
//                     <a href={url}>{title}</a>
//                 </li>
//             )
//         })
    
//         return (
//             <nav>
//                 <div className='logo'>
//                     <img  alt='logo' src={logo}/>
//                     <a href='/'></a>
//                 </div>
//                 <ul className='menu-list'>{mynavList}</ul>
    
//             </nav>
//         )
// };



















// function Navigationbar() {
//   return (<>
//         <Navbar collapseOnSelect expand='lg' bg='info' variant='light'>
//             <Container>
//                 <Navbar.Brand href='/'>
//                     <img  alt='logo' src={logo} width='150' height='80' className='d-inline-block align-top'/>{''}                    
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
//                 <Navbar.Collapse id='responsive-navbar-nav' variant='outline-success'>
//                     <Nav className='nav-design'  >
//                             <Nav.Link href='/'>Home</Nav.Link>
//                             <Nav.Link href='/about'>About Us</Nav.Link>
//                             <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
//                             <NavDropdown.Item href='/info'>Information</NavDropdown.Item>
//                             <NavDropdown.Item href='/news'>News</NavDropdown.Item>
//                             </NavDropdown>
//                             <Nav.Link href='/services'>Services</Nav.Link>
//                             <Nav.Link eventKey={2} href='/about'>About</Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//   </>  
//   )
// }