import React, { useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/badge';
import { NavLink } from 'react-router-dom';
import { ItemProvideContext } from '../Cart/ContextApi/ItemProvider';


const NavBar = (props) => {

    const cartCtx = useContext(ItemProvideContext);


    return (
        <Navbar className='navbar navbar-expand navbar-dark bg-dark'>
            <div className='container'>
                <ul className='navbar-nav' style={{ marginRight: '20rem' }}>
                    <li className='nav-item'>
                        <NavLink to={'/home'} className='nav-link active'>HOME</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={'/'} className='nav-link active'
                        >STORE</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={'/about'} className='nav-link active'
                        >ABOUT</NavLink>
                    </li>
                </ul>
                <button onClick={props.cartHandler} text='white' className=' card  bg-dark'>
                    <button type="button" class="btn btn-outline-info">
                        <ion-icon style={{ marginLeft: '3px', width: '1.5rem' }} name="cart-outline"></ion-icon>
                        Your Cart
                        <Badge style={{ marginLeft: '5px' }} text="white">{cartCtx.count}</Badge>
                    </button>
                </button>
            </div>
        </Navbar>
    )
}

export default NavBar;
