import React from "react";

import DeliveryCarousal from "./DeliveryCarousel";
import Cards from "../Cards/CardsStruc";

const Delivery = () => {
    return (
        <>
        <DeliveryCarousal/>
        <div className="h-0.5 bg-dgreen mt-8">

        </div>
        <div className="mx-3 flex flex-col  gap-5">
            <h1 className="md:text-start text-center md:pl-7 mt-6 font-bold text-2xl">Explore Restaurants</h1>
            <div className="flex flex-wrap mb-8 gap-5">
               <Cards/> 
            </div>
            
        </div>
        
        </>
    );
};

export default Delivery;