import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'
import Stack from 'react-bootstrap/stack';
import CartItem from './CartItem';

const Cart = (props) => {

    const productsArr = [
        {
            title: 'T-Shirt',
            id: 'b1',
            price: 120,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Shirt.png',
        },
        {
            title: 'Tech Cup',
            id: 'b2',
            price: 75,
            imageUrl: 'https://img.freepik.com/free-vector/identity-technology-set_1284-10818.jpg?size=626&ext=jpg&ga=GA1.1.1154292131.1686650814&semt=sph',
        },
        {
            title: 'Vendedor',
            id: 'b3',
            price: 111,
            imageUrl: 'https://img.freepik.com/free-vector/flat-dia-vendedor-illustration-with-employee_23-2149623543.jpg?size=626&ext=jpg&ga=GA1.1.1154292131.1686650814&semt=sph',
        },
        {
            title: 'Blue Color',
            id: 'b4',
            price: 100,
            imageUrl: 'https://img.freepik.com/free-psd/3d-editable-hoodie-mock-up-design_1048-12288.jpg?size=626&ext=jpg&ga=GA1.1.1154292131.1686650814&semt=ais',
        },
        {
            title: 'Cameo T',
            id: 'b5',
            price: 70,
            imageUrl: 'https://img.freepik.com/premium-vector/business-identity-branding-design-corporate-souvenirs-promotional-items-clothing-cup-cap-pen-lighter_80590-7127.jpg?size=626&ext=jpg&ga=GA1.1.1154292131.1686650814&semt=ais',
        },
        {
            title: 'White Black',
            id: 'b6',
            price: 100,
            imageUrl: 'https://img.freepik.com/premium-photo/businessman_38810-5739.jpg?size=626&ext=jpg',
        }
    ]


    const myStyle = {
        width: '34rem',
    }

    return (
        <Offcanvas className='mt-5 close-Button' style={myStyle} show={true} placement='end '>
            <Offcanvas.Header closeBUtton></Offcanvas.Header>
            <button
                type="button"
                class="btn-close"

                onClick={props.cartCloseHandler}
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
                    {productsArr.map((product) => (
                        <CartItem key={product.id} product={product} />
                    ))
                    }

                </Stack>
            </Offcanvas.Body>

        </Offcanvas>


    )
}

export default Cart;
