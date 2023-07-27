import React, { useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/badge';
import { NavLink } from 'react-router-dom';
import { ItemProvideContext } from '../ContextApi/ItemProvider';


const NavBar = (props) => {

    const cartCtx = useContext(ItemProvideContext);


    return (
        <Navbar className='navbar navbar-expand navbar-dark bg-dark navbar-main' style={{ width: '100%' }}>
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
                    <li className='nav-item'>
                        <NavLink to={'/contact'} className='nav-link active'
                        >CONTACT</NavLink>
                    </li>
                </ul>
                {<button onClick={props.cartHandler} text='white' className=' card  bg-dark '>
                    <button type="button" className="btn btn-outline-info cart_button">
                        <ion-icon style={{ marginLeft: '3px', width: '1.5rem' }} name="cart-outline"></ion-icon>
                        Your Cart
                        <Badge style={{ marginLeft: '5px' }} text="white">{cartCtx.count}</Badge>
                    </button>
                </button>}
            </div>
        </Navbar>
    )
}

export default NavBar;
