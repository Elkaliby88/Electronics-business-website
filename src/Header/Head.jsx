import "./Header.css"
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
const Head = () => {
    return(
        <>
        <div className="head">
            <div className="container d_flex">
                <div className="left_row">
                    <FaPhoneAlt className="icon" />
                    <label>+2482 2256 3887</label>
                    <FaEnvelope className="icon" />
                    <label>mi8091643@gmail.com</label>
                </div>
                <div className="right__row RText">
                    <label>Theme FAQ </label>
                    <label>Need helps </label>
                    <span></span>
                </div>
            </div>
        </div>
        </>
    )
}
export default Head