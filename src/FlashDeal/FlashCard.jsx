/* eslint-disable react/prop-types */
import "./Flash.css"

import { FaRegHeart } from "react-icons/fa";
import { ImStarFull } from "react-icons/im";
import { FaPlus } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Slider from "react-slick";
import { useState } from "react";
const NextArrow =(props) => {
    const {onClick} = props
    return(
        <div className="control_btn" onClick={onClick}>
            <button className="next">
                <FaLongArrowAltRight className="look" />
            </button>
        </div>
    )
}
const PrevArrow =(props) => {
    const {onClick} = props
    return(
        <div className="control_btn" onClick={onClick}>
            <button className="prev">
                <FaLongArrowAltLeft className="look" />
            </button>
        </div>
    )
}

const FlashCard = ({ productItems, addToCart }) => {
    const [ count , setCount,  ] = useState(0)
    const increment =() =>{
        setCount(count + 1)
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
    };
    return(
        <>
        <Slider {...settings}>
        {productItems.map((productItems,index)=>{
            return(
                <div className="box" key={index} >
                    <div className="protuct mtop"  >
                        <div className="img">
                            <span className="discount">{productItems.discount}% Off</span>
                            <img src={productItems.cover} alt="Elkaliby"/>
                            <div className="product_title">
                                <label>{count}</label><br/>
                                <FaRegHeart className="icon3" onClick={increment} />
                            </div>
                        </div>
                        <div className="product_datelis">
                            <h3>{productItems.name}</h3>
                            <div className="rate">
                                <ImStarFull className="icon" />
                                <ImStarFull className="icon" />
                                <ImStarFull className="icon" />
                                <ImStarFull className="icon" />
                                <ImStarFull className="icon" />
                            </div>
                            <div className="price">
                                <h4>{productItems.price}$</h4>
                                <button onClick={()=>addToCart(productItems)}>
                                    <FaPlus className="icon1" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                ) 
            })
        }
        </Slider>
        </>
    )
} 
export default FlashCard