import React from "react";
import { NavLink } from "react-router-dom";
import DeliveryImg from "../../assets/del.png";
import DiningImg from "../../assets/din.png";
import TakeawayImg from "../../assets/take.png";

const MobileSpeedbar = () => {
  return <></>;
};

const LargeSpeedbar = () => {
  return (
    <>
      <div className="flex flex-col w-full mt-4">
        <div className="flex gap-1">
          <NavLink to="/delivery">
            {({ isActive }) => (
              <div
                className="bg-back rounded-t-2xl px-3 flex justify-between items-center w-full"
                style={{ backgroundColor: isActive ? "white" : "back",
                          filter: isActive ? "gray" : "none",
                          WebkitFilter: isActive ? "grayscale(0)" : "grayscale(.9)",
                          boxShadow: isActive ? "0px 0px 8px -2px #18a86b" : " ",
              }}
              >
                <img src={DeliveryImg} className="w-12 " />
                <span className="font-bold text-lgreen text-lg p-3 pl-2">Delivery</span>
              </div>
            )}
          </NavLink>
          <NavLink to="/takeaway">
            {({ isActive }) => (
              <div
                className="bg-back rounded-t-2xl px-3 flex justify-between items-center w-full"
                style={{ backgroundColor: isActive ? "white" : "back",
                filter: isActive ? "gray" : "none",
                WebkitFilter: isActive ? "grayscale(0)" : "grayscale(.9)",
                boxShadow: isActive ? "0px 0px 8px -2px #18a86b" : " ",
              }}
              >
                <img src={TakeawayImg} className="w-12 scale-90"/>
                <span className="font-bold text-lgreen text-lg p-3 pl-1">Takeaway</span>
              </div>
            )}
          </NavLink>
          <NavLink to="/dining">
            {({ isActive }) => (
              <div
                className="bg-back rounded-t-2xl px-3 flex justify-between items-center w-full"
                style={{ backgroundColor: isActive ? "white" : "back",
                filter: isActive ? "gray" : "none",
                WebkitFilter: isActive ? "grayscale(0)" : "grayscale(.9)",
                boxShadow: isActive ? "0px 0px 8px -2px #18a86b" : " ",
              }}
              >
                <img src={DiningImg} className="w-12 pb-1" />
                <span className="font-bold text-lgreen text-lg p-3">Dining</span>
              </div>
            )}
          </NavLink>
        </div>

        <div className="bg-lgreen h-0.5 w-full rounded-lg z-10"></div>
      </div>
    </>
  );
};

const Speedbar = () => {
  return (
    <>
      <div className="md:hidden">
        <MobileSpeedbar />
      </div>
      <div className="hidden md:flex">
        <LargeSpeedbar />
      </div>
    </>
  );
};

export default Speedbar;
