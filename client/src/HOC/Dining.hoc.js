import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

//Layout
import DiningLayout from "../Layout/Dining.layout";

const DiningLayoutHOC = ({ component: Component, ...rest }) => {
  return (
    <>
      <Routes>
        <Route
          {...rest}
          Component={(props) => (
            <DiningLayout>
              <Component {...rest} />
            </DiningLayout>
          )}
        />
      </Routes>
    </>
  );
};

export default DiningLayoutHOC;
