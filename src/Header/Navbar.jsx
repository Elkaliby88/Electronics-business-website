import "./Header.css"
import { MdBorderAll } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { BiSolidXCircle } from "react-icons/bi";
const Navbar = () => {
    window.addEventListener("scroll",function(){
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY>100)
    })
    const [MobilMenu, setMobilMenu] = useState(false);
    return(
        <>
        <div className="header">
            <div className="container d_flex">
                <div className="catgrories d_flex">
                    <MdBorderAll className="icon" />
                    <h4>
                        Catgrories
                        <FaChevronDown className="icon1" />
                    </h4>
                </div>
                <div className="navLink">
                    <ul className={MobilMenu ? "nav-links-MobilMenu" : "link f_flex capitalize"} onClick={()=> setMobilMenu(false)}>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/pages'>Product</Link>
                        </li>
                        <li>
                            <Link to='/user'>User</Link>
                        </li>
                        <li>
                            <Link to='/vendor'>Vendor Account</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                        <li>
                            <Link to='/track'>Track My Order</Link>
                        </li>
                    </ul>
                    <button className="toggle" onClick={() => setMobilMenu(!MobilMenu)}>
                        {
                            MobilMenu ? <BiSolidXCircle className="close home-btn" />  : <CgMenu className="open" />
                        }
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Navbar