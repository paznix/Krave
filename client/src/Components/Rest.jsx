import Navbar from "./Navbar";
import cardItems from "./Cards/cardItems";
import { useParams } from "react-router-dom";
import Notfound from "../assets/Notfound.png"
import Button from "../Components/Elements/Button"
import { Link } from "react-router-dom";

export const Rest = () => {
    const { id } = useParams();
    const itemId = parseInt(id);
    const item = cardItems.find(item => item.id === itemId);

    // Check if the item object exists before trying to access its properties
    if (!item) {

        return (
            <><div className="container mx-auto">
                <Navbar />
            </div>
                <div className=" flex flex-col items-center justify-center mt-28 mb-20">
                    <img className="z-10" src={Notfound} />
                </div>
            </>
        );
    }

    return (
        <div>
            <div className="container mx-auto">
                <Navbar />
            </div>
            <div className="bg-gradient-to-tr from-dgreen container my-16 md:mx-auto to-back pb-0.5 rounded-3xl md:mb-36">
                <div className="flex flex-col md:flex-row mx-auto bg-back rounded-t-3xl md:gap-10">
                <img className="rounded-t-3xl w-full md:w-96 h-72 object-cover" src={item.image} />
                <div className="flex flex-col px-5 pb-7 md:py-5 items-start">
                   <h2 className="text-2xl font-bold   py-5 rounded-2xl">{item.name}</h2>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad reprehenderit earum, est fugit esse deserunt repudiandae adipisci quis error. Quidem iste doloremque consequatur velit dicta quod commodi fuga accusamus illo!</span> 
                </div>
            </div>
            <div className="flex items-end justify-end m-3">
                <Link to="/">
                <button className="text-xl text-back font-semibold pr-2">Explore More</button>
                </Link>
                
            </div>
            </div>
            

        </div>
    )
};