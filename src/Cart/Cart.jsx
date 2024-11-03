/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "./Style.css"
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { RxDividerHorizontal } from "react-icons/rx";
const Cart = ({ cartItems , addToCart, decreaseQty }) => {
    const totalPrice = cartItems.reduce((price, item) => price + item.qty * item.price , 0)
    return(
        <>
        <div className="cart-items ">
            <div className="container d_flex  ">
                <div className="cart-detalis" >
                    {cartItems.length === 0 && <h1 className="no_items protuct ">No Items are add in Cart</h1>}
                    {cartItems.map((item)=>{
                        const productQty = item.price * item.qty
                        return(
                            <div className="cart-list protuct d_flex" key={item.id} >
                                <div className="img">
                                    <img src={item.cover} alt="Elkaliby"/>
                                </div>
                                <div className="cart-detalis">
                                    <div className="cart-num">
                                        <h3>{item.name}</h3>
                                        <h4>
                                            {item.price}$ * {item.qty}
                                            <span>&{productQty}$</span>
                                    </h4>
                                    </div>
                                </div>
                                <div className="cart_items_function">
                                    <div className="removeCart">
                                        <button>
                                            <RxCross2 className="Icons" />
                                        </button>
                                    </div>
                                    <div className="cartControl d_flex ">
                                        <button className="inCart" onClick={()=>addToCart(item)}>
                                            <FaPlus className="Icons1"/>
                                        </button>
                                        <button className="desCart" onClick={()=>decreaseQty(item)}>
                                            <RxDividerHorizontal className="Icons4"/>
                                        </button>
                                    </div>
                                </div>
                            </div>  
                            )
                        })}    
                </div>
                <div className="cart-total protuct ">
                    <h2>Cart Summary</h2>
                    <div className="d_flex">
                        <h4>Total Price :</h4>
                        <h3>{totalPrice}$</h3>
                    </div>
                </div>    
            </div>
        </div>
        </>
    )
}
export default Cart