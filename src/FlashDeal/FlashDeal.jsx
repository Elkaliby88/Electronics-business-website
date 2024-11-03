import "./Flash.css"
import FlashCard from "./FlashCard"
import { ImPower } from "react-icons/im";

const FlashDeal = ({ productItems, addToCart }) => {
    return(
        <>
        <section className="Flash background">
            <div className="container">
                <div className="heading f_flex">
                <ImPower className="icon" />
                <h1>Flash Deals</h1>
                </div>
                <FlashCard productItems={productItems} addToCart={addToCart}/>
            </div>
        </section>
        </>
    )
}
export default FlashDeal