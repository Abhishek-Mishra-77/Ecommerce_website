import React, { useState } from 'react';
import NavBar from './components/Header/NavBar';
import Header from './components/Header/Header';
import Store from './components/Store/Store';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import About from './components/About/About';
import Home from './components/Home/Home';
import Login from './components/Authentication/Login';
import Contact from './components/Contact/Contact';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/Store/ProductDetail';




function App() {

  const [openCart, setOpenCart] = useState(false);

  const cartHandler = () => {
    setOpenCart((openCart) => !openCart)
  }


  return (
    <Router>
      <section className='Ecommerce-container'>
        <NavBar cartHandler={cartHandler} />
       {! <Header />}
        {openCart && <Cart cartHandler={cartHandler} />}
        <Routes>
          <Route exact path="/" element={<Store />} />
          <Route exact path='/:id' element={<ProductDetail />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path='/auth' element={<Login />} />
          <Route path='*' element={<h2>No Found</h2>} />
        </Routes>
        <Footer />
      </section>
    </Router>
  );
}

export default App;

