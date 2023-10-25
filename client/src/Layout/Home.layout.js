import React from "react";

//Components
import Navbar from "../Components/Navbar";
import Speedbar from "../Components/Speedbar";

const HomeLayout = (props) => {
  return (
    <>
      <div className="container mx-auto px-4 lg:px-20">
        <Navbar/>
        <Speedbar/>
        {props.children}
        </div>
    </>
  );
};
export default HomeLayout;
