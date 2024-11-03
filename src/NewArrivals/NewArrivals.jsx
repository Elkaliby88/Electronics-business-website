import "./New.css"
import Logo from "../assets/Logo.jpg"
import { IoCaretForward } from "react-icons/io5";
import NewArrivalsCart from "./NewArrivalsCart";
const NewArrivals = () =>{
    return(
        <>
        <section className='NewArrivals background'>
            <div className='container'>
                <div className='heading d_flex'>
                    <div className='heading-left row  f_flex'>
                        <img src={Logo} alt="" />
                        <h2>New Arrivals </h2>
                    </div>
                    <div className='heading-right row '>
                        <span>View all</span>
                        <IoCaretForward className="icon" />
                    </div>
                </div>
                <NewArrivalsCart/>
            </div>
        </section>
        </>
    )
}
export default NewArrivals