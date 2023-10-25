import React, { Children } from 'react';
import Navbar from '../Components/Navbar';
import Speedbar from '../Components/Speedbar';

const DeliveryLayout = (props) => {
    return(
        <>
        <div className="container mx-auto px-4 lg:px-20">
            <Navbar/>
            <Speedbar/>
            {props.children}
        </div>
        </>
    );
};

export default DeliveryLayout;