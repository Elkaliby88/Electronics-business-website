
import FlashDeal from "../FlashDeal/FlashDeal"
import Home from "../MainPage/Home"
import NewArrivals from "../NewArrivals/NewArrivals"
import TopGate from "../Top/TopGate"
const Pages = ({ productItems, cartItems, addToCart  }) => {
    return(
        <>
            <Home cartItems={cartItems}/>
            <FlashDeal productItems={productItems} addToCart={addToCart}/>
            <TopGate/>
            <NewArrivals/>
        </>
    )
}
export default Pages