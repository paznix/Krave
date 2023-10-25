import React from "react";
import { NavLink } from "react-router-dom";
import DeliveryImg from "../../assets/del.png";

const MobileSpeedbar = () => {
  return <></>;
};

const LargeSpeedbar = () => {
  return (
    <>
      <div className=" flex bg-back mt-4 rounded-3xl justify-between w-full">
        <div>
          <NavLink to="/delivery">
            {({ isActive }) => (
              <span style={{ backgroundColor: isActive ? "white" : "back" }}>
                Delivery
              </span>
            )}
          </NavLink>
        </div>
        <div>
          <NavLink>Bolo</NavLink>
        </div>
        <div>
          <NavLink></NavLink>
        </div>
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
