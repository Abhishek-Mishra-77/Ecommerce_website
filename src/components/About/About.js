import React from 'react';

function About() {
  return (
    <div className='container' style={{ maxWidth: '900px', marginTop: '13px', fontSize: '20px' }}>
      <h2 className='text-center'>𝓐𝓫𝓸𝓾𝓽</h2>
      <div className='container'>
        <img src='https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png'
          style={{
            width: '225px',
            height: '225px',
            margin: '20px 50px 20px 50px',
            borderRadius: '50%',
            float: 'left'
          }} />
        <p style={{ margin: '20px', fontSize: '16px' }}>
          Welcome to the ultimate online shopping experience - our cutting-edge eCommerce app that brings
          the world of retail right to your fingertips! With a seamless and user-friendly interface,
          our app is designed to make your shopping journey effortless, enjoyable, and highly rewarding.
          Browse through an extensive catalog of products from top brands and exclusive sellers,
          spanning across various categories. From fashion and electronics to home decor and lifestyle
          essentials, we've got it all. Discover the latest trends, explore unique offerings, and find that
          perfect item you've been searching for.
          Our app is tailored to suit your preferences, offering personalized product recommendations based on
          your interests and shopping history. Say goodbye to endless scrolling and let our smart algorithms bring
          the best options directly to you.
          But we don't just stop at showcasing products; we believe in transparency and authenticity.
          Each item on our platform comes with detailed descriptions, high-quality images, and genuine
          customer reviews, empowering you to make informed decisions.
          Security is our top priority. Shop with confidence knowing that your payment information is
          safeguarded through state-of-the-art encryption technology. We ensure a secure and seamless
          checkout process, so you can focus on enjoying your purchases.
        </p>
      </div>
    </div>
  )
}

export default About;