import React, { useContext } from 'react';
import { ItemProvideContext } from '../ContextApi/ItemProvider';
import { Link } from 'react-router-dom';
const Mens = () => {

    const cartCtx = useContext(ItemProvideContext);


    const productsArr = [
        {
            title: 'Vincent Chase',
            id: 'm1',
            price: 889,
            imageUrl: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13786-c2-eyeglasses_vincent-chase-vc-e13786-c2-eyeglasses_g_3318.jpg',
        },
        {
            title: 'Love Glass',
            id: 'm2',
            price: 529,
            imageUrl: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/blue-full-rim-wayfarer-vincent-chase-classic-acetate-vc-e17101-c1-eyeglasses_img_2640_03_04_2024.jpg',
        },
        {
            title: 'VLX Pro ',
            id: 'm3',
            price: 399,
            imageUrl: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-full-rim-square-lenskart-studio-classic-acetate-lk-e17044-c1-eyeglasses_csvfile-1711539541973-img_2342.jpg',
        },
        {
            title: 'Vikky Style',
            price: 479,
            id: 'm4',
            imageUrl: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-full-rim-square-lenskart-studio-classic-acetate-lk-e17044-c1-eyeglasses_csvfile-1711539541973-img_2342.jpg',
        },
        {
            title: 'vision X',
            id: 'm5',
            price: 799,
            imageUrl: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/peyush-bansal-shark-tank-graphite-full-rim-lenskart-hustlr-eyeglasses_img_9727_14march24.jpg',
        },
        {
            title: 'BenTeX',
            id: 'm6',
            price: 789,
            imageUrl: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/Gold-Transparent-Full-Rim-Geometric-Vincent-Chase-Sleek-Steel-VC-E13463AF-C1-Eyeglasses_vincent-chase-vc-e13463af-nfim-round-mt-st-eob-c1-eyeglasses_j_9920_10_02_2022.jpg',
        },
       
    ]


    return (
        <div className='container text-center'>
            <div>
                <h1 className='mt-5'>MEN STYLE</h1>
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

export default Mens;