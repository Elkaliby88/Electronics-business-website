import "./Top.css"
import { RxGrid } from "react-icons/rx";
import { IoCaretForward } from "react-icons/io5";
import TopCart from "./TopCart"
const TopGate = () =>{
    return(
        <>
        <section className="TopGate background">
            <div className="container ">
                <div className="heading d_flex">
                    <div className="heading_left row f_flex">
                        <RxGrid className="num" />
                        <h2>Top Gategories</h2>
                    </div>
                    <div className="heading_right row f_flex">
                        <span>View All</span>
                        <IoCaretForward className="icon" />
                    </div>
                </div>
                <TopCart/>
            </div>
        </section>
        </>
    )
}
export default TopGate