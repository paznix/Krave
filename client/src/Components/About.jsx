import aboutImage from "../assets/images/about-image.png";
import Navbar from "./Navbar";

export const About = () => {

    return (
        <>
            <div className="md:container mx-auto px-4 lg:px-20">
                <Navbar />
                <div>
                    <div className=" p-12 md:p-24 flex flex-col-reverse md:grid md:grid-cols-2 ">
                        <div className="">
                            <h2 className="text-2xl font-bold mb-6">About Us</h2>
                            <p className="text-lg">
                                Welcome to Krave – where food dreams come true! We're not just a food delivery site; we're your passport to flavor paradise. At Krave, we're on a mission to transform every meal into a culinary celebration. From global delights to local gems, our diverse menu caters to every craving.

                                Why choose Krave? We're more than just a delivery service – we're your culinary sidekick, bringing you top-notch dishes from the finest restaurants. Our user-friendly app ensures a seamless experience, from menu exploration to doorstep delivery.

                                Join us on a flavor-packed journey and make every bite a moment to savor. Krave: Heaven for Foodies – your ticket to a world of delicious possibilities!

                            </p>
                        </div>
                        <div className="flex items-center justify-center pb-8 md:pb-0">
                            <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover rounded-lg shadow-2xl" />
                        </div>
                    </div>
                </div>
            </div>

        </>


    )
}