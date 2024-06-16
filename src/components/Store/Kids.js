import React, { useContext } from 'react';
import { ItemProvideContext } from '../ContextApi/ItemProvider';
import { Link } from 'react-router-dom';
const Kids = () => {

    const cartCtx = useContext(ItemProvideContext);


    const productsArr = [
        {
            title: 'HOOPER NEW LOOK',
            id: 'a1',
            price: 999,
            imageUrl: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//h/i/pink-transparent-purple-pink-tortoise-full-rim-rectangle-hooper-flexi-hooper-hp-e15084m-c3-eyeglasses_g_5388_8_12_22.jpg',
        },
        {
            title: 'FLX FIFA',
            id: 'a2',
            price: 499,
            imageUrl: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//h/i/kids-glasses:-sky-blue-yellow-sky-blue-full-rim-rectangle-kids--5-8-yrs--hooper-flexi-hooper-hp-e10004-c2_hooper-hp-e10004-c2-eyeglasses_g_5795_22_march23.jpg.jpg',
        },
        {
            title: 'VLX KIDS ',
            id: 'a3',
            price: 699,
            imageUrl: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//h/i/kids-glasses:-blue-purple-full-rim-cat-eye-kids--5-8-yrs--hooper-flexi-hooper-hp-e10084-c2_hooper-hp-e10084-c2-eyeglasses_g_5476_22_march23.jpg.jpg',
        },
        {
            title: 'MEGA VISION',
            price: 599,
            id: 'a4',
            imageUrl: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//h/i/kids-glasses:-black-blue-transparent-black-full-rim-round-kids--5-8-yrs--hooper-astra-hooper-hp-e10015-c1_hooper-hp-e10015-c1-eyeglasses_g_1024_22_march23.jpg.jpg',
        },
        {
            title: 'Sport Look',
            id: 'a5',
            price: 299,
            imageUrl: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//h/i/transparent-blue-grey-tortoise-full-rim-rectangle-kids-(5-8-yrs)-hooper-flexi-hooper-hp-e15084m-c2-eyeglasses_g_5382_9_21_22.jpg',
        },
        {
            title: 'Biloculors',
            id: 'a6',
            price: 489,
            imageUrl: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//h/i/kids-glasses:-blue-brown-transparent-full-rim-round-8-12-yrs-hooper-poppin-2-0-hp-e10108l-c7_g_5880_22_03_2023.jpg',
        },
       
    ]


    return (
        <div className='container text-center'>
            <div>
                <h1 className='mt-5'>𝓚𝓘𝓓𝓢 𝓢𝓣𝓨𝓛𝓔</h1>
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

export default Kids;