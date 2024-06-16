import React, { useContext } from 'react';
import { useParams, useLocation, Navigate } from 'react-router-dom';
import { ItemProvideContext } from '../ContextApi/ItemProvider';
import './ProductDetail.css';
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';



const ProductDetail = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const cartCtx = useContext(ItemProvideContext);
    const productDetails = useLocation();

    if (!productDetails.state) {
        return <Navigate to="/" />;
    }
    const data = productDetails.state.product;

    const onToken = (token) => {
        navigate("/paymentdone")
        localStorage.setItem("paymentInfo", JSON.stringify(token))
        localStorage.setItem("amount", JSON.stringify(data.price))
    }


    return (
        <div className='container'>
            <div className='product-detail'>
                <div className='image-content'>
                    <div className='image1 mt-3'>
                        <div className="card mb-3" style={{ width: '5rem', height: '4rem', marginLeft: '1rem' }}>

                        </div>
                        <div className="card mb-3" style={{ width: '5rem', height: '4rem', marginLeft: '1rem' }}>
                            <div className="card-body">

                            </div>
                        </div> <div className="card mb-3" style={{ width: '5rem', height: '4rem', marginLeft: '1rem' }}>
                            <div className="card-body">

                            </div>
                        </div> <div className="card mb-3" style={{ width: '5rem', height: '4rem', marginLeft: '1rem' }}>
                            <div className="card-body">

                            </div>
                        </div> <div className="card mb-3" style={{ width: '5rem', height: '4rem', marginLeft: '1rem' }}>
                            <div className="card-body">

                            </div>
                        </div>
                        <div className="card text-center mb-3" style={{ width: '5rem', height: '4rem', marginLeft: '1rem' }}>
                            <div className="card-body">
                            </div>
                        </div>
                        <img src={data.imageUrl}></img>
                    </div>
                    <div className='mt-2' style={{ display: "flex" }}>
                        <button
                            onClick={() => cartCtx.addCartItem(data)}
                            href="#"
                            style={{
                                marginTop: '-3rem',
                                marginLeft: '7rem',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '22px'
                            }} className="btn btn-info btn-primary">
                            <ion-icon name="cart-outline"></ion-icon>
                            ADD TO CARD
                        </button>
                        <StripeCheckout
                            description={"Payment Done"}
                            image="https://www.compliancesigns.com/media/catalog/product/p/a/payment-policies-sign-nhe-17964_1000.gif"
                            ComponentClass="div"
                            currency="INR"
                            amount={data.price * 100}  // Multiply by 100 to convert rupees to paise
                            allowRememberMe
                            token={onToken}
                            shippingAddress
                            billingAddress={false}
                            stripeKey="pk_test_51OKItmSIeTa6z5FVc03TQk2ilyBGtK9EYPds8a3rq2SEFpQ0kRS7BwoL4BQn69OF86a2XkULaReKTlsE1PrLJwqq007edzU8ao"
                        >
                            <button href="#" style={{
                                marginTop: '-3rem',
                                marginLeft: '2rem',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '22px',

                            }}
                                className="btn btn-info btn-primary">

                                BUY NOW
                            </button>
                        </StripeCheckout>

                    </div>
                </div>
                <div className='reveiw-content m-3'>
                    <div className='reveiw-content-detail'>
                        <h3>{data.title} </h3>
                        <p>Men Full Sleeve Printed Hooded Sweatshirt</p>
                        <h2>₹ {data.price} {"     ,"} <small className='text-success'>73% off</small> </h2>
                    </div>
                    <div className='review-contect-rating'>
                        <img className='icon-star' src='https://cdn-icons-png.flaticon.com/128/3334/3334338.png'></img><span className='text-secondary'>13,148 ratings and 1,357 reviews</span>
                        <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAA0ACoDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAEDAgb/xAAlEAACAQMDBAIDAAAAAAAAAAAAAQIRElEDISITMUGhIzIzccH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A9lasIWrCKAJasIWrCCafZ1KBLVhC1YRQAMYrrc57xf1j4pk2MdB/GoeYcWAUITjdFKDq0nGlfR3pyco8vsnRnGhFw02pbcpP2y6G6nPxKVV+u38A1AAAznpKbuTcZZR2AMug5fk1JTWNkvRt2IAKCACEbAAr2dAAAAAH/9k=' />
                    </div>
                    <hr />

                    <div className='review-contect-size  mt-4'>
                        <h4 className='text-secondary'>Size</h4>
                        <div className='size-btn'>
                            <button type="button" className="btn btn-outline-info">M</button>
                            <button type="button" className="btn btn-outline-info">L</button>
                            <button type="button" className="btn btn-outline-info">XL</button>
                            <img className='icon-size mt-1' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAuAJMDASIAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAAEDBAUCBv/EAC0QAAICAgEDAwIEBwAAAAAAAAECAAMEERIFIVETMUEUYSJxgbEVIzI0YnPh/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAID/8QAJREBAAIBAQYHAAAAAAAAAAAAAAERAjESISJxofADI0FRYYHx/9oADAMBAAIRAxEAPwD9lxHgRxHgSxAnEeBHEeBLECcR4EcR4EsQJxHgRxHgSxAnEeBHEeBLECcR4EcR4EsQJxHgRxHgSxAnEeBHEeBLECcR4EcR4EsQJxHgRLEBPIza0+td86qy3GKjgV2QnnYE9ecdtOYl72Y1tbK+tpcTpfy1NPDmpTlFw5EKI2CEsGQjWNwdt7Ua9vf95rfk51WTXSpx3aw9gFbYXye8lXTbK2x25oSlrWWfA7j2EtWNnVZNt2sZ3sPuWbsvwB2mszjM62ipp8X9UdbLvSOOEpOitj6d9e+p1ZWVx6a+TV7mvku/jcwbAurutNH07Ja3I+qpJU/OvM7bKFtxmpf+ll4nQ1IynCKpUbVy4U6WhorsrsZMnQY3bJJPzsbmKvk15nUHxxUeJUtz34+NToGLnGtcdr61pXQ5psOQP2mleHYtmaxK6vA49z27a7y9rW5v9hOzpu73vizNtamiyoU1LYnIvc+gD48zL+J3WUY7U11myyw1kEnWx8gyr0/Iq+nes0s9dfpsLASB9xFPTbqxQGas+ncbCRvuDHlx3zOId80dSxkZ6hyQkqvLifbf/J2Z/wDYZP8Aqb9jPjJx7ny6L6WT+XsMH37HxNsms3Y1takBnQqN+3cTOZiZxlVauevp2G1ak49eyAfaY41GDeLicRKxVYU2w1v7y5FHULqFqU0V8SDyWxt9v0mTYOc+PfSfp9XOXJDsNE/p9ppGm/LqifiG5xunDKGP9OnqFOY/D21F+L06h6lsx03a3FdL8zF8LOa8Wg0BhT6Q07ffvvX3kbBz2TGVmoY0Ny5F2Jb8+0e3F1PptlYWNQKXqpRG9asbA/yE9GeXVh5o/Da1TKbxbvmxIAIOh2+09SZZ+kXa8eRERM1kREBERAREQEREBERAREQEREBERAREQERED//Z' />
                        </div>
                    </div>
                    <hr />

                    <div className='review-offer mt-3'>
                        <h4>Available offers</h4>
                        <img className='icon-offer' src='https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90' />   <small><span className='text'>Bank Offer</span> Flat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹15,000 to ₹39,999T&C</small> <br />
                        <img className='icon-offer' src='https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90' />  <small><span className='text'>Bank Offer</span> Flat ₹3,000 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹40,000 to ₹49,999T&C</small> <br />
                        <img className='icon-offer' src='https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90' /><small><span className='text'>Bank Offer</span> 10% instant discount on ICICI Bank Debit Cards, up to ₹250, on orders of ₹1750 and aboveT&C</small> <br />
                        <img className='icon-offer' src='https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90' />  <small><span className='text'>Bank Offer</span> Flat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹15,000 to ₹39,999T&C</small> <br />
                        <img className='icon-offer' src='https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90' /> <small>Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C</small> <br />
                        <a className="text-primar" href="#">+4 more offers</a>
                    </div>
                    <hr />
                    <div className='address'>
                        <div>
                            <h5 className='mt-4 text-secondary'> <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg==' />Deliver to </h5>
                            <input type='number' placeholder='Enter delivery pincode' />
                            <a className="text-primar" href="#">check</a>
                        </div>
                        <div className='mt-4'>
                            <h5>Delivery by2 Aug, Wednesday <small className='text-secondary'> | Free₹40 <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAzAC0DASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECAwQG/8QAIhAAAgEEAgIDAQAAAAAAAAAAAAECAxESUSExQWEEE3Gx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APssVpDFaRTLkk7ct+gLitIYrSJlbtNfpoCYrSGK0igCSdot6Rl5QpvBZStwr9s01dNbJGXiXf8AQPP8atVnWqUqyptxim3C9lfwz0Q4utM50YfTCSainKTdotu937OkU0ue3yBoAACNJ9q5QBFFLpJFAAAAAAAAAAAAD//Z' /></small></h5>
                            <small>if ordered before 4:59 PM</small>
                            <br /><small><a className="text-primar" href="#">check</a></small>

                        </div>

                        <div className='mt-4'>
                            <h5 className='mt-4 text-secondary'>Seller</h5>
                            <div className='store'>
                                <span>SMARTEES STORE <img className='icon-store' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAA1ADgDASIAAhEBAxEB/8QAGgABAQEAAwEAAAAAAAAAAAAAAAUBAwQGAv/EADIQAAEEAAQDBQYHAQAAAAAAAAEAAgMEERIhURMxQQYWYdHhBRVTZJKjFCIycZGhwfH/xAAYAQEBAQEBAAAAAAAAAAAAAAAABAIDAf/EAB8RAAICAwACAwAAAAAAAAAAAAABAgMREhMhIgQxof/aAAwDAQACEQMRAD8A9llGwTKNgtRAZlGwTKNgtRAZlGwTKNgtRAZlGwRaiA4bNqGrHnneGDpuVPPaCoDoyY+IaPNQ/aFp1u0+RxOXHBo2CxtKV1J9vQRtOGvM64aK+PxoJJz+yWV0m/Uu94anw5vpHmneGp8Ob6R5qFWpvsMe8PjjYzDF8hwGJXzLUmismvlzSDkG64/st8Ks4POs8ZL47QVCdWTDxLR5qhWtQ2o88Dw8ddwvOe55/wADxeG7jZ/0dcv/AFcFOeX2fdaXBzMDg9p00XN0VyT0fk0rZJ+x7BERQlJ4q1Aa1p8Twfyu/kKm+5Tmo2GDiMAYxrWFw6Hp/qsXaEF5oEoIcOTm8wph7NjHS0QPGP1V6urmlu8NEvOUW9TpVKkTZXcexC5jAHBglADztr/a6118rrbpHvYXnUGNwIG2oVXu3819v1Tu3819v1W1dXnLl+Gec8Ywc3vqDh8DiPzcPLxsNM2HNQqsL7dpkYxJe7U+HUqwOzYx1tEjwj9VTpUIKLSIgS483O5lc+tdaenls3pObWx2kRFCUhERAEREAREQBERAf//Z' /></span><br />
                                <span>3 Days Return Policy<img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAzAC0DASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECAwQG/8QAIhAAAgEEAgIDAQAAAAAAAAAAAAECAxESUSExQWEEE3Gx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APssVpDFaRTLkk7ct+gLitIYrSJlbtNfpoCYrSGK0igCSdot6Rl5QpvBZStwr9s01dNbJGXiXf8AQPP8atVnWqUqyptxim3C9lfwz0Q4utM50YfTCSainKTdotu937OkU0ue3yBoAACNJ9q5QBFFLpJFAAAAAAAAAAAAD//Z' /></span> <br />
                                <span><a href='#'>See other sellers</a></span>
                            </div>
                        </div>
                    </div>
                    <div className='line'></div>
                    <div className=' card ms-auto fw-bold fs-5 mt-5'>
                        <button type="button" className="btn btn-outline-info" >
                            <h4> Total :  ₹{data.price}</h4>
                        </button>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default ProductDetail