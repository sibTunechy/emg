import React from 'react';
import logo from '../logo/LogoMakr-7VVBa6.png';
import { MenuList } from '../components/MenuList';

const Navbar = () => {
    const menuList = MenuList.map(({url,title}) => {
        return (
            <li>
                <a href={url}>{title}</a>
            </li>
        )
    })

    return (
        <nav>
            <div className='logo'>
                <img  alt='logo' src={logo}/>
                <a href='/'></a>
            </div>
            <ul className='menu-list'>

            </ul>

        </nav>
    )
};


export default Navbar;