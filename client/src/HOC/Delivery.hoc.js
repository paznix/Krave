import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

//Layout
import DeliveryLayout from "../Layout/Delivery.layout";

const DeliveryLayoutHOC = ({ component: Component, ...rest }) => {
  return (
    <>
      <Routes>
        <Route
          {...rest}
          Component={(props) => (
            <DeliveryLayout>
              <Component {...rest} />
            </DeliveryLayout>
          )}
        />
      </Routes>
    </>
  );
};

export default DeliveryLayoutHOC;
