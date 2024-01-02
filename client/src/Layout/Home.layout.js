import React from "react";

//Components
import Navbar from "../Components/Navbar";
import Speedbar from "../Components/Speedbar";
import Delivery from "../Components/Delivery/Delivery";

const HomeLayout = (props) => {
  return (
    <>
      <div className="container mx-auto px-4 lg:px-20">
        <Navbar/>
        <Speedbar/>
        {props.children}
        <Delivery/>
        </div>
    </>
  );
};
export default HomeLayout;
