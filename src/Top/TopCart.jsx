import "./Top.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Todata from "./Tdata"
const TopCart = () =>{
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
    }
    return(
        <>
        <Slider {...settings}>
        {
            Todata.map((value,index) =>{
                return(
                    <div className="box protuct" key={index}>
                        <div className="nametop d_flex">
                            <span className="theLeft">{value.para}</span>
                            <span className="theRight">{value.desc}</span>
                        </div>    
                        <div className="img ">
                                <img src={value.cover} alt="" />
                                <img src={value.cover1} alt="" />
                        </div>   
                    </div>
                )
            })}
            </Slider>
        </>
    )
}
export default TopCart