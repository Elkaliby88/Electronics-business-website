import "./Header.css"
import Search from "./Search"
import Head from "./Head"
import Navbar from "./Navbar"

const Header = ({ cartItems }) => {
    return(
        <>
        <Head/>
        <Search cartItems={cartItems}/>
        <Navbar/>
        </>
    )
}
export default Header