import React, { useContext } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Stack } from 'react-bootstrap';
import CartItem from './CartItem';
import { ItemProvideContext } from '../ContextApi/ItemProvider';
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router-dom';


const Cart = (props) => {

    const cartCtx = useContext(ItemProvideContext);
    const navigate = useNavigate();

    const myStyle = {
        width: '34rem',
    }


    const onToken = (token) => {
        navigate("/paymentdone")
        props.cartHandler();
        localStorage.setItem("paymentInfo", JSON.stringify(token))
    }
    return (
        <Offcanvas className='mt-5 close-Button' style={myStyle} show={true} placement='end '>
            <Offcanvas.Header ></Offcanvas.Header>
            <button
                type="button"
                className="btn-close"

                onClick={props.cartHandler }
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
                    <div className='card fw-bold fs-5 mt-4'>
                        <button type="button" className="btn btn-outline-info" >
                            <h4> Total :  ₹ {cartCtx?.totalAmount} </h4>
                        </button>
                        <StripeCheckout
                            description={"Payment Done"}
                            image="https://www.compliancesigns.com/media/catalog/product/p/a/payment-policies-sign-nhe-17964_1000.gif"
                            ComponentClass="div"
                            currency="INR"
                            amount={cartCtx?.totalAmount}
                            allowRememberMe
                            token={onToken}
                            shippingAddress
                            billingAddress={false}
                            stripeKey="pk_test_51OKItmSIeTa6z5FVc03TQk2ilyBGtK9EYPds8a3rq2SEFpQ0kRS7BwoL4BQn69OF86a2XkULaReKTlsE1PrLJwqq007edzU8ao"
                        >
                            <button type="button" className="btn btn-outline-info mt-4" style={{ width: "100%" }} >
                                <h4> PROCEED TO CHECKOUT </h4>
                            </button>
                        </StripeCheckout>

                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>


    )
}

export default Cart;
