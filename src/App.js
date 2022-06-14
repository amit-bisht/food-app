import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import React,{useState} from 'react';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { CartProvider } from './store/cart-context';

function App() {
  const [cartIsShown,setCartIsShown]=useState(false)
  const showCartHandler=()=>{
    setCartIsShown(true)
  }
  const hideCartHandler=()=>{
    console.log("executed")
    setCartIsShown(false)
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
