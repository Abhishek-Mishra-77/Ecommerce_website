import React, { useContext } from 'react';
import { ItemProvideContext } from '../Cart/ContextApi/ItemProvider';
const Music = () => {

    const cartCtx = useContext(ItemProvideContext);

    const productsArr = [
        {
            title: 'Colors',
            id: 'a1',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
            title: 'Black and white Colors',
            id: 'a2',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
            title: 'Yellow and Black Colors',
            id: 'a3',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
            title: 'Blue Color',
            price: 100,
            id: 'a4',
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        },
        {
            title: 'Yellow and Black Colors',
            id: 'a5',
            price: 70,
            imageUrl: 'https://images.pexels.com/photos/288100/pexels-photo-288100.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            title: 'Mix Color',
            id: 'a6',
            price: 100,
            imageUrl: 'https://images.pexels.com/photos/5022847/pexels-photo-5022847.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        }
    ]


    return (
        <div className='container text-center'>
            <div>
                <h1 className='mt-5'>𝓜𝓤𝓢𝓘𝓒</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-5" style={{ marginTop: '2rem' }} >
                {productsArr.map((product) => (
                    <div className="col" key={product.id}>
                        <h4>{product.title}</h4>
                        <div className="card" style={{ marginTop: '1rem' }} >
                            <img src={product.imageUrl} className=" card-img-top image" alt="..." />
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
                                float: 'left', marginTop: '20px', color: 'black',
                                fontWeight: 'bold',
                                fontSize: '20px'
                            }}>${product.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Music;