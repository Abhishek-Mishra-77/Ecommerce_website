import React, { useContext } from 'react';
import { ItemProvideContext } from '../ContextApi/ItemProvider';
import { Link } from 'react-router-dom';
const Ladies = () => {

    const cartCtx = useContext(ItemProvideContext);


    const productsArr = [
        {
            title: 'Vincent Chase Polarized',
            id: 'w1',
            price: 799,
            imageUrl: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/black-blue-full-rim-geometric-vincent-chase-style-cast-pc-vc-s13833-c1-sunglasses_vincent-chase-vc-s13833-c1-suglasses_suglasses_g_6179_28july23.jpg',
        },
        {
            title: 'John Jocab',
            id: 'w2',
            price: 999,
            imageUrl: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/john-jacobs-jj-e16146-c4-eyeglasses_img_0196_26_10_2023.jpg',
        },
        {
            title: 'Ultra Max',
            id: 'w3',
            price: 699,
            imageUrl: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/grey-transparent-silver-full-rim-square-john-jacobs-tr-flex-jj-e14414-c1-eyeglasses_g_7414_04_25_23.jpg',
        },
        {
            title: 'MEGA VISION',
            price: 599,
            id: 'w4',
            imageUrl: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/grey-transparent-silver-full-rim-square-john-jacobs-tr-flex-jj-e14414-c1-eyeglasses_g_7414_04_25_23.jpg',
        },
        {
            title: 'Sport Look',
            id: 'w5',
            price: 299,
            imageUrl: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/grey-transparent-silver-full-rim-square-john-jacobs-tr-flex-jj-e14414-c1-eyeglasses_g_7414_04_25_23.jpg',
        },
        {
            title: 'Biloculors',
            id: 'w6',
            price: 489,
            imageUrl: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//h/i/kids-glasses:-blue-brown-transparent-full-rim-round-8-12-yrs-hooper-poppin-2-0-hp-e10108l-c7_g_5880_22_03_2023.jpg',
        },
       
    ]


    return (
        <div className='container text-center'>
            <div>
                <h1 className='mt-5'>Women's Style</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-5" style={{ marginTop: '2rem' }} >
                {productsArr.map((product) => (
                    <div className="col" key={product.id}>
                        
                        <div className="card" style={{ marginTop: '1rem' }} >
                            <Link to={`/store/${product.id}`} state={{product}}>
                                <img
                                    src={product.imageUrl}
                                    className=" card-img-top image"
                                    alt="..." />
                            </Link><h4>{product.title}</h4>
                        </div>

                        <div>
                            <button onClick={() => cartCtx.addCartItem(product)} href="#" style={{
                                marginTop: '20px',
                                float: 'right',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '15px'
                            }} className="btn btn-info btn-primary">ADD TO CARD</button>


                            <span style={{
                                float: 'left', marginTop: '20px',
                                marginLeft:'20px', color: 'black',
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

export default Ladies;