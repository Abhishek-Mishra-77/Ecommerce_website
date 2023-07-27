import React, { useContext } from 'react';
import { ItemProvideContext } from '../ContextApi/ItemProvider';
import { Link } from 'react-router-dom';



const Merch = () => {


    const cartCtx = useContext(ItemProvideContext);

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



    return (
        <div className='container text-center' style={{ marginTop: '8rem' }}>
            <div>
                <h1 className='mt-5'>𝓜𝓮𝓻𝓬𝓱</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-5" style={{ marginTop: '2rem' }} >
                {productsArr.map((product) => (
                    <div className="col" key={product.id}>
                        <h4>{product.title}</h4>
                        <div className="card" style={{ marginTop: '1rem' }} >
                            <Link to={`/${product.id}`} state={{ product }}>
                                <img
                                    src={product.imageUrl}
                                    className=" card-img-top image"
                                    alt="..." />
                            </Link>
                        </div>

                        <div>
                            <button onClick={() => cartCtx.addCartItem(product)} href="#" style={{
                                marginTop: '20px',
                                float: 'right',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '15px',
                            }} className="btn btn-info btn-primary ">ADD TO CARD</button>

                            <span style={{
                                float: 'left', marginTop: '20px', color: 'black',
                                fontWeight: 'bold',
                                fontSize: '20px'
                            }}>₹{product.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Merch