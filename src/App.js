import React, { Fragment, useState } from 'react';
import NavBar from './components/Header/NavBar';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Merch from './components/Merch/Merch';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';

function App() {

  const [openCart, setOpenCart] = useState(false);

  const cartOpenHandler = () => {
    setOpenCart(true);
  }

  const cartCloseHandler = () => {
    setOpenCart(false);
  }



  return (
    <div className='Ecommerce-container'>
      <NavBar cartOpenHandler={cartOpenHandler} />
      <Header />
      {openCart && <Cart cartCloseHandler={cartCloseHandler} />}
      <Music />
      <Merch />
      <Footer />
    </div>
  );
}

export default App;
