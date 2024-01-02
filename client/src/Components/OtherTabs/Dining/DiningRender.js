import React from "react";
import DiningCards from "./Dining";

const DiningRender = () => {
    return (
        <>
        <div className="mx-3 flex flex-col gap-5">
            <h1 className="md:text-start text-center md:pl-7 mt-2 font-bold text-2xl">Explore Restaurants</h1>
            <div className="flex flex-wrap mb-8 gap-5">
               <DiningCards/> 
            </div>
            
        </div>
        
        </>
    );
};

export default DiningRender;