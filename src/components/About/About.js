import React, { Fragment } from 'react';

function About() {
  return (
    <Fragment>
      <div className='container' style={{ maxWidth: '900px', marginTop: '13px', fontSize: '20px' }}>
        <h2 className='text-center'>𝓐𝓫𝓸𝓾𝓽</h2>
        <div className='container'>
          <img src='https://i.pinimg.com/originals/46/25/d8/4625d8a3410d1d10ca499a63ecb48ada.png'
            style={{
              width: '225px',
              height: '225px',
              margin: '20px 50px 20px 50px',
              borderRadius: '50%',
              float: 'left'
            }} />
          <p style={{ margin: '20px', fontSize: '16px' }}>
            
Welcome to Optical Smart, the ultimate online destination for all your optical needs! Our cutting-edge eCommerce app brings the best in eyewear and vision care right to your fingertips. With a seamless and user-friendly interface, Optical Smart is designed to make your shopping experience effortless, enjoyable, and highly rewarding. Browse through an extensive catalog of products from top brands and exclusive sellers, spanning various categories including prescription glasses, sunglasses, contact lenses, and eye care accessories. Discover the latest trends, explore unique designs, and find the perfect pair of glasses you've been searching for.

Our app is tailored to suit your preferences, offering personalized product recommendations based on your interests and shopping history. Say goodbye to endless scrolling and let our smart algorithms bring the best options directly to you. We believe in transparency and authenticity; each item on our platform comes with detailed descriptions, high-quality images, and genuine customer reviews, empowering you to make informed decisions about your eye care.

Security is our top priority. Shop with confidence knowing that your payment information is safeguarded through state-of-the-art encryption technology. We ensure a secure and seamless checkout process, so you can focus on enjoying your new eyewear. Welcome to a better vision experience with Optical Smart!
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default About;