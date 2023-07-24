import React, { useContext } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'
import Stack from 'react-bootstrap/stack';
import CartItem from './CartItem';
import { ItemProvideContext } from './ContextApi/ItemProvider';

const Cart = (props) => {

    const cartCtx = useContext(ItemProvideContext);


    const myStyle = {
        width: '34rem',
    }

    return (
        <Offcanvas className='mt-5 close-Button' style={myStyle} show={true} placement='end '>
            <Offcanvas.Header ></Offcanvas.Header>
            <button
                type="button"
                className="btn-close"

                onClick={props.cartHandler}
                style={{
                    marginLeft: '30rem',
                    marginTop: "-1rem",
                    border: '1px solid red',
                    color: 'red'
                }}
            ></button>

            <Offcanvas.Title style={{
                marginLeft: '3rem',
                marginTop: "-1rem",
                fontSize: '2rem',
                color: 'black'
            }}>𝓬𝓪𝓻𝓽𝓼</Offcanvas.Title>

            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartCtx.items.map((product) => (
                        <CartItem
                            key={product.id}
                            product={product}
                            imageUrl={product.imageUrl}
                            removeCart={cartCtx.removeCart}
                        />
                    ))
                    }
                    <div className=' card ms-auto fw-bold fs-5'>
                        <button type="button" class="btn btn-outline-info" >
                           <h4> Total :  $ {cartCtx.totalAmount} </h4>
                        </button>
                        
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>


    )
}

export default Cart;
