import React from 'react'
import Stack from 'react-bootstrap/stack';


const CartItem = (props) => {



    return (
        <Stack direction='horizontal' gap={3} className=' card d-flex align-items-center'>
            <img src={props.imageUrl} style={{ width: '125px', height: '75px', objectFit: 'cover', }} />
            <div className='me-auto'>
                <div className='lead' style={{ fontWeight: 'bold' }}>
                    {props.product.title} {" "}
                </div>
            </div>
            <div className='lead' style={{ fontWeight: 'bold', marginRight: '24px' }}>${props.product.price}</div>
            <button type="button" className="btn btn-outline-info lead">{props.product.count}</button>
            <button
                onClick={() => props.removeCart(props.product.id)}
                type="button"
                style={{ marginRight: '6px' }}
                className="btn btn-outline-danger">Remove
            </button>
        </Stack >
    )
}

export default CartItem;



{/* <footer className='navbar navbar-expand '>
<div className='container'>
    <ul className='navbar-nav'>
        <li className='nav-item'  style={myStyle}>
            <span>{product.title}</span>
        </li>
        <li className='nav-item' style={myStyle}>
        <span>${product.price}</span>
        </li>
      
    </ul>
</div>
</footer> */}