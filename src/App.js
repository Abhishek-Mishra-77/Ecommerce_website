import React, { useState } from 'react';
import NavBar from './components/Header/NavBar';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Merch from './components/Merch/Merch';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import ItemProvider from './components/Cart/ContextApi/ItemProvider';

function App() {

  const [openCart, setOpenCart] = useState(false);

  const cartHandler = () => {
    setOpenCart((openCart) => !openCart)
  }


  return (
    <ItemProvider className='Ecommerce-container'>
      <NavBar cartHandler={cartHandler} />
      <Header />
      {openCart && <Cart cartHandler={cartHandler} />}
      <Music />
      <Merch />
      <Footer />
    </ItemProvider>
  );
}

export default App;
