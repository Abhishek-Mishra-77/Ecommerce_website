import React, { useContext } from 'react'
import { Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import { ItemProvideContext } from '../ContextApi/ItemProvider';


const NavBar = (props) => {

    const cartCtx = useContext(ItemProvideContext);


    return (
        <header className='navbar'>
            <nav>
                <ul>
                    <li className='logo1'>
                        <h2> <NavLink to={'/'}> 𝕆𝕡𝕥𝕚𝕔𝕒𝕝 𝕊𝕞𝕒𝕣𝕥</NavLink></h2>
                    </li>
                    <li>
                        <NavLink to={'/'}>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/store'}>COLLECTIONS</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about'}>ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/contact'}>CONTACT</NavLink>
                    </li>
                    <li>
                        <NavLink to='/auth'>LOGIN / SIGN UP</NavLink>
                    </li>
                </ul>
            </nav>
            <button
                onClick={props.cartHandler}
                type="button"
                className="btn btn-outline-info">
                <ion-icon name="cart-outline"></ion-icon>
                Your Cart
                <Badge>{cartCtx.count}</Badge>
            </button>
        </header >
    )
}

export default NavBar;
