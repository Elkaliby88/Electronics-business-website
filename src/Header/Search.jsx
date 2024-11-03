import "./Header.css"
import Logo1 from "../assets/Logo1.png"
import { IoSearch } from "react-icons/io5";
import { GoPersonFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
const Search = ({ cartItems }) => {
    window.addEventListener("scroll",function(){
        const search = document.querySelector(".search")
        search.classList.toggle("active", window.scrollY>100)
    })
    return(
        <>
        <section className="search">
            <div className="container c_flex">
                <div className="logoWidth">
                    <img src={Logo1} alt="" />
                </div>
                <div className="search_box f_flex">
                    <IoSearch className="icon" />
                    <input type="text" placeholder="Search for products..." />
                    <span>All Category</span>
                </div>
                <div className="icons f_flex width">
                    <GoPersonFill className="icon2" />
                    <div className="cart">
                        <Link to="/cart">
                            <FaShoppingBag className="icon2" />
                            <span>{cartItems.length === 0? "" : cartItems.length}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Search