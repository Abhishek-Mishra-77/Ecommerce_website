import React, { useState, Suspense } from 'react';
import NavBar from './components/Header/NavBar';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import About from './components/About/About';
import Home from './components/Home/Home';
import Login from './components/Authentication/Login';
import Contact from './components/Contact/Contact';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ChangePassword from './components/Authentication/ChangePassword';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/Store/ProductDetail';
import Store from './components/Store/Store';
import PaymentDone from './components/PaymentDone/PaymentDone';
// const ProductDetail = React.lazy(() => import('./components/Store/ProductDetail'))
// const Store = React.lazy(() => import('./components/Store/Store'));




function App() {

  const [openCart, setOpenCart] = useState(false);

  const cartHandler = () => {
    setOpenCart((openCart) => !openCart)
  }


  return (
    <Router>
      <section className='Ecommerce-container'>
        <NavBar cartHandler={cartHandler} />
        {/* <Header />  */}

        {openCart && <Cart cartHandler={cartHandler} />}
        {/* <Suspense fallback={<div>...loading</div>}></Suspense> */}
        <Routes>
          <Route exact path='/auth' element={<Login />} />
          <Route exact path='/auth/user' element={<ChangePassword />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path='/paymentDone' element={<PaymentDone />} />
          <Route path='/store' element={<PrivateRoute />}>
            <Route path="/store" element={<Store />} />
            <Route exact path='/store/:id' element={<ProductDetail />} />
          </Route>
          <Route exact path='*' element={<Home />} />
        </Routes>
        <Footer />
      </section>
    </Router>
  );
}

export default App;

