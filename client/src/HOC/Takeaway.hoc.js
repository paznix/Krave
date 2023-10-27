import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

//Layout
import TakeawayLayout from "../Layout/Takeaway.layout";

const TakeawayLayoutHOC = ({ component: Component, ...rest }) => {
  return (
    <>
      <Routes>
        <Route
          {...rest}
          Component={(props) => (
            <TakeawayLayout>
              <Component {...rest} />
            </TakeawayLayout>
          )}
        />
      </Routes>
    </>
  );
};

export default TakeawayLayoutHOC;
