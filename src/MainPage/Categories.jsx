import cat01 from "../assets/cat01.jpg"
import cat8 from "../assets/cat8.jpg"
import cat02 from "../assets/cat02.jpg"
import cat04 from "../assets/cat04.jpg"
import cat3 from "../assets/cat3.jpg"
import cat10 from "../assets/cat10.jpg"
import cat4 from "../assets/cat4.jpg"
import cat05 from "../assets/cat05.jpg"
import cat011 from "../assets/cat011.jpg"
import cat7 from "../assets/cat7.jpg"
import cat6 from "../assets/cat6.jpg"
const Catgrories = () => {
    const data = [
        {
            cat1: cat01,
            catName: "Fashions",
        },
        {
            cat1: cat8,
            catName: "Electronic",
        },
        {
            cat1: cat02,
            catName: "Cars",
        },
        {
            cat1: cat04,
            catName: "Home & Gardens",
        },
        {
            cat1: cat3,
            catName: "Gites",
        },
        {
            cat1: cat10,
            catName: "Music",
        },
        {
            cat1: cat4,
            catName: "Health & Services",
        },
        {
            cat1: cat05,
            catName: "Pets",
        },
        {
            cat1: cat011,
            catName: "Baby Toys",
        },
        {
            cat1: cat7,
            catName: "Groceries",
        },
        {
            cat1: cat6,
            catName: "Books",
        },

    ]
    return(
        <>
            <div className="catgrori">
                {data.map((value, index) => {
                    return(
                        <div className="box f_flex" key={index}>
                            <img src={value.cat1} alt="" />
                            <span>{value.catName}</span>
                        </div>
                    )    
                })}
            </div>
        </>
    )
}
export default Catgrories