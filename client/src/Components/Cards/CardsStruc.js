import React, { useState } from "react";
import cardItems from "./cardItems";
import { Link } from "react-router-dom";

const deliveryCards = () => {
    const renderCards = (card) => {
   
        return (
            <>
            
            <div className="mx-auto flex flex-col hover:cursor-pointer bg-white rounded-xl shadow-md md:shadow-xl md:w-96"  
            
            >
                <Link to={`/res/${card.id}`}>
                <div className="">
                    <img src={card.image} alt={card.name} className="w-96 h-56 rounded-t-xl"/>
                </div>
                <div className="flex justify-between p-3">
                    <h2 className="font-bold text-xl text-start">{card.name}</h2>
                    <div className="flex items-center gap-2">
                        <span className="font-light">Rating</span>
                        <div className="bg-lgreen px-2 rounded-md text-white">
                        <h3 className="p-1">{card.rating}</h3>
                    </div>
                    </div>
                    
                </div>
                </Link>
            </div>
            
            
            </>
        );
    };

    return <>{cardItems.map(renderCards)}</>
};

export default deliveryCards;