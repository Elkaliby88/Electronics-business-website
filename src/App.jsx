import "./App.css"
import Header from "./Header/Header"
import {
  BrowserRouter as Router,
  Routes,Route
} from "react-router-dom";
import Pages from "./Pages/Pages";
import Data from "./FlashDeal/Data";
import { useState } from "react"
import Cart from "./Cart/Cart"

function App() {
  // step 1: fetch data from database
  const { productItems } = Data
  const [cartItems, setCartTtems] = useState([])
  const addToCart =( protuct ) =>{
    const protuctExit = cartItems.find((item)=>item.id === protuct.id)
    if(protuctExit){
      setCartTtems(cartItems.map((item)=>(item.id === protuct.id?{...protuctExit,qty:protuctExit.qty+1}:item)))
  }else{
    setCartTtems([...cartItems,{...protuct, qty:1}])
  }
};
const decreaseQty = (protuct) =>{
  const protuctExit = cartItems.find((item)=>item.id === protuct.id)
  if(protuctExit.qty === 1){
    setCartTtems(cartItems.filter((item)=>item.id !== protuct.id))
  }else{
    setCartTtems(cartItems.map((item) => (item.id === protuct.id? {...protuctExit, qty:protuctExit.qty-1} : item)))
  }
} 
  return(
    <>
    <Router>
      <Header cartItems={cartItems}/>
      <Routes>
        <Route path="/" element={<Pages productItems={productItems} addToCart={addToCart}/>}>
        </Route>
        <Route path="/Cart" element={<Cart cartItems={cartItems} addToCart={addToCart} decreaseQty={decreaseQty}/>}>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App