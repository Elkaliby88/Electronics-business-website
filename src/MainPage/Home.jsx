import Catgrories from "./Categories"
import Slider from "./Slider"
import "./Home.css"

const Home = () => {
    return(
        <>
            <section className="home" >
                <div className="container d_flex">
                    <Catgrories/>
                    <Slider/>
                </div>
            </section>
        </>
    )
}
export default Home