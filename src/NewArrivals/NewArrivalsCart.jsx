import "./New.css"
import Ndata from "./Ndata"
const NewArrivalsCart = () =>{
    return (
        <>
        <div className="content grid protuct">
            {
                Ndata.map((value, index) =>{
                    return(
                        <div className="box_num" key={index}>
                            <div className="img">
                                <img src={value.cover} alt="Elkaliby"/>
                            </div>
                            <h4>{value.name}</h4>
                            <span>{value.price}</span>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}
export default NewArrivalsCart