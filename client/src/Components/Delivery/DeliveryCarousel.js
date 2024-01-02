import React from "react";
import Foods from "./Food";

const DeliveryCarousal = () => {
  return (
    <>
      <div className="flex flex-col gap-3 items-center">
        <h1 className="text-xl font-bold md:ml-2">L'Appetito Vien Mangiando!</h1>
        <div className="flex flex-wrap m-2 md:m-1 gap-2 md:gap-6 justify-around">
          <Foods/>
        </div>
      </div>
    </>
  );
};

export default DeliveryCarousal;
