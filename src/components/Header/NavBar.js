import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/button'
import Badge from 'react-bootstrap/badge'


const NavBar = (props) => {
    return (
        <Navbar className='navbar navbar-expand navbar-dark bg-dark'>
            <div className='container'>
                <ul className='navbar-nav' style={{ marginRight: '20rem' }}>
                    <li className='nav-item'>
                        <a href='#home' className='nav-link active'
                        >HOME</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#store' className='nav-link active'
                        >STORE</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' className='nav-link active'
                        >ABOUT</a>
                    </li>
                </ul>
                <button onClick={props.cartOpenHandler} className='border border-info bg-dark'>
                    <a href='#cart'> Your Cart <Badge text="white">0</Badge></a>
                </button>
            </div>
        </Navbar>
    )
}

export default NavBar;
