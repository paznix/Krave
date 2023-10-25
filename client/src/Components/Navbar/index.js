import React from "react";
import Krave from "../../assets/krave.png";
import { FiSearch } from "react-icons/fi";
import { ImLocation } from "react-icons/im";
import { RxDividerVertical } from "react-icons/rx";

const MobileNav = () => {
  return (
    <>
      <div className="md:rounded-3xl flex justify-between items-center">
        <div>
          <img src={Krave} alt="logo" className="h-16" />
        </div>

        <div>
          <button className="bg-lgreen pt-1 pb-1.5 px-3 rounded-xl md:rounded-2xl m-4 font-medium  text-white shadow-md ">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

const LargeNav = () => {
  return (
    <>
      <div className="md:rounded-3xl flex justify-between w-full items-center">
        <div className="mr-2">
          <img src={Krave} alt="logo" className="h-16" />
        </div>


        <div className="bg-white flex justify-start w-8/12 gap-3 items-center rounded-2xl mr-4">
          <div className="scale-125 px-3 py-3 text-dgreen">
            <FiSearch />
          </div>
          <input
            type="search"
            className="w-full focus:outline-none mr-4"
            placeholder="Search for Restaurants and Food"
          ></input>
          <div className=" flex gap-2 mr-4 items-center">
            <RxDividerVertical className="text-grey"/>
            <ImLocation className="text-dgreen scale-125"/>
            Location
          </div>
        </div>
        
        
        <div className="ml-1">
          <button className="bg-lgreen pt-2 pb-2.5 px-4 rounded-xl md:rounded-2xl m-4 font-medium hover:cursor-pointer text-white shadow-md ">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="bg-back mt-2 shadow-lg rounded-2xl md:rounded-3xl items-center">
        <div className=" md:hidden">
          {/* Mobile View */}
          <MobileNav />
        </div>

        <div className="hidden md:flex">
          {/* Larger View */}
          <LargeNav />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
