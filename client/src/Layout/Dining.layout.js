import React from 'react';
import Navbar from '../Components/Navbar';
import Speedbar from '../Components/Speedbar';
import DiningRender from '../Components/OtherTabs/Dining/DiningRender';

const DiningLayout = (props) => {
    return(
        <>
        <div className="container mx-auto px-4 lg:px-20">
            <Navbar/>
            <Speedbar/>
            {props.children}
            <DiningRender/>
        </div>
        </>
    );
};

export default DiningLayout;