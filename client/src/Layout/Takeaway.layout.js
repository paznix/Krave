import React, { Children } from 'react';
import Navbar from '../Components/Navbar';
import Speedbar from '../Components/Speedbar';
import TakeawayRender from '../Components/OtherTabs/Takeaway/TakeawayRender';

const TakeawayLayout = (props) => {
    return(
        <>
        <div className="container mx-auto px-4 lg:px-20">
            <Navbar/>
            <Speedbar/>
            {props.children}
            <TakeawayRender/>
        </div>
        </>
    );
};

export default TakeawayLayout;